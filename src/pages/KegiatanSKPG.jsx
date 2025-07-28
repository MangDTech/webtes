import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KegiatanSKPG = () => (
  <>
    <Navbar />
    <section id="skpg" className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
      <h1 className="text-2xl font-bold text-green-800 mb-2">Sistem Ketahanan Pangan dan Gizi (SKPG)</h1>
      <div className="text-xs text-gray-500 mb-4">
        <span>Posted on 2017-04-03 12:15:05</span> | <span>by : Dimas Dwi Randa</span> | <span>4321 kali dibaca</span> | <span>Category:</span>
      </div>
      <div className="prose max-w-none text-gray-800 text-justify space-y-4">
        <p>Sistem Ketahanan Pangan dan Gizi (SKPG) merupakan sistem yang mengintegrasikan berbagai komponen dalam ketahanan pangan dan gizi, termasuk produksi, distribusi, konsumsi, dan pemantauan gizi masyarakat. SKPG bertujuan untuk memastikan ketersediaan pangan yang cukup, aman, bergizi, dan terjangkau bagi seluruh masyarakat.</p>
        <p>Melalui SKPG, pemerintah daerah dapat mengidentifikasi daerah-daerah yang rawan pangan dan mengambil langkah-langkah untuk meningkatkan ketahanan pangan di wilayah tersebut. Ini termasuk pengembangan infrastruktur pertanian, peningkatan akses ke pasar, dan program-program pemberdayaan masyarakat.</p>
        <p>SKPG juga berperan penting dalam pemantauan status gizi masyarakat. Dengan data yang akurat tentang konsumsi pangan dan status gizi penduduk, pemerintah dapat merancang intervensi yang tepat untuk mengatasi masalah gizi buruk atau kekurangan gizi di masyarakat.</p>
      </div>
    </section>
    <Footer />
  </>
);
export default KegiatanSKPG;