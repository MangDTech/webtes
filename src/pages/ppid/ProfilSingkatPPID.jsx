import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function ProfilSingkatPPID() {
  const definisiList = [
    {
      id: 1,
      title: "Definisi dan Fungsi PPID",
      content: "PPID berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik.",
      category: "Definisi PPID"
    },
    {
      id: 2,
      title: "Fungsi Utama PPID",
      content: "Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.",
      category: "Fungsi Utama"
    }
  ];

  const dasarHukumList = [
    {
      id: 3,
      title: "Undang-undang No 14 Tahun 2008 Tentang Keterbukaan Informasi Umum",
      content: "Dasar hukum utama yang mengatur keterbukaan informasi publik di Indonesia.",
      category: "Dasar Hukum"
    },
    {
      id: 4,
      title: "Peraturan Pemerintah Nomor 61 Tahun 2010",
      content: "Tentang Pelaksanaan Undang-undang Nomor 14 Tahun 2010 Tentang Keterbukaan Informasi Publik.",
      category: "Dasar Hukum"
    },
    {
      id: 5,
      title: "Peraturan Gubernur Sumatera Barat Nomor 6 Tahun 2017",
      content: "Tentang Pedoman Pengelolaan Informasi dan Dokumentasi Di Lingkungan Pemerintah Provinsi Sumatera Barat.",
      category: "Dasar Hukum"
    }
  ];

  const tanggungJawabList = [
    {
      id: 6,
      title: "Penyimpanan Informasi",
      content: "Bertanggung jawab dalam penyimpanan informasi dan dokumentasi dengan sistem yang terorganisir.",
      category: "Tanggung Jawab"
    },
    {
      id: 7,
      title: "Pelayanan Informasi Publik",
      content: "Memberikan pelayanan informasi kepada masyarakat sesuai dengan standar yang ditetapkan.",
      category: "Tanggung Jawab"
    }
  ];

  const allItems = [...definisiList, ...dasarHukumList, ...tanggungJawabList];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            PPID
          </h1>
          <div className="w-32 h-1 bg-purple-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Pejabat Pengelola Informasi dan Dokumentasi</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {allItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex">
                {/* Document Icon */}
                <div className="w-48 h-40 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <div className="relative">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
                    </svg>
                    {/* Small icon overlay */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Informasi Resmi</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Layanan Publik</span>
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
      </div>
      
      <Footer />
    </div>
  );
}

export default ProfilSingkatPPID;
