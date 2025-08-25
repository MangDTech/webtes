import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function TupoksiSekretariat() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tupoksi Sekretariat
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tugas Pokok */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tugas Pokok :</h2>
            <p className="text-gray-700 leading-relaxed">
              Melakukan pengelolaan program, evaluasi dan pelaporan, urusan rumah tangga Dinas, ketatausahaan, tatalaksana, humas, protokol, hukum dan organisasi serta hubungan masyarakat.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fungsi :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Menyusun program kerja dan melaksanakan evaluasi dan pelaporan berdasarkan rencana kerja urusan Dinas Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pembinaan dan pemberian dukungan administrasi yang meliputi ketatausahaan, kepegawaian, keuangan, aset, kerjasama, hubungan masyarakat, arsip dan dokumentasi;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pengkoordinasian kegiatan ketatausahaan untuk memfasilitasi kelancaran tugas urusan Dinas Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan dan perumusan Rencana Strategis;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan pelayanan administrasi keluar dan didalam organisasi;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Pelaksanaan tugas lain yang diberikan oleh Kepala Dinas.</span>
              </li>
            </ul>
          </div>

          {/* Struktur Sekretariat */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sekretariat terdiri dari :</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Sub Bagian Perencanaan dan Evaluasi</h3>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Sub Bagian Umum dan Keuangan</h3>
              </div>
            </div>
          </div>

          {/* Detail Sub Bagian */}
          <div className="space-y-6">
            {/* Sub Bagian Perencanaan dan Evaluasi */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sub Bagian Perencanaan dan Evaluasi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menyiapkan bahan penyusunan rencana umum jangka pendek, menengah dan jangka panjang serta proposal pengembangan kegiatan berdasarkan urusan yang menjadi kewenangan Dinas Pangan sesuai skala prioritas dan arahan pimpinan. Serta melakukan monitoring dan evaluasi, pelaporan serta melakukan pendataan statistik pangan.
              </p>
            </div>

            {/* Sub Bagian Umum dan Keuangan */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sub Bagian Umum dan Keuangan</h3>
              <p className="text-gray-700 leading-relaxed">
                Mempunyai tugas menyelenggarakan melaksanakan urusan ketatausahaan, ketatalaksanaan, kepegawaian dan organisasi, humas, protokol serta urusan rumah tangga, pelayanan administrasi keuangan dan aset, menyelenggarakan pembukuan, laporan keuangan dan aset dinas pangan, memelihara dokumen keuangan dan aset, serta membuat laporan pertanggungjawaban keuangan dan aset sesuai dengan ketentuan dan peraturan yang berlaku.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Sekretariat</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tupoksi</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Bidang</span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Dinas Pangan</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TupoksiSekretariat;
