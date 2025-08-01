import KegiatanSertifikasi from './pages/kegiatan/KegiatanSertifikasi';
import KegiatanPDRP from './pages/kegiatan/KegiatanPDRP';
import KegiatanSKPG from './pages/kegiatan/KegiatanSKPG';
import Home from './pages/beranda/Home';
import KegiatanLDPM from './pages/kegiatan/KegiatanLDPM';
import KegiatanKRPL from './pages/kegiatan/KegiatanKRPL';
import KegiatanDemapan from './pages/kegiatan/KegiatanDemapan';
import KegiatanLumbungPangan from './pages/kegiatan/KegiatanLumbungPangan';
import ScrollToTop from './components/ScrollToTop';
import VisiMisiTupoksi from './pages/profil/VisiMisiTupoksi';
import SekapurSirih from './pages/profil/SekapurSirih';
import StrukturOrganisasi from './pages/profil/StrukturOrganisasi';
import Berita from './pages/data/Berita';
import Download from './pages/data/Download';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kegiatan-ldpm" element={<KegiatanLDPM />} />
        <Route path="/kegiatan-krpl" element={<KegiatanKRPL />} />
        <Route path="/kegiatan-lumbung-pangan" element={<KegiatanLumbungPangan />} />
        <Route path="/kegiatan-demapan" element={<KegiatanDemapan />} />
        <Route path="/kegiatan-pdrp" element={<KegiatanPDRP />} />
        <Route path="/kegiatan-sertifikasi" element={<KegiatanSertifikasi />} />
        <Route path="/kegiatan-skpg" element={<KegiatanSKPG />} />
        <Route path="/profil/visi-misi-tupoksi" element={<VisiMisiTupoksi />} />
        <Route path="/profil/sekapur-sirih" element={<SekapurSirih />} />
        <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App
