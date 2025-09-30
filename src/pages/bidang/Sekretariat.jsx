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
          <h1 className="page-title">
            Tupoksi Sekretariat
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img 
            src="/sekretariat.jpeg" 
            alt="Kepala Dinas Pangan Provinsi Sumatera Barat" 
            className="w-120 h-140 object-cover rounded-lg shadow-lg"
          />
        </div> 

        {/* Content */}
        <div className="content-card">
          {/* Tugas Pokok */}
          <div className="mb-8">
            <h2 className="section-title">Tugas Pokok :</h2>
            <p className="content-text">
              Merupakan salah satu bagian dari Struktur Organisasi yang memiliki tugas sebagai pelayan teknis dan administrasi ke seluruh unit kerja dalam lingkup Organisasi Dinas Pangan Provinsi Sumatera Barat.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="section-title">Fungsi :</h2>
            <p className="content-text mb-4">
              Sekretariat Dinas Pangan selain menjalankan tugas sebagai pelayan teknis dan administrasi, 
              Sekretariat juga memiliki fungsi sebagai :
            </p>
            <ol className="numbered-list content-text">
              <li className="leading-relaxed">
                Koordinasi penyusunan rencana, program, anggaran di bidang ketahanan pangan;
              </li>
              <li className="leading-relaxed">
                Pembinaan dan pemberian dukungan administrasi yang meliputi ketatausahaan, kepegawaian, 
                keuangan, kerumah tanggaan, kerjasama, hubungan masyarakat, arsip, dan dokumentasi;
              </li>
              <li className="leading-relaxed">
                Pembinaan dan penataan organisasi dan tatalaksana;
              </li>
              <li className="leading-relaxed">
                Koordinasi dan penyusunan peraturan perundang-undangan;
              </li>
              <li className="leading-relaxed">
                Pengelolaan barang milik/kekayaan Negara; dan
              </li>
              <li className="leading-relaxed">
                Pelaksanaan Penatausahaan Keuangan SKPD;
              </li>
              <li className="leading-relaxed">
                Pelaksanaan tugas lain yang diberikan oleh kepala Dinas sesuai dengan tugas dan fungsinya.
              </li>
            </ol>
          </div> 
            {/* Struktur Organisasi */}
            <div className="mb-8">
            <h2 className="section-title">Struktur Organisasi :</h2>
            <p className="content-text mb-4">
                Dalam menjalankan tugas dan fungsinya, sekretariat dilaksanakan oleh Sekretaris dan 
                dibantu oleh 1 Sub bagian dan 2 Pejabat Fungsional tertentu yang merupakan jabatan 
                fungsional penyetaraan yang terdiri dari :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">
                    1. Pejabat Fungsional Perencanaan Ahli Muda yang bertanggungjawab atas 
                    tugas kegiatan Perencanaan dan Evaluasi kegiatan Ketahanan Pangan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">
                    2. Sub bagian Keuangan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">
                    3. Pejabat Fungsional Analis SDM Aparatur Ahli Muda yang bertanggungjawab 
                    atas tugas kegiatan Umum, Aset dan kepegawaian
                  </span>
                </li>
              </ul>
            </div>                   
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TupoksiSekretariat;
