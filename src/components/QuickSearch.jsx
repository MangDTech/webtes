import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

function QuickSearch() {
  const popularSearches = [
    { keyword: 'LDPM', description: 'Lahan Pertanian Pangan Berkelanjutan', icon: '🌾' },
    { keyword: 'KRPL', description: 'Kawasan Rumah Pangan Lestari', icon: '🏡' },
    { keyword: 'PPID', description: 'Pejabat Pengelola Informasi dan Dokumentasi', icon: '📋' },
    { keyword: 'Ketahanan Pangan', description: 'Program ketahanan pangan', icon: '🍚' },
    { keyword: 'Laporan Kinerja', description: 'Laporan kinerja tahunan', icon: '📊' },
    { keyword: 'Struktur Organisasi', description: 'Struktur organisasi dinas', icon: '🏢' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cari Informasi yang Anda Butuhkan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan data, dokumen, dan informasi terkait Dinas Pangan Provinsi Sumatera Barat dengan mudah
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <SearchBox 
              placeholder="Masukkan kata kunci pencarian..." 
              size="lg"
              className="w-full"
            />
            <div className="mt-4 text-center">
              <Link 
                to="/data/search" 
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Pencarian Lanjutan →
              </Link>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Pencarian Populer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularSearches.map((item, index) => (
              <Link
                key={index}
                to={`/data/search?q=${encodeURIComponent(item.keyword)}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.keyword}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Akses Cepat
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/profil/visi-misi-tupoksi" 
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-green-600">
                  Visi & Misi
                </div>
              </Link>
              <Link 
                to="/profil/struktur-organisasi" 
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="text-3xl mb-2">🏢</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-green-600">
                  Struktur Organisasi
                </div>
              </Link>
              <Link 
                to="/data/berita" 
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="text-3xl mb-2">📰</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-green-600">
                  Berita Terbaru
                </div>
              </Link>
              <Link 
                to="/profil/hubungi-kami" 
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="text-3xl mb-2">📞</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-green-600">
                  Hubungi Kami
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
