import { useState } from 'react'

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">{title}</h2>
      <div className="bg-white/80 backdrop-blur rounded-xl border border-emerald-100 p-5 shadow-sm">
        {children}
      </div>
    </section>
  )
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-emerald-100">
      {items.map((it, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full text-left py-3 flex items-center justify-between font-semibold text-emerald-800"
          >
            <span>{it.title}</span>
            <span className={`transition-transform ${open === idx ? 'rotate-180' : ''}`}>▾</span>
          </button>
          <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden text-slate-600 leading-relaxed">
              <div className="pb-4">{it.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('overview')
  const quick = [
    { key: 'overview', label: 'Ringkasan' },
    { key: 'features', label: 'Fitur Utama' },
    { key: 'ia', label: 'Arsitektur Info' },
    { key: 'ui', label: 'Desain & UI Kit' },
    { key: 'gamify', label: 'Poin & Gamifikasi' },
    { key: 'tech', label: 'AI & Teknis' },
    { key: 'deliver', label: 'Deliverables' },
    { key: 'roadmap', label: 'Roadmap' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">W</div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-emerald-800">Wastify</h1>
              <p className="text-xs text-slate-500 -mt-1">Aplikasi Pengelolaan Sampah Pintar berbasis AI</p>
            </div>
          </div>
          <nav className="flex-1 overflow-x-auto">
            <div className="flex gap-2">
              {quick.map(q => (
                <button
                  key={q.key}
                  onClick={() => setTab(q.key)}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap border ${tab===q.key ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-700 border-emerald-200 hover:border-emerald-400'}`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </nav>
          <div className="hidden md:block">
            <a href="#get-started" className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm">Gunakan Prompt</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Prompt Profesional – Wastify</h2>
              <p className="text-emerald-100 mb-4">Salin dan pakai di Figma/Framer/Uizard/Visily/v0 atau AI lain untuk menghasilkan konsep UI/Prototype.</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-emerald-50">
                <li>• Tujuan jelas (UX/UI + prototype)</li>
                <li>• Audiens: Warga, Pengepul, PPSU</li>
                <li>• Gaya: Futuristik eco</li>
                <li>• Outcome: flow + microcopy</li>
              </ul>
            </div>

            {tab === 'overview' && (
              <Section id="overview" title="Tujuan Aplikasi">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Mengurangi volume sampah rumah tangga dan meningkatkan pemilahan.</li>
                  <li>Mengubah sampah menjadi nilai ekonomi (uang, poin, produk).</li>
                  <li>Meningkatkan literasi lingkungan dan partisipasi warga.</li>
                  <li>Menghubungkan warga–pengepul–bank sampah–pabrik daur ulang.</li>
                  <li>Mendukung Smart City & alur kerja PPSU.</li>
                </ul>
              </Section>
            )}

            {tab === 'features' && (
              <Section id="features" title="Fitur Utama Wajib">
                <Accordion
                  items={[
                    {
                      title: '1) AI Waste Scanner',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Klasifikasi foto: organik, anorganik, B3, tanaman, plastik, logam, elektronik.</li>
                          <li>Rekomendasi daur ulang, lokasi setoran terdekat, confidence score.</li>
                          <li>Saran produk dari material, offline mode, aksesibilitas baik.</li>
                        </ul>
                      )
                    },
                    {
                      title: '2) Waste Crafting Simulator',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Resep: kompos+maggot, paving plastik, biodiesel, bensin organik.</li>
                          <li>Langkah, estimasi waktu gaya idle game, nilai ekonomi, notifikasi selesai.</li>
                          <li>Edukasi SOP & keamanan B3.</li>
                        </ul>
                      )
                    },
                    {
                      title: '3) Bank Sampah Digital',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Setor → verifikasi → konversi poin/uang.</li>
                          <li>Transparansi harga, dompet, penukaran pulsa/token/voucher.</li>
                          <li>Bukti setoran: foto, timbangan, tanda tangan.</li>
                        </ul>
                      )
                    },
                    {
                      title: '4) Jemput Sampah',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Pilih jenis jemput; alur User → Pengepul → Pabrik.</li>
                          <li>Penjadwalan, tracking real-time, QR/OTP bukti.</li>
                          <li>Rating & ulasan.</li>
                        </ul>
                      )
                    },
                    {
                      title: '5) Peta Lokasi Pintar',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Marker PPSU, pengepul, bank sampah, drop point.</li>
                          <li>“Lokasi Saya” + filter, jam operasional, rating, rute.</li>
                        </ul>
                      )
                    },
                    {
                      title: '6) Edukasi & Kuis',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>E-book, video, infografik topik lingkungan.</li>
                          <li>Kuis harian berhadiah poin, level & badge.</li>
                        </ul>
                      )
                    },
                    {
                      title: '7) Game “Capit Sampah”',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Drag & drop kategori, level & leaderboard.</li>
                        </ul>
                      )
                    },
                    {
                      title: '8) Laporan Masalah',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Foto + GPS → tiket → status hingga selesai.</li>
                        </ul>
                      )
                    },
                    {
                      title: '9) Integrasi Smart City',
                      content: (
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Dashboard PPSU: notifikasi rumah siap angkut, rekap volume, heatmap, rute armada.</li>
                        </ul>
                      )
                    }
                  ]}
                />
              </Section>
            )}

            {tab === 'ia' && (
              <Section id="ia" title="Arsitektur Informasi & Navigasi">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Onboarding: izin kamera & lokasi, janji privasi.</li>
                  <li>Beranda: quick actions (Scan, Jemput, Setor, Peta, Edukasi, Game).</li>
                  <li>Tab: Beranda, Peta, Aktivitas, Dompet, Profil.</li>
                  <li>Aktivitas: status jemput, histori setor, crafting, kuis, game.</li>
                  <li>Dompet: saldo, penukaran, riwayat. Profil: data diri & bantuan.</li>
                </ul>
              </Section>
            )}

            {tab === 'ui' && (
              <Section id="ui" title="Desain Visual & UI Kit">
                <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Warna & Tipografi</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Hijau #00A86B, Biru #0EA5E9, Putih, Abu lembut. Mode gelap opsional.</li>
                      <li>Sans modern: Inter/Manrope. Aksesibilitas WCAG AA.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Komponen</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AppBar, Bottom Nav, Card, Chip kategori material.</li>
                      <li>Progress “proses sampah”, empty state ilustratif, pin peta khusus.</li>
                    </ul>
                  </div>
                </div>
              </Section>
            )}

            {tab === 'gamify' && (
              <Section id="gamify" title="Ekonomi Poin & Gamifikasi">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Earn: setoran, kuis, game, crafting, referral.</li>
                  <li>Burn: penukaran pulsa/token/voucher, fitur premium (opsional).</li>
                  <li>Badge & level: Pemilah Pemula → Ahli → Champion.</li>
                  <li>Anti-abuse: verifikasi foto/timbangan, limit harian, deteksi anomali.</li>
                </ul>
              </Section>
            )}

            {tab === 'tech' && (
              <Section id="tech" title="AI & Teknis">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Model klasifikasi gambar on-device + fallback cloud; tampilkan confidence & alasan.</li>
                  <li>Rekomendasi daur ulang berbasis rule + retrieval pengetahuan lokal.</li>
                  <li>Geospasial: jarak, filter, jam operasional, antrian.</li>
                  <li>Notifikasi status + privasi berbasis consent dan penghapusan data.</li>
                </ul>
              </Section>
            )}

            {tab === 'deliver' && (
              <Section id="deliver" title="Deliverables untuk Desainer/AI">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Flowchart journey (scan → rekomendasi → setor/jemput, crafting, edukasi/kuis, laporan).</li>
                  <li>12–18 layar high-fidelity, UI kit lengkap, microcopy per layar.</li>
                  <li>Prototype interaktif dengan animasi scan & progres crafting.</li>
                </ul>
              </Section>
            )}

            {tab === 'roadmap' && (
              <Section id="roadmap" title="Roadmap Versi">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>V1 (MVP): Scanner AI, Jemput, Bank Sampah, Peta, Dompet poin, Edukasi dasar.</li>
                  <li>V1.5: Crafting Simulator, Kuis harian, Laporan lingkungan.</li>
                  <li>V2: Game Capit + Leaderboard, Dashboard PPSU/Smart City, rute armada.</li>
                </ul>
              </Section>
            )}
          </div>

          <aside className="space-y-6">
            <Section id="get-started" title="Cara Pakai Prompt">
              <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                <li>Salin ringkasan di halaman ini.</li>
                <li>Tempel di tool pilihan (Figma/Framer/Uizard/Visily/v0).</li>
                <li>Generate layar beranda, scanner, peta, jemput, dompet, edukasi.</li>
                <li>Gunakan contoh prompt turunan untuk tiap layar.</li>
              </ol>
            </Section>
            <Section id="snippets" title="Contoh Prompt Turunan">
              <Accordion
                items={[
                  { title: 'Beranda', content: 'Desain layar beranda Wastify: gaya futuristik eco, hero “Scan & Daur Ulang”, 6 quick actions (Scan, Jemput, Setor, Peta, Edukasi, Game), ringkasan dompet poin, kartu aktivitas terbaru, warna hijau-biru-putih.' },
                  { title: 'AI Waste Scanner', content: 'Viewport kamera dengan overlay panduan, tombol shutter besar, indikator confidence, hasil klasifikasi dengan chip kategori dan rekomendasi daur ulang, CTA “Kirim ke Bank Sampah” atau “Jadwalkan Jemput”.' },
                  { title: 'Crafting Simulator', content: 'Pilih resep (maggot, paving, biodiesel, bensin organik), langkah-langkah, estimasi waktu (progress), estimasi nilai ekonomi, tombol mulai, animasi proses.' },
                  { title: 'Peta Lokasi Pintar', content: 'Marker “Ur Here”, pins berikon (PPSU, pengepul, bank sampah), filter jenis, kartu lokasi dengan jam, rating, jenis diterima, rute.' },
                  { title: 'Bank Sampah Digital', content: 'Input jenis/berat, transparansi harga, hasil konversi poin/uang, bukti setoran foto & tanda tangan, riwayat.' },
                  { title: 'Jemput Sampah', content: 'Pilihan jenis, jadwal, alamat, estimasi, status tracking, chat driver, bukti penjemputan (QR/OTP).' },
                  { title: 'Kuis & Edukasi', content: 'Kartu materi, kuis 3–5 soal, timer, hadiah poin, feedback jawaban.' },
                  { title: 'Game Capit', content: 'Drag-and-drop ke kategori, skor & kombo, leaderboard.' },
                  { title: 'Laporan Masalah', content: 'Unggah foto, deskripsi, GPS, nomor tiket, status, bukti penyelesaian.' },
                ]}
              />
            </Section>
            <Section id="acceptance" title="Kriteria Acceptance Prototype">
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Semua flow utama berfungsi.</li>
                <li>Konsistensi visual & aksesibilitas memadai.</li>
                <li>State lengkap: loading, sukses, gagal, empty.</li>
              </ul>
            </Section>
          </aside>
        </div>

        <footer className="text-center text-xs text-slate-500 mt-10 pt-6 border-t border-emerald-100">
          Dibuat untuk kebutuhan desain/prototype Wastify. Gaya: eco-futuristik, ramah pemula.
        </footer>
      </main>
    </div>
  )
}
