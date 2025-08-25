import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";

function Kegiatan() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Data kegiatan-kegiatan dari website
  const kegiatanItems = [
    {
      id: 1,
      title: "Peringatan Hari Pangan Sedunia Tingkat Sumatera Barat",
      startDate: "Start 29 September 2017 WIB",
      endDate: "End 01 Oktober 2017 WIB",
      author: "Administrator",
      publishDate: "13 September 2017 13:13:33 WIB",
      views: "1,245 view",
      image: "/placeholder-image.jpg",
      description: "Peringatan Hari Pangan Sedunia tingkat Provinsi Sumatera Barat dengan berbagai kegiatan edukasi dan pameran pangan lokal."
    },
    {
      id: 2,
      title: "Workshop Perencanaan Pembangunan Ketahanan Pangan Lingkup BKP Sumbar",
      startDate: "Start 02 Maret 2017 WIB",
      endDate: "End 04 Maret 2017 WIB",
      author: "Dimas Dwi Randa",
      publishDate: "06 Maret 2017 14:24:47 WIB",
      views: "867 view",
      image: "/placeholder-image.jpg",
      description: "Pertemuan ini dilaksanakan untuk menyusun dokumen-dokumen yang berkaitan dengan pelaksanaan Program Ketahanan Pangan."
    },
    {
      id: 3,
      title: "Festival Pangan Nusantara dan BAPANAS Awards 2024",
      startDate: "Start 20 Juli 2024 WIB",
      endDate: "End 22 Juli 2024 WIB",
      author: "Administrator",
      publishDate: "15 Juli 2024 10:30:15 WIB",
      views: "2,156 view",
      image: "/placeholder-image.jpg",
      description: "Festival pangan nusantara dengan pameran produk unggulan daerah dan pemberian penghargaan BAPANAS Awards."
    },
    {
      id: 4,
      title: "Sosialisasi Program B2SA (Beragam, Bergizi, Seimbang, Aman)",
      startDate: "Start 15 Juni 2024 WIB",
      endDate: "End 17 Juni 2024 WIB",
      author: "Administrator",
      publishDate: "10 Juni 2024 08:45:20 WIB",
      views: "1,534 view",
      image: "/placeholder-image.jpg",
      description: "Sosialisasi program konsumsi pangan B2SA kepada masyarakat untuk meningkatkan kualitas gizi dan kesehatan."
    },
    {
      id: 5,
      title: "Workshop Keamanan Pangan untuk UMKM",
      startDate: "Start 08 Mei 2024 WIB",
      endDate: "End 10 Mei 2024 WIB",
      author: "Administrator",
      publishDate: "03 Mei 2024 14:20:30 WIB",
      views: "789 view",
      image: "/placeholder-image.jpg",
      description: "Workshop peningkatan pemahaman keamanan pangan untuk pelaku usaha mikro, kecil, dan menengah."
    },
    {
      id: 6,
      title: "Monitoring Harga Pangan Pokok",
      startDate: "Start 25 April 2024 WIB",
      endDate: "End 26 April 2024 WIB",
      author: "Administrator",
      publishDate: "20 April 2024 09:15:45 WIB",
      views: "623 view",
      image: "/placeholder-image.jpg",
      description: "Kegiatan monitoring harga pangan pokok di berbagai pasar tradisional dan modern se-Sumatera Barat."
    },
    {
      id: 7,
      title: "Pelatihan Diversifikasi Pangan Lokal",
      startDate: "Start 18 Maret 2024 WIB",
      endDate: "End 20 Maret 2024 WIB",
      author: "Administrator",
      publishDate: "15 Maret 2024 11:30:15 WIB",
      views: "1,012 view",
      image: "/placeholder-image.jpg",
      description: "Pelatihan pengolahan dan diversifikasi pangan lokal untuk meningkatkan nilai tambah produk petani."
    },
    {
      id: 8,
      title: "Launching Program KRPL (Kawasan Rumah Pangan Lestari)",
      startDate: "Start 05 Februari 2024 WIB",
      endDate: "End 07 Februari 2024 WIB",
      author: "Administrator",
      publishDate: "01 Februari 2024 13:45:20 WIB",
      views: "1,678 view",
      image: "/placeholder-image.jpg",
      description: "Peluncuran program Kawasan Rumah Pangan Lestari untuk mendukung ketahanan pangan keluarga."
    },
    {
      id: 9,
      title: "Rapat Koordinasi Ketahanan Pangan Lintas Sektor",
      startDate: "Start 15 Januari 2024 WIB",
      endDate: "End 16 Januari 2024 WIB",
      author: "Administrator",
      publishDate: "10 Januari 2024 08:20:30 WIB",
      views: "445 view",
      image: "/placeholder-image.jpg",
      description: "Rapat koordinasi dengan berbagai instansi terkait untuk memperkuat sistem ketahanan pangan daerah."
    }
  ];

  // Hitung total halaman
  const totalPages = Math.ceil(kegiatanItems.length / itemsPerPage);
  
  // Ambil data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kegiatanItems.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi untuk halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  // Fungsi untuk halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Kegiatan</h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Dokumentasi berbagai kegiatan dan program yang dilaksanakan oleh Dinas Pangan Provinsi Sumatera Barat.
          </p>
        </div>

        {/* Kegiatan List */}
        <div className="space-y-6">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 cursor-pointer">
                    {item.title}
                  </h3>
                  
                  {/* Date Range */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                      {item.startDate}
                    </span>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                      {item.endDate}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="text-xs text-gray-500 space-y-1 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      by: {item.author}, {item.publishDate}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {item.views}
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700 cursor-pointer'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Render nomor halaman */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-full font-medium ${
                  currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 font-medium ${
                currentPage === totalPages 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-purple-600 hover:text-purple-800 cursor-pointer'
              }`}
            >
              Next
            </button>
            
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700 cursor-pointer'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Pagination Info
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          Menampilkan {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, kegiatanItems.length)} dari {kegiatanItems.length} kegiatan
        </div> */}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Statistik Kegiatan</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{kegiatanItems.length}+</div>
              <div className="text-sm text-gray-600">Total Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Program Dilaksanakan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">20+</div>
              <div className="text-sm text-gray-600">Kategori Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">100K+</div>
              <div className="text-sm text-gray-600">Peserta Terlibat</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Kegiatan;
