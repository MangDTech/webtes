import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function VisiMisiTupoksi() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-footer">Visi, Misi dan Tupoksi</h1>
        <div className="text-sm text-gray-500 mb-2">Posted on 2017-04-03 10:45:40 | by : Dimas Dwi Randa | 6591 kali dibaca | Category:</div>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Visi</h2>
          <blockquote className="italic border-l-4 border-footer pl-4 text-lg text-gray-700">“ Menjadi Institusi yang handal dalam memantapkan kemandirian pangan masyarakat berbasis sumber daya lokal “.</blockquote>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Misi</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-1">
            <li>Meningkatkan penganekaragaman konsumsi dan mutu pangan masyarakat yang aman berbasis sumberdaya, kelembagaan dan budaya lokal.</li>
            <li>Meningkatkan Kualitas dan kuantitas sumber daya dan ketersediaan pangan secara berkelanjutan serta penanganan kerawanan pangan.</li>
            <li>Mewujudkan sistem distribusi pangan dan memupuk cadangan pangan untuk menjamin stabilisasi pasokan dan harga pangan.</li>
            <li>Mengembangkan Pangan Segar Asal Tumbuhan yang Memenuhi Standar Mutu dan Keamanan Pangan yang Dikelola Secara Profesional Berbasis Agribisnis dan Memiliki Daya Saing Tinggi.</li>
            <li>Meningkatkan koordinasi dalam perumusan kebijakan dan pengelolaan kemandirian pangan.</li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Tugas Pokok</h2>
          <p className="text-gray-700">" Membantu Gubernur melaksanakan urusan pemerintahan yang menjadi kewenangan daerah dan tugas pembantuan di bidang pangan "</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Fungsi</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-1">
            <li>Perumusan dan pelaksanaan kebijakan daerah di bidang ketersediaan pangan, kerawanan pangan, distribusi pangan, cadangan pangan, penganekaragaman konsumsi dan keamanan pangan;</li>
            <li>Peningkatan kualitas sumber daya manusia di bidang ketersediaan pangan, kerawanan pangan, distribusi pangan, cadangan pangan, penganekaragaman konsumsi dan keamanan pangan;</li>
            <li>Pemantauan, pengawasan, evaluasi dan pelaporan penyelenggaraan di bidang ketersediaan pangan,kerawanan pangan, distribusi pangan, cadangan pangan, penganekaragaman konsumsi dan keamanan pangan;</li>
            <li>Pelaksanaan fungsi lain yang diberikan oleh atasan</li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Tujuan</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-1">
            <li>Meningkatkan konsumsi pangan masyarakat yang B2SA (Beragam, Bergizi, seimbang dan aman) berbasis sumberdaya lokal.</li>
            <li>Meningkatkan ketahanan pangan melalui penyediaan pangan serta antisipasi kerawanan pangan.</li>
            <li>Memperkuat sistem distribusi dan stabilisasi harga pangan utama.</li>
            <li>Memperkuat Cadangan Pangan pemerintah Prov Sumbar.</li>
            <li>Meningkatkan keamanan pangan segar</li>
            <li>Menyediakan pangan segar yang terjamin keamanan dan mutunya untuk dikonsumsi masyarakat serta meningkatkan daya saing produk pangan segar melalui sertifikasi</li>
            <li>Meningkatkan koordinasi dan peran aparatur dalam mewujudkan Kemandirian Pangan.</li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-footer">Sasaran</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-1">
            <li>Meningkatnya kualitas dan keberagaman konsumsi masyarakat.</li>
            <li>Terpenuhinya ketersediaan pangan minimal terhadap energi dan protein.</li>
            <li>Meningkatnya usaha desa mandiri pangan dan menurunnya tingkat kerawanan pangan.</li>
            <li>Stabilnya harga pangan utama di tingkat produsen dan konsumen.</li>
            <li>Tersedianya cadangan pangan pemerintah provinsi Sumatera Barat.</li>
            <li>Meningkatnya pangan segar yang aman dan bermutu untuk dikonsumsi masyarakat</li>
            <li>Tersedianya pangan segar yang aman dan bermutu untuk dikonsumsi masyarakat</li>
            <li>Meningkatnya daya saing produk pangan segar melalui sertifikasi</li>
            <li>Meningkatnya kualitas transparansi dan akuntabilitas pelaporan evaluasi kinerja dan sistem keuangan.</li>
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default VisiMisiTupoksi;
