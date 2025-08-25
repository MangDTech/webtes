import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const KegiatanPDRP = () => (
  <>
    <Navbar />
    <Breadcrumb />
    <section id="pdrp" className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Penanganan Daerah Rawan Pangan (PDRP)</h1>
      <div className="prose max-w-none text-gray-800 text-justify space-y-4">
        <p>Untuk penanganan kerawanan pangan dibutuhkan intervensi berupa tindakan yang dilakukan oleh pemerintah bersama-sama masyarakat dalam menanggulangi kejadian rawan pangan transien maupun kronis, untuk mengatasi masyarakat yang mengalami rawan pangan sesuai dengan kebutuhannya secara tepat dan cepat.</p>
        <p>Rawan pangan yang bersifat kronis memerlukan intervensi jangka menengah dan panjang, sedangkan untuk rawan pangan transien diperlukan intervensi jangka pendek tanggap darurat yang bersifat segera. Untuk mengoptimalkan dan mensinergikan peran pemerintah, pemerintah daerah dan masyarakat dalam pencegahan dan penanganan kerawanan pangan, disusun Pedoman Pelaksanaan Penanganan Daerah Rawan Pangan, sebagai bahan acuan dalam kegiatan Penanganan Daerah Rawan Pangan.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default KegiatanPDRP;
