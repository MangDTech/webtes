import Home from './pages/beranda/Home';
import KegiatanSertifikasi from './pages/kegiatan/KegiatanSertifikasi';
import KegiatanPDRP from './pages/kegiatan/KegiatanPDRP';
import KegiatanSKPG from './pages/kegiatan/KegiatanSKPG';
import KegiatanLDPM from './pages/kegiatan/KegiatanLDPM';
import KegiatanKRPL from './pages/kegiatan/KegiatanKRPL';
import KegiatanDemapan from './pages/kegiatan/KegiatanDemapan';
import KegiatanLumbungPangan from './pages/kegiatan/KegiatanLumbungPangan';
import ScrollToTop from './components/ScrollToTop';
import VisiMisiTupoksi from './pages/profil/VisiMisiTupoksi';
import SekapurSirih from './pages/profil/SekapurSirih';
import StrukturOrganisasi from './pages/profil/StrukturOrganisasi';
import PejabatPangan from './pages/profil/PejabatPangan';
import HubungiKami from './pages/profil/HubungiKami';
import Sekretariat from './pages/bidang/Sekretariat';
import DistribusiCadanganPangan from './pages/bidang/DistribusiCadanganPangan';
import KetersediaanKerawananPangan from './pages/bidang/KetersediaanKerawananPangan';
import KonsumsiKeamananPangan from './pages/bidang/KonsumsiKeamananPangan';
import UPTDBPSMP from './pages/bidang/UPTDBPSMP';
import Foto from './pages/media/Foto';
import Video from './pages/media/Video';
import Berita from './pages/data/Berita';
import Download from './pages/data/Download';
import APBN from './pages/program/APBN';
import APBD from './pages/program/APBD';
import PedomanUmum from './pages/informasi/PedomanUmum';
import Peraturan from './pages/informasi/Peraturan';
import InfoPengadaan from './pages/informasi/InfoPengadaan';
import LaporanKinerja from './pages/informasi/LaporanKinerja';
import ProfilSingkatPPID from './pages/ppid/ProfilSingkatPPID';
import VisiMisiPPID from './pages/ppid/VisiMisiPPID';
import TugasFungsiPPID from './pages/ppid/TugasFungsiPPID';
import InformasiBerkala from './pages/ppid/InformasiBerkala';
import InformasiSetiapSaat from './pages/ppid/InformasiSetiapSaat';
import InformasiSertaMerta from './pages/ppid/InformasiSertaMerta';
import StrukturOrganisasiPPID from './pages/ppid/StrukturOrganisasiPPID';
import StandarPelayananPublik from './pages/informasi-layanan/StandarPelayananPublik';
import MaklumatLayanan from './pages/informasi-layanan/MaklumatLayanan';
import PengelolaanPengaduan from './pages/informasi-layanan/PengelolaanPengaduan';
import SurveyKepuasanMasyarakat from './pages/informasi-layanan/SurveyKepuasanMasyarakat';
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
        <Route path="/profil/pejabat-pangan" element={<PejabatPangan />} />
        <Route path="/profil/hubungi-kami" element={<HubungiKami />} />
        <Route path="/bidang/sekretariat" element={<Sekretariat />} />
        <Route path="/bidang/distribusi-cadangan-pangan" element={<DistribusiCadanganPangan />} />
        <Route path="/bidang/ketersediaan-kerawanan-pangan" element={<KetersediaanKerawananPangan />} />
        <Route path="/bidang/konsumsi-keamanan-pangan" element={<KonsumsiKeamananPangan />} />
        <Route path="/bidang/uptd-bpsmp" element={<UPTDBPSMP />} />
        <Route path="/media/foto" element={<Foto />} />
        <Route path="/media/video" element={<Video />} />       
        <Route path="/berita" element={<Berita />} />
        <Route path="/download" element={<Download />} />
        <Route path="/program/apbn" element={<APBN />} />
        <Route path="/program/apbd" element={<APBD />} />
        <Route path="/informasi/pedoman-umum" element={<PedomanUmum />} />
        <Route path="/informasi/peraturan" element={<Peraturan />} />
        <Route path="/informasi/info-pengadaan" element={<InfoPengadaan />} />
        <Route path="/informasi/laporan-kinerja" element={<LaporanKinerja />} />
        <Route path="/ppid/profil-singkat" element={<ProfilSingkatPPID />} />
        <Route path="/ppid/visi-misi" element={<VisiMisiPPID />} />
        <Route path="/ppid/tugas-fungsi" element={<TugasFungsiPPID />} />
        <Route path="/ppid/informasi-berkala" element={<InformasiBerkala />} />
        <Route path="/ppid/informasi-setiap-saat" element={<InformasiSetiapSaat />} />
        <Route path="/ppid/informasi-serta-merta" element={<InformasiSertaMerta />} />
        <Route path="/ppid/struktur-organisasi" element={<StrukturOrganisasiPPID />} />
        <Route path="/informasi-layanan/standar-pelayanan-publik" element={<StandarPelayananPublik />} />
        <Route path="/informasi-layanan/maklumat-layanan" element={<MaklumatLayanan />} />
        <Route path="/informasi-layanan/pengelolaan-pengaduan" element={<PengelolaanPengaduan />} />
        <Route path="/informasi-layanan/survey-kepuasan-masyarakat" element={<SurveyKepuasanMasyarakat />} />

      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App
