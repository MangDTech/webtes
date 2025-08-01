import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const InformasiSetiapSaat = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const allDocuments = [
    { nama: "BUKU PETUNJUK TEKNIS AKP CETAK", tahun: "2019" },
    { nama: "Data Sirup 2019", tahun: "2019" },
    { nama: "DATABASE 2018", tahun: "2019" },
    { nama: "DPA 19 Dinas Pangan", tahun: "2019" },
    { nama: "INFORMASI PUBLIK CAD PANGAN 2018", tahun: "2019" },
    { nama: "INFORMASI PUBLIK SEKSI CADANGAN PANGAN", tahun: "2019" },
    { nama: "Informasi Tentang Profil Badan Publik a. Kedudukan/Domisili/Alamat Lengkap", tahun: "2025" },
    { nama: "JUKLAKJUKNIS APBD 2018", tahun: "2019" },
    { nama: "JUKLAKJUKNIS APBN 2018", tahun: "2019" },
    { nama: "JUKNIS KRPL TAHUN 2018", tahun: "2019" },
    { nama: "Juknis AKP Tahun 2019", tahun: "2020" },
    { nama: "Juknis Beras Reserve 2019", tahun: "2020" },
    { nama: "Juknis Cadangan Pangan Masyarakat 2019", tahun: "2020" },
    { nama: "Juknis Gerakan Percepatan Penganekaragaman Konsumsi Pangan 2019", tahun: "2020" },
    { nama: "Juknis Kawasan Rumah Pangan Lestari 2019", tahun: "2020" },
    { nama: "Juknis Lumbung Pangan Masyarakat 2019", tahun: "2020" },
    { nama: "Juknis Optimalisasi Pekarangan 2019", tahun: "2020" },
    { nama: "Juknis PDRP 2019", tahun: "2020" },
    { nama: "Juknis Penyediaan dan Distribusi Cadangan Pangan 2019", tahun: "2020" },
    { nama: "Juknis Percepatan Diversifikasi Konsumsi Pangan Lokal 2019", tahun: "2020" },
    { nama: "Keputusan Kepala Dinas tentang Penetapan Standar Operasional Prosedur (SOP)", tahun: "2023" },
    { nama: "Laporan Akses Informasi Publik", tahun: "2024" },
    { nama: "Laporan Kegiatan dan Kinerja", tahun: "2024" },
    { nama: "Laporan Pengelolaan Lingkungan Hidup", tahun: "2024" },
    { nama: "Mekanisme Keberatan atas Pelayanan", tahun: "2023" },
    { nama: "Pedoman Pelaksanaan Program", tahun: "2024" },
    { nama: "Pedoman Sistem Manajemen Mutu", tahun: "2023" },
    { nama: "Peraturan Internal tentang Organisasi dan Tata Kerja", tahun: "2024" },
    { nama: "Petunjuk Pelaksanaan Kegiatan", tahun: "2024" },
    { nama: "Profil Pimpinan dan Pejabat Struktural", tahun: "2024" },
    { nama: "Prosedur Operasional Standar Pelayanan", tahun: "2024" },
    { nama: "Rencana Kerja dan Anggaran Tahunan (RKAT)", tahun: "2024" },
    { nama: "Ringkasan Hasil Audit Internal", tahun: "2024" },
    { nama: "Salinan Dokumen yang Diminta berdasarkan UU KIP", tahun: "2023" },
    { nama: "Standar Pelayanan Minimum (SPM)", tahun: "2024" },
    { nama: "Surat Keputusan tentang Kebijakan Teknis", tahun: "2024" },
    { nama: "Data Agregat Statistik", tahun: "2024" },
    { nama: "Informasi tentang Peraturan Perundang-undangan yang Berlaku", tahun: "2024" },
    { nama: "Informasi tentang Hak dan Kewajiban Badan Publik dan Masyarakat", tahun: "2023" }
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
                Informasi Setiap Saat
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
                <span className="text-[#1B4332] font-medium">Informasi Setiap Saat</span>
              </nav>
            </div>

            {/* PPID Header */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-3xl font-bold">PPID</h2>
                <p className="text-green-100 mt-2">Pejabat Pengelola Informasi dan Dokumentasi</p>
              </div>
              
              <div className="p-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">
                    🕐 Tentang Informasi Setiap Saat
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Informasi yang wajib tersedia setiap saat adalah informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik serta telah dinyatakan terbuka sebagai informasi yang dapat diakses oleh pengguna informasi bilamana ada permintaan. Informasi ini mencakup dokumen-dokumen teknis, laporan kegiatan, dan berbagai petunjuk pelaksanaan yang dapat diminta sewaktu-waktu oleh masyarakat.
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
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-blue-700 mb-4">
                  📋 Karakteristik Informasi Setiap Saat
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Informasi yang sudah dikuasai dan didokumentasikan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Dinyatakan terbuka untuk publik</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Dapat diakses berdasarkan permintaan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Tersedia dalam format yang mudah diakses</span>
                  </li>
                </ul>
              </div>

              {/* Jenis Dokumen */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-green-700 mb-4">
                  📄 Jenis Dokumen yang Tersedia
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Petunjuk Teknis dan Pelaksanaan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Laporan Kegiatan dan Kinerja</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Database dan Informasi Statistik</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>SOP dan Prosedur Operasional</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cara Mengakses */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-yellow-600 text-2xl">
                    💡
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-700 mb-2">
                    Cara Mengakses Informasi Setiap Saat
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Untuk mengakses informasi setiap saat, masyarakat dapat:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Mengajukan permohonan informasi secara tertulis kepada PPID</li>
                    <li>Menyebutkan secara jelas informasi yang diminta</li>
                    <li>Menyertakan identitas dan kontak yang dapat dihubungi</li>
                    <li>Menunggu proses verifikasi dan persiapan dokumen</li>
                    <li>Menerima informasi sesuai dengan ketentuan yang berlaku</li>
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

export default InformasiSetiapSaat;
