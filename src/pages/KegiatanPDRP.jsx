import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KegiatanPDRP = () => (
  <>
    <Navbar />
    <section id="pdrp" className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
      <h1 className="text-2xl font-bold text-green-800 mb-2">Penanganan Daerah Rawan Pangan (PDRP)</h1>
      <div className="text-xs text-gray-500 mb-4">
        <span>Posted on 2017-04-03 12:14:45</span> | <span>by : Dimas Dwi Randa</span> | <span>4413 kali dibaca</span> | <span>Category:</span>
      </div>
      <div className="prose max-w-none text-gray-800 text-justify space-y-4">
        <p>Untuk penanganan kerawanan pangan dibutuhkan intervensi berupa tindakan yang dilakukan oleh pemerintah bersama-sama masyarakat dalam menanggulangi kejadian rawan pangan transien maupun kronis, untuk mengatasi masyarakat yang mengalami rawan pangan sesuai dengan kebutuhannya secara tepat dan cepat.</p>
        <p>Rawan pangan yang bersifat kronis memerlukan intervensi jangka menengah dan panjang, sedangkan untuk rawan pangan transien diperlukan intervensi jangka pendek tanggap darurat yang bersifat segera. Untuk mengoptimalkan dan mensinergikan peran pemerintah, pemerintah daerah dan masyarakat dalam pencegahan dan penanganan kerawanan pangan, disusun Pedoman Pelaksanaan Penanganan Daerah Rawan Pangan, sebagai bahan acuan dalam kegiatan Penanganan Daerah Rawan Pangan.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default KegiatanPDRP;
