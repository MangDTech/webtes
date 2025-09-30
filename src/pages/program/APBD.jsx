import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function APBD() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-2 text-footer">
            Program APBD
          </h1>
          {/* Meta removed as requested */}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Program Content */}
          <div className="mb-8">
            <div className="grid gap-8">
              {/* Program 1 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">
                      Program Peningkatan Ketahanan Pangan
                    </h2>
                    <div className="w-24 h-1 bg-green-600 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Program ini bertujuan untuk memperkuat ketahanan pangan ditingkat rumah tangga sehingga terbebas dari kemungkinan kondisi kekurangan energi dan protein
                    </p>
                  </div>
                </div>
              </div>

              {/* Program 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">
                      Program Diversifikasi Pangan
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Program ini ditujukan untuk meningkatkan ketahanan pangan melalui konsumsi dan keamanan pangan segar, distribusi dan pemberdayaan di tingkat masyarakat serta terkoordinasinya kebijakan ketahanan pangan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Objectives */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tujuan Program APBD:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Memperkuat ketahanan pangan rumah tangga</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Mencegah kekurangan energi dan protein</span>
              </div>
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
                <span className="text-sm text-gray-700">Pemberdayaan masyarakat tingkat lokal</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Koordinasi kebijakan ketahanan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Peningkatan keamanan pangan segar</span>
              </div>
            </div>
          </div>

          {/* Strategic Focus */}
          <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fokus Strategis Program APBD:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🏠 Ketahanan Pangan Rumah Tangga</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pencegahan kekurangan energi</li>
                  <li>• Pemenuhan kebutuhan protein</li>
                  <li>• Akses pangan berkelanjutan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🌾 Diversifikasi dan Distribusi</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Konsumsi pangan beragam</li>
                  <li>• Keamanan pangan segar</li>
                  <li>• Pemberdayaan masyarakat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Framework */}
          <div className="mb-8 bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kerangka Implementasi Program APBD:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-800 font-bold text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Target Rumah Tangga</h4>
                  <p className="text-sm text-gray-600">Fokus pada penguatan ketahanan pangan di tingkat rumah tangga sebagai unit terkecil masyarakat.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-800 font-bold text-sm">🌾</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Diversifikasi Konsumsi</h4>
                  <p className="text-sm text-gray-600">Mendorong variasi konsumsi pangan untuk meningkatkan kualitas gizi masyarakat.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-800 font-bold text-sm">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pemberdayaan Masyarakat</h4>
                  <p className="text-sm text-gray-600">Melibatkan partisipasi aktif masyarakat dalam program ketahanan pangan lokal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits and Impact */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Manfaat dan Dampak:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">💪</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Ketahanan Gizi</h4>
                <p className="text-xs text-gray-600">Rumah tangga terpenuhi kebutuhan energi dan protein</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">🍽️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Diversifikasi</h4>
                <p className="text-xs text-gray-600">Konsumsi pangan beragam dan berkualitas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">🏘️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Pemberdayaan</h4>
                <p className="text-xs text-gray-600">Masyarakat mandiri dalam ketahanan pangan</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Program APBD</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Ketahanan Pangan</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Diversifikasi</span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Rumah Tangga</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Pemberdayaan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Gizi</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default APBD;
