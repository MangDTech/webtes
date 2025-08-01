import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function LaporanKinerja() {
  const laporanList = [
    {
      id: 1,
      title: "LAPORAN KINERJA DINAS PANGAN PROVINSI SUMATERA BARAT TAHUN 2023",
      description: "Laporan pencapaian kinerja Dinas Pangan dalam melaksanakan program dan kegiatan ketahanan pangan sepanjang tahun 2023",
      date: "15 10:30:00 Januari 2024",
      category: "Laporan Kinerja",
      year: "2023"
    },
    {
      id: 2,
      title: "LAPORAN KINERJA DINAS PANGAN PROVINSI SUMATERA BARAT TAHUN 2022",
      description: "Evaluasi pencapaian target dan realisasi program ketahanan pangan tahun 2022 beserta analisis permasalahan dan solusi",
      date: "20 09:15:00 Februari 2023",
      category: "Laporan Kinerja",
      year: "2022"
    },
    {
      id: 3,
      title: "LAPORAN KINERJA DINAS PANGAN PROVINSI SUMATERA BARAT TAHUN 2021",
      description: "Dokumentasi pencapaian program diversifikasi pangan dan penguatan ketahanan pangan di masa pandemi COVID-19",
      date: "10 14:20:00 Januari 2022",
      category: "Laporan Kinerja",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Laporan Kinerja
          </h1>
          <div className="w-32 h-1 bg-green-600 mb-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {laporanList.map((laporan) => (
            <div key={laporan.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex">
                {/* Report Icon */}
                <div className="w-48 h-40 bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center flex-shrink-0">
                  <div className="relative">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    {/* Chart icon overlay */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center space-x-2">
                        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {laporan.category}
                        </span>
                        <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {laporan.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                        {laporan.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {laporan.description}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500 ml-4">
                      {laporan.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Laporan Resmi</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        <span>PDF</span>
                      </div>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Indicators */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Indikator Kinerja Utama
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ketahanan Pangan</h3>
              <p className="text-sm text-gray-600">Pencapaian target ketahanan pangan daerah dan nasional</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pemberdayaan</h3>
              <p className="text-sm text-gray-600">Jumlah masyarakat yang terlibat dalam program pangan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Produktivitas</h3>
              <p className="text-sm text-gray-600">Peningkatan produksi dan diversifikasi pangan lokal</p>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Ringkasan Pencapaian Kinerja
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-3">🎯 Target Tercapai</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Skor Pola Pangan Harapan (PPH) meningkat</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Ketersediaan energi per kapita terpenuhi</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Program KRPL dan LDPM berjalan optimal</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📈 Area Pengembangan</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm">Peningkatan kualitas SDM pangan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm">Pengembangan teknologi pangan lokal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm">Penguatan sistem distribusi pangan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Evaluasi dan Feedback
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Kami terbuka untuk masukan dan saran guna meningkatkan kinerja pelayanan ketahanan pangan di Sumatera Barat.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Berikan Feedback
              </button>
              <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Download Laporan
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default LaporanKinerja;
