import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
const InformasiSertaMerta = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <Breadcrumb />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* PPID Header */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">PPID</h2>
              <p className="mt-2 font-medium text-white/90">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
            
            <div className="p-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  Tentang Informasi Serta Merta
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Informasi yang wajib diumumkan atau disediakan secara serta merta yang dapat mengancam hajat hidup orang banyak dan ketertiban umum.
                </p>
              </div>
            </div>
          </div>

          {/* Alert Types */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <h3 className="font-semibold flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                  Keamanan Pangan
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-sm mb-3 font-medium">
                  Informasi terkait kontaminasi, recall produk, atau masalah keamanan pangan lainnya.
                </p>
                <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 font-semibold">
                  <strong>Status:</strong> Pemantauan Aktif
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4">
                <h3 className="font-semibold flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2 1 1 0 000-2zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  Ketahanan Pangan
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-sm mb-3 font-medium">
                  Informasi ketersediaan, akses, dan stabilitas pangan di daerah.
                </p>
                <div className="bg-amber-50 p-3 rounded text-sm text-amber-800 font-semibold">
                  <strong>Status:</strong> Stabil Terkendali
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                <h3 className="font-semibold flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  Bencana & Darurat
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-sm mb-3 font-medium">
                  Informasi kondisi darurat yang mempengaruhi ketersediaan dan distribusi pangan.
                </p>
                <div className="bg-red-50 p-3 rounded text-sm text-red-800 font-semibold">
                  <strong>Status:</strong> Siaga Normal
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Peringatan Terkini
              </h3>
              <p className="text-green-100 text-sm mt-1">Informasi terbaru yang perlu diketahui masyarakat</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-semibold text-yellow-800">Himbauan Cuaca Ekstrem</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Waspadai dampak cuaca ekstrem terhadap distribusi dan ketersediaan pangan. Pastikan stok pangan keluarga mencukupi.
                      </p>
                      <p className="text-xs text-yellow-600 mt-2">25 Agustus 2025, 10:30 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-semibold text-blue-800">Update Harga Pangan Strategis</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Pemantauan harga beras, gula, minyak goreng, dan komoditas strategis lainnya menunjukkan kondisi stabil.
                      </p>
                      <p className="text-xs text-blue-600 mt-2">24 Agustus 2025, 14:15 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-semibold text-green-800">Ketersediaan Pangan Aman</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Stok pangan pokok di seluruh Sumatera Barat dalam kondisi aman dan memadai untuk 3 bulan ke depan.
                      </p>
                      <p className="text-xs text-green-600 mt-2">23 Agustus 2025, 09:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Kontak Darurat
              </h3>
              <p className="text-red-100 text-sm mt-1">Hubungi segera jika menemukan masalah pangan yang mengancam masyarakat</p>
            </div>

            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="text-center">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-red-800 mb-2">Hotline Darurat</h4>
                    <p className="text-2xl font-bold text-red-600 mb-2">119</p>
                    <p className="text-sm text-gray-600">24 Jam Siaga</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">Email Darurat</h4>
                    <p className="text-sm font-medium text-blue-600 mb-2">darurat@disanpangan.sumbar.go.id</p>
                    <p className="text-sm text-gray-600">Respons Cepat</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">Kantor PPID</h4>
                    <p className="text-sm font-medium text-green-600 mb-2">(0751) 123456</p>
                    <p className="text-sm text-gray-600">Senin - Jumat, 08:00 - 16:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📍 Alamat Kantor</h4>
                <p className="text-gray-700 text-sm">
                  Jl. Khatib Sulaiman No. 45, Padang Utara, Kota Padang, Sumatera Barat 25173
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformasiSertaMerta;
