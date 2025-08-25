import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const InformasiSetiapSaat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* PPID Header */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">PPID</h2>
              <p className="mt-2 font-medium text-white/90">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
            
            <div className="p-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Tentang Informasi Setiap Saat
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Informasi yang wajib disediakan oleh Badan Publik secara berkala, informasi yang wajib diumumkan secara serta merta, dan informasi yang wajib tersedia setiap saat.
                </p>
              </div>
            </div>
          </div>

          {/* Information Access Guide */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                </svg>
                Cara Mengakses Informasi
              </h3>
              <p className="text-green-100 text-sm mt-1">Panduan untuk mendapatkan informasi publik</p>
            </div>

            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <h4 className="font-semibold text-green-800">Identifikasi Informasi</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Tentukan jenis informasi yang Anda butuhkan dari daftar informasi yang tersedia.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <h4 className="font-semibold text-blue-800">Ajukan Permohonan</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Isi formulir permohonan informasi publik dengan lengkap dan jelas.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <h4 className="font-semibold text-amber-800">Proses Verifikasi</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Tunggu proses verifikasi dan validasi permohonan oleh petugas PPID.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      4
                    </div>
                    <h4 className="font-semibold text-purple-800">Dapatkan Informasi</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Terima informasi yang diminta sesuai dengan ketentuan yang berlaku.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      5
                    </div>
                    <h4 className="font-semibold text-red-800">Evaluasi Layanan</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Berikan feedback untuk meningkatkan kualitas layanan informasi publik.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      ?
                    </div>
                    <h4 className="font-semibold text-gray-800">Butuh Bantuan?</h4>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">
                    Hubungi petugas PPID untuk mendapatkan bantuan dan informasi lebih lanjut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Categories */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                </svg>
                Kategori Informasi yang Tersedia
              </h3>
              <p className="text-green-100 text-sm mt-1">Jenis-jenis informasi yang dapat diakses oleh masyarakat</p>
            </div>

            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Informasi Wajib Tersedia</h4>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-medium text-blue-800 mb-2">📋 Informasi Organisasi</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Profil dan struktur organisasi</li>
                      <li>• Visi, misi, dan tujuan</li>
                      <li>• Tugas dan fungsi</li>
                      <li>• Data pejabat dan pegawai</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h5 className="font-medium text-green-800 mb-2">📊 Informasi Kinerja</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Laporan kinerja tahunan</li>
                      <li>• Program dan kegiatan</li>
                      <li>• Pencapaian target kinerja</li>
                      <li>• Evaluasi dan rekomendasi</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h5 className="font-medium text-yellow-800 mb-2">💰 Informasi Keuangan</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Laporan keuangan tahunan</li>
                      <li>• Rencana anggaran</li>
                      <li>• Realisasi anggaran</li>
                      <li>• Audit keuangan</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Informasi Wajib Diumumkan</h4>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-medium text-purple-800 mb-2">📢 Informasi Berkala</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Rencana strategis</li>
                      <li>• Kebijakan dan peraturan</li>
                      <li>• Prosedur operasional</li>
                      <li>• Daftar informasi publik</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h5 className="font-medium text-red-800 mb-2">⚡ Informasi Serta Merta</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Keadaan darurat atau krisis</li>
                      <li>• Ancaman terhadap keamanan</li>
                      <li>• Informasi lingkungan hidup</li>
                      <li>• Peringatan dini masyarakat</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h5 className="font-medium text-indigo-800 mb-2">📝 Informasi Lainnya</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Layanan informasi publik</li>
                      <li>• Standar operasional prosedur</li>
                      <li>• Formulir permohonan</li>
                      <li>• Mekanisme pengaduan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    Informasi Kontak PPID
                  </h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-green-100 text-sm">📧 Email</p>
                      <p className="font-medium">ppid@disanpangan.sumbar.go.id</p>
                    </div>
                    <div>
                      <p className="text-green-100 text-sm">📞 Telepon</p>
                      <p className="font-medium">(0751) 123456</p>
                    </div>
                    <div>
                      <p className="text-green-100 text-sm">⏰ Jam Layanan</p>
                      <p className="font-medium">Senin - Jumat, 08:00 - 16:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformasiSetiapSaat;
