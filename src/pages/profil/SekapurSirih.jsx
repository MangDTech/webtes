import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function SekapurSirih() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold mb-4 text-[#0C3823]">Sekapur Sirih</h1>
  {/* Meta removed as requested */}
        
        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img 
            src="/kepaladps.jpeg" 
            alt="Kepala Dinas Pangan Provinsi Sumatera Barat" 
            className="w-80 h-100 object-cover rounded-lg shadow-lg"
          />
        </div>

        <section className="mb-6 text-gray-700 leading-relaxed">
          <p>Selamat datang di Website Resmi Dinas Pangan Provinsi Sumatera Barat,</p>
          <p className="mt-4">Pengembangan Ketahanan Pangan mempunyai peranan strategis dalam pembangunan Daerah di Sumatera Barat, karena akses terhadap pangan dan gizi yang cukup merupakan hak yang paling asasi bagi umat manusia, disamping itu kualitas pangan dan gizi yang dikonsumsi merupakan unsur penentu yang sangat penting bagi pembentukan Sumber Daya Manusia yang berkualitas. Dengan demikian Ketahanan Pangan merupakan salah satu pilar utama untuk menopang ketahanan ekonomi dan ketahanan nasional yang berkelanjutan.</p>
          <p className="mt-4">Pelaksanaan pembangunan ketahanan pangan di Sumatera Barat berdasarkan Undang-Undang Pangan Nomor 7 Tahun 1996 sebagaimana telah diubah dengan UU Nomor 18 Tahun 2012 dan Peraturan Pemerintah Nomor 68 Tahun 2002 tentang Ketahanan Pangan yang telah dituangkan ke dalam RPJMD Provinsi Sumatera Barat tahun 2025 s/d 2029.</p>
          <p className="mt-4">Dalam mewujudkan Ketahanan Pangan, Pemerintahan Daerah Provinsi Sumatera Barat telah membentuk Organisasi Perangkat  Daerah (OPD) yang khusus menangani ketahanan pangan yang ditetapkan dengan Peraturan Daerah Provinsi Sumatera Barat Nomor 8 Tahun 2016 tanggal 1 November 2016, tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Sumatera Barat</p>
          <p className="mt-4">Semoga dengan adanya Website Dinas Pangan Provinsi Sumatera Barat ini dapat membantu masyarakat dalam penyampaian informasi publik tentang Program dan kegiatan Ketahanan Pangan  yang meliputi empat aspek yakni 1) aspek Ketersediaan (Availability), 2) aspek Aksesibilitas (Accessibility)  3) aspek Pemanfaatan (Utilization) dan 4) Aspek Stabilitas (stability).</p>
          <blockquote className="mt-6 italic border-l-4 border-footer pl-4 text-lg text-gray-800">“Padi masak, jaguang maupiah, taranak bakambang biak, cokelat maambiak, ikan mambangkik, rimbo tajago, ketahanan pangan mantap, anak tasakolahan pulo”.</blockquote>
          <div className="mt-8">
            <div className="font-semibold">Kepala Dinas Pangan <br/>Provinsi Sumatera Barat</div>
            <div className="mt-2">ttd</div>
            <div className="mt-1 font-bold">Drs. IQBAL RAMADI PAYANA, M.Si</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SekapurSirih;
