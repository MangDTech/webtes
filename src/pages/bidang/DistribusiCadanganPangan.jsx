import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function TupoksiDistribusiCadanganPangan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tupoksi Bidang Distribusi dan Cadangan Pangan
          </h1>
          <div className="text-sm text-gray-600 mb-4">
            <span>Posted on 2017-04-03 11:38:56</span>
            <span className="mx-2">|</span>
            <span>by : Dimas Dwi Randa</span>
            <span className="mx-2">|</span>
            <span>8261 kali dibaca</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tugas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tugas :</h2>
            <p className="text-gray-700 leading-relaxed">
              Melaksanakan penyusunan dan pelaksanaan kebijakan, pemberian bimbingan teknis, pemantauan dan evaluasi di bidang distribusi dan cadangan pangan.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fungsi :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan sarana dan prasarana dalam rangka penyelenggaraan distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan penyusunan bahan rumusan kebijakan daerah di bidang distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan kebijakan di bidang distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan Pengendalian dan pengawasan bidang distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pemberian bimbingan teknis dan supervisi dibidang distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Penyiapan pelaksanaan koordinasi operasional dibidang distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Koordinasi, monitoring, evaluasi, informasi dan promosi terhadap distribusi dan cadangan pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan tugas lain yang diberikan oleh kepala Dinas.</span>
              </li>
            </ul>
          </div>

          {/* Struktur Bidang */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bidang Distribusi dan Cadangan Pangan terdiri dari :</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800">Seksi Distribusi Pangan</h3>
                </div>
                <p className="text-sm text-green-700">
                  Mengelola dan memantau sistem distribusi pangan untuk memastikan ketersediaan pangan yang merata dan berkelanjutan.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0V1" />
                  </svg>
                  <h3 className="text-lg font-semibold text-blue-800">Seksi Cadangan Pangan</h3>
                </div>
                <p className="text-sm text-blue-700">
                  Mengelola cadangan pangan strategis untuk mengantisipasi kondisi darurat dan menjaga stabilitas pangan daerah.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-orange-800">Seksi Harga Pangan</h3>
                </div>
                <p className="text-sm text-orange-700">
                  Memantau dan mengendalikan stabilitas harga pangan serta melakukan analisis pasar untuk menjaga daya beli masyarakat.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Area Fokus Utama:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Kebijakan distribusi dan cadangan pangan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Sarana dan prasarana distribusi</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Pengendalian dan pengawasan</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Bimbingan teknis dan supervisi</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Koordinasi operasional</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Monitoring, evaluasi, dan promosi</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Distribusi Pangan</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Cadangan Pangan</span>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Harga Pangan</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Tupoksi</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bidang</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Dinas Pangan</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TupoksiDistribusiCadanganPangan;
