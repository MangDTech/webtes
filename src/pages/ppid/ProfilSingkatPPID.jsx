import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ProfilSingkatPPID() {
  const dasarHukumList = [
    "Undang undang No 11 Tahun 2008 Tentang Informasi dan transaksi Elektronik.",
    "Undang undang No 14 Tahun 2008 Tentang Keterbukaan informasi umum.",
    "Peraturan Pemerintah Nomor 61 Tahun 2010 Tentang Pelaksanaan Undang-undang Nomor 14 Tahun 2010 Tentang Keterbukaan Informasi Publik.",
    "Peraturan Pemerintah Nomor 35 Tahun 2010 Tentang Pedoman Pengelola Informasi dan Dokumentasi Dilingkungan Kementrian Dalam Negeri Dan Pemerintah Daerah.",
    "Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi Publik",
    "Peraturan Gubernur Sumatera Barat Nomor 6 Tahun 2017 tentang Pedoman Pengelolaan Informasi dan Dokumentasi Di Lingkungan Pemerintah Provinsi Sumatera Barat."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Profil Singkat PPID
          </h1>
          <div className="text-sm text-gray-600 mb-4">
            <span>Posted on 2021-01-07 14:56:55</span>
            <span className="mx-2">|</span>
            <span>by : Rio Bayu Sentosa</span>
            <span className="mx-2">|</span>
            <span>1405 kali dibaca</span>
            <span className="mx-2">|</span>
            <span>Category:</span>
          </div>
          <div className="w-32 h-1 bg-blue-600 mb-6"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* PPID Definition */}
          <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Pejabat Pengelola Informasi dan Dokumentasi (PPID)
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Pejabat Pengelola Informasi dan Dokumentasi (PPID)</strong> berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik. 
              </p>
              <p>
                Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.
              </p>
              <p>
                Pejabat Pengelola Informasi dan Dokumentasi (PPID) bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
              </p>
            </div>
          </div>

          {/* Dasar Hukum */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Dasar Hukum Pelayanan Informasi Publik dan Dokumentasi
            </h3>
            
            <div className="space-y-4">
              {dasarHukumList.map((hukum, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {hukum}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fungsi dan Tugas PPID */}
          <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Fungsi dan Tugas PPID</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">📋 Fungsi Utama</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pengelola informasi publik</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Penyampai dokumen resmi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pelayanan satu pintu</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">🎯 Bidang Tanggung Jawab</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Penyimpanan informasi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pendokumentasian</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Penyediaan dan pelayanan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Keunggulan Layanan */}
          <div className="mb-8 bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Keunggulan Layanan PPID</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-800 font-bold text-sm">🚪</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Layanan Satu Pintu</h4>
                  <p className="text-sm text-gray-600">Masyarakat dapat mengajukan permohonan informasi melalui satu jalur yang mudah dan tidak berbelit.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-800 font-bold text-sm">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Proses Cepat dan Transparan</h4>
                  <p className="text-sm text-gray-600">Pelayanan informasi yang efisien dengan proses yang jelas dan dapat dilacak.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-800 font-bold text-sm">📋</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dokumentasi Terpusat</h4>
                  <p className="text-sm text-gray-600">Pengelolaan dan penyimpanan dokumen informasi publik yang sistematis dan terorganisir.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Landasan Legal */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Landasan Hukum Utama</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-xs">UU</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">UU No. 14/2008</h4>
                  <p className="text-sm text-gray-600">Keterbukaan Informasi Publik sebagai dasar utama pembentukan PPID</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">PP No. 61/2010</h4>
                  <p className="text-sm text-gray-600">Pelaksanaan teknis keterbukaan informasi publik</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Butuh Informasi Lebih Lanjut?
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Untuk permohonan informasi publik atau konsultasi terkait dokumentasi, silakan hubungi PPID Dinas Pangan Provinsi Sumatera Barat.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Ajukan Permohonan
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Kontak PPID
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PPID</span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Informasi Publik</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Dokumentasi</span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Keterbukaan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Pelayanan Publik</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProfilSingkatPPID;
