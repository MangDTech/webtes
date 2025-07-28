import KegiatanSertifikasi from './pages/KegiatanSertifikasi';
import KegiatanPDRP from './pages/KegiatanPDRP';
import KegiatanSKPG from './pages/KegiatanSKPG';
import Home from './pages/Home';
import KegiatanLDPM from './pages/KegiatanLDPM';
import KegiatanKRPL from './pages/KegiatanKRPL';
import KegiatanDemapan from './pages/KegiatanDemapan';
import KegiatanLumbungPangan from './pages/KegiatanLumbungPangan';
import ScrollToTop from './components/ScrollToTop';
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
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App
