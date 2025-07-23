function Navbar() {
  return (
    <nav className="w-full bg-footer sticky top-0 z-10 border-b border-primary shadow-sm">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href='' className="flex items-center gap-3 no-underline">
                <img src="/logo-sumbar.png" alt="Logo Dinas Pangan Sumbar" className="h-16 w-auto"/>
                <span className="text-white font-semibold text-xl leading-tight">
                  Dinas Pangan<br/>Sumbar
                </span>
              </a>
            </div>
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
        </div>
    </nav>
  )
}

export default Navbar
