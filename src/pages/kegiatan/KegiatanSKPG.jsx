import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const KegiatanSKPG = () => (
  <>
    <Navbar />
    <Breadcrumb />
    <section id="skpg" className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Sistem Ketahanan Pangan dan Gizi (SKPG)</h1>
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