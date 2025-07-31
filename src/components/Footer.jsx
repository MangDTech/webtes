function Footer() {
  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-gray-900 text-white py-12 mt-16 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Kategori Berita */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white-300 border-b border-white-300 pb-2">
              🏷️ Kategori Berita
            </h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Pengumuman</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Informasi Perkembangan Harga Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Statistik</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Bidang Ketersediaan dan Kerawanan Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Info pengadaan</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Bidang Distribusi dan Cadangan Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Kegiatan</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Resep Kemandiran Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">LPTD - Balai Pengawasan Mutu dan Keamanan Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Resep Pangan Lokal</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Aplikasi/Teknologi</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Pertanian</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Pedoman Umum</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Artikel</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Berita Terkini</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Laporan Kinerja</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Rensira</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Buletin Harga Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Sekretariat</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Galar Pangan Nusantara 2018</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Download</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Info TTIC Prov. Sumbar</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Bidang Konsumsi dan Keamanan Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">LPTD Distribusi, Akses, dan Pasokan Pangan</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Realisasi Anggaran</span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer shadow-lg">Informasi Harga Pangan</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Link Website */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white-300 border-b border-white-300 pb-2">
              🔗 Link Website
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleLinkClick('https://www.pertanian.go.id/')}
                className="block w-full text-left bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-medium"
              >
                🌾 Departemen Pertanian
              </button>
              <button 
                onClick={() => handleLinkClick('https://sumbarprov.go.id/')}
                className="block w-full text-left bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-medium"
              >
                🏛️ Website Sumbar
              </button>
              <button 
                onClick={() => handleLinkClick('https://komdat.kemkes.go.id/')}
                className="block w-full text-left bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-medium"
              >
                📱 Aplikasi Komunikasi Data
              </button>
              <button 
                onClick={() => handleLinkClick('https://dinaspangan.sumbarprov.go.id/details/category/surek.sumbarprov.go.id')}
                className="block w-full text-left bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-medium"
              >
                📄 Surek
              </button>
            </div>
          </div>

          {/* Column 3 - Statistik */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white-300 border-b border-white-300 pb-2">
              📊 Statistik
            </h3>
            <div className="bg-black bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="font-medium">7 Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">👥</span>
                  <span>372 Visitor Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">📊</span>
                  <span>573 Visitor Yesterday</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">👤</span>
                  <span>5,872 All Visitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">📈</span>
                  <span>35,515 Total Hits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">🌐</span>
                  <span className="text-xs font-mono">140.213.145.188 Your IP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white-300 border-b border-white-300 pb-2">
              🏢 Dinas Pangan Provinsi Sumatera Barat
            </h3>
            <div className="bg-black bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">📧</span>
                  <div>
                    <p className="text-white mb-1">Email :</p>
                    <a href="mailto:pangan@sumbarprov.go.id" className="text-white leading-relaxed">
                      pangan@sumbarprov.go.id
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-lg">📞</span>
                  <div>
                    <p className="text-white mb-1">Telp :</p>
                    <a href="tel:+6275170515256" className="text-white leading-relaxed">
                      (0751) 7051526
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-lg">📍</span>
                  <div>
                    <p className="text-white mb-1">Alamat :</p>
                    <p className="text-white leading-relaxed">
                      Jl. Jaksa Agung R.Soeprapto No.4,<br />
                      Flamboyan Baru, Kec. Padang Bar,<br />
                      Kota Padang, Sumatera Barat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-6">
          <div className="bg-black bg-opacity-50 text-white py-4 px-6 rounded-lg text-center backdrop-blur-sm">
            <p className="text-sm">
              &copy; 2025. <span className="text-white-300">Dinas Pangan Provinsi Sumatera Barat</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
