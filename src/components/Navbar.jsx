import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleDropdown = (menu, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId);
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className="w-full bg-footer sticky top-0 z-50 border-b border-primary shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center flex-shrink-0">
              <a href='' className="flex items-center gap-2 sm:gap-3 no-underline">
                <img src="/logo-sumbar.png" alt="Logo Dinas Pangan Sumbar" className="h-10 w-auto sm:h-12 md:h-14"/>
                <div className="text-white">
                  <div className="font-semibold text-sm sm:text-base md:text-lg leading-tight">Dinas Pangan</div>
                  <div className="font-medium text-sm sm:text-base">Provinsi Sumatera Barat</div>
                </div>
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
                <ul className="flex items-center flex-wrap gap-x-0.5 list-none">
                    <li><a href="#home" className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors no-underline whitespace-nowrap">Beranda</a></li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('profil', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Profil
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'profil' && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#visi-misi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Visi, Misi dan Tupoksi</a>
                                <a href="#sekapur-sirih" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Sekapur Sirih</a>
                                <a href="#pejabat-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Pejabat Pangan</a>
                                <a href="#struktur-jabatan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Struktur Jabatan</a>
                                <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Hubungi Kami</a>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('data', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Data
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'data' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#berita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Berita</a>
                                <a href="#download" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Download</a>                                
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('bidang', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Bidang
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'bidang' && (
                            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Sekretariat</a>
                                <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Distribusi dan Cadangan Pangan</a>
                                <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Ketersediaan dan Kerawanan Pangan</a>
                                <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Konsumsi dan Keamanan Pangan</a>
                                <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">UPTD-BPSMP</a>                                
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('media', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Media
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'media' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#berita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Foto</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Video</a>
                                <a href="#pengumuman" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Kegiatan</a>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('program', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Program
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'program' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#program" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">APBN</a>
                                <a href="#program" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">APBD</a>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('kegiatan', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Kegiatan
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'kegiatan' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">LDPM</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">KRPL</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Lumbung Pangan</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Demapan</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">PDRP</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Sertifikasi</a>
                                <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">SKPG</a>                               
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('informasi', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Informasi
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'informasi' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Pedoman Umum</a>
                                <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Peraturan</a>
                                <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Info Pengadaan</a>
                                <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Laporan Kinerja</a>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('ppid', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            PPID
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'ppid' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Profil Singkat PPID</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Visi Misi PPID</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Tugas dan Fungsi PPID</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Informasi Secara Berkala</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Informasi Setiap Saat</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Informasi Serta Merta</a>
                                <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Struktur Organisasi PPID </a>
                            </div>
                        )}
                    </li>
                    <li><a href="https://www.lapor.go.id/" className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors no-underline whitespace-nowrap">Lapor</a></li>
                    <li className="relative group">
                        <button 
                            onClick={(e) => toggleDropdown('informasi-layanan', e)}
                            className="text-white font-medium text-xs sm:text-sm px-1.5 sm:px-2 py-2 hover:text-accent transition-colors flex items-center whitespace-nowrap"
                        >
                            Informasi Layanan
                            <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'informasi-layanan' && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Standar Pelayanan Publik</a>
                                <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Makhlumat Layanan</a>
                                <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Pengelolaan Pengaduan</a>
                                <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-footer hover:text-white transition-colors">Survey Kepuasan Masyarakat</a>                                
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            
            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-shrink-0 ml-2">
                <div className="relative flex">
                  <input 
                    type="text" 
                    placeholder="Pencarian Data"
                    className="bg-white text-gray-800 placeholder-gray-500 px-3 py-1.5 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-footer border border-gray-300 transition-all duration-200 w-32 sm:w-40 lg:w-44"
                  />
                  <button className="bg-footer hover:bg-footer/90 text-white px-2 py-1.5 rounded-r-md border border-footer transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
            </div>
            
            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden text-white p-1.5 rounded-md hover:bg-primary/20 transition-colors ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-footer border-t border-primary/20 max-h-96 overflow-y-auto">
            <ul className="flex flex-col py-4 px-5 space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="block text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </a>
              </li>
              
              {/* Profil Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('profil-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Profil
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'profil-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'profil-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                    <a href="#visi-misi" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Visi, Misi dan Tupoksi</a>
                    <a href="#sekapur-sirih" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Sekapur Sirih</a>
                    <a href="#pejabat-pangan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Pejabat Pangan</a>
                    <a href="#struktur-jabatan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Struktur Jabatan</a>
                    <a href="#contact" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Hubungi Kami</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Data Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('data-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Data
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'data-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'data-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#berita" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Berita</a>
                      <a href="#download" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Download</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Bidang Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('bidang-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Bidang
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'bidang-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'bidang-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Sekretariat</a>
                      <a href="#layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Distribusi dan Cadangan Pangan</a>
                      <a href="#layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Ketersediaan dan Kerawanan Pangan</a>
                      <a href="#layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Konsumsi dan Keamanan Pangan</a>
                      <a href="#layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>UPTD-BPSMP</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Media Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('media-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Media
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'media-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'media-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#berita" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Foto</a>
                      <a href="#galeri" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Video</a>
                      <a href="#pengumuman" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Kegiatan</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Program Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('program-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Program
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'program-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'program-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#program" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>APBN</a>
                      <a href="#program" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>APBD</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Kegiatan Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('kegiatan-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Kegiatan
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'kegiatan-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'kegiatan-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='ldpm'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('ldpm')}>LDPM</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='krpl'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('krpl')}>KRPL</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='lumbung'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('lumbung')}>Lumbung Pangan</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='demapan'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('demapan')}>Demapan</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='pdrp'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('pdrp')}>PDRP</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='sertifikasi'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('sertifikasi')}>Sertifikasi</a>
                      <a href="#galeri" className={`block text-gray-800 text-sm py-2 px-4 rounded-md transition-colors hover:bg-footer hover:text-white ${activeMenuItem==='skpg'?'bg-green-600 text-white':''}`} onClick={()=>handleMenuItemClick('skpg')}>SKPG</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Informasi Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('informasi-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Informasi
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'informasi-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'informasi-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#informasi" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Pedoman Umum</a>
                      <a href="#informasi" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Peraturan</a>
                      <a href="#informasi" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Info Pengadaan</a>
                      <a href="#informasi" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Laporan Kinerja</a>
                    </div>
                  </div>
                )}
              </li>

              {/* PPID Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('ppid-mobile', e)}
                  className={`w-full text-left text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-between hover:bg-primary/20 ${activeDropdown === 'ppid-mobile' ? 'bg-primary/20' : ''}`}
                >
                  PPID
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'ppid-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'ppid-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'profil-singkat-ppid' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('profil-singkat-ppid')}
                      >
                        {activeMenuItem === 'profil-singkat-ppid' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Profil Singkat PPID
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'visi-misi-ppid' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('visi-misi-ppid')}
                      >
                        {activeMenuItem === 'visi-misi-ppid' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Visi Misi PPID
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'tugas-fungsi-ppid' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('tugas-fungsi-ppid')}
                      >
                        {activeMenuItem === 'tugas-fungsi-ppid' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Tugas dan Fungsi PPID
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'informasi-berkala' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('informasi-berkala')}
                      >
                        {activeMenuItem === 'informasi-berkala' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Informasi Secara Berkala
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'informasi-saat' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('informasi-saat')}
                      >
                        {activeMenuItem === 'informasi-saat' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Informasi Secara Saat
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'informasi-serta-merta' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('informasi-serta-merta')}
                      >
                        {activeMenuItem === 'informasi-serta-merta' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Informasi Serta Merta
                      </a>
                      <a 
                        href="#ppid" 
                        className={`block text-sm py-2 px-4 rounded-md transition-colors relative ${
                          activeMenuItem === 'struktur-organisasi-ppid' 
                            ? 'bg-green-600 text-white font-medium' 
                            : 'text-gray-800 hover:bg-footer hover:text-white'
                        }`}
                        onClick={() => handleMenuItemClick('struktur-organisasi-ppid')}
                      >
                        {activeMenuItem === 'struktur-organisasi-ppid' && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-r"></div>
                        )}
                        Struktur Organisasi PPID
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Lapor */}
              <li>
                <a 
                  href="https://www.lapor.go.id/" 
                  className="block text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lapor
                </a>
              </li>

              {/* Informasi Layanan Dropdown */}
              <li>
                <button 
                  onClick={(e) => toggleDropdown('informasi-layanan-mobile', e)}
                  className="w-full text-left text-white font-medium py-3 px-4 hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between"
                >
                  Informasi Layanan
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'informasi-layanan-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'informasi-layanan-mobile' && (
                  <div className="pl-4 mt-2">
                    <div className="bg-white rounded-md shadow-lg p-2 space-y-1">
                      <a href="#informasi-layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Standar Pelayanan Publik</a>
                      <a href="#informasi-layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Makhlumat Layanan</a>
                      <a href="#informasi-layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Pengelolaan Pengaduan</a>
                      <a href="#informasi-layanan" className="block text-gray-800 text-sm py-2 px-4 hover:bg-footer hover:text-white rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Survey Kepuasan Masyarakat</a>
                    </div>
                  </div>
                )}
              </li>

              {/* Search Bar for Mobile */}
              <li className="pt-4 border-t border-primary/20 mt-4">
                <div className="relative flex">
                  <input 
                    type="text" 
                    placeholder="Pencarian Data"
                    className="bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-footer border border-gray-300 transition-all duration-200 flex-1"
                  />
                  <button className="bg-footer hover:bg-footer/90 text-white px-4 py-2 rounded-r-md border border-footer transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar
