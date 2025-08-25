function Footer() {
  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-gray-900 text-white py-12 mt-16 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Kategori Berita */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white/70 border-b border-white/30 pb-2">
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
            </div>
          </div>

          {/* Column 2 - Link Website */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white/70 border-b border-white/30 pb-2">
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
            <h3 className="text-xl font-bold mb-6 text-white/70 border-b border-white/30 pb-2">
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
            <h3 className="text-xl font-bold mb-6 text-white/70 border-b border-white/30 pb-2">
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
        
        {/* Media Sosial */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl font-bold mb-6 text-white/70 border-b border-white/30 pb-2 text-center">
            Media Sosial
          </h3>
          <div className="flex justify-center gap-6">
            <a href="www.facebook.com" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </a>
            <a href="www.instagram.com" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href="www.x.com" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
            </a>
            <a href="www.youtube.com" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-6">                   
            <p className="text-sm text-center">
              &copy; 2025 <span className="text-white/70">Dinas Pangan Provinsi Sumatera Barat.</span> All Rights Reserved.
            </p>       
        </div>
      </div>
    </footer>
  )
}

export default Footer
