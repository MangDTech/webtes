import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Berita() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 6;

  // Data berita dummy
  const beritaData = [
    {
      id: 1,
      title: "Dinas Pangan Sumbar Gelar Sosialisasi Program Ketahanan Pangan 2024",
      excerpt: "Dalam upaya meningkatkan ketahanan pangan di Sumatera Barat, Dinas Pangan menggelar sosialisasi program unggulan...",
      image: "/pimpinan.webp",
      date: "2024-01-15",
      category: "Program",
      author: "Admin Dinas Pangan"
    },
    {
      id: 2,
      title: "Monitoring Stok Beras di Gudang Bulog Sumbar",
      excerpt: "Tim Dinas Pangan melakukan monitoring rutin terhadap stok beras di berbagai gudang Bulog untuk memastikan...",
      image: "/pimpinan.webp",
      date: "2024-01-12",
      category: "Kegiatan",
      author: "Admin Dinas Pangan"
    },
    {
      id: 3,
      title: "Petani Sumbar Raih Penghargaan Nasional Produktivitas Padi",
      excerpt: "Kelompok tani dari Kabupaten Tanah Datar berhasil meraih penghargaan tingkat nasional atas prestasi...",
      image: "/pimpinan.webp",
      date: "2024-01-10",
      category: "Prestasi",
      author: "Admin Dinas Pangan"
    },
    {
      id: 4,
      title: "Workshop Diversifikasi Pangan Lokal di Padang",
      excerpt: "Dinas Pangan menyelenggarakan workshop diversifikasi pangan lokal yang dihadiri puluhan pelaku usaha...",
      image: "/pimpinan.webp",
      date: "2024-01-08",
      category: "Workshop",
      author: "Admin Dinas Pangan"
    },
    {
      id: 5,
      title: "Penyaluran Bantuan Benih Padi Unggul kepada Petani",
      excerpt: "Sebanyak 1000 kg benih padi unggul disalurkan kepada petani di 5 kabupaten/kota di Sumatera Barat...",
      image: "/pimpinan.webp",
      date: "2024-01-05",
      category: "Program",
      author: "Admin Dinas Pangan"
    },
    {
      id: 6,
      title: "Rapat Koordinasi Stabilisasi Harga Pangan",
      excerpt: "Dinas Pangan menggelar rapat koordinasi dengan berbagai stakeholder untuk menjaga stabilitas harga pangan...",
      image: "/pimpinan.webp",
      date: "2024-01-03",
      category: "Kegiatan",
      author: "Admin Dinas Pangan"
    },
    {
      id: 7,
      title: "Inovasi Teknologi Penyimpanan Pangan di Era Digital",
      excerpt: "Penerapan teknologi modern dalam penyimpanan pangan menjadi kunci dalam menjaga kualitas dan mengurangi...",
      image: "/pimpinan.webp",
      date: "2023-12-28",
      category: "Inovasi",
      author: "Admin Dinas Pangan"
    },
    {
      id: 8,
      title: "Pelatihan KRPL untuk Kelompok Wanita Tani",
      excerpt: "Program Kawasan Rumah Pangan Lestari (KRPL) terus dikembangkan melalui pelatihan intensif kepada...",
      image: "/pimpinan.webp",
      date: "2023-12-25",
      category: "Pelatihan",
      author: "Admin Dinas Pangan"
    },
    {
      id: 9,
      title: "Evaluasi Program Lumbung Pangan Desa",
      excerpt: "Evaluasi menyeluruh terhadap program lumbung pangan desa menunjukkan peningkatan signifikan dalam...",
      image: "/pimpinan.webp",
      date: "2023-12-22",
      category: "Evaluasi",
      author: "Admin Dinas Pangan"
    }
  ];

  const categories = ['all', 'Program', 'Kegiatan', 'Prestasi', 'Workshop', 'Inovasi', 'Pelatihan', 'Evaluasi'];

  // Filter berita berdasarkan kategori
  const filteredBerita = selectedCategory === 'all' 
    ? beritaData 
    : beritaData.filter(berita => berita.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBerita = filteredBerita.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold text-[#0C3823] mb-2">Berita Dinas Pangan</h1>
            <p className="text-gray-600">Informasi terkini seputar kegiatan dan program Dinas Pangan Provinsi Sumatera Barat</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#0C3823] mb-4">Kategori Berita</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#0C3823] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'Semua Kategori' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-[#0C3823] text-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Informasi</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Total Berita:</div>
                    <div>{beritaData.length} artikel</div>
                  </div>
                  <div>
                    <div className="font-medium">Terakhir Update:</div>
                    <div>{formatDate('2024-01-15')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Berita Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentBerita.map((berita) => (
                  <div key={berita.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={berita.image} 
                      alt={berita.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-[#0C3823] text-white px-2 py-1 rounded text-xs">
                          {berita.category}
                        </span>
                        <span>{formatDate(berita.date)}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0C3823] mb-3 line-clamp-2">
                        {berita.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {berita.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Oleh: {berita.author}</span>
                        <button className="text-[#0C3823] font-medium text-sm hover:text-[#1B4332] transition-colors">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                  >
                    ←
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        currentPage === index + 1
                          ? 'bg-[#0C3823] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Berita;
