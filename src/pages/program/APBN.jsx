import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function APBN() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-2 text-footer">
            Program APBN
          </h1>
          {/* Meta removed as requested */}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Program Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              Program Peningkatan Diversifikasi dan Ketahanan Pangan Masyarakat
            </h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          {/* Introduction */}
          <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed text-center">
              Program APBN yang bertujuan untuk meningkatkan diversifikasi dan ketahanan pangan masyarakat melalui berbagai kegiatan strategis yang terintegrasi dan berkelanjutan.
            </p>
          </div>

          {/* Kegiatan Utama */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Kegiatan Utama Program ini adalah sebagai berikut :</h3>
            
            <div className="grid gap-6">
              {/* Kegiatan 1 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">
                      Pengembangan Sistem Distribusi dan Stabilitas Harga Pangan
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Kegiatan untuk mengembangkan sistem distribusi pangan yang efektif dan menjaga stabilitas harga pangan di tingkat konsumen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kegiatan 2 */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">
                      Pengembangan Ketersediaan dan Penanganan Rawan Pangan
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Upaya untuk memastikan ketersediaan pangan yang memadai dan menangani daerah-daerah yang mengalami kerawanan pangan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kegiatan 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 mb-2">
                      Pengembangan Penganekaragaman Konsumsi Pangan dan Peningkatan Keamanan Pangan Segar
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Program diversifikasi konsumsi pangan dan peningkatan keamanan pangan segar untuk meningkatkan kualitas gizi masyarakat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kegiatan 4 */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-2">
                      Dukungan Manajemen dan Teknis Lainnya Dinas Pangan
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Dukungan manajemen dan teknis untuk operasional Dinas Pangan dalam melaksanakan berbagai program ketahanan pangan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Objectives */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tujuan Program:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Meningkatkan diversifikasi pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Memperkuat ketahanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Menstabilkan harga pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Meningkatkan keamanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Menangani kerawanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Optimalisasi manajemen dinas</span>
              </div>
            </div>
          </div>

          {/* Strategic Impact */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Dampak Strategis Program APBN:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">📈 Ekonomi</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Stabilitas harga pangan</li>
                  <li>• Peningkatan distribusi efisien</li>
                  <li>• Pengembangan UMKM pangan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-2">🛡️ Ketahanan Pangan</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ketersediaan pangan terjamin</li>
                  <li>• Penanganan rawan pangan</li>
                  <li>• Diversifikasi konsumsi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Framework */}
          <div className="mb-8 bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kerangka Implementasi:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-800 font-bold text-sm">📋</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Perencanaan Strategis</h4>
                  <p className="text-sm text-gray-600">Penyusunan rencana kerja tahunan dan jangka menengah sesuai kebutuhan daerah.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-800 font-bold text-sm">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pelaksanaan Terpadu</h4>
                  <p className="text-sm text-gray-600">Koordinasi lintas sektor untuk implementasi program yang terintegrasi.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-800 font-bold text-sm">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Monitoring dan Evaluasi</h4>
                  <p className="text-sm text-gray-600">Sistem pemantauan dan evaluasi berkelanjutan untuk mengukur pencapaian target.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Program APBN</span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Ketahanan Pangan</span>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Diversifikasi</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Distribusi Pangan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Keamanan Pangan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Manajemen</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default APBN;
