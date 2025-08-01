import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function KonsumsiKeamananPangan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tupoksi Bidang Konsumsi dan Keamanan Pangan
          </h1>
          <div className="text-sm text-gray-600 mb-4">
            <span>Posted on 2017-04-03 11:40:51</span>
            <span className="mx-2">|</span>
            <span>by : Dimas Dwi Randa</span>
            <span className="mx-2">|</span>
            <span>8027 kali dibaca</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tugas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tugas :</h2>
            <p className="text-gray-700 leading-relaxed">
              Melaksanakan penyusunan dan pelaksanaan kebijakan, pemberian bimbingan teknis, pemantauan dan evaluasi di bidang Konsumsi dan Keamanan Pangan.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fungsi :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan sarana dan prasarana dalam rangka penyelenggaraan Konsumsi dan Keamanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan penyusunan bahan rumusan kebijakan daerah di bidang Konsumsi dan keamanan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan kebijakan di bidang Konsumsi dan keamanan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan Pengendalian dan pengawasan bidang Konsumsi dan Keamanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pemberian bimbingan teknis dan supervisi dibidang Konsumsi dan Keamanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan koordinasi operasional dibidang Konsumsi dan Keamanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Koordinasi, monitoring, evaluasi, informasi dan promosi terhadap Konsumsi dan Keamanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan tugas lain yang diberikan oleh kepala Dinas.</span>
              </li>
            </ul>
          </div>

          {/* Struktur Bidang */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bidang Konsumsi dan Keamanan Pangan terdiri dari :</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-amber-800">Seksi Penganekaragaman Konsumsi Pangan</h3>
                </div>
                <p className="text-sm text-amber-700">
                  Mengembangkan dan mempromosikan diversifikasi konsumsi pangan untuk meningkatkan kualitas gizi masyarakat.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-emerald-800">Seksi Pengembangan Pangan Lokal</h3>
                </div>
                <p className="text-sm text-emerald-700">
                  Mengembangkan dan melestarikan pangan lokal untuk mendukung ketahanan pangan dan ekonomi daerah.
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-rose-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-rose-800">Seksi Keamanan Pangan</h3>
                </div>
                <p className="text-sm text-rose-700">
                  Memastikan keamanan pangan melalui pengawasan, sertifikasi, dan pengendalian mutu pangan yang beredar.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Area Fokus Utama:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Sarana dan prasarana konsumsi pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Kebijakan keamanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengendalian dan pengawasan mutu</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Bimbingan teknis dan supervisi</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Koordinasi operasional</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Monitoring, evaluasi, dan promosi</span>
              </div>
            </div>
          </div>

          {/* Strategic Importance */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pentingnya Konsumsi dan Keamanan Pangan:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">🍽️ Diversifikasi Konsumsi</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mengurangi ketergantungan pada beras</li>
                  <li>• Meningkatkan konsumsi pangan lokal</li>
                  <li>• Memperbaiki status gizi masyarakat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">🌱 Pangan Lokal</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Melestarikan kearifan lokal</li>
                  <li>• Mendukung ekonomi petani lokal</li>
                  <li>• Mengembangkan inovasi produk</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-rose-800 mb-2">🛡️ Keamanan Pangan</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Melindungi kesehatan konsumen</li>
                  <li>• Memastikan standar mutu pangan</li>
                  <li>• Mencegah penyakit akibat pangan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Programs and Initiatives */}
          <div className="mb-8 bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Program dan Inisiatif Utama:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-amber-800 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Program B2SA (Beragam, Bergizi, Seimbang, dan Aman)</h4>
                  <p className="text-sm text-gray-600">Kampanye pola konsumsi pangan yang beragam, bergizi, seimbang, dan aman untuk meningkatkan kualitas hidup masyarakat.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-emerald-800 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pengembangan Industri Pangan Lokal</h4>
                  <p className="text-sm text-gray-600">Pemberdayaan UMKM pangan lokal melalui pelatihan, sertifikasi, dan promosi produk unggulan daerah.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-rose-800 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sistem Keamanan Pangan Terpadu</h4>
                  <p className="text-sm text-gray-600">Pengawasan dan pengendalian keamanan pangan dari hulu ke hilir untuk melindungi konsumen.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Konsumsi Pangan</span>
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">Pangan Lokal</span>
              <span className="inline-block bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded">Keamanan Pangan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">B2SA</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Tupoksi</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bidang</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default KonsumsiKeamananPangan;
