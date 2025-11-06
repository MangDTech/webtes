import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function KonsumsiKeamananPangan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="page-title">
            Tupoksi Bidang Konsumsi dan Keamanan Pangan
          </h1>
        </div>

        {/* Content */}
        <div className="content-card">
          {/* Tugas */}
          <div className="mb-8">
            <h2 className="section-title">Tugas :</h2>
            <p className="content-text">
              Melaksanakan penyusunan dan pelaksanaan kebijakan, pemberian bimbingan teknis, pemantauan dan evaluasi di bidang Konsumsi dan Keamanan Pangan.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="section-title">Fungsi :</h2>
            <ul className="content-list custom-bullet-list">
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
            <h2 className="text-xl font-semibold mb-2 text-footer">Bidang Konsumsi dan Keamanan Pangan terdiri dari :</h2>
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
        </div>
      </div>      
      <Footer />
    </div>
  );
}

export default KonsumsiKeamananPangan;
