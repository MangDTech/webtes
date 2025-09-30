import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function UPTDBPSMP() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-2 text-footer">
            Tupoksi UPTD - BPSMP
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Dasar Hukum */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Dasar Hukum :</h2>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-4">
                Berdasarkan <strong>Peraturan Gubernur Sumatera Barat Nomor 66 Tahun 2009</strong>, tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis Badan (UPTB) Ketahanan Pangan Provinsi Sumatera Barat, dan <strong>Keputusan Kepala Badan Ketahanan Pangan Provinsi Sumatera Barat No. 521/1601/BKP/2010, tanggal 29 Juni 2010</strong> tentang Tugas Pokok dan Fungsi serta Uraian Tugas Esselon III dan IV dilingkungan UPTB-BPSMP Provinsi Sumatera Barat memiliki struktur organisasi sebagai berikut :
              </p>
            </div>
          </div>

          {/* Struktur Organisasi */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Struktur Organisasi :</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-indigo-800">Kepala Balai</h3>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800">Kepala Sub Bagian Tata Usaha</h3>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-yellow-800">Kepala Seksi Pelayanan Teknis</h3>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-red-800">Kepala Seksi Pengujian dan Sertifikasi</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Tugas */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">UPTD-BPSMP mempunyai tugas :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Melaksanakan pengawasan mutu bahan pangan segar baik yang produksi daerah maupun bahan pangan impor;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Melaksanakan sertifikasi mutu bahan pangan segar.</span>
              </li>
            </ul>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Sedangkan fungsi UPTD-BPSMP adalah sebagai berikut :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyusunan Rencana Pembangunan Teknis Operasional Pengawasan dan Sertifikasi Mutu Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pengkajian dan Analisa Teknis Operasional Pengawasan dan Sertifikasi Mutu Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pengujian dan persiapan teknologi pengawasan dan sertifikasi mutu pangan dilapangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan kebijakan teknis pengawasan dan keamanan pangan segar;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan operasional pelayanan kepada masyarakat sesuai dengan bidangan Pengawasan dan sertifikasi mutu pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan operasional tugas teknis Dinas Pangan Provinsi Sumatera Barat yang terkait dengan pengawasan dan sertifikasi mutu pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan pelayanan teknis administrasi ketatausahaan UPTB.</span>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Layanan Utama UPTD-BPSMP:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengawasan mutu bahan pangan segar</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Sertifikasi mutu pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengujian teknologi pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pelayanan teknis kepada masyarakat</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengawasan pangan impor</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Analisa teknis operasional</span>
              </div>
            </div>
          </div>

          {/* Strategic Importance */}
          <div className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Peran Strategis UPTD-BPSMP:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-800 mb-2">🔬 Laboratorium & Pengujian</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Uji mutu bahan pangan segar</li>
                  <li>• Analisis keamanan pangan</li>
                  <li>• Teknologi pengawasan lapangan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🏆 Sertifikasi & Standar</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sertifikasi mutu pangan</li>
                  <li>• Standar keamanan pangan</li>
                  <li>• Jaminan kualitas produk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="mb-8 bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ruang Lingkup Kerja:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-cyan-800 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pengawasan Pangan Lokal</h4>
                  <p className="text-sm text-gray-600">Monitoring dan evaluasi mutu bahan pangan segar yang diproduksi di Sumatera Barat.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pengawasan Pangan Impor</h4>
                  <p className="text-sm text-gray-600">Kontrol kualitas dan keamanan bahan pangan impor yang masuk ke wilayah Sumatera Barat.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-indigo-800 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pelayanan Masyarakat</h4>
                  <p className="text-sm text-gray-600">Memberikan layanan teknis pengujian dan sertifikasi kepada masyarakat dan pelaku usaha.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">UPTD-BPSMP</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Pengawasan Mutu</span>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Sertifikasi Pangan</span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Laboratorium</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Tupoksi</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Unit Teknis</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default UPTDBPSMP;
