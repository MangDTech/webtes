import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function StrukturOrganisasiPPID() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb />
          
          {/* PPID Header */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">PPID</h2>
              <p className="mt-2 font-medium text-white/90">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6 text-gray-900">Struktur Organisasi PPID</h1>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Struktur Organisasi PPID
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Struktur organisasi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Pangan Provinsi Sumatera Barat disusun untuk memastikan pengelolaan informasi publik yang efektif dan efisien sesuai dengan peraturan perundang-undangan yang berlaku.
                </p>
              </div>

              {/* Organizational Structure Content */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 shadow-sm">
                  <div className="text-center">
                    <div className="bg-[#1B4332] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">PPID Utama</h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Kepala Dinas Pangan Provinsi Sumatera Barat
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-sm">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">PPID Pelaksana</h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Sekretaris Dinas Pangan Provinsi Sumatera Barat
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200 shadow-sm">
                  <div className="text-center">
                    <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Tim Teknis</h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Koordinator dan Anggota Tim Teknis PPID
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#1B4332]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Informasi Kontak
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-gray-800 text-sm font-medium">📧 Email PPID</p>
                    <p className="text-gray-900 font-semibold">ppid@disanpangan.sumbar.go.id</p>
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">📞 Telepon</p>
                    <p className="text-gray-900 font-semibold">(0751) 123456</p>
                  </div>
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

export default StrukturOrganisasiPPID;