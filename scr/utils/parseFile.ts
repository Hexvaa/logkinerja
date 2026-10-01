import * as XLSX from 'xlsx';
import type { Officer, Division } from '../data/officers';

const KEP_KW = ['ktp', 'kartu keluarga', ' kk ', 'kependudukan', 'domisili', 'pindah', 'perpindahan', 'datang'];
const CAP_KW = ['kelahiran', 'kematian', 'perkawinan', 'perceraian', 'pencatatan sipil', 'capil'];

function scoreDiv(text: string) {
  const t = ` ${text.toLowerCase()} `;
  return {
    kep: KEP_KW.reduce((n, kw) => n + (t.includes(kw) ? 1 : 0), 0),
    cap: CAP_KW.reduce((n, kw) => n + (t.includes(kw) ? 1 : 0), 0),
  };
}

function excelSerial(n: number): string {
  const d = new Date(Math.round((n - 25569) * 86_400_000));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

function findCol(headers: string[], ...needles: string[]): string | undefined {
  return headers.find(h => needles.some(n => h.toLowerCase().includes(n.toLowerCase())));
}

interface Row { date: string; username: string; name: string; process: string; service: string; count: number }

function buildOfficers(rows: Row[]): { monthKey: string; officers: Officer[] } {
  const map = new Map<string, {
    name: string; username: string; totalRecords: number;
    byDate: Record<string, number>;
    services: Map<string, number>;
    processes: Map<string, number>;
  }>();

  for (const r of rows) {
    if (!r.username || !r.date || r.count <= 0) continue;
    if (!map.has(r.username)) {
      map.set(r.username, { name: r.name, username: r.username, totalRecords: 0, byDate: {}, services: new Map(), processes: new Map() });
    }
    const o = map.get(r.username)!;
    o.totalRecords += r.count;
    o.byDate[r.date] = (o.byDate[r.date] ?? 0) + r.count;
    if (r.service) o.services.set(r.service, (o.services.get(r.service) ?? 0) + r.count);
    if (r.process) o.processes.set(r.process, (o.processes.get(r.process) ?? 0) + r.count);
  }

  const allDates = rows.map(r => r.date).filter(Boolean).sort();
  const monthKey = allDates[0]?.slice(0, 7) ?? new Date().toISOString().slice(0, 7);

  const officers: Officer[] = [];
  for (const [, data] of map) {
    let kepScore = 0, capScore = 0;
    for (const [svc, cnt] of data.services) { const s = scoreDiv(svc); kepScore += s.kep * cnt; capScore += s.cap * cnt; }
    for (const [proc, cnt] of data.processes) { const s = scoreDiv(proc); kepScore += s.kep * cnt; capScore += s.cap * cnt; }
    const division: Division = capScore > kepScore ? 'pencatatan_sipil' : 'kependudukan';

    officers.push({
      username: data.username,
      name: data.name,
      totalRecords: data.totalRecords,
      division,
      byDate: data.byDate,
      topServices: [...data.services.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5) as [string, number][],
      topProcesses: [...data.processes.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5) as [string, number][],
    });
  }

  return { monthKey, officers };
}

export async function parseFileToOfficers(file: File): Promise<{ monthKey: string; officers: Officer[] }> {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';

  if (ext === 'xlsx' || ext === 'xls') {
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { raw: true, defval: '' });

    if (raw.length === 0) return { monthKey: '', officers: [] };
    const headers = Object.keys(raw[0]);

    const colDate    = findCol(headers, 'finishedAt', 'finished_at', 'tanggal', 'date');
    const colUser    = findCol(headers, 'officerUsernames', 'username', 'officer_user');
    const colName    = findCol(headers, 'officerNames', 'officername', 'nama', 'name');
    const colProcess = findCol(headers, 'businessProcess', 'proses', 'process');
    const colService = findCol(headers, 'serviceName', 'layanan', 'service');
    const colCount   = findCol(headers, 'Count of records', 'count', 'jumlah', 'total');

    const rows: Row[] = raw.map(row => {
      const dateRaw = colDate ? row[colDate] : '';
      let date = String(dateRaw ?? '');
      if (typeof dateRaw === 'number') date = excelSerial(dateRaw);
      return {
        date,
        username: String(colUser ? row[colUser] ?? '' : '').trim(),
        name:     String(colName ? row[colName] ?? '' : '').trim(),
        process:  String(colProcess ? row[colProcess] ?? '' : '').trim(),
        service:  String(colService ? row[colService] ?? '' : '').trim(),
        count:    Number(colCount ? row[colCount] : 0) || 0,
      };
    });

    return buildOfficers(rows);
  }

  // CSV / TSV / TXT
  const text = await file.text();
  const lines = text.split('\n').filter(l => l.trim());
  if (lines.length < 2) return { monthKey: '', officers: [] };

  const sep = lines[0].includes('\t') ? '\t' : ',';
  const headers = lines[0].split(sep).map(h => h.trim().replace(/^"|"$/g, ''));

  const colDate    = findCol(headers, 'finishedAt', 'tanggal', 'date');
  const colUser    = findCol(headers, 'officerUsernames', 'username');
  const colName    = findCol(headers, 'officerNames', 'nama', 'name');
  const colProcess = findCol(headers, 'businessProcess', 'proses', 'process');
  const colService = findCol(headers, 'serviceName', 'layanan', 'service');
  const colCount   = findCol(headers, 'Count', 'count', 'jumlah');

  const rows: Row[] = lines.slice(1).map(line => {
    const parts = line.split(sep).map(p => p.trim().replace(/^"|"$/g, ''));
    const get = (col: string | undefined) => col ? (parts[headers.indexOf(col)] ?? '') : '';
    const dateRaw = get(colDate);
    let date = dateRaw;
    if (/^\d{5,6}$/.test(dateRaw)) date = excelSerial(parseInt(dateRaw));
    return {
      date,
      username: get(colUser).trim(),
      name:     get(colName).trim(),
      process:  get(colProcess).trim(),
      service:  get(colService).trim(),
      count:    parseInt(get(colCount)) || 0,
    };
  });

  return buildOfficers(rows);
}
