import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="w-full sticky top-0 z-50">
      {/* Top Header with Logo and Search */}
      <div className="bg-[#0C3823] px-4 py-2">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center">
            <Link to="/" className="flex items-center no-underline">
              <img src="/logo-sumbar.png" alt="Logo Dinas Pangan Sumbar" className="h-10 w-auto"/>
              <div className="text-white ml-3">
                <div className="font-semibold text-base">Dinas Pangan</div>
                <div className="font-medium text-sm">Provinsi Sumatera Barat</div>
              </div>
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="Pencarian Data"
                className="bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-l w-64 text-sm focus:outline-none"
              />
              <button className="bg-[#1B4332] hover:bg-[#2d5a46] text-white px-4 py-2 rounded-r flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#0C3823] border-t border-[#2d5a46]">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center justify-between gap-1 list-none m-0 p-0 w-full max-w-7xl">
              <li><Link to="/" className="text-white font-medium text-sm px-3 py-2 inline-block hover:bg-[#2d5a46] transition-colors no-underline">Beranda</Link></li>
              
              {/* Profile Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('profil', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Profil
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'profil' && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <Link to="/profil/visi-misi-tupoksi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Visi, Misi dan Tupoksi</Link>
                    <Link to="/profil/sekapur-sirih" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Sekapur Sirih</Link>
                    <Link to="/profil/pejabat-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Pejabat Pangan</Link>
                    <Link to="/profil/struktur-jabatan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Struktur Jabatan</Link>
                    <Link to="/profil/hubungi-kami" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Hubungi Kami</Link>
                  </div>
                )}
              </li>

              {/* Data Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('data', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Data
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'data' && (
                  <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <Link to="/berita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Berita</Link>
                    <Link to="/download" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Download</Link>
                  </div>
                )}
              </li>

              {/* Bidang Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('bidang', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Bidang
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'bidang' && (
                  <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Sekretariat</a>
                    <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Distribusi dan Cadangan Pangan</a>
                    <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Ketersediaan dan Kerawanan Pangan</a>
                    <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Konsumsi dan Keamanan Pangan</a>
                    <a href="#layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>UPTD-BPSMP</a>
                  </div>
                )}
              </li>

              {/* Media Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('media', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Media
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'media' && (
                  <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#berita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Foto</a>
                    <a href="#galeri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Video</a>
                    <a href="#pengumuman" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Kegiatan</a>
                  </div>
                )}
              </li>

              {/* Program Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('program', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Program
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'program' && (
                  <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#program" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>APBN</a>
                    <a href="#program" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>APBD</a>
                  </div>
                )}
              </li>

              {/* Kegiatan Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('kegiatan', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Kegiatan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'kegiatan' && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <Link to="/kegiatan-ldpm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>LDPM</Link>
                    <Link to="/kegiatan-krpl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>KRPL</Link>
                    <Link to="/kegiatan-lumbung-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Lumbung Pangan</Link>
                    <Link to="/kegiatan-demapan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Demapan</Link>
                    <Link to="/kegiatan-pdrp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>PDRP</Link>
                    <Link to="/kegiatan-sertifikasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Sertifikasi</Link>
                    <Link to="/kegiatan-skpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>SKPG</Link>
                  </div>
                )}
              </li>

              {/* Informasi Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('informasi', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Informasi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'informasi' && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Pedoman Umum</a>
                    <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Peraturan</a>
                    <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Info Pengadaan</a>
                    <a href="#informasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Laporan Kinerja</a>
                  </div>
                )}
              </li>

              {/* PPID Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('ppid', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  PPID
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'ppid' && (
                  <div className="absolute top-full right-0 mt-0 w-64 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Profil Singkat PPID</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Visi Misi PPID</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Tugas dan Fungsi PPID</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Informasi Secara Berkala</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Informasi Setiap Saat</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Informasi Serta Merta</a>
                    <a href="#ppid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Struktur Organisasi PPID</a>
                  </div>
                )}
              </li>

              {/* Lapor Link */}
              <li><a href="https://www.lapor.go.id/" className="text-white font-medium text-sm px-3 py-2 inline-block hover:bg-[#2d5a46] transition-colors no-underline">Lapor</a></li>

              {/* Informasi Layanan Dropdown */}
              <li className="relative">
                <button 
                  onClick={(e) => toggleDropdown('informasi-layanan', e)}
                  className="text-white font-medium text-sm px-3 py-2 inline-flex items-center hover:bg-[#2d5a46] transition-colors"
                >
                  Informasi Layanan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'informasi-layanan' && (
                  <div className="absolute top-full right-0 mt-0 w-64 bg-white rounded-b-lg shadow-lg py-2 z-50">
                    <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Standar Pelayanan Publik</a>
                    <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Makhlumat Layanan</a>
                    <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Pengelolaan Pengaduan</a>
                    <a href="#informasi-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>Survey Kepuasan Masyarakat</a>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white">
              {/* Add mobile menu items */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
