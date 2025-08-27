import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Route name mapping for better display
  const routeNames = {
    // Profil
    'profil': 'Profil',
    'visi-misi-tupoksi': 'Visi, Misi dan Tupoksi',
    'sekapur-sirih': 'Sekapur Sirih',
    'struktur-organisasi': 'Struktur Organisasi',
    'pejabat-pangan': 'Pejabat Pangan',
    'hubungi-kami': 'Hubungi Kami',
    
    // Bidang
    'bidang': 'Bidang',
    'sekretariat': 'Sekretariat',
    'distribusi-cadangan-pangan': 'Distribusi dan Cadangan Pangan',
    'ketersediaan-kerawanan-pangan': 'Ketersediaan dan Kerawanan Pangan',
    'konsumsi-keamanan-pangan': 'Konsumsi dan Keamanan Pangan',
    'uptd-bpsmp': 'UPTD-BPSMP',
    
    // Media
    'media': 'Media',
    'foto': 'Foto',
    'video': 'Video',
    
    // Kegiatan
    'kegiatan': 'Kegiatan',
    'kegiatan-ldpm': 'LDPM',
    'kegiatan-krpl': 'KRPL',
    'kegiatan-lumbung-pangan': 'Lumbung Pangan',
    'kegiatan-demapan': 'Demapan',
    'kegiatan-pdrp': 'PDRP',
    'kegiatan-sertifikasi': 'Sertifikasi',
    'kegiatan-skpg': 'SKPG',
    
    // Data
    'data': 'Data',
    'berita': 'Berita',
    'download': 'Download',
    
    // Program
    'program': 'Program',
    'apbn': 'APBN',
    'apbd': 'APBD',
    
    // Informasi
    'informasi': 'Informasi',
    'pedoman-umum': 'Pedoman Umum',
    'peraturan': 'Peraturan',
    'info-pengadaan': 'Info Pengadaan',
    'laporan-kinerja': 'Laporan Kinerja',
    
    // PPID
    'ppid': 'PPID',
    'profil-singkat': 'Profil Singkat PPID',
    'visi-misi': 'Visi Misi PPID',
    'tugas-fungsi': 'Tugas dan Fungsi PPID',
    'informasi-berkala': 'Informasi Secara Berkala',
    'informasi-setiap-saat': 'Informasi Setiap Saat',
    'informasi-serta-merta': 'Informasi Serta Merta',
    
    // Informasi Layanan
    'informasi-layanan': 'Informasi Layanan',
    'standar-pelayanan-publik': 'Standar Pelayanan Publik',
    'maklumat-layanan': 'Maklumat Layanan',
    'pengelolaan-pengaduan': 'Pengelolaan Pengaduan',
    'survey-kepuasan-masyarakat': 'Survey Kepuasan Masyarakat'
  };

  // Special route hierarchies for better breadcrumb display
  const routeHierarchies = {
    '/profil/visi-misi-tupoksi': ['Home', 'Profil', 'Visi, Misi dan Tupoksi'],
    '/profil/sekapur-sirih': ['Home', 'Profil', 'Sekapur Sirih'],
    '/profil/struktur-organisasi': ['Home', 'Profil', 'Struktur Organisasi'],
    '/profil/pejabat-pangan': ['Home', 'Profil', 'Pejabat Pangan'],
    '/profil/hubungi-kami': ['Home', 'Profil', 'Hubungi Kami'],
    
    '/bidang/sekretariat': ['Home', 'Bidang', 'Sekretariat'],
    '/bidang/distribusi-cadangan-pangan': ['Home', 'Bidang', 'Distribusi dan Cadangan Pangan'],
    '/bidang/ketersediaan-kerawanan-pangan': ['Home', 'Bidang', 'Ketersediaan dan Kerawanan Pangan'],
    '/bidang/konsumsi-keamanan-pangan': ['Home', 'Bidang', 'Konsumsi dan Keamanan Pangan'],
    '/bidang/uptd-bpsmp': ['Home', 'Bidang', 'UPTD-BPSMP'],
    
    '/media/foto': ['Home', 'Media', 'Foto'],
    '/media/video': ['Home', 'Media', 'Video'],
    '/media/kegiatan': ['Home', 'Media', 'Kegiatan'],
    
    '/kegiatan/kegiatan-ldpm': ['Home', 'Kegiatan', 'LDPM'],
    '/kegiatan/kegiatan-krpl': ['Home', 'Kegiatan', 'KRPL'],
    '/kegiatan/kegiatan-lumbung-pangan': ['Home', 'Kegiatan', 'Lumbung Pangan'],
    '/kegiatan/kegiatan-demapan': ['Home', 'Kegiatan', 'Demapan'],
    '/kegiatan/kegiatan-pdrp': ['Home', 'Kegiatan', 'PDRP'],
    '/kegiatan/kegiatan-sertifikasi': ['Home', 'Kegiatan', 'Sertifikasi'],
    '/kegiatan/kegiatan-skpg': ['Home', 'Kegiatan', 'SKPG'],
    
    '/data/berita': ['Home', 'Data', 'Berita'],
    '/data/download': ['Home', 'Data', 'Download'],
    
    '/program/apbn': ['Home', 'Program', 'APBN'],
    '/program/apbd': ['Home', 'Program', 'APBD'],
    
    '/informasi/pedoman-umum': ['Home', 'Informasi', 'Pedoman Umum'],
    '/informasi/peraturan': ['Home', 'Informasi', 'Peraturan'],
    '/informasi/info-pengadaan': ['Home', 'Informasi', 'Info Pengadaan'],
    '/informasi/laporan-kinerja': ['Home', 'Informasi', 'Laporan Kinerja'],
    
    '/ppid/profil-singkat': ['Home', 'PPID', 'Profil Singkat PPID'],
    '/ppid/visi-misi': ['Home', 'PPID', 'Visi Misi PPID'],
    '/ppid/tugas-fungsi': ['Home', 'PPID', 'Tugas dan Fungsi PPID'],
    '/ppid/struktur-organisasi': ['Home', 'PPID', 'Struktur Organisasi PPID'],
    '/ppid/informasi-berkala': ['Home', 'PPID', 'Informasi Secara Berkala'],
    '/ppid/informasi-setiap-saat': ['Home', 'PPID', 'Informasi Setiap Saat'],
    '/ppid/informasi-serta-merta': ['Home', 'PPID', 'Informasi Serta Merta'],
    
    '/informasi-layanan/standar-pelayanan-publik': ['Home', 'Informasi Layanan', 'Standar Pelayanan Publik'],
    '/informasi-layanan/maklumat-layanan': ['Home', 'Informasi Layanan', 'Maklumat Layanan'],
    '/informasi-layanan/pengelolaan-pengaduan': ['Home', 'Informasi Layanan', 'Pengelolaan Pengaduan'],
    '/informasi-layanan/survey-kepuasan-masyarakat': ['Home', 'Informasi Layanan', 'Survey Kepuasan Masyarakat']
  };

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  // Check if we have a predefined hierarchy for this route
  const predefinedHierarchy = routeHierarchies[location.pathname];

  return (
    <nav className="bg-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {predefinedHierarchy ? (
            // Use predefined hierarchy
            predefinedHierarchy.map((item, index) => {
              const isLast = index === predefinedHierarchy.length - 1;
              const isHome = item === 'Home';
              
              return (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {isHome ? (
                    <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                      {item}
                    </Link>
                  ) : isLast ? (
                    <span className="text-gray-800 font-semibold">{item}</span>
                  ) : (
                    <span className="text-gray-600 font-medium">{item}</span>
                  )}
                </li>
              );
            })
          ) : (
            // Fallback to original logic
            <>
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  Home
                </Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);
                const isLast = index === pathnames.length - 1;

                return (
                  <li key={name} className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {isLast ? (
                      <span className="text-gray-800 font-semibold">{displayName}</span>
                    ) : (
                      <Link to={routeTo} className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                        {displayName}
                      </Link>
                    )}
                  </li>
                );
              })}
            </>
          )}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
