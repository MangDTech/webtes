import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb />
          
          {/* PPID Header */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
              <h2 className="text-3xl mt-2 font-bold text-white drop-shadow-lg">PPID</h2>
              <p className="mt-2 font-medium text-white/90">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
            
            <div className="p-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Profil Singkat PPID
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pejabat Pengelola Informasi dan Dokumentasi (PPID) berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Definition */}
            <div className="lg:col-span-2">
              {/* PPID Definition */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    Definisi dan Fungsi PPID
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg font-medium text-gray-900 mb-4">
                      Pejabat Pengelola Informasi dan Dokumentasi (PPID)
                    </p>
                    <p>
                      PPID berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik.
                    </p>
                    <p>
                      Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.
                    </p>
                    <p>
                      Pejabat Pengelola Informasi dan Dokumentasi (PPID) bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Foundation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                    </svg>
                    Dasar Hukum Pelayanan Informasi Publik
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {dasarHukumList.map((hukum, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {hukum}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Functions */}
            <div className="space-y-8">
              {/* Functions Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
                  <h3 className="text-lg font-bold flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                    </svg>
                    Fungsi Utama
                  </h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Pengelola Informasi</h4>
                        <p className="text-gray-600 text-xs mt-1">Mengelola informasi publik secara terstruktur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Penyampai Dokumen</h4>
                        <p className="text-gray-600 text-xs mt-1">Menyampaikan dokumen resmi kepada publik</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Pelayanan Satu Pintu</h4>
                        <p className="text-gray-600 text-xs mt-1">Memberikan layanan terpusat dan efisien</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4">
                  <h3 className="text-lg font-bold flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                    Tanggung Jawab
                  </h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start p-3 bg-orange-50 rounded-lg">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Penyimpanan</h4>
                        <p className="text-gray-600 text-xs mt-1">Menyimpan informasi dengan aman</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-orange-50 rounded-lg">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Pendokumentasian</h4>
                        <p className="text-gray-600 text-xs mt-1">Mendokumentasikan dengan sistematis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-orange-50 rounded-lg">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Penyediaan & Pelayanan</h4>
                        <p className="text-gray-600 text-xs mt-1">Menyediakan layanan informasi berkualitas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Kontak PPID
                </h3>
                <div className="space-y-3 text-green-100">
                  <p className="text-sm">📧 ppid@dinaspangan.go.id</p>
                  <p className="text-sm">📞 (0751) 123-4567</p>
                  <p className="text-sm">🏢 Jl. Sudirman No. 1, Padang</p>
                  <p className="text-sm">⏰ 08:00 - 16:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilSingkatPPID;
