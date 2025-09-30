import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function InfoPengadaan() {
  const pengadaanList = [
    {
      id: 1,
      title: "INFO PENGADAAN",
      subtitle: "Pembangunan Gedung Kantor Tahun 2015",
      date: "07 15:22:31 April 2017",
      category: "Info pengadaan",
      type: "table"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-2 text-footer">
            Info pengadaan
          </h1>
          <div className="w-32 h-1 bg-indigo-600 mb-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {pengadaanList.map((pengadaan) => (
            <div key={pengadaan.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex">
                {/* Document/Table Icon */}
                <div className="w-48 h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center flex-shrink-0">
                  <div className="relative bg-white p-4 rounded shadow-lg">
                    {/* Table representation */}
                    <div className="space-y-1">
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-800"></div>
                        <div className="w-12 h-1 bg-gray-600"></div>
                        <div className="w-10 h-1 bg-gray-600"></div>
                        <div className="w-14 h-1 bg-gray-600"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-400"></div>
                        <div className="w-12 h-1 bg-gray-400"></div>
                        <div className="w-10 h-1 bg-gray-400"></div>
                        <div className="w-14 h-1 bg-gray-400"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-400"></div>
                        <div className="w-12 h-1 bg-gray-400"></div>
                        <div className="w-10 h-1 bg-gray-400"></div>
                        <div className="w-14 h-1 bg-gray-400"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-400"></div>
                        <div className="w-12 h-1 bg-gray-400"></div>
                        <div className="w-10 h-1 bg-gray-400"></div>
                        <div className="w-14 h-1 bg-gray-400"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-400"></div>
                        <div className="w-12 h-1 bg-gray-400"></div>
                        <div className="w-10 h-1 bg-gray-400"></div>
                        <div className="w-14 h-1 bg-gray-400"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-1 bg-gray-400"></div>
                        <div className="w-12 h-1 bg-gray-400"></div>
                        <div className="w-10 h-1 bg-gray-400"></div>
                        <div className="w-14 h-1 bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {pengadaan.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {pengadaan.title}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium">
                        {pengadaan.subtitle}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500 ml-4">
                      {pengadaan.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>Data Pengadaan</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v6l3-3 3 3V5" />
                        </svg>
                        <span>Tabel</span>
                      </div>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informasi Pengadaan */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Informasi Pengadaan Barang dan Jasa
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">📋 Jenis Pengadaan</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm">Pembangunan dan renovasi gedung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-sm">Pengadaan peralatan kantor</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-sm">Layanan konsultansi</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">🎯 Proses Pengadaan</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm">Perencanaan kebutuhan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm">Proses lelang transparan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm">Pengawasan dan evaluasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prinsip Pengadaan */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Prinsip Pengadaan Barang dan Jasa
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Transparan</h4>
              <p className="text-xs text-gray-600">Proses terbuka dan dapat diakses publik</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Akuntabel</h4>
              <p className="text-xs text-gray-600">Dapat dipertanggungjawabkan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Adil</h4>
              <p className="text-xs text-gray-600">Memberikan kesempatan yang sama</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Efisien</h4>
              <p className="text-xs text-gray-600">Mengoptimalkan penggunaan sumber daya</p>
            </div>
          </div>
        </div>     
      </div>    
      <Footer />
    </div>
  );
}

export default InfoPengadaan;
