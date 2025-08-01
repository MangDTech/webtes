import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function InformasiBerkala() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const allDocuments = [
    { nama: "Profil Badan Publik", tahun: "2017" },
    { nama: "ASN DINAS PANGAN 2018", tahun: "2019" },
    { nama: "Bezetting", tahun: "2025" },
    { nama: "Bezzeting 2023", tahun: "2023" },
    { nama: "Brosur Toko Tani Indonesia Center (TTIC) Rumah Inflasi", tahun: "2018" },
    { nama: "Buku Berita Ketahanan Pangan 2017", tahun: "2018" },
    { nama: "Buku Ketahanan Pangan 2015", tahun: "2016" },
    { nama: "Buku Pelaksanaan Program Ketahanan Pangan Tahun 2017", tahun: "2018" },
    { nama: "Buku Saku 2017", tahun: "2018" },
    { nama: "Cascading/Pohon Kinerja", tahun: "2025" },
    { nama: "Data Pegawai Dinas Ketahanan Pangan", tahun: "2024" },
    { nama: "DIP Tahun 2023", tahun: "2023" },
    { nama: "DPA Tahun 2024", tahun: "2024" },
    { nama: "E-Katalog Pengadaan Barang/Jasa", tahun: "2023" },
    { nama: "Formulir Permohonan Informasi", tahun: "2022" },
    { nama: "IKK Tahun 2023", tahun: "2023" },
    { nama: "Indikator Kinerja Utama (IKU)", tahun: "2024" },
    { nama: "Informasi Kegiatan", tahun: "2024" },
    { nama: "Jadwal Pelayanan", tahun: "2024" },
    { nama: "Kamus Data", tahun: "2023" },
    { nama: "LAKIP Tahun 2022", tahun: "2023" },
    { nama: "LAKIP Tahun 2023", tahun: "2024" },
    { nama: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP)", tahun: "2024" },
    { nama: "Laporan Keuangan", tahun: "2024" },
    { nama: "Laporan Penyelenggaraan Pemerintahan Daerah (LPPD)", tahun: "2024" },
    { nama: "Maklumat Pelayanan", tahun: "2024" },
    { nama: "Mekanisme Pengaduan Masyarakat", tahun: "2023" },
    { nama: "Pagu Anggaran SKPD", tahun: "2024" },
    { nama: "Pejabat Struktural", tahun: "2024" },
    { nama: "Penyediaan dan Pelayanan Informasi Publik", tahun: "2023" },
    { nama: "Peraturan Kepala Daerah", tahun: "2024" },
    { nama: "Peraturan, Keputusan, dan/atau Kebijakan", tahun: "2024" },
    { nama: "Perjanjian Kerja Sama", tahun: "2023" },
    { nama: "Prosedur Memperoleh Informasi", tahun: "2023" },
    { nama: "Prosedur Pengaduan", tahun: "2023" },
    { nama: "Program Kerja", tahun: "2024" },
    { nama: "Putusan Komisioner", tahun: "2023" },
    { nama: "Realisasi Anggaran", tahun: "2024" },
    { nama: "Rencana Anggaran Biaya", tahun: "2024" },
    { nama: "Rencana Strategis (Renstra)", tahun: "2024" },
    { nama: "Ringkasan Informasi tentang Program Proyek", tahun: "2024" },
    { nama: "RPJMD Provinsi Sumatera Barat", tahun: "2022" },
    { nama: "Standar Operasional Prosedur (SOP)", tahun: "2024" },
    { nama: "Standar Pelayanan", tahun: "2024" },
    { nama: "Struktur Organisasi", tahun: "2024" },
    { nama: "Surat Keputusan Kepala Dinas", tahun: "2024" },
    { nama: "Tarif Layanan", tahun: "2024" },
    { nama: "Tata Cara Memperoleh Informasi", tahun: "2023" },
    { nama: "Tugas, Fungsi, dan Kewenangan", tahun: "2024" },
    { nama: "Visi, Misi, dan Tujuan", tahun: "2024" }
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
                Informasi Secara Berkala
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
                <span className="text-[#1B4332] font-medium">Informasi Secara Berkala</span>
              </nav>
            </div>

            {/* PPID Header */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-3xl font-bold">PPID</h2>
                <p className="text-green-100 mt-2">Pejabat Pengelola Informasi dan Dokumentasi</p>
              </div>
              
              <div className="p-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">
                    📋 Tentang Informasi Secara Berkala
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Informasi yang wajib disediakan dan diumumkan secara berkala adalah informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan dari masyarakat. Informasi ini mencakup berbagai dokumen penting yang berkaitan dengan penyelenggaraan pemerintahan dan pelayanan publik.
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

            {/* Additional Info */}
            <div className="bg-green-50 border-l-4 border-[#1B4332] p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-[#1B4332] text-2xl">
                    ℹ️
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-[#1B4332] mb-2">
                    Informasi Tambahan
                  </h3>
                  <p className="text-gray-700">
                    Semua dokumen yang tercantum dalam daftar Informasi Secara Berkala ini tersedia untuk diakses oleh masyarakat sesuai dengan ketentuan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik. Untuk informasi lebih lanjut atau bantuan dalam mengakses dokumen, silakan hubungi PPID Dinas Ketahanan Pangan Provinsi Sumatera Barat.
                  </p>
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

export default InformasiBerkala;
