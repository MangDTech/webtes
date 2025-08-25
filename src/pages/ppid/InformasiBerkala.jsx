import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const InformasiBerkala = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample documents data
  const allDocuments = [
    {
      title: "Profil Badan Publik",
      date: "2024-01-15",
      size: "2.5 MB",
      link: "#",
      description: "Profil lengkap badan publik dan struktur organisasi"
    },
    {
      title: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) 2023",
      date: "2024-02-20",
      size: "3.8 MB",
      link: "#",
      description: "Laporan kinerja tahun 2023 sesuai dengan target yang ditetapkan"
    },
    {
      title: "Rencana Strategis (Renstra) 2021-2026",
      date: "2024-01-10",
      size: "4.2 MB",
      link: "#",
      description: "Dokumen perencanaan strategis jangka menengah"
    },
    {
      title: "Laporan Keuangan Tahun 2023",
      date: "2024-03-15",
      size: "5.1 MB",
      link: "#",
      description: "Laporan keuangan audited tahun anggaran 2023"
    },
    {
      title: "Daftar Informasi Publik (DIP)",
      date: "2024-01-05",
      size: "1.8 MB",
      link: "#",
      description: "Katalog lengkap informasi publik yang tersedia"
    },
    {
      title: "Standar Operasional Prosedur (SOP) Pelayanan",
      date: "2024-02-10",
      size: "2.9 MB",
      link: "#",
      description: "Prosedur standar dalam memberikan pelayanan kepada masyarakat"
    },
    {
      title: "Peraturan Perundang-undangan Terkait",
      date: "2024-01-25",
      size: "3.2 MB",
      link: "#",
      description: "Kumpulan peraturan yang menjadi dasar hukum operasional"
    },
    {
      title: "Data Statistik Pelayanan Publik",
      date: "2024-03-01",
      size: "1.5 MB",
      link: "#",
      description: "Data statistik layanan publik dan tingkat kepuasan masyarakat"
    },
    {
      title: "Rencana Kerja Anggaran Tahunan (RKAT)",
      date: "2024-01-20",
      size: "4.5 MB",
      link: "#",
      description: "Rencana anggaran dan target kinerja tahunan"
    },
    {
      title: "Maklumat Pelayanan",
      date: "2024-02-05",
      size: "0.8 MB",
      link: "#",
      description: "Komitmen pelayanan dan standar kualitas layanan"
    }
  ];

  // Filter documents based on search term
  const filteredDocuments = allDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-between bg-white px-6 py-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-700">
          Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredDocuments.length)} dari {filteredDocuments.length} dokumen
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Sebelumnya
          </button>
          
          {startPage > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                1
              </button>
              {startPage > 2 && <span className="px-2 text-gray-500">...</span>}
            </>
          )}
          
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPage === number
                  ? 'bg-[#1B4332] text-white border border-[#1B4332]'
                  : 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {number}
            </button>
          ))}
          
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="px-2 text-gray-500">...</span>}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
            
            <div className="p-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                  </svg>
                  Tentang Informasi Secara Berkala
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Informasi yang wajib disediakan dan diumumkan secara berkala adalah informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan dari masyarakat. Informasi ini mencakup berbagai dokumen penting yang berkaitan dengan penyelenggaraan pemerintahan dan pelayanan publik.
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search Box */}
              <div className="flex-1 max-w-md">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Cari Dokumen</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Masukkan kata kunci..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all text-gray-800"
                  />
                  <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Results Per Page */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-800 whitespace-nowrap">Tampilkan:</label>
                <select 
                  value={itemsPerPage} 
                  onChange={handleItemsPerPageChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all bg-white"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-700 whitespace-nowrap">per halaman</span>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredDocuments.length)} dari {filteredDocuments.length} dokumen
                  {searchTerm && (
                    <span className="ml-2 text-[#1B4332] font-medium">
                      (hasil pencarian: "{searchTerm}")
                    </span>
                  )}
                </span>
                <span className="bg-[#1B4332] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Total: {allDocuments.length} dokumen
                </span>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                </svg>
                Daftar Dokumen Informasi Berkala
              </h3>
              <p className="text-green-100 text-sm mt-1">Klik pada nama dokumen untuk mengunduh</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
                      No.
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Nama Dokumen
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Tanggal Upload
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Ukuran File
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentDocuments.length > 0 ? (
                    currentDocuments.map((doc, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-b">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm border-b">
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                            </svg>
                            <div>
                              <a
                                href={doc.link}
                                className="text-[#1B4332] hover:text-[#2D5A27] font-medium transition-colors hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {doc.title}
                              </a>
                              {doc.description && (
                                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                                  {doc.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-b">
                          {doc.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-b">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {doc.size}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center border-b">
                          <a
                            href={doc.link}
                            className="inline-flex items-center px-3 py-2 bg-[#1B4332] text-white text-xs font-medium rounded-lg hover:bg-[#2D5A27] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center">
                          <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-gray-500 text-lg font-medium">Tidak ada dokumen ditemukan</p>
                          {searchTerm && (
                            <p className="text-gray-400 text-sm mt-2">
                              Coba gunakan kata kunci lain atau hapus filter pencarian
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && renderPagination()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformasiBerkala;
