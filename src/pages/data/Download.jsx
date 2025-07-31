import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Download() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Data download dummy
  const downloadData = [
    {
      id: 1,
      title: "Laporan Ketahanan Pangan Sumbar 2023",
      description: "Laporan komprehensif mengenai kondisi ketahanan pangan di Provinsi Sumatera Barat tahun 2023",
      fileType: "PDF",
      fileSize: "2.5 MB",
      uploadDate: "2024-01-15",
      category: "Laporan",
      downloadCount: 145,
      fileName: "laporan-ketahanan-pangan-2023.pdf"
    },
    {
      id: 2,
      title: "Panduan Teknis KRPL (Kawasan Rumah Pangan Lestari)",
      description: "Panduan lengkap implementasi program Kawasan Rumah Pangan Lestari untuk kelompok tani",
      fileType: "PDF",
      fileSize: "1.8 MB",
      uploadDate: "2024-01-12",
      category: "Panduan",
      downloadCount: 89,
      fileName: "panduan-krpl-2024.pdf"
    },
    {
      id: 3,
      title: "Data Produksi Padi Sumbar 2023",
      description: "Data statistik produksi padi di seluruh kabupaten/kota Sumatera Barat tahun 2023",
      fileType: "XLSX",
      fileSize: "850 KB",
      uploadDate: "2024-01-10",
      category: "Data",
      downloadCount: 203,
      fileName: "data-produksi-padi-2023.xlsx"
    },
    {
      id: 4,
      title: "Formulir Permohonan Bantuan Benih",
      description: "Formulir resmi untuk pengajuan bantuan benih kepada kelompok tani",
      fileType: "DOCX",
      fileSize: "156 KB",
      uploadDate: "2024-01-08",
      category: "Formulir",
      downloadCount: 67,
      fileName: "formulir-bantuan-benih.docx"
    },
    {
      id: 5,
      title: "Peraturan Daerah No. 8 Tahun 2023",
      description: "Peraturan Daerah tentang Penyelenggaraan Ketahanan Pangan di Provinsi Sumatera Barat",
      fileType: "PDF",
      fileSize: "3.2 MB",
      uploadDate: "2024-01-05",
      category: "Peraturan",
      downloadCount: 124,
      fileName: "perda-no8-2023.pdf"
    },
    {
      id: 6,
      title: "Daftar Harga Pangan Harian",
      description: "Update harga komoditas pangan di pasar tradisional Sumatera Barat",
      fileType: "XLSX",
      fileSize: "245 KB",
      uploadDate: "2024-01-03",
      category: "Data",
      downloadCount: 312,
      fileName: "harga-pangan-harian.xlsx"
    },
    {
      id: 7,
      title: "Standar Operasional Prosedur (SOP) Distribusi Pangan",
      description: "SOP lengkap untuk proses distribusi bantuan pangan kepada masyarakat",
      fileType: "PDF",
      fileSize: "1.2 MB",
      uploadDate: "2023-12-28",
      category: "SOP",
      downloadCount: 78,
      fileName: "sop-distribusi-pangan.pdf"
    },
    {
      id: 8,
      title: "Proposal Program Lumbung Pangan Desa",
      description: "Template proposal untuk pengembangan lumbung pangan di tingkat desa",
      fileType: "DOCX",
      fileSize: "890 KB",
      uploadDate: "2023-12-25",
      category: "Template",
      downloadCount: 156,
      fileName: "proposal-lumbung-pangan.docx"
    }
  ];

  const categories = ['all', 'Laporan', 'Panduan', 'Data', 'Formulir', 'Peraturan', 'SOP', 'Template'];

  // Filter berdasarkan kategori dan pencarian
  const filteredDownloads = downloadData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'PDF':
        return (
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'XLSX':
        return (
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm6 6a1 1 0 01-1 1H7a1 1 0 110-2h2a1 1 0 011 1zm3-1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
          </svg>
        );
      case 'DOCX':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const handleDownload = (file) => {
    // Simulasi download
    alert(`Mengunduh file: ${file.fileName}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold text-[#0C3823] mb-2">Download Center</h1>
            <p className="text-gray-600">Unduh dokumen, laporan, dan data terkait program Dinas Pangan Provinsi Sumatera Barat</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#0C3823] mb-4">Pencarian</h3>
                <input
                  type="text"
                  placeholder="Cari dokumen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C3823] focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#0C3823] mb-4">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
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

              {/* Statistics */}
              <div className="bg-[#0C3823] text-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Statistik Download</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Total File:</div>
                    <div>{downloadData.length} dokumen</div>
                  </div>
                  <div>
                    <div className="font-medium">Total Download:</div>
                    <div>{downloadData.reduce((total, item) => total + item.downloadCount, 0)} kali</div>
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
              {/* File List */}
              <div className="space-y-4">
                {filteredDownloads.map((file) => (
                  <div key={file.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {getFileIcon(file.fileType)}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-[#0C3823] mb-1">
                            {file.title}
                          </h3>
                          <span className="bg-[#0C3823] text-white px-2 py-1 rounded text-xs">
                            {file.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {file.description}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {file.downloadCount} download
                          </span>
                          <span>{file.fileSize}</span>
                          <span>{formatDate(file.uploadDate)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-mono">
                            {file.fileName}
                          </span>
                          <button
                            onClick={() => handleDownload(file)}
                            className="bg-[#0C3823] text-white px-4 py-2 rounded-md hover:bg-[#1B4332] transition-colors flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredDownloads.length === 0 && (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada file yang ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
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

export default Download;
