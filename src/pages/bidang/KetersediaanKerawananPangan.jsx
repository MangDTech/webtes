import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function TupoksiKetersediaanKerawananPangan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tupoksi Bidang Ketersediaan dan Kerawanan Pangan
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tugas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tugas :</h2>
            <p className="text-gray-700 leading-relaxed">
              Melaksanakan penyusunan dan pelaksanaan kebijakan, pemberian bimbingan teknis, pemantauan dan evaluasi di bidang Ketersediaan dan Kerawanan Pangan.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fungsi :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan sarana dan prasarana dalam rangka penyelenggaraan Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan penyusunan bahan rumusan kebijakan daerah di bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan kebijakan di bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan Pengendalian dan pengawasan bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pemberian bimbingan teknis dan supervisi dibidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan koordinasi operasional dibidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Koordinasi, monitoring, evaluasi, informasi dan promosi terhadap Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan tugas lain yang diberikan oleh kepala Dinas.</span>
              </li>
            </ul>
          </div>

          {/* Struktur Bidang */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bidang Ketersediaan dan Kerawanan Pangan terdiri dari :</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="text-lg font-semibold text-purple-800">Seksi Ketersediaan Pangan</h3>
                </div>
                <p className="text-sm text-purple-700">
                  Mengelola dan memantau ketersediaan pangan untuk memastikan kecukupan pasokan pangan bagi masyarakat.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-teal-800">Seksi Sumberdaya Pangan</h3>
                </div>
                <p className="text-sm text-teal-700">
                  Mengelola dan mengoptimalkan sumberdaya pangan untuk mendukung ketahanan pangan daerah.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-red-800">Seksi Kerawanan Pangan</h3>
                </div>
                <p className="text-sm text-red-700">
                  Mengidentifikasi, memantau, dan menangani daerah rawan pangan untuk mencegah krisis pangan.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Area Fokus Utama:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Sarana dan prasarana ketersediaan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Kebijakan daerah ketahanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengendalian dan pengawasan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Bimbingan teknis dan supervisi</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Koordinasi operasional</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Monitoring dan evaluasi</span>
              </div>
            </div>
          </div>

          {/* Strategic Importance */}
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-teal-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pentingnya Ketersediaan dan Kerawanan Pangan:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Tujuan Strategis</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Menjamin ketersediaan pangan yang cukup</li>
                  <li>• Mencegah terjadinya kerawanan pangan</li>
                  <li>• Meningkatkan ketahanan pangan daerah</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-2">📊 Indikator Keberhasilan</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Stabilitas pasokan pangan</li>
                  <li>• Penurunan angka kerawanan pangan</li>
                  <li>• Peningkatan akses pangan masyarakat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Ketersediaan Pangan</span>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Sumberdaya Pangan</span>
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Kerawanan Pangan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Tupoksi</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bidang</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Ketahanan Pangan</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TupoksiKetersediaanKerawananPangan;
