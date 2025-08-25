import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";

function Video() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Data video-video dari website
  const videoItems = [
    {
      id: 1,
      title: "Hari Pangan Sedunia Ke-44",
      date: "14 Oct 2024 14:10:42",
      author: "Administrator",
      views: "892 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Peringatan Hari Pangan Sedunia ke-44 di Sumatera Barat dengan tema 'Makanan Untuk Semua'."
    },
    {
      id: 2,
      title: "Inovasi Toko Tani Indonesia Center (TTIC) Sumbar",
      date: "09 May 2020 09:05:10",
      author: "Administrator",
      views: "1,245 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Program inovasi Toko Tani Indonesia Center di Sumatera Barat untuk mendukung petani lokal."
    },
    {
      id: 3,
      title: "Workshop Keamanan Pangan 2024",
      date: "15 Aug 2024 10:30:15",
      author: "Administrator",
      views: "567 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Workshop peningkatan pemahaman keamanan pangan untuk pelaku usaha di Sumatera Barat."
    },
    {
      id: 4,
      title: "Festival Pangan Nusantara 2024",
      date: "22 Jul 2024 13:45:30",
      author: "Administrator",
      views: "1,034 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Festival Pangan Nusantara dan BAPANAS Awards 2024 di Sumatera Barat."
    },
    {
      id: 5,
      title: "Sosialisasi Program B2SA",
      date: "10 Jun 2024 08:20:45",
      author: "Administrator",
      views: "789 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Sosialisasi Program Beragam, Bergizi, Seimbang, dan Aman (B2SA) kepada masyarakat."
    },
    {
      id: 6,
      title: "Monitoring Ketahanan Pangan Daerah",
      date: "28 Apr 2024 14:15:20",
      author: "Administrator",
      views: "623 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Kegiatan monitoring dan evaluasi ketahanan pangan di berbagai daerah Sumatera Barat."
    },
    {
      id: 7,
      title: "Pelatihan Diversifikasi Pangan",
      date: "18 Mar 2024 11:00:00",
      author: "Administrator",
      views: "445 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Pelatihan diversifikasi pangan lokal untuk meningkatkan nilai tambah produk petani."
    },
    {
      id: 8,
      title: "Launching KRPL 2024",
      date: "05 Feb 2024 09:30:15",
      author: "Administrator",
      views: "856 view",
      thumbnail: "/placeholder-video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Peluncuran program Kawasan Rumah Pangan Lestari (KRPL) tahun 2024."
    }
  ];

  // Hitung total halaman
  const totalPages = Math.ceil(videoItems.length / itemsPerPage);
  
  // Ambil data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videoItems.slice(indexOfFirstItem, indexOfLastItem);

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
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Index Video</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Koleksi video dokumentasi kegiatan dan program-program Dinas Pangan Provinsi Sumatera Barat.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Video Thumbnail */}
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  {item.views}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">
                  {item.date}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-red-600 cursor-pointer line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Read More Button */}
                <div className="flex justify-end">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    READ MORE
                  </button>
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
                    ? 'bg-red-600 text-white'
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
                  : 'text-red-600 hover:text-red-800 cursor-pointer'
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
          Menampilkan {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, videoItems.length)} dari {videoItems.length} video
        </div> */}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Statistik Video</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{videoItems.length}+</div>
              <div className="text-sm text-gray-600">Total Video</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">25+</div>
              <div className="text-sm text-gray-600">Program Terdokumentasi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">15+</div>
              <div className="text-sm text-gray-600">Kategori Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Video;
