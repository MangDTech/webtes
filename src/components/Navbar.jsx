import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0C3823]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0C3823]/80 shadow-md">
      {/* Top Header with Logo and Search */}
      <div className="px-4 py-2">
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
            <SearchBox compact={true} />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
  <div className="border-t border-[#2d5a46]">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center justify-between gap-1 list-none m-0 p-0 w-full max-w-7xl">
              <li><Link to="/" className="text-white font-medium text-sm px-3 py-2 inline-block hover:bg-[#2d5a46] transition-colors no-underline">Beranda</Link></li>
              
              {/* Profile Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Profil
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/profil/visi-misi-tupoksi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Visi, Misi dan Tupoksi</Link>
                  <Link to="/profil/sekapur-sirih" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Sekapur Sirih</Link>
                  <Link to="/profil/struktur-organisasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Struktur organisasi</Link>
                  <Link to="/profil/pejabat-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Pejabat Pangan</Link>
                  <Link to="/profil/hubungi-kami" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Hubungi Kami</Link>
                </div>
              </li>

              {/* Data Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Data
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/data/search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Pencarian Data</Link>
                  <Link to="/data/berita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Berita</Link>
                  <Link to="/data/download" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Download</Link>
                </div>
              </li>

              {/* Bidang Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Bidang
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/bidang/sekretariat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Sekretariat</Link>
                  <Link to="/bidang/distribusi-cadangan-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Distribusi dan Cadangan Pangan</Link>
                  <Link to="/bidang/ketersediaan-kerawanan-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Ketersediaan dan Kerawanan Pangan</Link>
                  <Link to="/bidang/konsumsi-keamanan-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Konsumsi dan Keamanan Pangan</Link>
                  <Link to="/bidang/uptd-bpsmp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">UPTD-BPSMP</Link>
                </div>
              </li>

              {/* Media Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Media
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/media/foto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Foto</Link>
                  <Link to="/media/video" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Video</Link>
                  <Link to="/media/kegiatan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Kegiatan</Link>
                </div>
              </li>

              {/* Program Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Program
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/program/apbn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">APBN</Link>
                  <Link to="/program/apbd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">APBD</Link>
                </div>
              </li>

              {/* Kegiatan Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Kegiatan
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/kegiatan/ldpm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">LDPM</Link>
                  <Link to="/kegiatan/krpl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">KRPL</Link>
                  <Link to="/kegiatan/lumbung-pangan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Lumbung Pangan</Link>
                  <Link to="/kegiatan/demapan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Demapan</Link>
                  <Link to="/kegiatan/pdrp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">PDRP</Link>
                  <Link to="/kegiatan/sertifikasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Sertifikasi</Link>
                  <Link to="/kegiatan/skpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">SKPG</Link>
                </div>
              </li>

              {/* Informasi Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Informasi
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/informasi/pedoman-umum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Pedoman Umum</Link>
                  <Link to="/informasi/peraturan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Peraturan</Link>
                  <Link to="/informasi/info-pengadaan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Info Pengadaan</Link>
                  <Link to="/informasi/laporan-kinerja" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Laporan Kinerja</Link>
                </div>
              </li>

              {/* PPID Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  PPID
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/ppid/profil-singkat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Profil Singkat PPID</Link>
                  <Link to="/ppid/visi-misi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Visi Misi PPID</Link>
                  <Link to="/ppid/tugas-fungsi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Tugas dan Fungsi PPID</Link>
                  <Link to="/ppid/struktur-organisasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Struktur Organisasi PPID</Link>
                  {/* <div className="border-t border-gray-100 my-2"></div> */}
                  <Link to="/ppid/informasi-berkala" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Informasi Secara Berkala</Link>
                  <Link to="/ppid/informasi-setiap-saat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Informasi Setiap Saat</Link>
                  <Link to="/ppid/informasi-serta-merta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Informasi Serta Merta</Link>
                </div>
              </li>

              {/* Lapor Link */}
              <li><a href="https://www.lapor.go.id/" className="text-white font-medium text-sm px-3 py-2 inline-block hover:bg-[#2d5a46] transition-colors no-underline">Lapor</a></li>
              
              {/* Lapor Link */}
              <li><a href="https://sipangan-provsumbar.badanpangan.go.id/" className="text-white font-medium text-sm px-3 py-2 inline-block hover:bg-[#2d5a46] transition-colors no-underline">Aplikasi</a></li>

              {/* Informasi Layanan Dropdown */}
              <li className="relative group">
                <button
                  className="font-medium text-sm px-3 py-2 inline-flex items-center transition-colors text-white hover:bg-[#2d5a46] group-hover:text-green-300"
                >
                  Informasi Layanan
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-0 w-64 bg-white rounded-b-lg shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
                  <Link to="/informasi-layanan/standar-pelayanan-publik" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Standar Pelayanan Publik</Link>
                  <Link to="/informasi-layanan/maklumat-layanan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Maklumat Layanan</Link>
                  <Link to="/informasi-layanan/pengelolaan-pengaduan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Pengelolaan Pengaduan</Link>
                  <Link to="/informasi-layanan/survey-kepuasan-masyarakat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B4332] hover:text-white transition-colors">Survey Kepuasan Masyarakat</Link>
                </div>
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
            <div className="lg:hidden bg-white shadow-lg rounded-b-lg max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-2 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
                
                {/* Profil Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Profil</div>
                  <Link to="/profil/visi-misi-tupoksi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Visi, Misi dan Tupoksi</Link>
                  <Link to="/profil/sekapur-sirih" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Sekapur Sirih</Link>
                  <Link to="/profil/struktur-organisasi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Struktur organisasi</Link>
                  <Link to="/profil/pejabat-pangan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pejabat Pangan</Link>                
                  <Link to="/profil/hubungi-kami" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Hubungi Kami</Link>
                </div>

                {/* Data Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Data</div>
                  <Link to="/berita" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Berita</Link>
                  <Link to="/download" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Download</Link>
                </div>

                {/* Bidang Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Bidang</div>
                  <Link to="/bidang/sekretariat" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Sekretariat</Link>
                  <Link to="/bidang/distribusi-cadangan-pangan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Distribusi dan Cadangan Pangan</Link>
                  <Link to="/bidang/ketersediaan-kerawanan-pangan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Ketersediaan dan Kerawanan Pangan</Link>
                  <Link to="/bidang/konsumsi-keamanan-pangan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Konsumsi dan Keamanan Pangan</Link>
                  <Link to="/bidang/uptd-bpsmp" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>UPTD-BPSMP</Link>
                </div>

                {/* Media Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Media</div>
                  <Link to="/media/foto" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Foto</Link>
                  <Link to="/media/video" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Video</Link>
                  <Link to="/media/kegiatan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Kegiatan</Link>
                </div>

                {/* Program Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Program</div>
                  <Link to="/program/apbn" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>APBN</Link>
                  <Link to="/program/apbd" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>APBD</Link>
                </div>

                {/* Kegiatan Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Kegiatan</div>
                  <Link to="/kegiatan/ldpm" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>LDPM</Link>
                  <Link to="/kegiatan/krpl" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>KRPL</Link>
                  <Link to="/kegiatan/lumbung-pangan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Lumbung Pangan</Link>
                  <Link to="/kegiatan/demapan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Demapan</Link>
                  <Link to="/kegiatan/pdrp" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>PDRP</Link>
                  <Link to="/kegiatan/sertifikasi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Sertifikasi</Link>
                  <Link to="/kegiatan/skpg" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>SKPG</Link>
                </div>

                {/* Informasi Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Informasi</div>
                  <Link to="/informasi/pedoman-umum" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pedoman Umum</Link>
                  <Link to="/informasi/peraturan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Peraturan</Link>
                  <Link to="/informasi/info-pengadaan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Info Pengadaan</Link>
                  <Link to="/informasi/laporan-kinerja" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Laporan Kinerja</Link>
                </div>

                {/* PPID Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">PPID</div>
                  <Link to="/ppid/profil-singkat" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Profil Singkat PPID</Link>
                  <Link to="/ppid/visi-misi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Visi Misi PPID</Link>
                  <Link to="/ppid/tugas-fungsi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Tugas dan Fungsi PPID</Link>
                  <Link to="/ppid/informasi-berkala" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Informasi Secara Berkala</Link>
                  <Link to="/ppid/informasi-setiap-saat" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Informasi Setiap Saat</Link>
                  <Link to="/ppid/informasi-serta-merta" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Informasi Serta Merta</Link>
                  <Link to="/ppid/struktur-organisasi" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Struktur Organisasi PPID</Link>
                </div>

                {/* Lapor Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <a href="https://www.lapor.go.id/" className="block px-3 py-2 text-gray-700 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Lapor</a>
                </div>

                {/* Aplikasi Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <a href="https://sipangan-provsumbar.badanpangan.go.id/" className="block px-3 py-2 text-gray-700 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Aplikasi</a>
                </div>

                {/* Informasi Layanan Mobile */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">Informasi Layanan</div>
                  <Link to="/informasi-layanan/standar-pelayanan-publik" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Standar Pelayanan Publik</Link>
                  <Link to="/informasi-layanan/maklumat-layanan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Maklumat Layanan</Link>
                  <Link to="/informasi-layanan/pengelolaan-pengaduan" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pengelolaan Pengaduan</Link>
                  <Link to="/informasi-layanan/survey-kepuasan-masyarakat" className="block px-6 py-1 text-sm text-gray-600 hover:bg-[#1B4332] hover:text-white rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Survey Kepuasan Masyarakat</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
