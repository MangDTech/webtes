import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const InformasiSertaMerta = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const allDocuments = [
    { nama: "Informasi mengenai racun pada bahan makanan yang dikonsumsi pleh masyarakat", tahun: "2023" },
    { nama: "Pengumuman Tender Penyediaan Beras Cadangan Pangan Pemerintah", tahun: "2024" },
    { nama: "Informasi Kasus Keamanan Pangan Terkini", tahun: "2024" },
    { nama: "Peringatan Dini Kontaminasi Bahan Pangan", tahun: "2024" },
    { nama: "Hasil Inspeksi Mendadak Fasilitas Pangan", tahun: "2024" },
    { nama: "Informasi Penarikan Produk Pangan dari Peredaran", tahun: "2024" },
    { nama: "Laporan Insiden Keamanan Pangan", tahun: "2023" },
    { nama: "Pengumuman Status Darurat Pangan Daerah", tahun: "2023" },
    { nama: "Informasi Cuaca Ekstrem dan Dampak Ketahanan Pangan", tahun: "2024" },
    { nama: "Hasil Pemeriksaan Laboratorium Sampel Pangan Mendesak", tahun: "2024" },
    { nama: "Pengumuman Bantuan Pangan Darurat", tahun: "2023" },
    { nama: "Informasi Gangguan Distribusi Pangan", tahun: "2024" },
    { nama: "Laporan Kondisi Stok Pangan Strategis", tahun: "2024" },
    { nama: "Peringatan Kontaminasi Air untuk Produksi Pangan", tahun: "2023" },
    { nama: "Informasi Lonjakan Harga Pangan Pokok", tahun: "2024" }
  ];

  // Filter documents based on search term
  const filteredDocuments = allDocuments.filter(doc =>
    doc.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.tahun.includes(searchTerm)
  );

  // Calculate pagination
  const totalItems = filteredDocuments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, endIndex);

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Informasi Serta Merta
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                PPID Dinas Ketahanan Pangan Provinsi Sumatera Barat
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex text-sm text-gray-600">
                <a href="/" className="hover:text-[#1B4332]">Home</a>
                <span className="mx-2">/</span>
                <a href="#" className="hover:text-[#1B4332]">PPID</a>
                <span className="mx-2">/</span>
                <span className="text-[#1B4332] font-medium">Informasi Serta Merta</span>
              </nav>
            </div>

            {/* PPID Header */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-3xl font-bold">PPID</h2>
                <p className="text-green-100 mt-2">Pejabat Pengelola Informasi dan Dokumentasi</p>
              </div>
              
              <div className="p-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">
                    🚨 Tentang Informasi Serta Merta
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Informasi yang wajib disampaikan serta merta adalah informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum. Informasi ini harus diumumkan secara berkala dan langsung saat terjadi peristiwa penting, termasuk informasi tentang keamanan pangan, kontaminasi bahan makanan, kondisi darurat pangan, dan peringatan dini terkait ketahanan pangan.
                  </p>
                </div>

                {/* Table Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Show</span>
                    <select 
                      value={itemsPerPage} 
                      onChange={handleItemsPerPageChange}
                      className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    <span className="text-gray-700">entries</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Search:</span>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B4332] w-64"
                      placeholder="Cari dokumen..."
                    />
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Nama Dokumen
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-32">
                          Tahun
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 w-32">
                          #
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDocuments.map((doc, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">
                            {doc.nama}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">
                            {doc.tahun}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <button className="bg-[#1B4332] text-white px-4 py-2 rounded hover:bg-[#2D5A27] transition-colors text-sm">
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Info and Pagination */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
                  <div className="text-gray-700">
                    Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
                    {searchTerm && (
                      <span className="text-[#1B4332]"> (filtered from {allDocuments.length} total entries)</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {[...Array(Math.min(5, totalPages))].map((_, index) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = index + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = index + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + index;
                      } else {
                        pageNumber = currentPage - 2 + index;
                      }
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-3 py-2 border rounded ${
                            currentPage === pageNumber
                              ? 'bg-[#1B4332] text-white border-[#1B4332]'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="px-2">...</span>
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Karakteristik Informasi */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-red-700 mb-4">
                  ⚡ Karakteristik Informasi Serta Merta
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Mengancam hajat hidup orang banyak</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Berkaitan dengan ketertiban umum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Harus diumumkan secara berkala</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Disampaikan langsung saat terjadi</span>
                  </li>
                </ul>
              </div>

              {/* Jenis Informasi */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-orange-700 mb-4">
                  📢 Jenis Informasi yang Diumumkan
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Kontaminasi dan keracunan pangan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Penarikan produk dari peredaran</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Kondisi darurat pangan daerah</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Gangguan distribusi pangan</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mekanisme Penyampaian */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-blue-600 text-2xl">
                    📋
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">
                    Mekanisme Penyampaian Informasi Serta Merta
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Informasi serta merta disampaikan melalui berbagai kanal untuk memastikan jangkauan yang luas:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Pengumuman melalui website resmi Dinas Ketahanan Pangan</li>
                    <li>Siaran pers dan konferensi pers</li>
                    <li>Media sosial dan aplikasi pesan instan</li>
                    <li>Koordinasi dengan media massa lokal dan nasional</li>
                    <li>Pemberitahuan langsung kepada stakeholder terkait</li>
                    <li>Sistem peringatan dini melalui SMS broadcast</li>
                  </ol>
                </div>
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