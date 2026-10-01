export type Division = 'kependudukan' | 'pencatatan_sipil';

export interface Officer {
  name: string;
  username: string;
  totalRecords: number;
  division: Division;
  byDate: Record<string, number>;
  topServices: [string, number][];
  topProcesses: [string, number][];
}

export const officers: Officer[] = [
  {
    "name": "Rizaful narurohman",
    "username": "rizaful",
    "totalRecords": 6773,
    "byDate": {
      "2026-08-01": 238,
      "2026-08-03": 339,
      "2026-08-04": 255,
      "2026-08-05": 269,
      "2026-08-06": 341,
      "2026-08-07": 309,
      "2026-08-10": 375,
      "2026-08-11": 296,
      "2026-08-12": 323,
      "2026-08-13": 286,
      "2026-08-14": 223,
      "2026-08-15": 280,
      "2026-08-18": 508,
      "2026-08-19": 309,
      "2026-08-20": 343,
      "2026-08-21": 306,
      "2026-08-24": 421,
      "2026-08-26": 356,
      "2026-08-27": 295,
      "2026-08-28": 275,
      "2026-08-29": 321,
      "2026-08-31": 105
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4927
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        933
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        718
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        146
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        43
      ]
    ],
    "topProcesses": [
      [
        "Validasi Rekam Cetak",
        3471
      ],
      [
        "Cetak KTP",
        3302
      ]
    ]
  },
  {
    "name": "ACHMAD FAIZ",
    "username": "achmadfaiz",
    "totalRecords": 6406,
    "byDate": {
      "2026-08-03": 291,
      "2026-08-04": 254,
      "2026-08-05": 279,
      "2026-08-06": 326,
      "2026-08-07": 323,
      "2026-08-08": 237,
      "2026-08-10": 460,
      "2026-08-11": 297,
      "2026-08-12": 322,
      "2026-08-13": 308,
      "2026-08-14": 258,
      "2026-08-18": 376,
      "2026-08-19": 304,
      "2026-08-20": 302,
      "2026-08-21": 321,
      "2026-08-22": 221,
      "2026-08-24": 535,
      "2026-08-26": 354,
      "2026-08-27": 324,
      "2026-08-28": 269,
      "2026-08-31": 45
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4698
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        807
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        696
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        134
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        54
      ]
    ],
    "topProcesses": [
      [
        "Validasi Rekam Cetak",
        3275
      ],
      [
        "Cetak KTP",
        3131
      ]
    ]
  },
  {
    "name": "BONDAN ADI ARMANSYAH",
    "username": "bondanadi",
    "totalRecords": 5982,
    "byDate": {
      "2026-08-03": 293,
      "2026-08-04": 265,
      "2026-08-05": 266,
      "2026-08-06": 283,
      "2026-08-07": 319,
      "2026-08-08": 169,
      "2026-08-10": 430,
      "2026-08-11": 301,
      "2026-08-12": 320,
      "2026-08-13": 285,
      "2026-08-14": 225,
      "2026-08-18": 281,
      "2026-08-19": 294,
      "2026-08-20": 329,
      "2026-08-21": 278,
      "2026-08-22": 189,
      "2026-08-24": 514,
      "2026-08-26": 344,
      "2026-08-27": 297,
      "2026-08-28": 268,
      "2026-08-31": 32
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4460
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        714
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        661
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        110
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        36
      ]
    ],
    "topProcesses": [
      [
        "Validasi Rekam Cetak",
        3030
      ],
      [
        "Cetak KTP",
        2952
      ]
    ]
  },
  {
    "name": "AMALLIA WULANDARI",
    "username": "amaliaw",
    "totalRecords": 5626,
    "byDate": {
      "2026-08-03": 209,
      "2026-08-04": 109,
      "2026-08-05": 245,
      "2026-08-06": 230,
      "2026-08-07": 239,
      "2026-08-08": 423,
      "2026-08-10": 318,
      "2026-08-11": 269,
      "2026-08-12": 299,
      "2026-08-13": 275,
      "2026-08-14": 232,
      "2026-08-18": 283,
      "2026-08-19": 267,
      "2026-08-20": 272,
      "2026-08-21": 222,
      "2026-08-22": 533,
      "2026-08-24": 368,
      "2026-08-26": 307,
      "2026-08-27": 261,
      "2026-08-28": 235,
      "2026-08-31": 30
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4156
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        804
      ],
      [
        "Cetak Ulang YOB",
        438
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        125
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        81
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi",
        5182
      ],
      [
        "Verifikasi dan Penjadwalan Cetak Ulang YOB",
        438
      ],
      [
        "Verifikasi dan cek status takon tracking",
        6
      ]
    ]
  },
  {
    "name": "rahmadyan",
    "username": "rahmadyan",
    "totalRecords": 5506,
    "byDate": {
      "2026-08-01": 115,
      "2026-08-03": 196,
      "2026-08-04": 297,
      "2026-08-05": 261,
      "2026-08-06": 234,
      "2026-08-07": 237,
      "2026-08-10": 326,
      "2026-08-11": 281,
      "2026-08-12": 294,
      "2026-08-13": 272,
      "2026-08-14": 232,
      "2026-08-15": 206,
      "2026-08-18": 288,
      "2026-08-19": 284,
      "2026-08-20": 280,
      "2026-08-21": 231,
      "2026-08-22": 1,
      "2026-08-24": 376,
      "2026-08-26": 306,
      "2026-08-27": 276,
      "2026-08-28": 238,
      "2026-08-29": 213,
      "2026-08-31": 62
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4216
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        638
      ],
      [
        "Cetak Ulang YOB",
        453
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        124
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        65
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi",
        5046
      ],
      [
        "Verifikasi dan Penjadwalan Cetak Ulang YOB",
        453
      ],
      [
        "Verifikasi dan cek status takon tracking",
        7
      ]
    ]
  },
  {
    "name": "DEDI PUTRA UTAMA",
    "username": "DediPutra",
    "totalRecords": 5432,
    "byDate": {
      "2026-08-01": 143,
      "2026-08-03": 285,
      "2026-08-04": 242,
      "2026-08-05": 270,
      "2026-08-06": 148,
      "2026-08-07": 2,
      "2026-08-10": 349,
      "2026-08-11": 302,
      "2026-08-12": 298,
      "2026-08-13": 278,
      "2026-08-14": 231,
      "2026-08-15": 173,
      "2026-08-18": 287,
      "2026-08-19": 302,
      "2026-08-20": 322,
      "2026-08-21": 262,
      "2026-08-24": 356,
      "2026-08-26": 340,
      "2026-08-27": 303,
      "2026-08-28": 258,
      "2026-08-29": 165,
      "2026-08-31": 116
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4075
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        730
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        388
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        136
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        68
      ]
    ],
    "topProcesses": [
      [
        "Validasi Rekam Cetak",
        2836
      ],
      [
        "Cetak KTP",
        2596
      ]
    ]
  },
  {
    "name": "DIAN PERMATA SARI",
    "username": "DianPermata",
    "totalRecords": 5355,
    "byDate": {
      "2026-08-01": 82,
      "2026-08-03": 206,
      "2026-08-04": 303,
      "2026-08-05": 261,
      "2026-08-06": 226,
      "2026-08-07": 256,
      "2026-08-10": 305,
      "2026-08-11": 271,
      "2026-08-12": 298,
      "2026-08-13": 271,
      "2026-08-14": 219,
      "2026-08-15": 210,
      "2026-08-18": 293,
      "2026-08-19": 264,
      "2026-08-20": 249,
      "2026-08-21": 230,
      "2026-08-24": 371,
      "2026-08-26": 292,
      "2026-08-27": 276,
      "2026-08-28": 229,
      "2026-08-29": 221,
      "2026-08-31": 22
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4150
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        629
      ],
      [
        "Cetak Ulang YOB",
        400
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        104
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        64
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi",
        4948
      ],
      [
        "Verifikasi dan Penjadwalan Cetak Ulang YOB",
        400
      ],
      [
        "Verifikasi dan cek status takon tracking",
        7
      ]
    ]
  },
  {
    "name": "SAKSWITA AFRIATI ADININGRUM",
    "username": "sakswita",
    "totalRecords": 5327,
    "byDate": {
      "2026-08-01": 163,
      "2026-08-03": 297,
      "2026-08-04": 237,
      "2026-08-05": 272,
      "2026-08-06": 12,
      "2026-08-07": 288,
      "2026-08-10": 306,
      "2026-08-11": 253,
      "2026-08-12": 312,
      "2026-08-13": 290,
      "2026-08-14": 235,
      "2026-08-15": 189,
      "2026-08-18": 487,
      "2026-08-19": 282,
      "2026-08-20": 39,
      "2026-08-21": 21,
      "2026-08-24": 431,
      "2026-08-26": 346,
      "2026-08-27": 316,
      "2026-08-28": 272,
      "2026-08-29": 215,
      "2026-08-31": 64
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        3792
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        695
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        653
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        118
      ],
      [
        "Cetak Ulang KTP < 6 bulan",
        46
      ]
    ],
    "topProcesses": [
      [
        "Cetak KTP",
        2705
      ],
      [
        "Validasi Rekam Cetak",
        2622
      ]
    ]
  },
  {
    "name": "MOCHAMAD EKO PRASTIYO",
    "username": "EkoPras",
    "totalRecords": 4865,
    "byDate": {
      "2026-08-03": 259,
      "2026-08-04": 193,
      "2026-08-05": 225,
      "2026-08-06": 246,
      "2026-08-07": 268,
      "2026-08-08": 219,
      "2026-08-10": 311,
      "2026-08-11": 227,
      "2026-08-12": 234,
      "2026-08-13": 214,
      "2026-08-14": 216,
      "2026-08-18": 275,
      "2026-08-19": 210,
      "2026-08-20": 225,
      "2026-08-21": 221,
      "2026-08-22": 166,
      "2026-08-24": 431,
      "2026-08-26": 252,
      "2026-08-27": 259,
      "2026-08-28": 172,
      "2026-08-31": 42
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        3556
      ],
      [
        "Pengajuan KTP Baru usia 17 tahun",
        606
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        536
      ],
      [
        "Cetak KTP Pasca Pindah Datang",
        76
      ],
      [
        "Pengajuan KTP OA (Perpanjangan)",
        32
      ]
    ],
    "topProcesses": [
      [
        "Validasi Rekam Cetak",
        2569
      ],
      [
        "Cetak KTP",
        2268
      ],
      [
        "Cetak KTP Orang Asing",
        28
      ]
    ]
  },
  {
    "name": "berliana",
    "username": "berliana",
    "totalRecords": 4350,
    "byDate": {
      "2026-08-01": 69,
      "2026-08-03": 92,
      "2026-08-04": 102,
      "2026-08-05": 141,
      "2026-08-06": 93,
      "2026-08-07": 120,
      "2026-08-08": 98,
      "2026-08-10": 315,
      "2026-08-11": 138,
      "2026-08-12": 118,
      "2026-08-13": 133,
      "2026-08-14": 271,
      "2026-08-15": 23,
      "2026-08-18": 390,
      "2026-08-19": 204,
      "2026-08-20": 175,
      "2026-08-21": 226,
      "2026-08-22": 89,
      "2026-08-24": 872,
      "2026-08-26": 241,
      "2026-08-27": 131,
      "2026-08-28": 143,
      "2026-08-29": 70,
      "2026-08-31": 96
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        3943
      ],
      [
        "ESULAY DAFDUK",
        346
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        44
      ],
      [
        "ESULAY DAFDUK PENGECEKAN BIOMETRIK",
        9
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun pasca pindah datang new",
        8
      ]
    ],
    "topProcesses": [
      [
        "Pengajuan TTE KIA",
        2022
      ],
      [
        "Klik cetak KIA",
        1929
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk  + Upload Hasil Output Surat",
        346
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        44
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk + Upload Hasil Output Surat",
        9
      ]
    ]
  },
  {
    "name": "TYAS HUSNA APRILIYANI",
    "username": "tyas_oss",
    "totalRecords": 3404,
    "byDate": {
      "2026-08-01": 101,
      "2026-08-03": 225,
      "2026-08-04": 218,
      "2026-08-05": 176,
      "2026-08-06": 232,
      "2026-08-07": 157,
      "2026-08-10": 160,
      "2026-08-11": 221,
      "2026-08-12": 169,
      "2026-08-13": 184,
      "2026-08-14": 200,
      "2026-08-15": 56,
      "2026-08-18": 155,
      "2026-08-19": 168,
      "2026-08-20": 143,
      "2026-08-21": 130,
      "2026-08-24": 168,
      "2026-08-26": 173,
      "2026-08-27": 179,
      "2026-08-28": 129,
      "2026-08-29": 53,
      "2026-08-31": 7
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KK Karena Rusak",
        1067
      ],
      [
        "Pemutakhiran Biodata",
        877
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        398
      ],
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        281
      ],
      [
        "PINDAH DATANG",
        265
      ]
    ],
    "topProcesses": [
      [
        "Upload Kartu Keluarga",
        1853
      ],
      [
        "Upload TTE Kartu Keluarga",
        537
      ],
      [
        "Verifikasi + Ajukan TTE Kartu Keluarga",
        530
      ],
      [
        "Upload Kartu Keluarga Hasil Pecah + Kartu Keluarga Sisa Pecah",
        327
      ],
      [
        "Unggah Kartu Keluarga",
        113
      ]
    ]
  },
  {
    "name": "dirdaalodya",
    "username": "dirdaalodya",
    "totalRecords": 3348,
    "byDate": {
      "2026-08-01": 103,
      "2026-08-03": 245,
      "2026-08-04": 218,
      "2026-08-05": 179,
      "2026-08-06": 228,
      "2026-08-07": 160,
      "2026-08-10": 154,
      "2026-08-11": 215,
      "2026-08-12": 160,
      "2026-08-13": 180,
      "2026-08-14": 193,
      "2026-08-18": 157,
      "2026-08-19": 164,
      "2026-08-20": 125,
      "2026-08-21": 128,
      "2026-08-22": 60,
      "2026-08-24": 158,
      "2026-08-26": 166,
      "2026-08-27": 174,
      "2026-08-28": 126,
      "2026-08-29": 48,
      "2026-08-31": 7
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KK Karena Rusak",
        1035
      ],
      [
        "Pemutakhiran Biodata",
        884
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        378
      ],
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        281
      ],
      [
        "PINDAH DATANG",
        245
      ]
    ],
    "topProcesses": [
      [
        "Upload Kartu Keluarga",
        1798
      ],
      [
        "Verifikasi + Ajukan TTE Kartu Keluarga",
        559
      ],
      [
        "Upload TTE Kartu Keluarga",
        556
      ],
      [
        "Upload Kartu Keluarga Hasil Pecah + Kartu Keluarga Sisa Pecah",
        325
      ],
      [
        "Unggah Kartu Keluarga",
        78
      ]
    ]
  },
  {
    "name": "CATUR YUDI SURYA WIDJAYA",
    "username": "caturyudi",
    "totalRecords": 3144,
    "byDate": {
      "2026-08-03": 243,
      "2026-08-04": 154,
      "2026-08-05": 186,
      "2026-08-06": 160,
      "2026-08-07": 142,
      "2026-08-08": 120,
      "2026-08-10": 163,
      "2026-08-11": 175,
      "2026-08-12": 167,
      "2026-08-13": 145,
      "2026-08-14": 138,
      "2026-08-15": 51,
      "2026-08-18": 146,
      "2026-08-19": 171,
      "2026-08-20": 136,
      "2026-08-21": 134,
      "2026-08-24": 244,
      "2026-08-26": 173,
      "2026-08-27": 155,
      "2026-08-28": 126,
      "2026-08-31": 15
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KK Karena Rusak",
        1074
      ],
      [
        "Pemutakhiran Biodata",
        909
      ],
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        274
      ],
      [
        "PINDAH DATANG",
        253
      ],
      [
        "Pindah Dalam Kota Seluruh Anggota Kartu Keluarga",
        240
      ]
    ],
    "topProcesses": [
      [
        "Upload Kartu Keluarga",
        1487
      ],
      [
        "Upload TTE Kartu Keluarga",
        592
      ],
      [
        "Verifikasi + Ajukan TTE Kartu Keluarga",
        587
      ],
      [
        "Upload Kartu Keluarga Hasil Pecah + Kartu Keluarga Sisa Pecah",
        337
      ],
      [
        "Unggah Kartu Keluarga",
        99
      ]
    ]
  },
  {
    "name": "andre27",
    "username": "andre27",
    "totalRecords": 2899,
    "byDate": {
      "2026-08-03": 40,
      "2026-08-04": 200,
      "2026-08-05": 149,
      "2026-08-06": 197,
      "2026-08-07": 145,
      "2026-08-08": 76,
      "2026-08-10": 150,
      "2026-08-11": 189,
      "2026-08-12": 147,
      "2026-08-13": 161,
      "2026-08-14": 164,
      "2026-08-15": 73,
      "2026-08-18": 137,
      "2026-08-19": 146,
      "2026-08-20": 128,
      "2026-08-21": 118,
      "2026-08-22": 38,
      "2026-08-24": 142,
      "2026-08-26": 167,
      "2026-08-27": 154,
      "2026-08-28": 99,
      "2026-08-29": 45,
      "2026-08-31": 34
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KK Karena Rusak",
        1077
      ],
      [
        "Pemutakhiran Biodata",
        907
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        391
      ],
      [
        "PINDAH DATANG",
        259
      ],
      [
        "Cetak Ulang KK Karena Hilang",
        91
      ]
    ],
    "topProcesses": [
      [
        "Upload Kartu Keluarga",
        1634
      ],
      [
        "Verifikasi + Ajukan TTE Kartu Keluarga",
        591
      ],
      [
        "Upload TTE Kartu Keluarga",
        577
      ],
      [
        "Unggah Kartu Keluarga",
        64
      ],
      [
        "Verifikasi + Entry ke SIAK + Ajukan TTE Kartu Keluarga",
        33
      ]
    ]
  },
  {
    "name": "AMELIA SHABRINA",
    "username": "shabrina01",
    "totalRecords": 2548,
    "byDate": {
      "2026-08-01": 89,
      "2026-08-03": 209,
      "2026-08-04": 159,
      "2026-08-05": 136,
      "2026-08-06": 120,
      "2026-08-07": 127,
      "2026-08-10": 190,
      "2026-08-11": 129,
      "2026-08-12": 93,
      "2026-08-13": 134,
      "2026-08-14": 133,
      "2026-08-15": 33,
      "2026-08-18": 124,
      "2026-08-19": 97,
      "2026-08-20": 127,
      "2026-08-21": 32,
      "2026-08-24": 208,
      "2026-08-26": 100,
      "2026-08-27": 112,
      "2026-08-28": 123,
      "2026-08-29": 41,
      "2026-08-31": 32
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang YOB",
        2548
      ]
    ],
    "topProcesses": [
      [
        "Pencetakan KTP dan Update Tracking",
        1439
      ],
      [
        "Perekaman Ulang KTP",
        1109
      ]
    ]
  },
  {
    "name": "imam kusyadi jaya",
    "username": "imamkusyadi",
    "totalRecords": 2419,
    "byDate": {
      "2026-08-03": 192,
      "2026-08-04": 123,
      "2026-08-05": 204,
      "2026-08-06": 114,
      "2026-08-07": 159,
      "2026-08-10": 128,
      "2026-08-11": 203,
      "2026-08-12": 175,
      "2026-08-13": 132,
      "2026-08-14": 78,
      "2026-08-18": 139,
      "2026-08-19": 123,
      "2026-08-20": 93,
      "2026-08-21": 96,
      "2026-08-22": 51,
      "2026-08-24": 90,
      "2026-08-26": 121,
      "2026-08-27": 89,
      "2026-08-28": 86,
      "2026-08-31": 23
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        1179
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        597
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        432
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        78
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        63
      ]
    ],
    "topProcesses": [
      [
        "Unggah Kartu Keluarga",
        1233
      ],
      [
        "Upload Kartu Keluarga",
        1186
      ]
    ]
  },
  {
    "name": "antonwahyudi",
    "username": "antonwahyudi",
    "totalRecords": 2238,
    "byDate": {
      "2026-08-01": 64,
      "2026-08-03": 243,
      "2026-08-04": 181,
      "2026-08-05": 123,
      "2026-08-06": 92,
      "2026-08-07": 81,
      "2026-08-10": 138,
      "2026-08-11": 108,
      "2026-08-12": 106,
      "2026-08-13": 69,
      "2026-08-14": 83,
      "2026-08-15": 39,
      "2026-08-18": 112,
      "2026-08-19": 117,
      "2026-08-20": 87,
      "2026-08-21": 109,
      "2026-08-24": 107,
      "2026-08-26": 124,
      "2026-08-27": 92,
      "2026-08-28": 54,
      "2026-08-29": 106,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        994
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        544
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        395
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        82
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        71
      ]
    ],
    "topProcesses": [
      [
        "Upload Akta Kematian",
        1006
      ],
      [
        "Unggh Akta Kelahiran",
        620
      ],
      [
        "Unggah Akta Kelahiran",
        572
      ],
      [
        "Unggah Akta Kelahiran + Unggah Kartu Keluarga",
        40
      ]
    ]
  },
  {
    "name": "bayual",
    "username": "bayual",
    "totalRecords": 1924,
    "byDate": {
      "2026-08-03": 75,
      "2026-08-04": 101,
      "2026-08-05": 88,
      "2026-08-06": 139,
      "2026-08-07": 97,
      "2026-08-08": 59,
      "2026-08-10": 113,
      "2026-08-11": 94,
      "2026-08-12": 101,
      "2026-08-13": 80,
      "2026-08-14": 95,
      "2026-08-18": 119,
      "2026-08-19": 129,
      "2026-08-20": 146,
      "2026-08-21": 111,
      "2026-08-22": 56,
      "2026-08-26": 136,
      "2026-08-27": 104,
      "2026-08-28": 71,
      "2026-08-31": 10
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Verifikasi Akun Klampid",
        1229
      ],
      [
        "Konsolidasi NIK dan KK",
        560
      ],
      [
        "Verifikasi Akun Klampid Non Surabaya",
        135
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Akun",
        1229
      ],
      [
        "Unggah Kartu Keluarga",
        560
      ],
      [
        "Verifikasi Akun Non Permanen",
        135
      ]
    ]
  },
  {
    "name": "AGIL DYAH MELATI SUKMA",
    "username": "agildyah",
    "totalRecords": 1894,
    "byDate": {
      "2026-08-01": 56,
      "2026-08-03": 134,
      "2026-08-04": 131,
      "2026-08-05": 85,
      "2026-08-06": 95,
      "2026-08-07": 100,
      "2026-08-10": 134,
      "2026-08-11": 86,
      "2026-08-12": 83,
      "2026-08-13": 76,
      "2026-08-14": 101,
      "2026-08-15": 25,
      "2026-08-18": 99,
      "2026-08-19": 177,
      "2026-08-20": 93,
      "2026-08-21": 76,
      "2026-08-26": 109,
      "2026-08-27": 84,
      "2026-08-28": 101,
      "2026-08-29": 43,
      "2026-08-31": 6
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1798
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        96
      ]
    ],
    "topProcesses": [
      [
        "Ajukan TTE Kartu Keluarga",
        641
      ],
      [
        "Entry Perubahan Biodata",
        630
      ],
      [
        "Verifikasi + Create NIK",
        623
      ]
    ]
  },
  {
    "name": "jannah",
    "username": "jannah",
    "totalRecords": 1778,
    "byDate": {
      "2026-08-01": 70,
      "2026-08-03": 137,
      "2026-08-04": 113,
      "2026-08-05": 94,
      "2026-08-07": 69,
      "2026-08-10": 114,
      "2026-08-11": 92,
      "2026-08-12": 90,
      "2026-08-13": 80,
      "2026-08-14": 83,
      "2026-08-15": 31,
      "2026-08-18": 113,
      "2026-08-19": 92,
      "2026-08-20": 70,
      "2026-08-21": 74,
      "2026-08-24": 129,
      "2026-08-26": 104,
      "2026-08-27": 98,
      "2026-08-28": 80,
      "2026-08-29": 34,
      "2026-08-31": 11
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pindah Keluar Anggota Keluarga",
        925
      ],
      [
        "Pindah Keluar Seluruh Anggota KK",
        494
      ],
      [
        "Pindah Keluar Kepala Keluarga / Kepala Keluarga dan Sebagian Anggota Keluarga",
        190
      ],
      [
        "Pindah Keluar disertai Buka Blokir",
        71
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        38
      ]
    ],
    "topProcesses": [
      [
        "Unggah SKPWNI",
        683
      ],
      [
        "Unggah Kartu Keluarga",
        316
      ],
      [
        "Verifikasi + Entry Perubahan Biodata (Jika Ada) + Entry Pindah Keluar + Ajukan TTE SKPWNI dan Kartu Keluarga",
        302
      ],
      [
        "Verifikasi + Entry Pindah Keluar + Ajukan TTE SKPWNI",
        240
      ],
      [
        "Unaggah Kartu Keluarga",
        65
      ]
    ]
  },
  {
    "name": "INSANI HIDAYATI ARDINA",
    "username": "insani",
    "totalRecords": 1775,
    "byDate": {
      "2026-08-03": 142,
      "2026-08-04": 124,
      "2026-08-05": 92,
      "2026-08-06": 97,
      "2026-08-07": 110,
      "2026-08-08": 61,
      "2026-08-10": 136,
      "2026-08-11": 83,
      "2026-08-12": 86,
      "2026-08-13": 80,
      "2026-08-14": 98,
      "2026-08-18": 109,
      "2026-08-21": 57,
      "2026-08-22": 63,
      "2026-08-24": 156,
      "2026-08-26": 105,
      "2026-08-27": 85,
      "2026-08-28": 86,
      "2026-08-31": 5
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1669
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        106
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Create NIK",
        620
      ],
      [
        "Entry Perubahan Biodata",
        582
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        573
      ]
    ]
  },
  {
    "name": "M.ABDURRACHMAN AZIS",
    "username": "azis",
    "totalRecords": 1772,
    "byDate": {
      "2026-08-03": 126,
      "2026-08-04": 84,
      "2026-08-05": 77,
      "2026-08-06": 183,
      "2026-08-07": 71,
      "2026-08-08": 39,
      "2026-08-10": 107,
      "2026-08-11": 87,
      "2026-08-12": 86,
      "2026-08-13": 76,
      "2026-08-14": 91,
      "2026-08-18": 104,
      "2026-08-19": 86,
      "2026-08-20": 68,
      "2026-08-21": 56,
      "2026-08-22": 33,
      "2026-08-24": 123,
      "2026-08-26": 88,
      "2026-08-27": 91,
      "2026-08-28": 68,
      "2026-08-31": 28
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pindah Keluar Anggota Keluarga",
        922
      ],
      [
        "Pindah Keluar Seluruh Anggota KK",
        553
      ],
      [
        "Pindah Keluar Kepala Keluarga / Kepala Keluarga dan Sebagian Anggota Keluarga",
        163
      ],
      [
        "Pindah Keluar disertai Buka Blokir",
        57
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        47
      ]
    ],
    "topProcesses": [
      [
        "Unggah SKPWNI",
        661
      ],
      [
        "Verifikasi + Entry Perubahan Biodata (Jika Ada) + Entry Pindah Keluar + Ajukan TTE SKPWNI dan Kartu Keluarga",
        316
      ],
      [
        "Unggah Kartu Keluarga",
        304
      ],
      [
        "Verifikasi + Entry Pindah Keluar + Ajukan TTE SKPWNI",
        285
      ],
      [
        "Verifikasi + Entry Perubahan Biodata (Jika Ada) + Proses Pecah KK + Entry Pindah Keluar + Ajukan TTE SKPWNI dan Kartu Keluarga",
        57
      ]
    ]
  },
  {
    "name": "FITRIA KUSUMA ARUMSARI",
    "username": "fitria",
    "totalRecords": 1706,
    "byDate": {
      "2026-08-01": 54,
      "2026-08-03": 82,
      "2026-08-04": 89,
      "2026-08-05": 99,
      "2026-08-06": 104,
      "2026-08-07": 90,
      "2026-08-10": 103,
      "2026-08-11": 98,
      "2026-08-12": 106,
      "2026-08-13": 79,
      "2026-08-14": 82,
      "2026-08-15": 34,
      "2026-08-18": 105,
      "2026-08-19": 73,
      "2026-08-20": 76,
      "2026-08-21": 108,
      "2026-08-22": 21,
      "2026-08-24": 93,
      "2026-08-26": 68,
      "2026-08-27": 70,
      "2026-08-28": 46,
      "2026-08-29": 16,
      "2026-08-31": 10
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Keabsahan Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran SURABAYA)",
        638
      ],
      [
        "Keabsahan Akta Kelahiran (Pemilik dokumen LUAR SURABAYA dan Akta Kelahiran SURABAYA)",
        473
      ],
      [
        "Keabsahan Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran LUAR SURABAYA)",
        397
      ],
      [
        "Keabsahan Akta Kematian (Pemilik dokumen SURABAYA dan Akta Kematian SURABAYA)",
        180
      ],
      [
        "Keabsahan Akta Kematian (Pemilik dokumen LUAR SURABAYA dan Akta Kematian SURABAYA)",
        14
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        1089
      ],
      [
        "Pengecekan Data (Gudang)",
        615
      ],
      [
        "Pengiriman Dokumen",
        2
      ]
    ]
  },
  {
    "name": "dwiadi",
    "username": "dwiadi",
    "totalRecords": 1616,
    "byDate": {
      "2026-08-04": 64,
      "2026-08-05": 88,
      "2026-08-06": 82,
      "2026-08-07": 78,
      "2026-08-10": 133,
      "2026-08-11": 100,
      "2026-08-12": 97,
      "2026-08-13": 77,
      "2026-08-14": 77,
      "2026-08-18": 89,
      "2026-08-19": 120,
      "2026-08-20": 84,
      "2026-08-21": 96,
      "2026-08-22": 51,
      "2026-08-24": 94,
      "2026-08-26": 120,
      "2026-08-27": 84,
      "2026-08-28": 82
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        793
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        395
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        287
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        45
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        37
      ]
    ],
    "topProcesses": [
      [
        "Upload Akta Kematian",
        796
      ],
      [
        "Unggh Akta Kelahiran",
        432
      ],
      [
        "Unggah Akta Kelahiran",
        373
      ],
      [
        "Unggah Akta Kelahiran + Unggah Kartu Keluarga",
        15
      ]
    ]
  },
  {
    "name": "MUHAMMAD DAFA FIRLIANSYAH",
    "username": "dafa",
    "totalRecords": 1596,
    "byDate": {
      "2026-08-03": 130,
      "2026-08-04": 82,
      "2026-08-05": 100,
      "2026-08-06": 85,
      "2026-08-07": 91,
      "2026-08-08": 18,
      "2026-08-10": 114,
      "2026-08-11": 79,
      "2026-08-12": 71,
      "2026-08-13": 80,
      "2026-08-14": 106,
      "2026-08-18": 78,
      "2026-08-19": 62,
      "2026-08-20": 72,
      "2026-08-21": 63,
      "2026-08-22": 16,
      "2026-08-24": 81,
      "2026-08-26": 91,
      "2026-08-27": 86,
      "2026-08-28": 72,
      "2026-08-31": 19
    },
    "division": "kependudukan",
    "topServices": [
      [
        "PECAH KK",
        1553
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        43
      ]
    ],
    "topProcesses": [
      [
        "Proses Pecah KK",
        783
      ],
      [
        "Unggah KK Sisa dan KK Hasil",
        770
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        43
      ]
    ]
  },
  {
    "name": "GELAR REGA ASMARA",
    "username": "gelarrega",
    "totalRecords": 1590,
    "byDate": {
      "2026-08-03": 86,
      "2026-08-04": 73,
      "2026-08-05": 66,
      "2026-08-06": 89,
      "2026-08-07": 82,
      "2026-08-08": 45,
      "2026-08-10": 64,
      "2026-08-11": 104,
      "2026-08-12": 69,
      "2026-08-13": 67,
      "2026-08-14": 73,
      "2026-08-18": 97,
      "2026-08-19": 139,
      "2026-08-20": 79,
      "2026-08-21": 86,
      "2026-08-22": 21,
      "2026-08-24": 68,
      "2026-08-26": 112,
      "2026-08-27": 94,
      "2026-08-28": 36,
      "2026-08-31": 40
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1476
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        80
      ],
      [
        "Akta Kematian + Pecah KK + Perubahan Status Perkawinan (Faskes)",
        13
      ],
      [
        "Akta Kematian + Perubahan Status Perkawinan (Faskes)",
        9
      ],
      [
        "Akta Kematian + Cetak KK (Faskes)",
        6
      ]
    ],
    "topProcesses": [
      [
        "Upload Kartu Keluarga",
        1585
      ],
      [
        "Upload Akta Kematian",
        5
      ]
    ]
  },
  {
    "name": "DJAINAL ISWANDIK, SH",
    "username": "3578040704710006",
    "totalRecords": 1438,
    "byDate": {
      "2026-08-01": 37,
      "2026-08-03": 143,
      "2026-08-04": 101,
      "2026-08-05": 25,
      "2026-08-06": 64,
      "2026-08-10": 133,
      "2026-08-11": 6,
      "2026-08-12": 20,
      "2026-08-13": 13,
      "2026-08-14": 92,
      "2026-08-15": 30,
      "2026-08-18": 70,
      "2026-08-19": 100,
      "2026-08-20": 85,
      "2026-08-21": 102,
      "2026-08-24": 91,
      "2026-08-26": 117,
      "2026-08-27": 95,
      "2026-08-28": 58,
      "2026-08-29": 56
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        643
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        345
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        255
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        50
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        49
      ]
    ],
    "topProcesses": [
      [
        "Unggah Kartu Keluarga",
        757
      ],
      [
        "Upload Kartu Keluarga",
        653
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        28
      ]
    ]
  },
  {
    "name": "ISTI INDAH SETYAWATI",
    "username": "isti_indah",
    "totalRecords": 1331,
    "byDate": {
      "2026-08-01": 38,
      "2026-08-03": 106,
      "2026-08-04": 61,
      "2026-08-05": 61,
      "2026-08-06": 47,
      "2026-08-07": 48,
      "2026-08-10": 75,
      "2026-08-11": 65,
      "2026-08-12": 74,
      "2026-08-13": 62,
      "2026-08-14": 50,
      "2026-08-15": 34,
      "2026-08-18": 91,
      "2026-08-19": 75,
      "2026-08-20": 57,
      "2026-08-21": 53,
      "2026-08-24": 71,
      "2026-08-26": 81,
      "2026-08-27": 64,
      "2026-08-28": 63,
      "2026-08-29": 48,
      "2026-08-31": 7
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        790
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        351
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        71
      ],
      [
        "Cetak Ulang YOB",
        50
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        46
      ]
    ],
    "topProcesses": [
      [
        "Proses Cetak KIA",
        1260
      ],
      [
        "Perekaman Ulang KTP",
        34
      ],
      [
        "Pencetakan KTP dan Update Tracking",
        16
      ],
      [
        "PROSES VERIFIKASI PENGAJUAN KIA KALIMASADA",
        6
      ],
      [
        "PROSES UPLOAD FOTO PENGAJUAN KIA KALIMASADA",
        5
      ]
    ]
  },
  {
    "name": "Achmad Fauzi, S.Kom",
    "username": "achmadfauzi",
    "totalRecords": 1268,
    "byDate": {
      "2026-08-03": 96,
      "2026-08-04": 97,
      "2026-08-05": 85,
      "2026-08-06": 110,
      "2026-08-07": 67,
      "2026-08-08": 37,
      "2026-08-10": 46,
      "2026-08-11": 78,
      "2026-08-12": 51,
      "2026-08-13": 69,
      "2026-08-14": 70,
      "2026-08-18": 50,
      "2026-08-19": 62,
      "2026-08-20": 41,
      "2026-08-21": 44,
      "2026-08-22": 47,
      "2026-08-24": 53,
      "2026-08-26": 56,
      "2026-08-27": 61,
      "2026-08-28": 40,
      "2026-08-29": 2,
      "2026-08-31": 6
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        593
      ],
      [
        "Pindah Dalam Kota Seluruh Anggota Kartu Keluarga",
        506
      ],
      [
        "Pindah Dalam Kota Kepala Keluarga / Kepala Keluarga dan Sebagaian Anggota Keluarga",
        65
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        63
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        41
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Berkas + Entry Data Kepindahan + Ajukan TTE SKPWNI",
        617
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE KK Hasil Pecah + Ajukan TTE KK Sisa Pecah",
        346
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE Kartu Keluarga",
        243
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        41
      ],
      [
        "Verifikasi Berkas",
        21
      ]
    ]
  },
  {
    "name": "SITI MUSLIKHAH",
    "username": "ika",
    "totalRecords": 1260,
    "byDate": {
      "2026-08-01": 71,
      "2026-08-03": 91,
      "2026-08-04": 112,
      "2026-08-05": 72,
      "2026-08-06": 97,
      "2026-08-07": 47,
      "2026-08-10": 53,
      "2026-08-11": 70,
      "2026-08-12": 54,
      "2026-08-13": 71,
      "2026-08-14": 58,
      "2026-08-15": 8,
      "2026-08-18": 63,
      "2026-08-19": 66,
      "2026-08-20": 43,
      "2026-08-21": 46,
      "2026-08-24": 49,
      "2026-08-26": 53,
      "2026-08-27": 55,
      "2026-08-28": 45,
      "2026-08-29": 27,
      "2026-08-31": 9
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        599
      ],
      [
        "Pindah Dalam Kota Seluruh Anggota Kartu Keluarga",
        456
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        79
      ],
      [
        "Pindah Dalam Kota Kepala Keluarga / Kepala Keluarga dan Sebagaian Anggota Keluarga",
        74
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        52
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Berkas + Entry Data Kepindahan + Ajukan TTE SKPWNI",
        577
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE KK Hasil Pecah + Ajukan TTE KK Sisa Pecah",
        373
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE Kartu Keluarga",
        237
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        52
      ],
      [
        "Verifikasi Berkas",
        21
      ]
    ]
  },
  {
    "name": "FIRMAN AINUN BAHRI",
    "username": "firmanainun",
    "totalRecords": 1205,
    "byDate": {
      "2026-08-03": 102,
      "2026-08-04": 69,
      "2026-08-05": 65,
      "2026-08-06": 73,
      "2026-08-07": 60,
      "2026-08-08": 16,
      "2026-08-10": 66,
      "2026-08-11": 66,
      "2026-08-12": 59,
      "2026-08-13": 57,
      "2026-08-14": 73,
      "2026-08-18": 70,
      "2026-08-19": 44,
      "2026-08-20": 57,
      "2026-08-21": 52,
      "2026-08-22": 19,
      "2026-08-24": 73,
      "2026-08-26": 57,
      "2026-08-27": 53,
      "2026-08-28": 34,
      "2026-08-31": 40
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Kutipan Kedua Kelahiran Karena Hilang Domisili Surabaya",
        429
      ],
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Kota Surabaya)",
        367
      ],
      [
        "Kutipan Kedua Kelahiran Karena Rusak Domisili Surabaya",
        201
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Kota Surabaya)",
        118
      ],
      [
        "Kutipan Kedua Kematian Karena Hilang Domisili Surabaya",
        68
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Gudang",
        630
      ],
      [
        "Verifikasi",
        574
      ],
      [
        "Pengecekan Data (Gudang)",
        1
      ]
    ]
  },
  {
    "name": "ibnu_oss",
    "username": "ibnu_oss",
    "totalRecords": 1195,
    "byDate": {
      "2026-08-03": 69,
      "2026-08-04": 59,
      "2026-08-05": 89,
      "2026-08-07": 72,
      "2026-08-08": 40,
      "2026-08-10": 77,
      "2026-08-11": 84,
      "2026-08-12": 74,
      "2026-08-13": 60,
      "2026-08-14": 33,
      "2026-08-18": 80,
      "2026-08-19": 10,
      "2026-08-20": 1,
      "2026-08-21": 27,
      "2026-08-22": 51,
      "2026-08-24": 129,
      "2026-08-26": 98,
      "2026-08-27": 75,
      "2026-08-28": 49,
      "2026-08-31": 18
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Verifikasi Akun Klampid",
        1077
      ],
      [
        "Verifikasi Akun Klampid Non Surabaya",
        118
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Akun",
        1077
      ],
      [
        "Verifikasi Akun Non Permanen",
        118
      ]
    ]
  },
  {
    "name": "IMROATUL MUFIDAH",
    "username": "fida",
    "totalRecords": 1177,
    "byDate": {
      "2026-08-03": 93,
      "2026-08-04": 57,
      "2026-08-05": 61,
      "2026-08-06": 45,
      "2026-08-07": 45,
      "2026-08-08": 33,
      "2026-08-10": 73,
      "2026-08-11": 59,
      "2026-08-12": 61,
      "2026-08-13": 55,
      "2026-08-14": 42,
      "2026-08-18": 81,
      "2026-08-19": 74,
      "2026-08-20": 59,
      "2026-08-21": 49,
      "2026-08-22": 27,
      "2026-08-24": 68,
      "2026-08-26": 80,
      "2026-08-27": 60,
      "2026-08-28": 53,
      "2026-08-31": 2
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        729
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        340
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        59
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        39
      ],
      [
        "KIA KALIMASADA",
        6
      ]
    ],
    "topProcesses": [
      [
        "Proses Cetak KIA",
        1167
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk + Upload Hasil Output Surat",
        4
      ],
      [
        "PROSES UPLOAD FOTO PENGAJUAN KIA KALIMASADA",
        2
      ],
      [
        "PROSES VERIFIKASI PENGAJUAN KIA KALIMASADA",
        2
      ],
      [
        "PROSES CETAK KIA KALIMASADA",
        2
      ]
    ]
  },
  {
    "name": "WAHYU KUNDARIANTO, SE",
    "username": "wahyukun",
    "totalRecords": 1175,
    "byDate": {
      "2026-08-01": 61,
      "2026-08-03": 4,
      "2026-08-04": 112,
      "2026-08-05": 66,
      "2026-08-06": 92,
      "2026-08-07": 38,
      "2026-08-08": 19,
      "2026-08-10": 49,
      "2026-08-11": 38,
      "2026-08-12": 37,
      "2026-08-13": 54,
      "2026-08-14": 39,
      "2026-08-18": 61,
      "2026-08-19": 25,
      "2026-08-20": 71,
      "2026-08-21": 77,
      "2026-08-24": 101,
      "2026-08-26": 73,
      "2026-08-27": 59,
      "2026-08-28": 88,
      "2026-08-29": 10,
      "2026-08-31": 1
    },
    "division": "kependudukan",
    "topServices": [
      [
        "SKTT OA (PERPANJANGAN)",
        464
      ],
      [
        "Buka Blokir Nomor KK Tetap",
        446
      ],
      [
        "SKTT OA (PEMBUATAN BARU)",
        130
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        125
      ],
      [
        "Buka Blokir Kepala Keluarga + Nomor KK Menumpang (Jika memilih menumpang)",
        6
      ]
    ],
    "topProcesses": [
      [
        "Penjadwalan Cek Biometrik",
        591
      ],
      [
        "Hasil Cek Biometrik",
        584
      ]
    ]
  },
  {
    "name": "misrini",
    "username": "misrini",
    "totalRecords": 1167,
    "byDate": {
      "2026-08-01": 35,
      "2026-08-03": 96,
      "2026-08-04": 42,
      "2026-08-05": 44,
      "2026-08-06": 37,
      "2026-08-07": 69,
      "2026-08-08": 20,
      "2026-08-10": 72,
      "2026-08-11": 48,
      "2026-08-12": 57,
      "2026-08-13": 51,
      "2026-08-14": 43,
      "2026-08-18": 81,
      "2026-08-19": 94,
      "2026-08-20": 64,
      "2026-08-21": 43,
      "2026-08-22": 27,
      "2026-08-24": 67,
      "2026-08-26": 73,
      "2026-08-27": 60,
      "2026-08-28": 42,
      "2026-08-31": 2
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1099
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        68
      ]
    ],
    "topProcesses": [
      [
        "Entry Akta Kelahiran",
        584
      ],
      [
        "Ajukan TTE Akta Kelahiran",
        583
      ]
    ]
  },
  {
    "name": "GERRY RENDRAGRAHA",
    "username": "gerryrendra",
    "totalRecords": 1132,
    "byDate": {
      "2026-08-01": 52,
      "2026-08-03": 49,
      "2026-08-04": 79,
      "2026-08-05": 74,
      "2026-08-06": 92,
      "2026-08-07": 56,
      "2026-08-10": 50,
      "2026-08-11": 20,
      "2026-08-12": 43,
      "2026-08-13": 41,
      "2026-08-14": 62,
      "2026-08-15": 9,
      "2026-08-18": 42,
      "2026-08-19": 28,
      "2026-08-20": 53,
      "2026-08-21": 73,
      "2026-08-24": 42,
      "2026-08-26": 131,
      "2026-08-27": 56,
      "2026-08-28": 28,
      "2026-08-29": 49,
      "2026-08-31": 3
    },
    "division": "kependudukan",
    "topServices": [
      [
        "SKTT OA (PERPANJANGAN)",
        693
      ],
      [
        "SKTT OA (PEMBUATAN BARU)",
        224
      ],
      [
        "KK OA (PERPANJANGAN)",
        71
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        63
      ],
      [
        "Pengajuan KTP OA (Perpanjangan)",
        30
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi dan Validasi",
        342
      ],
      [
        "Ajukan TTE",
        306
      ],
      [
        "Unggah SKTT OA",
        231
      ],
      [
        "Unggah SKTT",
        75
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        63
      ]
    ]
  },
  {
    "name": "ariefharitsah",
    "username": "ariefharitsah",
    "totalRecords": 1127,
    "byDate": {
      "2026-08-01": 45,
      "2026-08-03": 51,
      "2026-08-04": 69,
      "2026-08-05": 71,
      "2026-08-06": 75,
      "2026-08-07": 53,
      "2026-08-10": 57,
      "2026-08-11": 38,
      "2026-08-12": 59,
      "2026-08-13": 44,
      "2026-08-14": 41,
      "2026-08-15": 16,
      "2026-08-18": 48,
      "2026-08-19": 50,
      "2026-08-20": 80,
      "2026-08-21": 55,
      "2026-08-24": 45,
      "2026-08-26": 66,
      "2026-08-27": 49,
      "2026-08-28": 49,
      "2026-08-29": 46,
      "2026-08-31": 20
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Buka Blokir Nomor KK Tetap",
        371
      ],
      [
        "AKTA KEMATIAN WARGA TANPA NIK DISERTAI PENGECEKAN DATA",
        257
      ],
      [
        "Hapus Data Ganda + Cetak Kartu Keluarga",
        118
      ],
      [
        "ESULAY PIAK",
        115
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        87
      ]
    ],
    "topProcesses": [
      [
        "Cek data jenazah",
        257
      ],
      [
        "Verifikasi + Validasi SIAK",
        186
      ],
      [
        "Pengaktifan Data",
        147
      ],
      [
        "Verifikasi + Validasi + Hapus Data",
        118
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk  + Upload Hasil Output Surat",
        115
      ]
    ]
  },
  {
    "name": "AGUS NIZAR",
    "username": "agusnizar",
    "totalRecords": 1125,
    "byDate": {
      "2026-08-01": 18,
      "2026-08-03": 51,
      "2026-08-04": 77,
      "2026-08-05": 50,
      "2026-08-06": 54,
      "2026-08-07": 42,
      "2026-08-10": 84,
      "2026-08-11": 85,
      "2026-08-12": 35,
      "2026-08-13": 49,
      "2026-08-14": 41,
      "2026-08-15": 15,
      "2026-08-18": 43,
      "2026-08-19": 75,
      "2026-08-20": 50,
      "2026-08-21": 34,
      "2026-08-24": 62,
      "2026-08-26": 81,
      "2026-08-27": 80,
      "2026-08-28": 67,
      "2026-08-29": 30,
      "2026-08-31": 2
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Legalisir Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran terbitan SURABAYA)",
        430
      ],
      [
        "Legalisir Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran terbitan SURABAYA tahun terbitan di atas 2003)",
        326
      ],
      [
        "Legalisir Akta Kematian (Pemilik dokumen SURABAYA dan Akta Kematian terbitan SURABAYA tahun terbitan di atas 2003)",
        111
      ],
      [
        "Keabsahan Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran SURABAYA)",
        69
      ],
      [
        "Legalisir Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran terbitan LUAR SURABAYA)",
        44
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        752
      ],
      [
        "Pengecekan Data (Gudang)",
        373
      ]
    ]
  },
  {
    "name": "AINUN AULIYA",
    "username": "ainun",
    "totalRecords": 1113,
    "byDate": {
      "2026-08-11": 74,
      "2026-08-12": 57,
      "2026-08-13": 62,
      "2026-08-14": 54,
      "2026-08-15": 23,
      "2026-08-18": 94,
      "2026-08-19": 131,
      "2026-08-20": 119,
      "2026-08-21": 83,
      "2026-08-24": 130,
      "2026-08-26": 104,
      "2026-08-27": 74,
      "2026-08-28": 80,
      "2026-08-29": 28
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1059
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        54
      ]
    ],
    "topProcesses": [
      [
        "Entry Perubahan Biodata",
        388
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        372
      ],
      [
        "Verifikasi + Create NIK",
        353
      ]
    ]
  },
  {
    "name": "FIQIH KARTIKA MURTI",
    "username": "fiqihkartika",
    "totalRecords": 1049,
    "byDate": {
      "2026-08-03": 90,
      "2026-08-04": 39,
      "2026-08-05": 44,
      "2026-08-06": 33,
      "2026-08-07": 66,
      "2026-08-08": 20,
      "2026-08-10": 63,
      "2026-08-11": 47,
      "2026-08-12": 49,
      "2026-08-13": 51,
      "2026-08-14": 46,
      "2026-08-18": 59,
      "2026-08-19": 88,
      "2026-08-20": 67,
      "2026-08-21": 42,
      "2026-08-22": 17,
      "2026-08-24": 65,
      "2026-08-26": 65,
      "2026-08-27": 54,
      "2026-08-28": 42,
      "2026-08-31": 2
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        1009
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        40
      ]
    ],
    "topProcesses": [
      [
        "Ajukan TTE Akta Kelahiran",
        525
      ],
      [
        "Entry Akta Kelahiran",
        524
      ]
    ]
  },
  {
    "name": "IRMA APRIANTI, SE",
    "username": "irma",
    "totalRecords": 1019,
    "byDate": {
      "2026-08-01": 29,
      "2026-08-03": 41,
      "2026-08-04": 44,
      "2026-08-05": 51,
      "2026-08-06": 39,
      "2026-08-10": 76,
      "2026-08-11": 51,
      "2026-08-12": 55,
      "2026-08-13": 52,
      "2026-08-14": 56,
      "2026-08-15": 44,
      "2026-08-18": 83,
      "2026-08-20": 19,
      "2026-08-21": 51,
      "2026-08-24": 71,
      "2026-08-26": 74,
      "2026-08-27": 57,
      "2026-08-28": 65,
      "2026-08-29": 58,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        931
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        62
      ],
      [
        "Kolak Pisang V3",
        14
      ],
      [
        "Pengajuan Akta Kelahiran Belum Memiliki NIK Melalui IKD",
        10
      ],
      [
        "Pencatatan Kelahiran Orang Asing",
        2
      ]
    ],
    "topProcesses": [
      [
        "Ajukan TTE Akta Kelahiran",
        499
      ],
      [
        "Entry Akta Kelahiran",
        498
      ],
      [
        "Unggah Akta Kelahiran + Kartu Keluarga",
        10
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        2
      ],
      [
        "Entry Perubahan Biodata",
        2
      ]
    ]
  },
  {
    "name": "DWI INDAH AYU",
    "username": "dwiindah",
    "totalRecords": 962,
    "byDate": {
      "2026-08-03": 58,
      "2026-08-04": 96,
      "2026-08-05": 51,
      "2026-08-06": 45,
      "2026-08-07": 57,
      "2026-08-10": 56,
      "2026-08-11": 64,
      "2026-08-12": 55,
      "2026-08-13": 46,
      "2026-08-14": 56,
      "2026-08-18": 43,
      "2026-08-19": 18,
      "2026-08-20": 65,
      "2026-08-21": 35,
      "2026-08-24": 51,
      "2026-08-26": 68,
      "2026-08-27": 45,
      "2026-08-28": 41,
      "2026-08-31": 12
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Dispensasi Pindah",
        299
      ],
      [
        "Disposisi Pindah disertai Cetak KK",
        229
      ],
      [
        "Disposisi Pindah",
        219
      ],
      [
        "Dispensasi Pindah (SKPWNI > 1 Tahun)",
        98
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        61
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Disposisi Pindah",
        187
      ],
      [
        "Ajukan TTE + Upload SKPWNI",
        185
      ],
      [
        "Ajukan TTE + Upload File Kartu Keluarga",
        182
      ],
      [
        "Entry Kedatangan",
        106
      ],
      [
        "Verifikasi + Entry Surat",
        74
      ]
    ]
  },
  {
    "name": "rensy",
    "username": "rensy",
    "totalRecords": 940,
    "byDate": {
      "2026-08-01": 20,
      "2026-08-03": 55,
      "2026-08-04": 84,
      "2026-08-05": 66,
      "2026-08-07": 53,
      "2026-08-10": 43,
      "2026-08-11": 67,
      "2026-08-12": 50,
      "2026-08-13": 60,
      "2026-08-14": 44,
      "2026-08-15": 9,
      "2026-08-18": 50,
      "2026-08-19": 57,
      "2026-08-20": 41,
      "2026-08-21": 46,
      "2026-08-24": 56,
      "2026-08-26": 38,
      "2026-08-27": 48,
      "2026-08-28": 33,
      "2026-08-29": 15,
      "2026-08-31": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pindah Dalam Kota Anggota Kartu Keluarga",
        479
      ],
      [
        "Pindah Dalam Kota Seluruh Anggota Kartu Keluarga",
        379
      ],
      [
        "Pindah Dalam Kota Kepala Keluarga / Kepala Keluarga dan Sebagaian Anggota Keluarga",
        42
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        40
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Berkas + Entry Data Kepindahan + Ajukan TTE SKPWNI",
        450
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE KK Hasil Pecah + Ajukan TTE KK Sisa Pecah",
        276
      ],
      [
        "Entry Data Kedatangan + Ajukan TTE Kartu Keluarga",
        199
      ],
      [
        "Verifikasi Berkas",
        15
      ]
    ]
  },
  {
    "name": "buwiwik",
    "username": "buwiwik",
    "totalRecords": 852,
    "byDate": {
      "2026-08-01": 17,
      "2026-08-03": 41,
      "2026-08-04": 55,
      "2026-08-05": 49,
      "2026-08-06": 59,
      "2026-08-07": 43,
      "2026-08-10": 31,
      "2026-08-11": 53,
      "2026-08-12": 65,
      "2026-08-13": 24,
      "2026-08-14": 70,
      "2026-08-15": 12,
      "2026-08-18": 35,
      "2026-08-19": 25,
      "2026-08-20": 35,
      "2026-08-21": 66,
      "2026-08-24": 39,
      "2026-08-26": 67,
      "2026-08-27": 29,
      "2026-08-28": 29,
      "2026-08-31": 8
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Kota Surabaya)",
        331
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Kota Surabaya)",
        200
      ],
      [
        "Pelaporan Kelahiran Luar Negeri",
        75
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Luar Kota Surabaya)",
        73
      ],
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Luar Kota Surabaya)",
        60
      ]
    ],
    "topProcesses": [
      [
        "Entry Data Kartu Keluarga",
        347
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        197
      ],
      [
        "Upload dokumen Kartu Keluarga",
        130
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        54
      ],
      [
        "Upload Dokumen Kartu Keluarga",
        41
      ]
    ]
  },
  {
    "name": "HERMAWAN ARIBOWO",
    "username": "hermawan",
    "totalRecords": 826,
    "byDate": {
      "2026-08-01": 35,
      "2026-08-03": 56,
      "2026-08-04": 29,
      "2026-08-05": 35,
      "2026-08-06": 28,
      "2026-08-07": 34,
      "2026-08-10": 51,
      "2026-08-11": 38,
      "2026-08-12": 39,
      "2026-08-13": 40,
      "2026-08-14": 33,
      "2026-08-15": 20,
      "2026-08-18": 56,
      "2026-08-19": 48,
      "2026-08-20": 37,
      "2026-08-21": 30,
      "2026-08-24": 49,
      "2026-08-26": 55,
      "2026-08-27": 40,
      "2026-08-28": 28,
      "2026-08-29": 44,
      "2026-08-31": 1
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        782
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        42
      ],
      [
        "Pencatatan Kelahiran Orang Asing",
        2
      ]
    ],
    "topProcesses": [
      [
        "Upload Akta Kelahiran",
        824
      ],
      [
        "Unggah Akta Kelahiran",
        2
      ]
    ]
  },
  {
    "name": "surya_oss",
    "username": "surya_oss",
    "totalRecords": 804,
    "byDate": {
      "2026-08-03": 80,
      "2026-08-04": 30,
      "2026-08-05": 31,
      "2026-08-06": 29,
      "2026-08-07": 34,
      "2026-08-08": 20,
      "2026-08-10": 50,
      "2026-08-11": 38,
      "2026-08-12": 39,
      "2026-08-13": 40,
      "2026-08-14": 32,
      "2026-08-18": 59,
      "2026-08-19": 50,
      "2026-08-20": 38,
      "2026-08-21": 32,
      "2026-08-22": 23,
      "2026-08-24": 50,
      "2026-08-26": 52,
      "2026-08-27": 44,
      "2026-08-28": 33
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Anak Ayah Ibu Kawin Tercatat + Tambah Jiwa KK+ KIA (Faskes)",
        737
      ],
      [
        "Akta Kelahiran Anak Seorang Ibu + Tambah Jiwa KK + KIA (Faskses)",
        44
      ],
      [
        "AKTA KEMATIAN WARGA",
        11
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        7
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        2
      ]
    ],
    "topProcesses": [
      [
        "Upload Akta Kelahiran",
        781
      ],
      [
        "Upload Akta Kematian",
        12
      ],
      [
        "Unggah Akta Kelahiran",
        9
      ],
      [
        "Unggh Akta Kelahiran",
        2
      ]
    ]
  },
  {
    "name": "RR TRIA MAPRA KUSUMA, SE",
    "username": "tria",
    "totalRecords": 802,
    "byDate": {
      "2026-08-01": 47,
      "2026-08-03": 232,
      "2026-08-04": 37,
      "2026-08-05": 1,
      "2026-08-06": 29,
      "2026-08-07": 28,
      "2026-08-10": 35,
      "2026-08-11": 36,
      "2026-08-12": 31,
      "2026-08-13": 37,
      "2026-08-14": 31,
      "2026-08-15": 24,
      "2026-08-18": 28,
      "2026-08-19": 32,
      "2026-08-24": 37,
      "2026-08-26": 43,
      "2026-08-27": 36,
      "2026-08-28": 33,
      "2026-08-29": 20,
      "2026-08-31": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        420
      ],
      [
        "Cetak Ulang KTP",
        252
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        37
      ],
      [
        "Cetak Ulang YOB",
        26
      ],
      [
        "Pengajuan KTP Baru Usia < 17 tahun new",
        23
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        485
      ],
      [
        "Verifikasi",
        291
      ],
      [
        "Verifikasi dan Penjadwalan Cetak Ulang YOB",
        26
      ]
    ]
  },
  {
    "name": "yennypus",
    "username": "yennypus",
    "totalRecords": 782,
    "byDate": {
      "2026-08-01": 38,
      "2026-08-03": 52,
      "2026-08-04": 55,
      "2026-08-05": 54,
      "2026-08-06": 40,
      "2026-08-07": 26,
      "2026-08-10": 41,
      "2026-08-11": 37,
      "2026-08-12": 35,
      "2026-08-13": 41,
      "2026-08-14": 36,
      "2026-08-15": 15,
      "2026-08-18": 27,
      "2026-08-19": 35,
      "2026-08-20": 39,
      "2026-08-21": 28,
      "2026-08-24": 36,
      "2026-08-26": 49,
      "2026-08-27": 38,
      "2026-08-28": 31,
      "2026-08-29": 24,
      "2026-08-31": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        682
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        46
      ],
      [
        "Perubahan Alamat",
        30
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        10
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin Tercatat",
        9
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        781
      ],
      [
        "Verifikasi + Entry Perubahan Biodata + Ajukan TTE Kartu Keluarga",
        1
      ]
    ]
  },
  {
    "name": "Pram Mita",
    "username": "3578204310830004",
    "totalRecords": 762,
    "byDate": {
      "2026-08-01": 36,
      "2026-08-03": 40,
      "2026-08-06": 49,
      "2026-08-07": 67,
      "2026-08-10": 61,
      "2026-08-11": 50,
      "2026-08-12": 58,
      "2026-08-13": 37,
      "2026-08-14": 21,
      "2026-08-15": 34,
      "2026-08-18": 47,
      "2026-08-19": 21,
      "2026-08-20": 18,
      "2026-08-21": 69,
      "2026-08-24": 80,
      "2026-08-27": 18,
      "2026-08-28": 49,
      "2026-08-31": 7
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Konsolidasi NIK dan KK",
        465
      ],
      [
        "Hapus Data Ganda + Cetak Kartu Keluarga",
        242
      ],
      [
        "Buka Blokir Nomor KK Tetap",
        24
      ],
      [
        "Hapus Data Ganda Kepala Keluarga + Pecah KK + Membuat KK Baru",
        15
      ],
      [
        "ESULAY PENONAKTIFAN DATA KALIMASADA",
        14
      ]
    ],
    "topProcesses": [
      [
        "Unggah Kartu Keluarga",
        465
      ],
      [
        "Upload Surat Keterangan Penghapusan Data Ganda",
        153
      ],
      [
        "Ajukan TTE + Upload File Kartu Keluarga",
        105
      ],
      [
        "Ajukan TTE + Upload File KK TTE",
        24
      ],
      [
        "Verifikasi Surat Masuk dan Pemrosesan Surat Masuk + Upload Hasil Output Surat",
        14
      ]
    ]
  },
  {
    "name": "NOVARINA KARTIKAWATI SAHRUB",
    "username": "novarina",
    "totalRecords": 759,
    "byDate": {
      "2026-08-03": 42,
      "2026-08-04": 31,
      "2026-08-05": 46,
      "2026-08-06": 21,
      "2026-08-07": 66,
      "2026-08-10": 14,
      "2026-08-11": 85,
      "2026-08-12": 57,
      "2026-08-13": 42,
      "2026-08-14": 38,
      "2026-08-18": 51,
      "2026-08-19": 42,
      "2026-08-20": 37,
      "2026-08-21": 27,
      "2026-08-22": 8,
      "2026-08-24": 45,
      "2026-08-26": 36,
      "2026-08-27": 35,
      "2026-08-28": 36
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Perkawinan + Cetak KK",
        599
      ],
      [
        "Akta Pengesahan Anak",
        113
      ],
      [
        "Akta Pengesahan Anak yang dilahirkan oleh Ibu Orang Asing",
        24
      ],
      [
        "WNI menjadi WNA",
        9
      ],
      [
        "Pengangkatan Anak",
        6
      ]
    ],
    "topProcesses": [
      [
        "Unggah Kartu Keluarga",
        204
      ],
      [
        "Unggah Akta Perkawinan",
        200
      ],
      [
        "Entry Perubahan Biodata + Ajukan TTE Kartu Keluarga",
        199
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        23
      ],
      [
        "Upload akta pengesahan anak + caping",
        20
      ]
    ]
  },
  {
    "name": "AGUS SALIM",
    "username": "agussalim",
    "totalRecords": 753,
    "byDate": {
      "2026-08-03": 48,
      "2026-08-04": 49,
      "2026-08-05": 22,
      "2026-08-06": 56,
      "2026-08-07": 39,
      "2026-08-10": 24,
      "2026-08-11": 33,
      "2026-08-12": 33,
      "2026-08-13": 34,
      "2026-08-14": 27,
      "2026-08-15": 14,
      "2026-08-18": 10,
      "2026-08-19": 55,
      "2026-08-20": 44,
      "2026-08-21": 86,
      "2026-08-24": 33,
      "2026-08-26": 43,
      "2026-08-27": 18,
      "2026-08-28": 43,
      "2026-08-29": 26,
      "2026-08-31": 16
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Verifikasi Akun Klampid",
        598
      ],
      [
        "Hapus Data Ganda + Cetak Kartu Keluarga",
        69
      ],
      [
        "Verifikasi Akun Klampid Non Surabaya",
        58
      ],
      [
        "Buka Blokir Nomor KK Tetap",
        21
      ],
      [
        "Hapus Data Ganda Kepala Keluarga + Pecah KK + Membuat KK Baru",
        7
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Akun",
        598
      ],
      [
        "Ajukan TTE + Upload File Kartu Keluarga",
        76
      ],
      [
        "Verifikasi Akun Non Permanen",
        58
      ],
      [
        "Ajukan TTE + Upload File KK TTE",
        21
      ]
    ]
  },
  {
    "name": "DONNY EKA SETIAWAN",
    "username": "donny",
    "totalRecords": 746,
    "byDate": {
      "2026-08-01": 31,
      "2026-08-03": 51,
      "2026-08-04": 53,
      "2026-08-05": 38,
      "2026-08-06": 46,
      "2026-08-07": 30,
      "2026-08-10": 37,
      "2026-08-11": 43,
      "2026-08-12": 32,
      "2026-08-13": 37,
      "2026-08-14": 34,
      "2026-08-15": 21,
      "2026-08-18": 28,
      "2026-08-19": 37,
      "2026-08-20": 32,
      "2026-08-21": 34,
      "2026-08-24": 35,
      "2026-08-26": 39,
      "2026-08-27": 43,
      "2026-08-28": 26,
      "2026-08-29": 14,
      "2026-08-31": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        653
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        51
      ],
      [
        "Perubahan Alamat",
        25
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        11
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin Tercatat",
        4
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        746
      ]
    ]
  },
  {
    "name": "dimas febriansyah",
    "username": "dimasfeb",
    "totalRecords": 729,
    "byDate": {
      "2026-08-03": 50,
      "2026-08-04": 50,
      "2026-08-06": 50,
      "2026-08-07": 31,
      "2026-08-08": 23,
      "2026-08-10": 35,
      "2026-08-11": 42,
      "2026-08-12": 49,
      "2026-08-13": 38,
      "2026-08-14": 37,
      "2026-08-18": 28,
      "2026-08-19": 35,
      "2026-08-20": 35,
      "2026-08-21": 35,
      "2026-08-22": 25,
      "2026-08-24": 38,
      "2026-08-26": 40,
      "2026-08-27": 42,
      "2026-08-28": 29,
      "2026-08-31": 17
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        626
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        45
      ],
      [
        "Perubahan Alamat",
        32
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        12
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin Tercatat",
        7
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        726
      ],
      [
        "Verifikasi + Entry Perubahan Biodata + Ajukan TTE Kartu Keluarga",
        3
      ]
    ]
  },
  {
    "name": "ZAENAL ARIFIN",
    "username": "zaenal_oss",
    "totalRecords": 712,
    "byDate": {
      "2026-08-03": 36,
      "2026-08-04": 50,
      "2026-08-05": 47,
      "2026-08-06": 46,
      "2026-08-07": 35,
      "2026-08-08": 20,
      "2026-08-10": 30,
      "2026-08-11": 43,
      "2026-08-12": 40,
      "2026-08-13": 34,
      "2026-08-14": 37,
      "2026-08-18": 32,
      "2026-08-19": 35,
      "2026-08-20": 33,
      "2026-08-21": 31,
      "2026-08-22": 22,
      "2026-08-24": 36,
      "2026-08-26": 42,
      "2026-08-27": 36,
      "2026-08-28": 24,
      "2026-08-31": 3
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        609
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        51
      ],
      [
        "Perubahan Alamat",
        36
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        7
      ],
      [
        "Perubahan Status Perkawinan Menjadi Kawin Tercatat Kalimasada",
        4
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        709
      ],
      [
        "Verifikasi + Entry Perubahan Biodata + Ajukan TTE Kartu Keluarga",
        3
      ]
    ]
  },
  {
    "name": "M. RYAN IZZAR GHIFFARI",
    "username": "m_izzar",
    "totalRecords": 709,
    "byDate": {
      "2026-08-03": 45,
      "2026-08-04": 10,
      "2026-08-05": 36,
      "2026-08-06": 26,
      "2026-08-07": 27,
      "2026-08-08": 25,
      "2026-08-10": 3,
      "2026-08-11": 43,
      "2026-08-12": 36,
      "2026-08-13": 25,
      "2026-08-14": 27,
      "2026-08-18": 40,
      "2026-08-19": 70,
      "2026-08-20": 33,
      "2026-08-21": 27,
      "2026-08-22": 21,
      "2026-08-24": 27,
      "2026-08-26": 66,
      "2026-08-27": 59,
      "2026-08-28": 63
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pengajuan KTP Baru usia 17 tahun",
        683
      ],
      [
        "Cetak Ulang KTP",
        18
      ],
      [
        "Cetak Ulang KTP Pending",
        7
      ],
      [
        "Cetak Ulang KTP Chip Rusak",
        1
      ]
    ],
    "topProcesses": [
      [
        "Update Tracking",
        691
      ],
      [
        "Verifikasi",
        18
      ]
    ]
  },
  {
    "name": "RISKA ANJANI",
    "username": "r_anjani",
    "totalRecords": 686,
    "byDate": {
      "2026-08-01": 31,
      "2026-08-03": 19,
      "2026-08-04": 6,
      "2026-08-05": 27,
      "2026-08-06": 27,
      "2026-08-10": 52,
      "2026-08-11": 41,
      "2026-08-12": 31,
      "2026-08-13": 40,
      "2026-08-18": 50,
      "2026-08-19": 70,
      "2026-08-20": 34,
      "2026-08-26": 136,
      "2026-08-27": 59,
      "2026-08-28": 63
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pengajuan KTP Baru usia 17 tahun",
        676
      ],
      [
        "Cetak Ulang KTP Pending",
        7
      ],
      [
        "Cetak Ulang KTP",
        2
      ],
      [
        "Cetak Ulang KTP Chip Rusak",
        1
      ]
    ],
    "topProcesses": [
      [
        "Update Tracking",
        684
      ],
      [
        "Verifikasi",
        2
      ]
    ]
  },
  {
    "name": "rickyhidayat",
    "username": "rickyhidayat",
    "totalRecords": 678,
    "byDate": {
      "2026-08-03": 45,
      "2026-08-04": 47,
      "2026-08-05": 48,
      "2026-08-06": 38,
      "2026-08-07": 29,
      "2026-08-08": 17,
      "2026-08-10": 36,
      "2026-08-11": 41,
      "2026-08-13": 39,
      "2026-08-14": 37,
      "2026-08-18": 25,
      "2026-08-19": 34,
      "2026-08-20": 33,
      "2026-08-21": 36,
      "2026-08-22": 16,
      "2026-08-24": 37,
      "2026-08-26": 42,
      "2026-08-27": 37,
      "2026-08-28": 32,
      "2026-08-31": 9
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pemutakhiran Biodata",
        600
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        50
      ],
      [
        "Perubahan Alamat",
        21
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        3
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin Tercatat",
        3
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        676
      ],
      [
        "Verifikasi + Entry Perubahan Data",
        2
      ]
    ]
  },
  {
    "name": "RIZAL DIAN PERMANA",
    "username": "rizal_dian",
    "totalRecords": 650,
    "byDate": {
      "2026-08-03": 46,
      "2026-08-04": 18,
      "2026-08-05": 27,
      "2026-08-06": 26,
      "2026-08-07": 27,
      "2026-08-08": 1,
      "2026-08-10": 29,
      "2026-08-11": 42,
      "2026-08-12": 33,
      "2026-08-13": 21,
      "2026-08-14": 51,
      "2026-08-19": 36,
      "2026-08-20": 34,
      "2026-08-21": 27,
      "2026-08-24": 49,
      "2026-08-26": 59,
      "2026-08-27": 62,
      "2026-08-28": 62
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Pengajuan KTP Baru usia 17 tahun",
        640
      ],
      [
        "Cetak Ulang KTP Pending",
        7
      ],
      [
        "Cetak Ulang KTP",
        2
      ],
      [
        "Cetak Ulang KTP Chip Rusak",
        1
      ]
    ],
    "topProcesses": [
      [
        "Update Tracking",
        648
      ],
      [
        "Verifikasi",
        2
      ]
    ]
  },
  {
    "name": "ADYA WYASA PRISTANTO ISAN SOETRISNO",
    "username": "adyawyasa",
    "totalRecords": 595,
    "byDate": {
      "2026-08-01": 7,
      "2026-08-03": 23,
      "2026-08-04": 42,
      "2026-08-05": 43,
      "2026-08-06": 23,
      "2026-08-07": 41,
      "2026-08-10": 37,
      "2026-08-11": 33,
      "2026-08-12": 24,
      "2026-08-13": 43,
      "2026-08-14": 14,
      "2026-08-15": 4,
      "2026-08-18": 26,
      "2026-08-19": 39,
      "2026-08-20": 25,
      "2026-08-21": 21,
      "2026-08-22": 9,
      "2026-08-24": 29,
      "2026-08-26": 23,
      "2026-08-27": 51,
      "2026-08-28": 25,
      "2026-08-29": 13
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA TANPA NIK DISERTAI PENGECEKAN DATA",
        397
      ],
      [
        "AKTA KEMATIAN WARGA TANPA NIK",
        112
      ],
      [
        "Akta Kematian + Pecah KK + Perubahan Status Perkawinan (Faskes)",
        39
      ],
      [
        "Akta Kematian + Perubahan Status Perkawinan (Faskes)",
        18
      ],
      [
        "Akta Kematian + Cetak KK (Faskes)",
        12
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        269
      ],
      [
        "Upload Akta Kematian",
        255
      ],
      [
        "Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        22
      ],
      [
        "Entry Akta Kematian + Ajukan TTE Akta Kematian",
        14
      ],
      [
        "Verifikasi + Pecah KK",
        13
      ]
    ]
  },
  {
    "name": "ONY NOVA RUKMANA SARI, S.PD",
    "username": "nova",
    "totalRecords": 571,
    "byDate": {
      "2026-08-03": 51,
      "2026-08-04": 40,
      "2026-08-05": 42,
      "2026-08-06": 33,
      "2026-08-07": 26,
      "2026-08-08": 5,
      "2026-08-10": 30,
      "2026-08-11": 39,
      "2026-08-12": 32,
      "2026-08-13": 30,
      "2026-08-14": 23,
      "2026-08-18": 38,
      "2026-08-19": 22,
      "2026-08-20": 27,
      "2026-08-21": 31,
      "2026-08-24": 31,
      "2026-08-26": 22,
      "2026-08-27": 20,
      "2026-08-28": 19,
      "2026-08-29": 3,
      "2026-08-31": 7
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Kutipan Kedua Kelahiran Karena Hilang Domisili Surabaya",
        291
      ],
      [
        "Kutipan Kedua Kelahiran Karena Rusak Domisili Surabaya",
        114
      ],
      [
        "Kutipan Kedua Kematian Karena Hilang Domisili Surabaya",
        68
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Rusak Bukan Terbitan Surabaya",
        39
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Hilang Bukan Terbitan Surabaya",
        31
      ]
    ],
    "topProcesses": [
      [
        "Ajukan Cetak Akta",
        280
      ],
      [
        "Upload Akta",
        236
      ],
      [
        "Unggah Akta",
        47
      ],
      [
        "Upload Salinan Akta Kelahiran",
        4
      ],
      [
        "Validasi",
        4
      ]
    ]
  },
  {
    "name": "PRANG ADITYA ARIADJI",
    "username": "3578140510810002",
    "totalRecords": 546,
    "byDate": {
      "2026-08-03": 37,
      "2026-08-04": 67,
      "2026-08-05": 52,
      "2026-08-06": 28,
      "2026-08-10": 50,
      "2026-08-11": 16,
      "2026-08-13": 27,
      "2026-08-14": 17,
      "2026-08-18": 39,
      "2026-08-19": 31,
      "2026-08-20": 37,
      "2026-08-24": 43,
      "2026-08-26": 57,
      "2026-08-27": 36,
      "2026-08-28": 8,
      "2026-08-31": 1
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Konsolidasi NIK dan KK",
        265
      ],
      [
        "Hapus Data Ganda + Cetak Kartu Keluarga",
        195
      ],
      [
        "Pengajuan Perubahan Biodata Pendidikan Melalui IKD",
        59
      ],
      [
        "ESULAY PENONAKTIFAN DATA KALIMASADA",
        15
      ],
      [
        "Hapus Data Ganda Kepala Keluarga + Pecah KK + Membuat KK Baru",
        12
      ]
    ],
    "topProcesses": [
      [
        "Unggah Kartu Keluarga",
        324
      ],
      [
        "Upload Surat Keterangan Penghapusan Data Ganda",
        102
      ],
      [
        "Ajukan TTE + Upload File Kartu Keluarga",
        61
      ],
      [
        "Verifikasi + Validasi + Hapus Data",
        41
      ],
      [
        "Verifikasi Surat Masuk dan Pemrosesan Surat Masuk + Upload Hasil Output Surat",
        15
      ]
    ]
  },
  {
    "name": "ADAM M. HAKIM",
    "username": "adammh",
    "totalRecords": 521,
    "byDate": {
      "2026-08-03": 30,
      "2026-08-04": 29,
      "2026-08-05": 34,
      "2026-08-06": 35,
      "2026-08-07": 34,
      "2026-08-08": 17,
      "2026-08-10": 25,
      "2026-08-11": 31,
      "2026-08-12": 25,
      "2026-08-13": 19,
      "2026-08-14": 49,
      "2026-08-15": 1,
      "2026-08-18": 23,
      "2026-08-19": 23,
      "2026-08-20": 15,
      "2026-08-21": 19,
      "2026-08-22": 14,
      "2026-08-24": 29,
      "2026-08-26": 11,
      "2026-08-27": 34,
      "2026-08-28": 18,
      "2026-08-31": 6
    },
    "division": "kependudukan",
    "topServices": [
      [
        "ESULAY DAFDUK",
        401
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        58
      ],
      [
        "Pelayanan Jemput Bola Perekaman KTP",
        30
      ],
      [
        "Buka Blokir Disertai Jemput Bola Perekaman KTP Elektronik",
        24
      ],
      [
        "ESULAY DAFDUK PENGECEKAN BIOMETRIK",
        8
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk  + Upload Hasil Output Surat",
        401
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        58
      ],
      [
        "Verifikasi + Penjadwalan Jebol Anduk",
        30
      ],
      [
        "Penjadwalan Jebol Anduk",
        13
      ],
      [
        "Hasil Cek Biometrik + Perekaman Jemput Bola",
        11
      ]
    ]
  },
  {
    "name": "FEBILLAH HANNA ARVIANI",
    "username": "febillah",
    "totalRecords": 505,
    "byDate": {
      "2026-08-03": 23,
      "2026-08-04": 40,
      "2026-08-06": 39,
      "2026-08-07": 27,
      "2026-08-08": 15,
      "2026-08-10": 23,
      "2026-08-11": 24,
      "2026-08-12": 19,
      "2026-08-13": 34,
      "2026-08-14": 24,
      "2026-08-18": 23,
      "2026-08-19": 22,
      "2026-08-20": 18,
      "2026-08-21": 30,
      "2026-08-22": 12,
      "2026-08-24": 17,
      "2026-08-26": 48,
      "2026-08-27": 34,
      "2026-08-28": 27,
      "2026-08-31": 6
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Buka Blokir Nomor KK Tetap",
        227
      ],
      [
        "Hapus Data Ganda + Cetak Kartu Keluarga",
        92
      ],
      [
        "ESULAY PIAK",
        60
      ],
      [
        "ESULAY PEMBEKUAN DATA",
        41
      ],
      [
        "Pindah Dalam Kota disertai Buka Blokir",
        40
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Validasi SIAK",
        120
      ],
      [
        "Verifikasi + Validasi + Hapus Data",
        91
      ],
      [
        "Pengaktifan Data",
        78
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk  + Upload Hasil Output Surat",
        60
      ],
      [
        "Ajukan TTE + Upload File KK TTE",
        50
      ]
    ]
  },
  {
    "name": "TIWI",
    "username": "rizkydwi",
    "totalRecords": 485,
    "byDate": {
      "2026-08-03": 30,
      "2026-08-04": 20,
      "2026-08-05": 32,
      "2026-08-06": 72,
      "2026-08-10": 51,
      "2026-08-11": 29,
      "2026-08-12": 3,
      "2026-08-13": 1,
      "2026-08-14": 46,
      "2026-08-18": 36,
      "2026-08-19": 2,
      "2026-08-20": 51,
      "2026-08-21": 35,
      "2026-08-22": 18,
      "2026-08-24": 20,
      "2026-08-26": 13,
      "2026-08-27": 26
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Keabsahan Akta Kelahiran (Pemilik dokumen SURABAYA dan Akta Kelahiran LUAR SURABAYA)",
        449
      ],
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan LUAR SURABAYA)",
        32
      ],
      [
        "Keabsahan Akta Kematian (Pemilik dokumen SURABAYA dan Akta Kematian LUAR SURABAYA)",
        4
      ]
    ],
    "topProcesses": [
      [
        "Pengiriman Dokumen",
        485
      ]
    ]
  },
  {
    "name": "ANDRIS CANDRA THYSSEN",
    "username": "andris",
    "totalRecords": 448,
    "byDate": {
      "2026-08-03": 52,
      "2026-08-04": 43,
      "2026-08-05": 40,
      "2026-08-06": 36,
      "2026-08-07": 20,
      "2026-08-10": 25,
      "2026-08-12": 23,
      "2026-08-13": 19,
      "2026-08-14": 29,
      "2026-08-15": 8,
      "2026-08-18": 28,
      "2026-08-19": 8,
      "2026-08-20": 15,
      "2026-08-21": 23,
      "2026-08-22": 11,
      "2026-08-24": 35,
      "2026-08-26": 8,
      "2026-08-27": 9,
      "2026-08-28": 13,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Kutipan Kedua Kelahiran Karena Hilang Domisili Surabaya",
        236
      ],
      [
        "Kutipan Kedua Kelahiran Karena Rusak Domisili Surabaya",
        100
      ],
      [
        "Kutipan Kedua Kematian Karena Hilang Domisili Surabaya",
        56
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Hilang Bukan Terbitan Surabaya",
        25
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Rusak Bukan Terbitan Surabaya",
        21
      ]
    ],
    "topProcesses": [
      [
        "Ajukan Cetak Akta",
        232
      ],
      [
        "Upload Akta",
        186
      ],
      [
        "Unggah Akta",
        30
      ]
    ]
  },
  {
    "name": "M.NU'MAN ARIF",
    "username": "arifnuman",
    "totalRecords": 419,
    "byDate": {
      "2026-08-03": 31,
      "2026-08-04": 42,
      "2026-08-05": 17,
      "2026-08-06": 28,
      "2026-08-07": 30,
      "2026-08-08": 4,
      "2026-08-10": 23,
      "2026-08-11": 18,
      "2026-08-12": 11,
      "2026-08-13": 26,
      "2026-08-14": 7,
      "2026-08-18": 24,
      "2026-08-20": 32,
      "2026-08-21": 11,
      "2026-08-22": 11,
      "2026-08-24": 11,
      "2026-08-26": 11,
      "2026-08-27": 14,
      "2026-08-28": 26,
      "2026-08-31": 42
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Pembetulan Akta Kelahiran Yang Terbit Dalam Waktu Kurang dari 2 Tahun",
        272
      ],
      [
        "Pembetulan Akta Kelahiran Yang Terbit Dalam Waktu Kurang dari 2 Tahun untuk Perubahan Urutan Anak",
        69
      ],
      [
        "Pembetulan Biodata KK dari Pahe Akta Kelahiran Yang Terbit Dalam Waktu Kurang dari 2 Tahun",
        48
      ],
      [
        "Pembetulan Akta Kematian Yang Terbit Dalam Waktu Kurang dari 2 Tahun",
        12
      ],
      [
        "Pembatalan Akta Kelahiran (Contrarius Actus)",
        10
      ]
    ],
    "topProcesses": [
      [
        "Ajukan TTE Akta Kelahiran",
        91
      ],
      [
        "Entry Pembetulan Akta Kelahiran",
        91
      ],
      [
        "Upload Akta Kelahiran",
        91
      ],
      [
        "Verifikasi + Entry Perubahan Biodata",
        68
      ],
      [
        "Upload Kartu Keluarga",
        24
      ]
    ]
  },
  {
    "name": "M. MISBACHUL YUSUF EFFENDY",
    "username": "misbach",
    "totalRecords": 394,
    "byDate": {
      "2026-08-01": 7,
      "2026-08-03": 17,
      "2026-08-04": 38,
      "2026-08-05": 18,
      "2026-08-06": 28,
      "2026-08-07": 19,
      "2026-08-10": 21,
      "2026-08-11": 30,
      "2026-08-12": 20,
      "2026-08-13": 20,
      "2026-08-14": 22,
      "2026-08-15": 3,
      "2026-08-18": 15,
      "2026-08-19": 21,
      "2026-08-20": 20,
      "2026-08-21": 15,
      "2026-08-24": 16,
      "2026-08-26": 24,
      "2026-08-27": 25,
      "2026-08-28": 12,
      "2026-08-29": 2,
      "2026-08-31": 1
    },
    "division": "kependudukan",
    "topServices": [
      [
        "PINDAH DATANG",
        351
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        43
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Pindah Datang + Ajukan TTE Kartu Keluarga",
        351
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        43
      ]
    ]
  },
  {
    "name": "ITA PUSPITA SARI",
    "username": "ita",
    "totalRecords": 390,
    "byDate": {
      "2026-08-03": 22,
      "2026-08-04": 14,
      "2026-08-05": 26,
      "2026-08-06": 20,
      "2026-08-07": 21,
      "2026-08-08": 12,
      "2026-08-10": 20,
      "2026-08-11": 17,
      "2026-08-12": 23,
      "2026-08-13": 13,
      "2026-08-14": 15,
      "2026-08-18": 21,
      "2026-08-19": 24,
      "2026-08-21": 26,
      "2026-08-22": 7,
      "2026-08-24": 29,
      "2026-08-26": 25,
      "2026-08-27": 17,
      "2026-08-28": 19,
      "2026-08-29": 12,
      "2026-08-31": 7
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        388
      ],
      [
        "AKTA KEMATIAN ANGGOTA SISA MENUMPANG KK",
        2
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Proses Pecah KK + Entry Akta Kematian + Entry Perubahan Data + Ajukan TTE Akta Kematian + Ajukan TTE Kartu Keluarga",
        388
      ],
      [
        "Verifikasi + Proses Pindah Sisa Anggota KK + Ajukan TTE Kartu Keluarga + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        2
      ]
    ]
  },
  {
    "name": "MUHAMMAD SARFUL FARID",
    "username": "sarfulfarid",
    "totalRecords": 387,
    "byDate": {
      "2026-08-01": 10,
      "2026-08-03": 34,
      "2026-08-04": 33,
      "2026-08-05": 19,
      "2026-08-06": 27,
      "2026-08-07": 18,
      "2026-08-10": 16,
      "2026-08-11": 25,
      "2026-08-12": 24,
      "2026-08-13": 13,
      "2026-08-14": 24,
      "2026-08-15": 2,
      "2026-08-18": 21,
      "2026-08-19": 20,
      "2026-08-20": 19,
      "2026-08-21": 15,
      "2026-08-24": 12,
      "2026-08-26": 19,
      "2026-08-27": 16,
      "2026-08-28": 12,
      "2026-08-29": 8
    },
    "division": "kependudukan",
    "topServices": [
      [
        "PINDAH DATANG",
        346
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        41
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Pindah Datang + Ajukan TTE Kartu Keluarga",
        346
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        41
      ]
    ]
  },
  {
    "name": "sumartok",
    "username": "sumartok",
    "totalRecords": 387,
    "byDate": {
      "2026-08-01": 8,
      "2026-08-03": 36,
      "2026-08-04": 31,
      "2026-08-05": 17,
      "2026-08-06": 10,
      "2026-08-07": 10,
      "2026-08-10": 22,
      "2026-08-11": 25,
      "2026-08-12": 18,
      "2026-08-13": 27,
      "2026-08-14": 32,
      "2026-08-19": 24,
      "2026-08-20": 14,
      "2026-08-21": 25,
      "2026-08-24": 24,
      "2026-08-26": 14,
      "2026-08-27": 24,
      "2026-08-28": 18,
      "2026-08-29": 2,
      "2026-08-31": 6
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Perceraian",
        286
      ],
      [
        "Perubahan Nama Akta Perkawinan Dalam Kota",
        40
      ],
      [
        "Surat Perjanjian Kawin Akta Perkawinan Dalam Negeri",
        22
      ],
      [
        "Pelaporan Perkawinan Luar Negeri",
        16
      ],
      [
        "Perubahan Nama Akta Perkawinan Luar Kota",
        10
      ]
    ],
    "topProcesses": [
      [
        "Unggah Akta Perceraian",
        55
      ],
      [
        "Unggah Kartu Keluarga",
        55
      ],
      [
        "Ajukan TTE Akta Perceraian",
        44
      ],
      [
        "Ajukan TTE Kartu Keluarga",
        44
      ],
      [
        "Entry Perubahan Biodata",
        44
      ]
    ]
  },
  {
    "name": "mohan",
    "username": "mohan",
    "totalRecords": 386,
    "byDate": {
      "2026-08-01": 11,
      "2026-08-03": 23,
      "2026-08-04": 24,
      "2026-08-05": 22,
      "2026-08-06": 16,
      "2026-08-07": 15,
      "2026-08-10": 21,
      "2026-08-11": 18,
      "2026-08-12": 23,
      "2026-08-13": 10,
      "2026-08-14": 18,
      "2026-08-15": 8,
      "2026-08-18": 23,
      "2026-08-19": 25,
      "2026-08-20": 21,
      "2026-08-21": 23,
      "2026-08-24": 25,
      "2026-08-26": 22,
      "2026-08-27": 21,
      "2026-08-28": 17
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        377
      ],
      [
        "AKTA KEMATIAN ANGGOTA SISA MENUMPANG KK",
        9
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Proses Pecah KK + Entry Akta Kematian + Entry Perubahan Data + Ajukan TTE Akta Kematian + Ajukan TTE Kartu Keluarga",
        377
      ],
      [
        "Verifikasi + Proses Pindah Sisa Anggota KK + Ajukan TTE Kartu Keluarga + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        9
      ]
    ]
  },
  {
    "name": "HARNI YANTI",
    "username": "harniyanti",
    "totalRecords": 375,
    "byDate": {
      "2026-08-03": 40,
      "2026-08-04": 22,
      "2026-08-05": 19,
      "2026-08-06": 18,
      "2026-08-07": 13,
      "2026-08-08": 8,
      "2026-08-10": 20,
      "2026-08-11": 22,
      "2026-08-12": 19,
      "2026-08-13": 9,
      "2026-08-14": 20,
      "2026-08-18": 19,
      "2026-08-19": 24,
      "2026-08-20": 33,
      "2026-08-21": 24,
      "2026-08-22": 7,
      "2026-08-26": 24,
      "2026-08-27": 11,
      "2026-08-28": 20,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        373
      ],
      [
        "AKTA KEMATIAN ANGGOTA SISA MENUMPANG KK",
        2
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Proses Pecah KK + Entry Akta Kematian + Entry Perubahan Data + Ajukan TTE Akta Kematian + Ajukan TTE Kartu Keluarga",
        373
      ],
      [
        "Verifikasi + Proses Pindah Sisa Anggota KK + Ajukan TTE Kartu Keluarga + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        2
      ]
    ]
  },
  {
    "name": "SONNY EKA PRANATA",
    "username": "sonny",
    "totalRecords": 373,
    "byDate": {
      "2026-08-04": 25,
      "2026-08-05": 18,
      "2026-08-06": 21,
      "2026-08-08": 11,
      "2026-08-10": 27,
      "2026-08-11": 24,
      "2026-08-12": 19,
      "2026-08-13": 18,
      "2026-08-14": 13,
      "2026-08-18": 27,
      "2026-08-19": 23,
      "2026-08-20": 20,
      "2026-08-21": 22,
      "2026-08-22": 11,
      "2026-08-24": 22,
      "2026-08-26": 20,
      "2026-08-27": 26,
      "2026-08-28": 20,
      "2026-08-31": 6
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        123
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        106
      ],
      [
        "Akta Kelahiran Anak Lebih Dari 5 Tahun Anak Seorang Ibu",
        36
      ],
      [
        "Akta Kelahiran Anak Lebih Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        27
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        20
      ]
    ],
    "topProcesses": [
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        189
      ],
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        137
      ],
      [
        "Upload Akta Kematian",
        29
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        18
      ]
    ]
  },
  {
    "name": "Siti Nuryanti",
    "username": "3578104909860003",
    "totalRecords": 371,
    "byDate": {
      "2026-08-01": 1,
      "2026-08-03": 34,
      "2026-08-04": 7,
      "2026-08-05": 6,
      "2026-08-06": 23,
      "2026-08-07": 18,
      "2026-08-10": 22,
      "2026-08-11": 28,
      "2026-08-12": 18,
      "2026-08-13": 22,
      "2026-08-14": 28,
      "2026-08-18": 26,
      "2026-08-19": 23,
      "2026-08-20": 14,
      "2026-08-21": 26,
      "2026-08-24": 22,
      "2026-08-26": 21,
      "2026-08-27": 13,
      "2026-08-28": 14,
      "2026-08-29": 2,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Kutipan Kedua Kelahiran Karena Hilang Domisili Surabaya",
        259
      ],
      [
        "Kutipan Kedua Kelahiran Karena Rusak Domisili Surabaya",
        81
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Hilang Bukan Terbitan Surabaya",
        16
      ],
      [
        "Kutipan Kedua Kelahiran Warga Surabaya Karena Rusak Bukan Terbitan Surabaya",
        12
      ],
      [
        "Pelaporan Kematian Luar Negeri",
        2
      ]
    ],
    "topProcesses": [
      [
        "Ajukan Cetak Akta",
        185
      ],
      [
        "Upload Akta",
        184
      ],
      [
        "Entry BPKAM di SIAK + Proses TTE Kartu Keluarga",
        2
      ]
    ]
  },
  {
    "name": "GRACE SAMANTHA SIETENG",
    "username": "GraceSamantha",
    "totalRecords": 363,
    "byDate": {
      "2026-08-03": 30,
      "2026-08-04": 31,
      "2026-08-05": 22,
      "2026-08-06": 26,
      "2026-08-07": 19,
      "2026-08-08": 10,
      "2026-08-10": 9,
      "2026-08-11": 23,
      "2026-08-12": 11,
      "2026-08-13": 17,
      "2026-08-14": 20,
      "2026-08-18": 21,
      "2026-08-19": 14,
      "2026-08-20": 18,
      "2026-08-21": 20,
      "2026-08-22": 3,
      "2026-08-24": 16,
      "2026-08-26": 20,
      "2026-08-27": 16,
      "2026-08-28": 13,
      "2026-08-31": 4
    },
    "division": "kependudukan",
    "topServices": [
      [
        "PINDAH DATANG",
        319
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        44
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Pindah Datang + Ajukan TTE Kartu Keluarga",
        319
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        44
      ]
    ]
  },
  {
    "name": "RIDHO WIDYATMOKO",
    "username": "ridho",
    "totalRecords": 362,
    "byDate": {
      "2026-08-01": 14,
      "2026-08-03": 26,
      "2026-08-04": 32,
      "2026-08-05": 26,
      "2026-08-06": 28,
      "2026-08-07": 10,
      "2026-08-10": 16,
      "2026-08-11": 24,
      "2026-08-12": 24,
      "2026-08-13": 14,
      "2026-08-14": 22,
      "2026-08-15": 2,
      "2026-08-18": 16,
      "2026-08-19": 12,
      "2026-08-20": 20,
      "2026-08-21": 16,
      "2026-08-22": 4,
      "2026-08-24": 20,
      "2026-08-26": 18,
      "2026-08-27": 8,
      "2026-08-28": 10
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Kota Surabaya)",
        207
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Kota Surabaya)",
        81
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Luar Kota Surabaya)",
        36
      ],
      [
        "Pelaporan Kelahiran Luar Negeri",
        22
      ],
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Luar Kota Surabaya)",
        16
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        168
      ],
      [
        "Upload Caping Perubahan Biodata Akta Kelahiran Kota Surabaya",
        112
      ],
      [
        "Upload Caping Perubahan Biodata Akta Kelahiran",
        60
      ],
      [
        "Unggah Kelahiran Luar Negeri",
        11
      ],
      [
        "Verifikasi",
        11
      ]
    ]
  },
  {
    "name": "denikurnia",
    "username": "denikurnia",
    "totalRecords": 352,
    "byDate": {
      "2026-08-01": 10,
      "2026-08-03": 14,
      "2026-08-04": 23,
      "2026-08-05": 20,
      "2026-08-06": 12,
      "2026-08-07": 13,
      "2026-08-10": 19,
      "2026-08-11": 21,
      "2026-08-12": 18,
      "2026-08-13": 13,
      "2026-08-14": 15,
      "2026-08-15": 12,
      "2026-08-18": 15,
      "2026-08-19": 23,
      "2026-08-20": 13,
      "2026-08-21": 25,
      "2026-08-24": 18,
      "2026-08-26": 25,
      "2026-08-27": 13,
      "2026-08-28": 16,
      "2026-08-29": 12,
      "2026-08-31": 2
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        351
      ],
      [
        "AKTA KEMATIAN ANGGOTA SISA MENUMPANG KK",
        1
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Proses Pecah KK + Entry Akta Kematian + Entry Perubahan Data + Ajukan TTE Akta Kematian + Ajukan TTE Kartu Keluarga",
        351
      ],
      [
        "Verifikasi + Proses Pindah Sisa Anggota KK + Ajukan TTE Kartu Keluarga + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        1
      ]
    ]
  },
  {
    "name": "Zeffri",
    "username": "zeffri",
    "totalRecords": 336,
    "byDate": {
      "2026-08-03": 32,
      "2026-08-04": 20,
      "2026-08-05": 16,
      "2026-08-06": 15,
      "2026-08-07": 13,
      "2026-08-08": 13,
      "2026-08-10": 19,
      "2026-08-11": 21,
      "2026-08-12": 13,
      "2026-08-13": 12,
      "2026-08-14": 13,
      "2026-08-18": 19,
      "2026-08-19": 22,
      "2026-08-20": 23,
      "2026-08-21": 6,
      "2026-08-22": 6,
      "2026-08-24": 26,
      "2026-08-26": 20,
      "2026-08-27": 13,
      "2026-08-28": 13,
      "2026-08-31": 1
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "AKTA KEMATIAN WARGA",
        334
      ],
      [
        "AKTA KEMATIAN ANGGOTA SISA MENUMPANG KK",
        2
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Proses Pecah KK + Entry Akta Kematian + Entry Perubahan Data + Ajukan TTE Akta Kematian + Ajukan TTE Kartu Keluarga",
        334
      ],
      [
        "Verifikasi + Proses Pindah Sisa Anggota KK + Ajukan TTE Kartu Keluarga + Entry Akta Kematian + Ajukan TTE Akta Kematian",
        2
      ]
    ]
  },
  {
    "name": "LILIK FAUZIAH",
    "username": "lilik",
    "totalRecords": 332,
    "byDate": {
      "2026-08-01": 11,
      "2026-08-03": 33,
      "2026-08-04": 24,
      "2026-08-05": 14,
      "2026-08-06": 17,
      "2026-08-07": 17,
      "2026-08-10": 12,
      "2026-08-11": 17,
      "2026-08-12": 15,
      "2026-08-13": 14,
      "2026-08-14": 16,
      "2026-08-15": 2,
      "2026-08-18": 20,
      "2026-08-19": 16,
      "2026-08-20": 14,
      "2026-08-21": 14,
      "2026-08-24": 20,
      "2026-08-26": 15,
      "2026-08-27": 13,
      "2026-08-28": 20,
      "2026-08-29": 8
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        150
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        88
      ],
      [
        "Akta Kelahiran Anak Lebih Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        28
      ],
      [
        "Akta Kelahiran Anak Lebih Dari 5 Tahun Anak Seorang Ibu",
        26
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        19
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        167
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        161
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        4
      ]
    ]
  },
  {
    "name": "ROY ARISTIANDO PISESSA",
    "username": "roy",
    "totalRecords": 328,
    "byDate": {
      "2026-08-03": 22,
      "2026-08-04": 22,
      "2026-08-05": 10,
      "2026-08-06": 20,
      "2026-08-07": 18,
      "2026-08-10": 12,
      "2026-08-11": 28,
      "2026-08-12": 10,
      "2026-08-13": 13,
      "2026-08-14": 33,
      "2026-08-18": 14,
      "2026-08-19": 14,
      "2026-08-20": 18,
      "2026-08-21": 32,
      "2026-08-24": 18,
      "2026-08-26": 28,
      "2026-08-27": 6,
      "2026-08-28": 10
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Kota Surabaya)",
        158
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Kota Surabaya)",
        89
      ],
      [
        "Pelaporan Kelahiran Luar Negeri",
        28
      ],
      [
        "Perubahan Peristiwa Penting (Akta Kelahiran Luar Kota Surabaya)",
        25
      ],
      [
        "Perubahan Biodata Tanpa PN (Akta Kelahiran Luar Kota Surabaya)",
        24
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        147
      ],
      [
        "Upload Caping Perubahan Biodata Akta Kelahiran Kota Surabaya",
        91
      ],
      [
        "Upload Caping Perubahan Biodata Akta Kelahiran",
        58
      ],
      [
        "Verifikasi",
        16
      ],
      [
        "Unggah Kelahiran Luar Negeri",
        14
      ]
    ]
  },
  {
    "name": "septrianadi",
    "username": "septrianadi",
    "totalRecords": 296,
    "byDate": {
      "2026-08-03": 23,
      "2026-08-04": 16,
      "2026-08-05": 14,
      "2026-08-06": 18,
      "2026-08-07": 14,
      "2026-08-08": 7,
      "2026-08-10": 15,
      "2026-08-11": 11,
      "2026-08-12": 13,
      "2026-08-13": 18,
      "2026-08-14": 11,
      "2026-08-18": 17,
      "2026-08-19": 13,
      "2026-08-20": 11,
      "2026-08-21": 13,
      "2026-08-22": 9,
      "2026-08-24": 19,
      "2026-08-26": 16,
      "2026-08-27": 21,
      "2026-08-28": 17
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        144
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        102
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        19
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        17
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        9
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        161
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        121
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        14
      ]
    ]
  },
  {
    "name": "ryudha",
    "username": "ryudha",
    "totalRecords": 294,
    "byDate": {
      "2026-08-01": 4,
      "2026-08-03": 20,
      "2026-08-04": 19,
      "2026-08-05": 17,
      "2026-08-06": 16,
      "2026-08-07": 8,
      "2026-08-10": 19,
      "2026-08-11": 11,
      "2026-08-12": 15,
      "2026-08-13": 14,
      "2026-08-14": 10,
      "2026-08-15": 8,
      "2026-08-18": 11,
      "2026-08-19": 14,
      "2026-08-20": 12,
      "2026-08-21": 13,
      "2026-08-24": 12,
      "2026-08-26": 21,
      "2026-08-27": 22,
      "2026-08-28": 12,
      "2026-08-29": 13,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        132
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        106
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        21
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        20
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        8
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        154
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        126
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        14
      ]
    ]
  },
  {
    "name": "NUR AISAH ZAHRA",
    "username": "zahra_oss",
    "totalRecords": 277,
    "byDate": {
      "2026-08-03": 21,
      "2026-08-04": 22,
      "2026-08-05": 17,
      "2026-08-06": 17,
      "2026-08-07": 12,
      "2026-08-08": 8,
      "2026-08-10": 5,
      "2026-08-11": 20,
      "2026-08-12": 16,
      "2026-08-13": 6,
      "2026-08-14": 11,
      "2026-08-18": 17,
      "2026-08-19": 13,
      "2026-08-20": 14,
      "2026-08-21": 15,
      "2026-08-22": 11,
      "2026-08-24": 20,
      "2026-08-26": 12,
      "2026-08-29": 20
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        131
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        101
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        21
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        16
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        6
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        147
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        122
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        8
      ]
    ]
  },
  {
    "name": "DZIKKY PUTRA PRADANA",
    "username": "dzikky",
    "totalRecords": 268,
    "byDate": {
      "2026-08-01": 6,
      "2026-08-03": 25,
      "2026-08-04": 8,
      "2026-08-05": 11,
      "2026-08-07": 20,
      "2026-08-10": 18,
      "2026-08-11": 14,
      "2026-08-12": 17,
      "2026-08-13": 7,
      "2026-08-14": 10,
      "2026-08-15": 8,
      "2026-08-18": 18,
      "2026-08-19": 11,
      "2026-08-20": 13,
      "2026-08-21": 17,
      "2026-08-24": 18,
      "2026-08-26": 13,
      "2026-08-27": 17,
      "2026-08-28": 14,
      "2026-08-31": 3
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        141
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        92
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        14
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        12
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin Tercatat",
        5
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        153
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        106
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        9
      ]
    ]
  },
  {
    "name": "achmadmiftach1",
    "username": "achmadmiftach1",
    "totalRecords": 249,
    "byDate": {
      "2026-08-01": 10,
      "2026-08-03": 28,
      "2026-08-04": 16,
      "2026-08-05": 14,
      "2026-08-06": 10,
      "2026-08-07": 10,
      "2026-08-10": 20,
      "2026-08-11": 9,
      "2026-08-12": 15,
      "2026-08-13": 12,
      "2026-08-14": 6,
      "2026-08-15": 8,
      "2026-08-18": 13,
      "2026-08-19": 10,
      "2026-08-20": 8,
      "2026-08-21": 3,
      "2026-08-26": 20,
      "2026-08-27": 14,
      "2026-08-28": 13,
      "2026-08-29": 6,
      "2026-08-31": 4
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tidak Tercatat",
        120
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Ayah dan Ibu Kawin Tercatat",
        92
      ],
      [
        "Akta Kelahiran Anak Kurang Dari 5 Tahun Anak Seorang Ibu",
        17
      ],
      [
        "Akta Kelahiran Sudah Memiliki NIK Anak Ayah dan Ibu Kawin Tercatat",
        13
      ],
      [
        "Perubahan Biodata + Akta Kelahiran Sudah Memiliki NIK Anak Ayah Ibu Kawin  Tidak Tercatat",
        7
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Biodata (Jika AAda) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga (Jika Ada)",
        133
      ],
      [
        "Verififikasi + Create NIK + Entry Perubahan Biodata (Jika Ada) + Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran + Ajukan TTE Kartu Keluarga",
        109
      ],
      [
        "Entry Akta Kelahiran + Ajukan TTE Akta Kelahiran",
        7
      ]
    ]
  },
  {
    "name": "Jawwad",
    "username": "jawwad",
    "totalRecords": 232,
    "byDate": {
      "2026-08-01": 7,
      "2026-08-03": 13,
      "2026-08-04": 22,
      "2026-08-05": 7,
      "2026-08-06": 15,
      "2026-08-07": 21,
      "2026-08-11": 27,
      "2026-08-12": 12,
      "2026-08-13": 17,
      "2026-08-14": 13,
      "2026-08-15": 4,
      "2026-08-18": 6,
      "2026-08-19": 5,
      "2026-08-20": 14,
      "2026-08-21": 11,
      "2026-08-24": 10,
      "2026-08-26": 8,
      "2026-08-27": 9,
      "2026-08-28": 6,
      "2026-08-29": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Dispensasi Pindah",
        133
      ],
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        55
      ],
      [
        "Dispensasi Pindah (SKPWNI > 1 Tahun)",
        44
      ]
    ],
    "topProcesses": [
      [
        "Koordinasi dengan Dispendukcapil Kota Asal",
        83
      ],
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        55
      ],
      [
        "Unggah SKPWNI",
        47
      ],
      [
        "Memperoleh SKPWNI dari Dispendukcapil Kota Asal",
        45
      ],
      [
        "Verifikasi + Entry Surat",
        2
      ]
    ]
  },
  {
    "name": "EKAWATI KUSMAR DIANA",
    "username": "ekawati",
    "totalRecords": 204,
    "byDate": {
      "2026-08-03": 4,
      "2026-08-04": 6,
      "2026-08-05": 13,
      "2026-08-06": 7,
      "2026-08-07": 24,
      "2026-08-11": 18,
      "2026-08-12": 15,
      "2026-08-13": 11,
      "2026-08-14": 12,
      "2026-08-18": 16,
      "2026-08-19": 14,
      "2026-08-20": 10,
      "2026-08-21": 9,
      "2026-08-22": 1,
      "2026-08-24": 12,
      "2026-08-26": 8,
      "2026-08-27": 10,
      "2026-08-28": 10,
      "2026-08-31": 4
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Akta Perkawinan + Cetak KK",
        203
      ],
      [
        "Layanan Akta Perkawinan Terintegrasi",
        1
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Akta Perkawinan + Ajukan TTE Akta Perkawinan",
        203
      ],
      [
        "Verifikasi + Entry Akta Perkawinan",
        1
      ]
    ]
  },
  {
    "name": "BAGUS FACHKUR ROCHMAN",
    "username": "bagus_oss",
    "totalRecords": 139,
    "byDate": {
      "2026-08-01": 66,
      "2026-08-15": 33,
      "2026-08-29": 40
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Verifikasi Akun Klampid",
        139
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Akun",
        139
      ]
    ]
  },
  {
    "name": "ACHMAD DIDIK MULJADI",
    "username": "didik",
    "totalRecords": 114,
    "byDate": {
      "2026-08-03": 9,
      "2026-08-04": 2,
      "2026-08-05": 2,
      "2026-08-06": 5,
      "2026-08-07": 8,
      "2026-08-10": 1,
      "2026-08-11": 13,
      "2026-08-12": 6,
      "2026-08-13": 2,
      "2026-08-14": 3,
      "2026-08-18": 16,
      "2026-08-19": 7,
      "2026-08-20": 6,
      "2026-08-21": 2,
      "2026-08-22": 3,
      "2026-08-24": 13,
      "2026-08-26": 7,
      "2026-08-27": 5,
      "2026-08-28": 4
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Perubahan Nama Akta Perkawinan Dalam Kota",
        25
      ],
      [
        "Legalisir Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan terbitan SURABAYA tahun terbitan di atas 2003)",
        22
      ],
      [
        "Legalisir Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan terbitan SURABAYA)",
        20
      ],
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen LUAR SURABAYA dan Akta Perkawinan SURABAYA)",
        13
      ],
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan  SURABAYA)",
        11
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        39
      ],
      [
        "Pengecekan Data (Gudang)",
        38
      ],
      [
        "Verifikasi Gudang Arsip",
        25
      ],
      [
        "Verifikasi",
        11
      ],
      [
        "Verifikasi Gudang",
        1
      ]
    ]
  },
  {
    "name": "MUHAMMAD ABDULLAH",
    "username": "fuad",
    "totalRecords": 94,
    "byDate": {
      "2026-08-03": 3,
      "2026-08-04": 9,
      "2026-08-05": 2,
      "2026-08-06": 10,
      "2026-08-07": 6,
      "2026-08-10": 1,
      "2026-08-11": 6,
      "2026-08-14": 16,
      "2026-08-19": 1,
      "2026-08-20": 1,
      "2026-08-21": 1,
      "2026-08-26": 2,
      "2026-08-27": 22,
      "2026-08-28": 10,
      "2026-08-31": 4
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        64
      ],
      [
        "Perubahan Status Perkawinan",
        24
      ],
      [
        "Pemutakhiran Biodata",
        4
      ],
      [
        "Pelaporan Kematian Luar Negeri",
        2
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        64
      ],
      [
        "Ajukan TTE",
        8
      ],
      [
        "Upload",
        8
      ],
      [
        "Verifikasi + Entry",
        8
      ],
      [
        "Unggah Kartu Keluarga",
        2
      ]
    ]
  },
  {
    "name": "asyah",
    "username": "asyah",
    "totalRecords": 83,
    "byDate": {
      "2026-08-14": 75,
      "2026-08-20": 3,
      "2026-08-21": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "ESULAY DAFDUK PENGECEKAN BIOMETRIK",
        83
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk + Upload Hasil Output Surat",
        83
      ]
    ]
  },
  {
    "name": "AGUNG WAHYU PRIBADI",
    "username": "agungwahyu",
    "totalRecords": 70,
    "byDate": {
      "2026-08-03": 1,
      "2026-08-04": 8,
      "2026-08-05": 2,
      "2026-08-06": 11,
      "2026-08-07": 3,
      "2026-08-08": 2,
      "2026-08-10": 3,
      "2026-08-11": 7,
      "2026-08-12": 4,
      "2026-08-13": 4,
      "2026-08-14": 10,
      "2026-08-18": 1,
      "2026-08-20": 2,
      "2026-08-24": 3,
      "2026-08-26": 2,
      "2026-08-27": 3,
      "2026-08-28": 2,
      "2026-08-31": 2
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        53
      ],
      [
        "SKPTI (Surat Keterangan Pengganti Tanda Identitas)",
        17
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        53
      ],
      [
        "Validasi Cek SIAK",
        8
      ],
      [
        "Penjadwalan Cek Biometrik",
        6
      ],
      [
        "Terbit SKPTI / Terbit NIK dan Perekaman + Ajukan TTE Kartu Keluarga",
        3
      ]
    ]
  },
  {
    "name": "SUDARWANTO",
    "username": "sudarwanto",
    "totalRecords": 60,
    "byDate": {
      "2026-08-03": 6,
      "2026-08-04": 4,
      "2026-08-05": 1,
      "2026-08-06": 4,
      "2026-08-07": 5,
      "2026-08-10": 1,
      "2026-08-11": 6,
      "2026-08-12": 3,
      "2026-08-13": 4,
      "2026-08-14": 3,
      "2026-08-18": 9,
      "2026-08-19": 2,
      "2026-08-20": 1,
      "2026-08-21": 3,
      "2026-08-24": 4,
      "2026-08-26": 2,
      "2026-08-27": 1,
      "2026-08-31": 1
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan LUAR SURABAYA)",
        23
      ],
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen LUAR SURABAYA dan Akta Perkawinan SURABAYA)",
        16
      ],
      [
        "Keabsahan Akta Perkawinan (Pemilik dokumen SURABAYA dan Akta Perkawinan  SURABAYA)",
        16
      ],
      [
        "Keabsahan Akta Perceraian (Pemilik dokumen SURABAYA dan Akta Perceraian LUAR SURABAYA)",
        2
      ],
      [
        "Keabsahan Akta Perceraian (Pemilik dokumen LUAR SURABAYA dan Akta Perceraian SURABAYA)",
        2
      ]
    ],
    "topProcesses": [
      [
        "Validasi",
        55
      ],
      [
        "Pengecekan Data (Gudang)",
        5
      ]
    ]
  },
  {
    "name": "APRILIA SUSANTI",
    "username": "aprilia",
    "totalRecords": 59,
    "byDate": {
      "2026-08-01": 2,
      "2026-08-03": 1,
      "2026-08-04": 5,
      "2026-08-05": 5,
      "2026-08-06": 10,
      "2026-08-10": 1,
      "2026-08-11": 6,
      "2026-08-13": 6,
      "2026-08-14": 8,
      "2026-08-15": 4,
      "2026-08-20": 2,
      "2026-08-21": 2,
      "2026-08-26": 3,
      "2026-08-27": 4
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        56
      ],
      [
        "ESULAY DAFDUK",
        3
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        56
      ],
      [
        "Verifikasi Surat Masuk dan Pemprosesan Surat Masuk  + Upload Hasil Output Surat",
        3
      ]
    ]
  },
  {
    "name": "WASILAH, SE",
    "username": "sila",
    "totalRecords": 54,
    "byDate": {
      "2026-08-03": 4,
      "2026-08-07": 6,
      "2026-08-10": 16,
      "2026-08-11": 2,
      "2026-08-12": 4,
      "2026-08-13": 1,
      "2026-08-18": 3,
      "2026-08-19": 4,
      "2026-08-20": 2,
      "2026-08-21": 2,
      "2026-08-24": 2,
      "2026-08-26": 5,
      "2026-08-27": 2,
      "2026-08-31": 1
    },
    "division": "pencatatan_sipil",
    "topServices": [
      [
        "Kutipan Kedua Perkawinan Karena Hilang Terbitan Surabaya",
        16
      ],
      [
        "Surat Keterangan Sudah Menikah / Belum / Pindah Menikah",
        16
      ],
      [
        "Kutipan Kedua Perkawinan Warga Surabaya Karena Hilang Terbitan Luar Kota Surabaya",
        9
      ],
      [
        "Kutipan Kedua Perkawinan Warga Surabaya Karena Rusak Terbitan Luar Kota Surabaya",
        7
      ],
      [
        "Kutipan Kedua Perkawinan Karena Rusak Terbitan Surabaya",
        4
      ]
    ],
    "topProcesses": [
      [
        "Ajukan Cetak Akta",
        16
      ],
      [
        "Unggah Akta",
        15
      ],
      [
        "Verifikasi",
        14
      ],
      [
        "Upload Surat Keterangan",
        8
      ],
      [
        "Upload dokumen kutipan kedua perceraian",
        1
      ]
    ]
  },
  {
    "name": "ARDHIN NAJADIYA SETYA",
    "username": "ardhin",
    "totalRecords": 19,
    "byDate": {
      "2026-08-11": 3,
      "2026-08-13": 4,
      "2026-08-15": 7,
      "2026-08-19": 2,
      "2026-08-28": 3
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Layanan Integrasi Data Pendidikan dan Kependudukan Nasi Ikan",
        15
      ],
      [
        "Cetak Ulang KTP",
        4
      ]
    ],
    "topProcesses": [
      [
        "Verifikasi + Entry Perubahan Data + Ajukan TTE Kartu Keluarga",
        15
      ],
      [
        "Verifikasi",
        4
      ]
    ]
  },
  {
    "name": "TEGUH HERMANING CAHYO",
    "username": "teguhcahyo",
    "totalRecords": 16,
    "byDate": {
      "2026-08-01": 2,
      "2026-08-04": 2,
      "2026-08-11": 2,
      "2026-08-12": 2,
      "2026-08-13": 3,
      "2026-08-18": 2,
      "2026-08-20": 2,
      "2026-08-26": 1
    },
    "division": "kependudukan",
    "topServices": [
      [
        "SKPTI (Surat Keterangan Pengganti Tanda Identitas)",
        16
      ]
    ],
    "topProcesses": [
      [
        "Upload FIle Kartu Keluarga",
        8
      ],
      [
        "Cek Biometrik + wawancara",
        6
      ],
      [
        "Penjadwalan Cek Biometrik",
        2
      ]
    ]
  },
  {
    "name": "ciciknofinda",
    "username": "cicik",
    "totalRecords": 5,
    "byDate": {
      "2026-08-05": 5
    },
    "division": "kependudukan",
    "topServices": [
      [
        "Cetak Ulang KTP",
        4
      ],
      [
        "[TEST] CETAK ULANG KTP",
        1
      ]
    ],
    "topProcesses": [
      [
        "Pengajuan TTE Biodata WNI",
        2
      ],
      [
        "Upload TTE Biodata WNI",
        2
      ],
      [
        "cetak",
        1
      ]
    ]
  }
];