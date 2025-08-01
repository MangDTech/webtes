import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

function Foto() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Data foto-foto dari gallery
  const galleryItems = [
    {
      id: 1,
      title: "APN 2023",
      date: "01 Juli 2024 15:07:41 WIB",
      author: "administrator2",
      views: "160 view",
      image: "/placeholder-image.jpg",
      description: "Kegiatan Asesmen Pangan Nasional (APN) tahun 2023 yang dilaksanakan di berbagai daerah."
    },
    {
      id: 2,
      title: "Launching LDPM Prov. Sumbar dan KRPL Kab. Agam 2015",
      date: "16 September 2016 00:00:00 WIB",
      author: "Administrator",
      views: "1195 view",
      image: "/placeholder-image.jpg",
      description: "Peluncuran program Lahan Diversifikasi Pangan Masyarakat (LDPM) dan Kawasan Rumah Pangan Lestari (KRPL)."
    },
    {
      id: 3,
      title: "APN 2024",
      date: "17 Desember 2024 09:08:14 WIB",
      author: "administrator2",
      views: "56 view",
      image: "/placeholder-image.jpg",
      description: "Asesmen Pangan Nasional tahun 2024 dengan fokus evaluasi ketahanan pangan daerah."
    },
    {
      id: 4,
      title: "Penilaian Apresiasi P-KRPL Pada KWT Kab/Kota",
      date: "05 Desember 2024 09:56:03 WIB",
      author: "administrator2",
      views: "72 view",
      image: "/placeholder-image.jpg",
      description: "Kegiatan penilaian apresiasi Program Kawasan Rumah Pangan Lestari pada Kelompok Wanita Tani."
    },
    {
      id: 5,
      title: "Festival Pangan Nusantara tahun 2024 dan BAPANAS Awards 2023",
      date: "30 Juli 2024 10:56:36 WIB",
      author: "administrator2",
      views: "160 view",
      image: "/placeholder-image.jpg",
      description: "Festival Pangan Nusantara dan pemberian penghargaan BAPANAS Awards untuk pencapaian terbaik."
    },
    {
      id: 6,
      title: "Sosialisasi Gerakan Konsumsi Pangan B2SA",
      date: "15 Juni 2024 14:30:25 WIB",
      author: "administrator2",
      views: "89 view",
      image: "/placeholder-image.jpg",
      description: "Kegiatan sosialisasi Gerakan Konsumsi Pangan Beragam, Bergizi, Seimbang, dan Aman (B2SA)."
    },
    {
      id: 7,
      title: "Workshop Keamanan Pangan",
      date: "10 Mei 2024 08:00:00 WIB",
      author: "administrator1",
      views: "145 view",
      image: "/placeholder-image.jpg",
      description: "Workshop peningkatan pemahaman tentang keamanan pangan untuk pelaku usaha mikro dan kecil."
    },
    {
      id: 8,
      title: "Monitoring Harga Pangan Pokok",
      date: "25 April 2024 16:15:30 WIB",
      author: "administrator2",
      views: "78 view",
      image: "/placeholder-image.jpg",
      description: "Kegiatan monitoring harga pangan pokok di berbagai pasar tradisional di Sumatera Barat."
    },
    {
      id: 9,
      title: "Pelatihan Diversifikasi Pangan Lokal",
      date: "18 Maret 2024 09:45:12 WIB",
      author: "administrator1",
      views: "234 view",
      image: "/placeholder-image.jpg",
      description: "Pelatihan pengolahan dan diversifikasi pangan lokal untuk meningkatkan nilai tambah produk."
    },
    {
      id: 10,
      title: "Rapat Koordinasi Ketahanan Pangan",
      date: "05 Februari 2024 13:20:45 WIB",
      author: "administrator2",
      views: "167 view",
      image: "/placeholder-image.jpg",
      description: "Rapat koordinasi lintas sektor untuk memperkuat sistem ketahanan pangan daerah."
    },
    {
      id: 11,
      title: "Pameran Produk Pangan Unggulan",
      date: "22 Januari 2024 11:00:00 WIB",
      author: "administrator1",
      views: "298 view",
      image: "/placeholder-image.jpg",
      description: "Pameran produk pangan unggulan daerah dalam rangka promosi produk lokal Sumatera Barat."
    },
    {
      id: 12,
      title: "Evaluasi Program Gizi Masyarakat",
      date: "15 Desember 2023 14:30:15 WIB",
      author: "administrator2",
      views: "124 view",
      image: "/placeholder-image.jpg",
      description: "Evaluasi tahunan program peningkatan status gizi masyarakat di wilayah Sumatera Barat."
    }
  ];

  // Hitung total halaman
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  
  // Ambil data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll ke atas saat ganti halaman
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
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Gallery</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Dokumentasi kegiatan dan program-program Dinas Pangan Provinsi Sumatera Barat dalam mendukung ketahanan pangan daerah.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3 hover:text-blue-800 cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Meta Information */}
                <div className="text-xs text-gray-500 space-y-1 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    by: {item.author}
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
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
                    ? 'bg-blue-600 text-white'
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
                  : 'text-blue-600 hover:text-blue-800 cursor-pointer'
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
          Menampilkan {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, galleryItems.length)} dari {galleryItems.length} foto
        </div> */}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Statistik Gallery</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{galleryItems.length}+</div>
              <div className="text-sm text-gray-600">Total Foto</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Event Terdokumentasi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">25+</div>
              <div className="text-sm text-gray-600">Program Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">10K+</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Foto;
