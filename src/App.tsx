import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell as PieCell, Legend, LabelList,
} from 'recharts';
import { officers as defaultOfficers, type Officer, type Division } from './data/officers';
import { parseFileToOfficers } from './utils/parseFile';
import { supabase } from './utils/supabase';

// Fallback dates used only if officer.byDate has no keys
const FALLBACK_DATES = [
  '2026-08-01','2026-08-03','2026-08-04','2026-08-05','2026-08-06',
  '2026-08-07','2026-08-08','2026-08-10','2026-08-11','2026-08-12',
  '2026-08-13','2026-08-14','2026-08-15','2026-08-18','2026-08-19',
  '2026-08-20','2026-08-21','2026-08-22','2026-08-24','2026-08-26',
  '2026-08-27','2026-08-28','2026-08-29','2026-08-31',
];

type DivisionFilter = 'semua' | Division;

const DIVISION_META: Record<Division, { label: string; short: string; color: string; bg: string; light: string; dot: string; heatmapRgb: string }> = {
  kependudukan: {
    label: 'Kependudukan', short: 'Kependudukan',
    color: 'text-blue-700', bg: 'bg-blue-600', light: 'bg-blue-50', dot: 'bg-blue-500',
    heatmapRgb: '29,78,216',
  },
  pencatatan_sipil: {
    label: 'Pencatatan Sipil', short: 'Catatan Sipil',
    color: 'text-emerald-700', bg: 'bg-emerald-600', light: 'bg-emerald-50', dot: 'bg-emerald-500',
    heatmapRgb: '5,150,105',
  },
};

const MONTH_NAMES: Record<string, string> = {
  '01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'Mei','06':'Jun',
  '07':'Jul','08':'Agu','09':'Sep','10':'Okt','11':'Nov','12':'Des',
};
const MONTH_FULL: Record<string, string> = {
  '01':'Januari','02':'Februari','03':'Maret','04':'April','05':'Mei','06':'Juni',
  '07':'Juli','08':'Agustus','09':'September','10':'Oktober','11':'November','12':'Desember',
};
const DAY_LABELS = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];

function fmt(n: number) { return n.toLocaleString('id-ID'); }
function fmtDate(d: string) { const [y,m,day] = d.split('-'); return `${day}/${m}/${y}`; }

function getMonthLabel(monthKey: string): string {
  if (!monthKey) return '';
  const [y, m] = monthKey.split('-');
  return `${MONTH_FULL[m] ?? m} ${y}`;
}

function getRankBadge(rank: number) {
  if (rank === 1) return { label: '#1', cls: 'bg-amber-400 text-amber-900' };
  if (rank === 2) return { label: '#2', cls: 'bg-slate-300 text-slate-700' };
  if (rank === 3) return { label: '#3', cls: 'bg-orange-300 text-orange-800' };
  return null;
}

function DivisionBadge({ division }: { division: Division }) {
  const m = DIVISION_META[division];
  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${m.light} ${m.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
      {m.short}
    </span>
  );
}

function MiniBar({ value, max, division }: { value: number; max: number; division: Division }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  const bar = division === 'kependudukan' ? 'bg-blue-500' : 'bg-emerald-500';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs tabular-nums text-slate-400 w-12 text-right">{fmt(value)}</span>
    </div>
  );
}

function DayHeatmap({ byDate, division }: { byDate: Record<string, number>; division: Division }) {
  const rgb = DIVISION_META[division].heatmapRgb;
  const firstKey = Object.keys(byDate).sort()[0] ?? FALLBACK_DATES[0];
  const [year, month] = firstKey.split('-');
  const yearN = parseInt(year);
  const monthN = parseInt(month);
  const daysInMonth = new Date(yearN, monthN, 0).getDate();
  const allDays = Array.from({ length: daysInMonth }, (_, i) =>
    `${year}-${month}-${String(i + 1).padStart(2, '0')}`
  );
  const max = Math.max(...allDays.map(d => byDate[d] ?? 0), 1);
  const firstWeekday = new Date(yearN, monthN - 1, 1).getDay();
  const cells: (string | null)[] = [...Array(firstWeekday).fill(null), ...allDays];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5 mb-2">
        {DAY_LABELS.map(label => (
          <div key={label} className="text-center text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((d, i) => {
          if (!d) return <div key={`e-${i}`} />;
          const v = byDate[d] ?? 0;
          const a = v === 0 ? 0 : 0.12 + (v / max) * 0.88;
          const bg = v === 0 ? '#f1f5f9' : `rgba(${rgb},${a.toFixed(2)})`;
          const light = a < 0.55;
          const dayNum = d.split('-')[2];
          return (
            <div key={d} className="relative group">
              <div
                className="rounded-lg flex flex-col items-center justify-center py-1.5 cursor-default transition-transform hover:scale-105"
                style={{ backgroundColor: bg, minHeight: '3rem' }}
              >
                <span className={`text-sm font-bold tabular-nums leading-none ${light ? 'text-slate-600' : 'text-white'}`}>
                  {dayNum}
                </span>
                {v > 0 && (
                  <span className={`text-[10px] font-semibold tabular-nums mt-1 leading-none ${light ? 'text-slate-500' : 'text-white/90'}`}>
                    {fmt(v)}
                  </span>
                )}
              </div>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                {dayNum} {MONTH_FULL[month]} {year}
                {v > 0
                  ? <> — <span className="font-semibold">{fmt(v)} tugas</span></>
                  : <span className="text-slate-400"> — tidak aktif</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function exportOfficerCSV(officer: Officer, monthLabel: string) {
  const rows: string[] = [];
  const div = officer.division === 'kependudukan' ? 'Kependudukan' : 'Pencatatan Sipil';

  rows.push('REKAP KINERJA PETUGAS');
  rows.push(`Nama,${officer.name}`);
  rows.push(`Username,${officer.username}`);
  rows.push(`Bidang,${div}`);
  rows.push(`Total Tugas,${officer.totalRecords}`);
  rows.push(`Periode,${monthLabel}`);
  rows.push('');

  rows.push('RINCIAN PER HARI');
  rows.push('Tanggal,Jumlah Tugas');
  Object.keys(officer.byDate).sort().forEach(d => {
    const [y, m, day] = d.split('-');
    rows.push(`${day}/${m}/${y},${officer.byDate[d]}`);
  });
  rows.push('');

  rows.push('LAYANAN TERBANYAK');
  rows.push('Layanan,Jumlah');
  officer.topServices.forEach(([svc, cnt]) => rows.push(`"${svc}",${cnt}`));
  rows.push('');

  rows.push('LAYANAN KINERJA');
  rows.push('Layanan Kinerja,Jumlah');
  officer.topProcesses.forEach(([proc, cnt]) => rows.push(`"${proc}",${cnt}`));

  const blob = new Blob(['﻿' + rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rekap_${officer.username}_${monthLabel.replace(' ', '_')}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function OfficerDetail({ officer, onBack }: { officer: Officer; onBack: () => void }) {
  const meta = DIVISION_META[officer.division];
  const activeDates = Object.keys(officer.byDate).sort();
  const monthLabel = (() => {
    const first = activeDates[0];
    if (!first) return '';
    const [y, m] = first.split('-');
    return `${MONTH_FULL[m] ?? m} ${y}`;
  })();

  const totalDays = activeDates.length;
  const avgPerDay = totalDays > 0 ? Math.round(officer.totalRecords / totalDays) : 0;
  const maxDay = Math.max(...Object.values(officer.byDate));
  const maxSvc = officer.topServices[0]?.[1] ?? 1;
  const bar1 = officer.division === 'kependudukan' ? 'bg-blue-500' : 'bg-emerald-500';
  const bar2 = officer.division === 'kependudukan' ? 'bg-blue-300' : 'bg-emerald-300';
  const acc = officer.division === 'kependudukan' ? 'text-blue-600' : 'text-emerald-600';

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center gap-4 no-print">
        <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm font-semibold transition-all shadow-sm shadow-red-200">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Kembali
        </button>
        <div className="w-px h-4 bg-slate-200" />
        <DivisionBadge division={officer.division} />
        <div className="flex-1" />
        <button
          onClick={() => exportOfficerCSV(officer, monthLabel)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-700 text-sm font-semibold transition-all border border-emerald-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Export CSV
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-sm font-semibold transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.056 48.056 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
          </svg>
          Cetak / PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4 animate-fade-up">
          <div className={`w-14 h-14 rounded-xl ${meta.bg} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 animate-pop`} style={{ animationDelay: '80ms' }}>
            {officer.name.trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>{officer.name}</h1>
            <p className="text-slate-400 text-sm mt-0.5">@{officer.username}</p>
            <div className="mt-2"><DivisionBadge division={officer.division} /></div>
          </div>
          <div className="sm:text-right animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className={`text-3xl font-bold tabular-nums ${acc}`}>{fmt(officer.totalRecords)}</div>
            <div className="text-xs text-slate-400 mt-0.5">Total Tugas · {monthLabel}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Tugas', value: fmt(officer.totalRecords) },
            { label: 'Hari Aktif', value: `${totalDays} hari` },
            { label: 'Rata-rata/Hari', value: fmt(avgPerDay) },
            { label: 'Tertinggi/Hari', value: fmt(maxDay) },
          ].map((s, i) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4 animate-fade-up hover:shadow-md transition-shadow" style={{ animationDelay: `${160 + i * 60}ms` }}>
              <div className={`text-xl font-bold tabular-nums ${acc}`}>{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-widest">Aktivitas Harian — {monthLabel}</h2>
          <DayHeatmap byDate={officer.byDate} division={officer.division} />
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-slate-400">Tidak aktif</span>
            {[0.12,0.35,0.58,0.78,1.0].map(v => (
              <div key={v} className="w-5 h-5 rounded-md" style={{ backgroundColor: `rgba(${meta.heatmapRgb},${v})` }} />
            ))}
            <span className="text-xs text-slate-400">Terbanyak</span>
          </div>
        </div>

        {/* Bar chart: records per active day */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '480ms' }}>
          <h2 className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-widest">Grafik Tugas Per Hari</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={activeDates.map(d => ({
                date: d.split('-')[2] + '/' + d.split('-')[1],
                records: officer.byDate[d],
              }))}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
              barSize={14}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                formatter={(v) => [fmt(Number(v ?? 0)), 'Total Tugas']}
                labelFormatter={(l) => `Tgl ${l}`}
              />
              <Bar
                dataKey="records"
                fill={officer.division === 'kependudukan' ? '#3b82f6' : '#10b981'}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut chart: service breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '540ms' }}>
          <h2 className="text-xs font-semibold text-slate-500 mb-5 uppercase tracking-widest">Kinerja Layanan</h2>
          {(() => {
            const palette = officer.division === 'kependudukan'
              ? ['#1d4ed8','#3b82f6','#60a5fa','#93c5fd','#bfdbfe']
              : ['#059669','#10b981','#34d399','#6ee7b7','#a7f3d0'];
            const svcTotal = officer.topServices.reduce((s, [, v]) => s + v, 0);
            return (
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="flex-shrink-0 w-44 h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={officer.topServices.map(([name, value]) => ({ name, value }))}
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={78}
                        paddingAngle={3}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {officer.topServices.map((_, i) => (
                          <PieCell key={i} fill={palette[i % palette.length]} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                        formatter={(v) => [fmt(Number(v ?? 0)), 'Total Tugas']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 min-w-0 space-y-3">
                  {officer.topServices.map(([svc, cnt], i) => {
                    const pct = svcTotal > 0 ? Math.round((cnt / svcTotal) * 100) : 0;
                    return (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: palette[i % palette.length] }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-xs text-slate-700 leading-snug font-medium">{svc}</span>
                            <span className="text-xs font-bold text-slate-800 tabular-nums flex-shrink-0">{pct}%</span>
                          </div>
                          <div className="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: palette[i % palette.length] }} />
                          </div>
                          <span className="text-[10px] text-slate-400 tabular-nums">{fmt(cnt)} tugas</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-widest">Layanan Terbanyak</h2>
          <div className="space-y-3.5">
            {officer.topServices.map(([svc, cnt]) => (
              <div key={svc}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-sm text-slate-700 leading-snug pr-4">{svc}</span>
                  <span className="text-sm font-semibold text-slate-900 tabular-nums flex-shrink-0">{fmt(cnt)}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${bar1}`} style={{ width: `${(cnt / maxSvc) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '660ms' }}>
          <h2 className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-widest">Layanan Kinerja</h2>
          <div className="space-y-3">
            {officer.topProcesses.map(([proc, cnt]) => (
              <div key={proc} className="flex items-center gap-4">
                <div className="flex-1 text-sm text-slate-700">{proc}</div>
                <div className="text-sm font-semibold tabular-nums text-slate-900 flex-shrink-0">{fmt(cnt)}</div>
                <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden flex-shrink-0">
                  <div className={`h-full ${bar2} rounded-full`} style={{ width: `${(cnt / officer.totalRecords) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {(() => {
          const vals = activeDates.map(d => officer.byDate[d]);
          const maxVal = Math.max(...vals);
          const minVal = Math.min(...vals);
          const maxDate = activeDates[vals.indexOf(maxVal)];
          const minDate = activeDates[vals.lastIndexOf(minVal)];
          return (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden animate-fade-up" style={{ animationDelay: '720ms' }}>
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Rincian Per Hari</h2>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs text-slate-500">Tertinggi <span className="font-semibold text-amber-600">{fmt(maxVal)}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-xs text-slate-500">Terendah <span className="font-semibold text-rose-500">{fmt(minVal)}</span></span>
                  </div>
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tanggal</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Tugas</th>
                  </tr>
                </thead>
                <tbody>
                  {activeDates.map((d, i) => {
                    const v = officer.byDate[d];
                    const isMax = d === maxDate;
                    const isMin = d === minDate;
                    const rowBg = i % 2 === 1 ? 'bg-slate-50/40' : '';
                    return (
                      <tr key={d} className={`border-b border-slate-50 ${rowBg}`}>
                        <td className="px-6 py-3 tabular-nums text-slate-700">
                          {fmtDate(d)}
                        </td>
                        <td className="px-6 py-3 text-right tabular-nums">
                          <div className="flex items-center justify-end gap-2">
                            {isMax && (
                              <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wide">Tertinggi</span>
                            )}
                            {isMin && (
                              <span className="text-[10px] font-semibold text-rose-400 uppercase tracking-wide">Terendah</span>
                            )}
                            <span className={`font-semibold ${isMax ? 'text-amber-500' : isMin ? 'text-rose-400' : 'text-slate-900'}`}>
                              {fmt(v)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function useWIBClock() {
  const getWIB = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const [time, setTime] = useState(getWIB);
  useEffect(() => {
    const id = setInterval(() => setTime(getWIB()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

export default function App() {
  const clock = useWIBClock();
  const [monthData, setMonthData] = useState<Record<string, Officer[]>>({ '2026-08': defaultOfficers });
  const [activeMonth, setActiveMonth] = useState('2026-08');
  const [syncLoading, setSyncLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('rekap_data')
      .select('month_key, officers')
      .then(({ data }) => {
        if (data && data.length > 0) {
          const loaded: Record<string, Officer[]> = {};
          for (const row of data) loaded[row.month_key] = row.officers as Officer[];
          setMonthData(loaded);
          setActiveMonth(Object.keys(loaded).sort().reverse()[0]);
        }
        setSyncLoading(false);
      });
  }, []);
  const [showUpload, setShowUpload] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Officer | null>(null);
  const [divFilter, setDivFilter] = useState<DivisionFilter>('semua');
  const [sortBy, setSortBy] = useState<'name' | 'totalRecords'>('name');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Password gate
  const [showPassModal, setShowPassModal] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [passError, setPassError] = useState<string | null>(null);
  const [passVisible, setPassVisible] = useState(false);

  const availableMonths = useMemo(() => Object.keys(monthData).sort().reverse(), [monthData]);
  const activeOfficers = useMemo(() => monthData[activeMonth] ?? [], [monthData, activeMonth]);

  const divisionCounts = useMemo(() => ({
    semua: activeOfficers.length,
    kependudukan: activeOfficers.filter(o => o.division === 'kependudukan').length,
    pencatatan_sipil: activeOfficers.filter(o => o.division === 'pencatatan_sipil').length,
  }), [activeOfficers]);

  const divTotals = useMemo(() => ({
    kependudukan: activeOfficers.filter(o => o.division === 'kependudukan').reduce((s, o) => s + o.totalRecords, 0),
    pencatatan_sipil: activeOfficers.filter(o => o.division === 'pencatatan_sipil').reduce((s, o) => s + o.totalRecords, 0),
  }), [activeOfficers]);

  const totalRecords = useMemo(() => activeOfficers.reduce((s, o) => s + o.totalRecords, 0), [activeOfficers]);
  const maxRecords = useMemo(() =>
    [...activeOfficers].sort((a, b) => b.totalRecords - a.totalRecords)[0]?.totalRecords ?? 1,
  [activeOfficers]);

  const tabs = useMemo(() => [
    { id: 'semua' as DivisionFilter, label: 'Semua', count: divisionCounts.semua, active: 'border-white text-white' },
    { id: 'kependudukan' as DivisionFilter, label: 'Kependudukan', count: divisionCounts.kependudukan, active: 'border-blue-400 text-blue-300' },
    { id: 'pencatatan_sipil' as DivisionFilter, label: 'Pencatatan Sipil', count: divisionCounts.pencatatan_sipil, active: 'border-emerald-400 text-emerald-300' },
  ], [divisionCounts]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = divFilter === 'semua' ? [...activeOfficers] : activeOfficers.filter(o => o.division === divFilter);
    if (q) list = list.filter(o => o.name.toLowerCase().includes(q) || o.username.toLowerCase().includes(q));
    if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'id'));
    else list.sort((a, b) => b.totalRecords - a.totalRecords);
    return list;
  }, [activeOfficers, divFilter, search, sortBy]);

  const PASS_KEY = '__adminUploadPass__';

  const handleUploadClick = () => {
    if (!localStorage.getItem(PASS_KEY)) {
      localStorage.setItem(PASS_KEY, btoa('admin'));
    }
    setPassError(null);
    setPassInput('');
    setPassVisible(false);
    setShowPassModal(true);
  };

  const handlePassSubmit = () => {
    const stored = localStorage.getItem(PASS_KEY) ?? btoa('admin');
    if (btoa(passInput) !== stored) {
      setPassError('Password salah. Coba lagi.');
      return;
    }
    setShowPassModal(false);
    setShowUpload(true);
    setUploadError(null);
  };

  const handleFile = useCallback(async (file: File) => {
    setUploading(true);
    setUploadError(null);
    try {
      const { monthKey, officers: newOfficers } = await parseFileToOfficers(file);
      if (!monthKey || newOfficers.length === 0) throw new Error('Tidak ada data petugas yang bisa dibaca dari file ini.');
      setMonthData(prev => ({ ...prev, [monthKey]: newOfficers }));
      setActiveMonth(monthKey);
      // Sync to Supabase so all users see the new data
      await supabase.from('rekap_data').upsert(
        { month_key: monthKey, officers: newOfficers, updated_at: new Date().toISOString() },
        { onConflict: 'month_key' }
      );
      setShowUpload(false);
      setDivFilter('semua');
      setSearch('');
    } catch (err) {
      setUploadError((err as Error).message || 'Gagal membaca file.');
    } finally {
      setUploading(false);
    }
  }, []);

  if (selected) {
    return <OfficerDetail officer={selected} onBack={() => setSelected(null)} />;
  }

  const monthLabel = getMonthLabel(activeMonth);

  if (syncLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-slate-400 font-medium">Memuat data terbaru…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* Password Gate Modal */}
      {showPassModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={e => { if (e.target === e.currentTarget) setShowPassModal(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in">
            <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Upload Rekap — Admin</h2>
                <p className="text-xs text-slate-400 mt-0.5">Masukkan password admin untuk melanjutkan</p>
              </div>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Password Admin</label>
                <div className="relative">
                  <input
                    type={passVisible ? 'text' : 'password'}
                    value={passInput}
                    onChange={e => { setPassInput(e.target.value); setPassError(null); }}
                    onKeyDown={e => { if (e.key === 'Enter') handlePassSubmit(); }}
                    placeholder="Masukkan password…"
                    autoFocus
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setPassVisible(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {passVisible
                      ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                      : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    }
                  </button>
                </div>
              </div>

              {passError && (
                <p className="text-xs text-red-500 font-medium bg-red-50 border border-red-100 rounded-lg px-3 py-2">{passError}</p>
              )}
            </div>

            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={() => setShowPassModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handlePassSubmit}
                className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Masuk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUpload && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={e => { if (e.target === e.currentTarget) setShowUpload(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-scale-in">
            <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Upload Rekap Petugas</h2>
                <p className="text-xs text-slate-400 mt-0.5">File akan diproses langsung di browser, tidak dikirim ke server</p>
              </div>
              <button onClick={() => setShowUpload(false)} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6">
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls,.csv,.tsv,.txt"
                className="hidden"
                onChange={e => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                  e.target.value = '';
                }}
              />

              <div
                className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer ${
                  dragOver
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                onClick={() => !uploading && fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => {
                  e.preventDefault();
                  setDragOver(false);
                  const f = e.dataTransfer.files[0];
                  if (f) handleFile(f);
                }}
              >
                {uploading ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-medium text-slate-600">Memproses file…</p>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">Seret file ke sini, atau klik untuk pilih</p>
                    <p className="text-xs text-slate-400 mt-1.5">Excel (.xlsx, .xls) · CSV · TSV · TXT</p>
                  </>
                )}
              </div>

              {uploadError && (
                <div className="mt-3 flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <p className="text-xs text-red-600">{uploadError}</p>
                </div>
              )}

              <div className="mt-4 bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-500 mb-2">Format kolom yang didukung:</p>
                <div className="grid grid-cols-2 gap-1">
                  {['finishedAt per day', 'officerUsernames.keyword', 'officerNames.keyword', 'businessProcessName.keyword', 'serviceName.keyword', 'Count of records'].map(col => (
                    <div key={col} className="text-xs text-slate-400 font-mono">{col}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-5 h-5 rounded bg-white/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Dispendukcapil Kota Surabaya</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight animate-fade-up" style={{ fontFamily: "'DM Serif Display', serif", animationDelay: '60ms' }}>
                Rekap Kinerja Petugas
              </h1>
              <p className="text-slate-400 text-sm mt-1 animate-fade-up" style={{ animationDelay: '120ms' }}>{monthLabel} · {activeOfficers.length} petugas aktif</p>
              <p className="text-slate-300 text-sm font-mono tabular-nums mt-1 animate-fade-up" style={{ animationDelay: '150ms' }}>
                WIB {clock}
              </p>
            </div>
            <div className="flex items-end gap-4">
              <div className="text-right pb-1 animate-fade-up" style={{ animationDelay: '180ms' }}>
                <div className="text-2xl font-bold tabular-nums">{fmt(totalRecords)}</div>
                <div className="text-xs text-slate-400">Total Tugas</div>
              </div>
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium text-white transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
                Upload Rekap
              </button>
            </div>
          </div>

          {/* Month selector */}
          {availableMonths.length > 0 && (
            <div className="flex items-center gap-2 pb-5 flex-wrap">
              <span className="text-sm text-slate-400 font-medium mr-1">Periode:</span>
              {availableMonths.map((mk, i) => {
                const [y, m] = mk.split('-');
                const isActive = mk === activeMonth;
                return (
                  <button
                    key={mk}
                    onClick={() => { setActiveMonth(mk); setDivFilter('semua'); setSearch(''); }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all animate-slide-right ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                    }`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-500' : 'bg-white/40'}`} />
                    {MONTH_NAMES[m]} {y}
                  </button>
                );
              })}
            </div>
          )}

          {/* Division summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-6">
            {(['kependudukan', 'pencatatan_sipil'] as Division[]).map((div, di) => {
              const m = DIVISION_META[div];
              const pct = totalRecords > 0 ? Math.round((divTotals[div] / totalRecords) * 100) : 0;
              return (
                <button
                  key={div}
                  onClick={() => setDivFilter(divFilter === div ? 'semua' : div)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all text-left animate-fade-up ${divFilter === div ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  style={{ animationDelay: `${240 + di * 80}ms` }}
                >
                  <div className={`w-3 h-3 rounded-full ${m.dot} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{m.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{divisionCounts[div]} petugas · {fmt(divTotals[div])} tugas ({pct}%)</div>
                  </div>
                  {divFilter === div && (
                    <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-white/10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setDivFilter(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${divFilter === tab.id ? `${tab.active} bg-white/5` : 'border-transparent text-slate-400 hover:text-white'}`}
              >
                {tab.label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${divFilter === tab.id ? 'bg-white/15' : 'text-slate-500'}`}>{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Search + sort */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari nama atau username..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400 mr-1">Urutkan:</span>
            <button
              onClick={() => setSortBy('name')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${sortBy === 'name' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-500'}`}
            >
              {sortBy === 'name' && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>}
              Nama A–Z
            </button>
            <button
              onClick={() => setSortBy('totalRecords')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${sortBy === 'totalRecords' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-500'}`}
            >
              {sortBy === 'totalRecords' && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>}
              Tugas Terbanyak
            </button>
            <span className="text-slate-300 ml-1">|</span>
            <span className="text-xs text-slate-400">{filtered.length} petugas</span>
          </div>
        </div>
      </div>

      {/* Top 5 comparison bar chart */}
      {(() => {
        // Use activeOfficers filtered only by division (not search) so chart stays visible while searching
        const chartBase = divFilter === 'semua' ? activeOfficers : activeOfficers.filter(o => o.division === divFilter);
        const top5 = [...chartBase].sort((a, b) => b.totalRecords - a.totalRecords).slice(0, 5);
        return (
          <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-sm font-bold text-slate-800">Top 5 Petugas</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {divFilter === 'semua' ? 'Semua Bidang' : divFilter === 'kependudukan' ? 'Kependudukan' : 'Pencatatan Sipil'} · berdasarkan total tugas terbanyak
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-blue-400" /><span className="text-xs text-slate-500">Kependudukan</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" /><span className="text-xs text-slate-500">Pencatatan Sipil</span></div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  layout="vertical"
                  data={top5.map((o, i) => ({
                    name: o.name.length > 26 ? o.name.slice(0, 26) + '…' : o.name,
                    fullName: o.name,
                    records: o.totalRecords,
                    rank: i + 1,
                    division: o.division,
                  }))}
                  margin={{ top: 4, right: 90, left: 4, bottom: 4 }}
                  barSize={32}
                  barCategoryGap="30%"
                >
                  <CartesianGrid strokeDasharray="2 4" stroke="#f1f5f9" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 10, fill: '#94a3b8' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={v => fmt(v as number)}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={170}
                    tick={{ fontSize: 11, fill: '#334155', fontWeight: 500 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ fontSize: 12, borderRadius: 10, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                    formatter={(v) => [fmt(Number(v ?? 0)), 'Total Tugas']}
                    labelFormatter={(_, payload) => payload?.[0]?.payload?.fullName ?? ''}
                  />
                  <Bar dataKey="records" radius={[0, 6, 6, 0]}>
                    {top5.map((o, i) => (
                      <PieCell key={i} fill={o.division === 'kependudukan' ? '#3b82f6' : '#10b981'} />
                    ))}
                    <LabelList
                      dataKey="records"
                      position="right"
                      style={{ fontSize: 12, fontWeight: 700, fill: '#334155' }}
                      formatter={(v) => fmt(Number(v ?? 0))}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })()}

      {/* Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden animate-fade-up" style={{ animationDelay: '160ms' }}>
          <div className="hidden sm:grid grid-cols-[2.5rem_1fr_1fr_9rem_7rem] px-5 py-3 bg-slate-50 border-b border-slate-100">
            <div />
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nama Petugas</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Layanan</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Kinerja</div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Total Tugas</div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-slate-400">Tidak ada petugas yang cocok</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-50">
              {filtered.map((officer, idx) => {
                const rank = idx + 1;
                const badge = sortBy === 'totalRecords' ? getRankBadge(rank) : null;
                const meta = DIVISION_META[officer.division];
                const avatarCls = officer.division === 'kependudukan' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700';
                const hoverCls = officer.division === 'kependudukan' ? 'hover:bg-blue-50/40' : 'hover:bg-emerald-50/40';
                const initials = officer.name.trim().split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase();

                return (
                  <button
                    key={officer.username}
                    onClick={() => setSelected(officer)}
                    className={`w-full text-left px-4 sm:px-5 py-4 ${hoverCls} transition-colors group animate-fade-up`}
                    style={{ animationDelay: `${Math.min(idx * 28, 420)}ms` }}
                  >
                    {/* Mobile */}
                    <div className="sm:hidden flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${avatarCls} flex items-center justify-center font-bold text-xs flex-shrink-0`}>{initials}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 text-sm truncate">{officer.name}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                          <span className={`text-xs ${meta.color}`}>{meta.short}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className={`font-bold text-sm tabular-nums ${meta.color}`}>{fmt(officer.totalRecords)}</div>
                        {badge && <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${badge.cls}`}>{badge.label}</span>}
                      </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden sm:grid grid-cols-[2.5rem_1fr_1fr_9rem_7rem] items-center gap-0">
                      <div>
                        {badge
                          ? <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${badge.cls}`}>{badge.label}</span>
                          : <span className="text-xs text-slate-300 tabular-nums">{rank}</span>
                        }
                      </div>

                      <div className="flex items-center gap-3 pr-3">
                        <div className={`w-8 h-8 rounded-lg ${avatarCls} flex items-center justify-center font-bold text-xs flex-shrink-0`}>{initials}</div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm group-hover:underline underline-offset-2">{officer.name}</div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                            <span className={`text-xs ${meta.color}`}>{meta.short}</span>
                            <span className="text-xs text-slate-300">·</span>
                            <span className="text-xs text-slate-400">@{officer.username}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pr-3">
                        {officer.topServices[0] && (
                          <>
                            <span className="text-xs text-slate-700 leading-snug line-clamp-2">{officer.topServices[0][0]}</span>
                            {officer.topServices[1] && (
                              <span className="block text-xs text-slate-400 mt-0.5 line-clamp-1">{officer.topServices[1][0]}</span>
                            )}
                          </>
                        )}
                      </div>

                      <div className="pr-4">
                        <MiniBar value={officer.totalRecords} max={maxRecords} division={officer.division} />
                      </div>

                      <div className="text-right">
                        <span className={`font-bold tabular-nums text-sm ${meta.color}`}>{fmt(officer.totalRecords)}</span>
                        <svg className="w-3 h-3 text-slate-300 inline ml-1 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          {monthLabel} · {activeOfficers.length} petugas · {fmt(totalRecords)} total tugas
        </p>
      </div>
    </div>
  );
}
