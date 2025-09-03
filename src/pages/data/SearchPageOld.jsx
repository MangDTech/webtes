import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Data dummy untuk demonstrasi - di aplikasi nyata ini akan berasal dari API
  const allData = [
    {
      id: 1,
      title: 'Visi, Misi dan Tupoksi Dinas Pangan',
      content: 'Visi misi dan tugas pokok fungsi Dinas Pangan Provinsi Sumatera Barat dalam mengelola ketahanan pangan',
      category: 'Profil',
      url: '/profil/visi-misi-tupoksi',
      type: 'page'
    },
    {
      id: 2,
      title: 'Struktur Organisasi Dinas Pangan',
      content: 'Struktur organisasi lengkap Dinas Pangan Provinsi Sumatera Barat beserta jabatan dan tugas masing-masing',
      category: 'Profil',
      url: '/profil/struktur-organisasi',
      type: 'page'
    },
    {
      id: 3,
      title: 'Kegiatan LDPM (Lahan Pertanian Pangan Berkelanjutan)',
      content: 'Program kegiatan LDPM untuk mendukung pertanian pangan berkelanjutan di Sumatera Barat dan meningkatkan produktivitas lahan',
      category: 'Kegiatan',
      url: '/kegiatan/ldpm',
      type: 'page'
    },
    {
      id: 4,
      title: 'Kegiatan KRPL (Kawasan Rumah Pangan Lestari)',
      content: 'Program KRPL untuk mengembangkan kawasan rumah pangan lestari dan pemberdayaan masyarakat dalam ketahanan pangan',
      category: 'Kegiatan',
      url: '/kegiatan/krpl',
      type: 'page'
    },
    {
      id: 5,
      title: 'Distribusi dan Cadangan Pangan',
      content: 'Bidang yang menangani distribusi dan cadangan pangan di Sumatera Barat untuk menjamin ketersediaan pangan',
      category: 'Bidang',
      url: '/bidang/distribusi-cadangan-pangan',
      type: 'page'
    },
    {
      id: 6,
      title: 'Konsumsi dan Keamanan Pangan',
      content: 'Bidang yang mengawasi konsumsi dan keamanan pangan masyarakat serta standar mutu dan keamanan produk pangan',
      category: 'Bidang',
      url: '/bidang/konsumsi-keamanan-pangan',
      type: 'page'
    },
    {
      id: 7,
      title: 'Informasi Berkala PPID',
      content: 'Informasi yang disediakan secara berkala oleh PPID Dinas Pangan termasuk laporan kinerja dan program kerja',
      category: 'PPID',
      url: '/ppid/informasi-berkala',
      type: 'page'
    },
    {
      id: 8,
      title: 'Pedoman Umum Ketahanan Pangan',
      content: 'Pedoman umum untuk menjaga ketahanan pangan di wilayah Sumatera Barat dan implementasi program pangan',
      category: 'Informasi',
      url: '/informasi/pedoman-umum',
      type: 'page'
    },
    {
      id: 9,
      title: 'Laporan Kinerja Tahunan',
      content: 'Laporan kinerja tahunan Dinas Pangan Provinsi Sumatera Barat mencakup capaian program dan anggaran',
      category: 'Informasi',
      url: '/informasi/laporan-kinerja',
      type: 'page'
    },
    {
      id: 10,
      title: 'Berita Terbaru Dinas Pangan',
      content: 'Kumpulan berita dan informasi terbaru dari Dinas Pangan tentang program, kegiatan, dan pencapaian terkini',
      category: 'Data',
      url: '/data/berita',
      type: 'page'
    },
    {
      id: 11,
      title: 'Download Dokumen',
      content: 'Kumpulan dokumen yang dapat diunduh terkait Dinas Pangan seperti formulir, panduan, dan peraturan',
      category: 'Data',
      url: '/data/download',
      type: 'page'
    },
    {
      id: 12,
      title: 'Program APBN Ketahanan Pangan',
      content: 'Program-program yang didanai APBN untuk ketahanan pangan seperti bantuan pupuk, bibit, dan infrastruktur pertanian',
      category: 'Program',
      url: '/program/apbn',
      type: 'page'
    },
    {
      id: 13,
      title: 'Kegiatan Lumbung Pangan',
      content: 'Program pembangunan dan pengelolaan lumbung pangan untuk stabilisasi harga dan ketersediaan pangan',
      category: 'Kegiatan',
      url: '/kegiatan/lumbung-pangan',
      type: 'page'
    },
    {
      id: 14,
      title: 'Sertifikasi Pangan',
      content: 'Program sertifikasi dan standarisasi produk pangan untuk menjamin kualitas dan keamanan pangan konsumen',
      category: 'Kegiatan',
      url: '/kegiatan/sertifikasi',
      type: 'page'
    },
    {
      id: 15,
      title: 'Ketersediaan dan Kerawanan Pangan',
      content: 'Bidang yang menangani ketersediaan pangan dan pemetaan daerah rawan pangan di Sumatera Barat',
      category: 'Bidang',
      url: '/bidang/ketersediaan-kerawanan-pangan',
      type: 'page'
    },
    {
      id: 16,
      title: 'UPTD BPSMP (Balai Pengujian Standar Mutu Pangan)',
      content: 'Unit Pelaksana Teknis Daerah Balai Pengujian Standar Mutu Pangan untuk pengujian kualitas produk pangan',
      category: 'Bidang',
      url: '/bidang/uptd-bpsmp',
      type: 'page'
    },
    {
      id: 17,
      title: 'Visi Misi PPID',
      content: 'Visi dan misi Pejabat Pengelola Informasi dan Dokumentasi Dinas Pangan dalam pelayanan informasi publik',
      category: 'PPID',
      url: '/ppid/visi-misi',
      type: 'page'
    },
    {
      id: 18,
      title: 'Standar Pelayanan Publik',
      content: 'Standar pelayanan publik Dinas Pangan dalam memberikan layanan kepada masyarakat dan stakeholder',
      category: 'Informasi Layanan',
      url: '/informasi-layanan/standar-pelayanan-publik',
      type: 'page'
    }
  ];

  // Handle URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryParam = urlParams.get('q');
    
    if (queryParam) {
      setSearchQuery(queryParam);
      performSearch(queryParam);
    }
  }, [location.search]);

  const performSearch = (query) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulasi loading
    setTimeout(() => {
      const results = allData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    // Update URL with search query
    navigate(`/data/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Profil': 'bg-blue-100 text-blue-800',
      'Kegiatan': 'bg-green-100 text-green-800',
      'Bidang': 'bg-purple-100 text-purple-800',
      'PPID': 'bg-yellow-100 text-yellow-800',
      'Informasi': 'bg-red-100 text-red-800',
      'Data': 'bg-indigo-100 text-indigo-800',
      'Program': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pencarian Data</h1>
            <p className="text-gray-600">Cari informasi, dokumen, dan data Dinas Pangan Provinsi Sumatera Barat</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Masukkan kata kunci pencarian..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isLoading}
                className="px-6 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Search Tips */}
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Tips pencarian:</strong> Gunakan kata kunci seperti "pangan", "kegiatan", "LDPM", "PPID", dll.</p>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto mt-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">Mencari data...</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Hasil Pencarian untuk "{searchQuery}"
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Ditemukan {searchResults.length} hasil
                  </p>
                </div>

                {searchResults.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469-.935-6.044-2.525L5 9.5c0-3.038 3.293-5.5 7-5.5s7 2.462 7 5.5l-.956 2.975A7.962 7.962 0 0112 15z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
                    <p className="text-gray-600 mb-4">
                      Coba gunakan kata kunci yang berbeda atau lebih umum
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setHasSearched(false);
                        setSearchResults([]);
                      }}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Coba pencarian baru
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {searchResults.map((result) => (
                      <div key={result.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(result.category)}`}>
                                {result.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              <Link 
                                to={result.url} 
                                className="hover:text-green-600 transition-colors"
                              >
                                {result.title}
                              </Link>
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {result.content}
                            </p>
                          </div>
                          <Link
                            to={result.url}
                            className="ml-4 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                          >
                            Lihat
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!hasSearched && (
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pencarian Populer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { keyword: 'LDPM', description: 'Lahan Pertanian Pangan Berkelanjutan' },
                { keyword: 'KRPL', description: 'Kawasan Rumah Pangan Lestari' },
                { keyword: 'PPID', description: 'Pejabat Pengelola Informasi dan Dokumentasi' },
                { keyword: 'Ketahanan Pangan', description: 'Program ketahanan pangan' },
                { keyword: 'Laporan Kinerja', description: 'Laporan kinerja tahunan' },
                { keyword: 'Struktur Organisasi', description: 'Struktur organisasi dinas' }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const query = item.keyword;
                    navigate(`/data/search?q=${encodeURIComponent(query)}`);
                  }}
                  className="bg-white rounded-lg shadow-md p-4 text-left hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{item.keyword}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
