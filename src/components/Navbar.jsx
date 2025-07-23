import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-footer sticky top-0 z-50 border-b border-primary shadow-sm">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href='' className="flex items-center gap-3 no-underline">
                <img src="/logo-sumbar.png" alt="Logo Dinas Pangan Sumbar" className="h-14 w-auto sm:h-16"/>
                <span className="text-white font-semibold text-lg sm:text-xl leading-tight">
                  Dinas Pangan<br/>Sumbar
                </span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <ul className="flex items-center gap-5 list-none">
                    <li><a href="#home" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Beranda</a></li>
                    <li><a href="#program" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Program</a></li>
                    <li><a href="#berita" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Berita</a></li>
                    <li><a href="#layanan" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Layanan</a></li>
                    <li><a href="#galeri" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Galeri</a></li>
                    <li><a href="#struktur" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Organisasi</a></li>
                    <li><a href="#contact" className="text-white font-bold px-4 py-2 hover:text-accent transition-colors no-underline">Kontak</a></li>
                </ul>
            </div>
            
            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-white p-2 rounded-md hover:bg-primary/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden bg-footer border-t border-primary/20">
            <ul className="flex flex-col py-4 px-5 space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#program" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Program
                </a>
              </li>
              <li>
                <a 
                  href="#berita" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Berita
                </a>
              </li>
              <li>
                <a 
                  href="#layanan" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Layanan
                </a>
              </li>
              <li>
                <a 
                  href="#galeri" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galeri
                </a>
              </li>
              <li>
                <a 
                  href="#struktur" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Organisasi
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block text-white font-bold py-3 px-4 hover:bg-primary/20 rounded-md transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar
