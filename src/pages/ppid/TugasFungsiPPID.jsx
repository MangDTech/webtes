import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TugasFungsiPPID = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tugas dan Fungsi PPID
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                Pejabat Pengelola Informasi dan Dokumentasi
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex text-sm text-gray-600">
                <a href="/" className="hover:text-[#1B4332]">Home</a>
                <span className="mx-2">/</span>
                <a href="#" className="hover:text-[#1B4332]">PPID</a>
                <span className="mx-2">/</span>
                <span className="text-[#1B4332] font-medium">Tugas dan Fungsi PPID</span>
              </nav>
            </div>

            {/* Article Info */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
                <span>📅 Posted on 2021-01-07 15:07:34</span>
                <span>👤 by : Rio Bayu Sentosa</span>
                <span>👁️ 1401 kali dibaca</span>
              </div>
            </div>

            {/* PPID Pembantu Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold">
                  PPID Pembantu
                </h2>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] p-8 rounded-b-lg shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Pejabat Pengelola Informasi dan Dokumentasi Pembantu (PPID Pembantu) adalah pejabat yang melaksanakan tugas dan fungsi sebagai PPID pada Satuan Organisasi Perangkat Daerah di lingkungan Pemerintah Daerah, berupa :
                </p>

                <div className="space-y-6">
                  {/* Tugas 1 */}
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-[#1B4332]">
                    <h3 className="text-xl font-semibold text-[#1B4332] mb-4">
                      1. Pengklasifikasian Informasi
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-[#1B4332] mt-1">•</span>
                          <span className="text-gray-700">Informasi yang wajib disediakan dan diumumkan secara berkala</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-[#1B4332] mt-1">•</span>
                          <span className="text-gray-700">Informasi yang wajib diumumkan secara serta merta</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-[#1B4332] mt-1">•</span>
                          <span className="text-gray-700">Informasi yang wajib tersedia setiap saat</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-[#1B4332] mt-1">•</span>
                          <span className="text-gray-700">Informasi yang dikecualikan</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tugas 2-8 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">2. Koordinasi dan Konsolidasi</h4>
                      <p className="text-gray-700 text-sm">Mengkoordinasikan dan mengkonsolidasikan pengumpulan bahan informasi dan dokumentasi yang ada dilingkungannnya</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">3. Pelayanan Informasi</h4>
                      <p className="text-gray-700 text-sm">Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan informasi yang ada dilingkungannya kepada publik</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">4. Verifikasi Informasi</h4>
                      <p className="text-gray-700 text-sm">Melakukan verifikasi bahan informasi publik yang ada di lingkungannya</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">5. Pemutakhiran</h4>
                      <p className="text-gray-700 text-sm">Melakukan pemutakhiran informasi dan dokumentasi yang ada dilingkungannya</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">6. Akses Informasi</h4>
                      <p className="text-gray-700 text-sm">Menyediakan informasi dan dokumentasi yang ada di lingkungannya untuk akses oleh masyarakat</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">7. Inventarisasi</h4>
                      <p className="text-gray-700 text-sm">Melakukan inventerisasi informasi yang dikecualikan untuk disampaikan kepada PPID Utama</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-700 mb-2">8. Pelaporan</h4>
                    <p className="text-gray-700">Memberikan laporan tentang pengelolaan informasi yang ada di lingkungannya kepada PPID Utama secara berkala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Definisi Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Definisi dan Pengertian
                </h2>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] p-8 rounded-b-lg shadow-lg">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1B4332] mb-3">📄 Informasi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Informasi adalah keterangan, pernyataan, gagasan, dan tanda-tanda yang mengandung nilai, makna, dan pesan, baik data, fakta, maupun penjelasannya yang dapat dilihat, didengar, dan dibaca yang disajikan dalam berbagai kemasan dan format sesuai dengan perkembangan teknologi informasi dan komunikasi secara elektronik atau non elektronik.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1B4332] mb-3">🏛️ Informasi Publik</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Informasi Publik adalah informasi yang dihasilkan, disimpan, dikelola, dikirim, dan/ atau diterima oleh suatu badan publik yang berkaitan dengan penyelenggara dan penyelenggaraan negara dan/atau penyelenggara dan penyelenggaraan badan publik lainnya yang sesuai dengan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik serta informasi lain yang berkaitan dengan kepentingan publik.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1B4332] mb-3">🏢 Badan Publik</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Badan Publik adalah lembaga eksekutif, legislatif, yudikatif, dan badan lain yang fungsi dan tugas pokoknya berkaitan dengan penyelenggaraan negara, yang sebagian atau seluruh dananya bersumber dari APBN dan/ atau APBD, atau organisasi nonpemerintah sepanjang sebagian atau seluruh dananya bersumber dari APBN dan/ atau APBD, sumbangan masyarakat, dan/ atau luar negeri.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#1B4332] mb-3">📋 Dokumen</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Dokumen adalah data, catatan dan/atau keterangan yang dibuat dan/atau diterima oleh badan publik dalam rangka pelaksanaan kegiatannya, baik tertulis di atas kertas atau sarana lainnya maupun terekam dalam bentuk apapun, yang dapat dilihat, dibaca atau didengar.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#1B4332] mb-3">📁 Dokumentasi</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Dokumentasi adalah kegiatan penyimpanan data, catatan dan/ atau keterangan yang dibuat dan/ atau diterima oleh badan publik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kewajiban Badan Publik */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Kewajiban Badan Publik
                </h2>
                <p className="text-green-100 mt-2">Berdasarkan Pasal 7 UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik</p>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] p-8 rounded-b-lg shadow-lg">
                <div className="grid gap-6">
                  {/* Kewajiban Utama */}
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-700 mb-4">Kewajiban Utama</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <p className="text-gray-700">Menyediakan, memberikan dan/atau menerbitkan Informasi Publik yang berada di bawah kewenangannya kepada Pemohon Informasi Publik, selain informasi yang dikecualikan</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <p className="text-gray-700">Menyediakan Informasi Publik yang akurat, benar, dan tidak menyesatkan</p>
                      </div>
                    </div>
                  </div>

                  {/* Kewajiban Sistem */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">3. Sistem Informasi</h4>
                      <p className="text-gray-700 text-sm">Membangun dan mengembangkan sistem informasi dan dokumentasi untuk mengelola Informasi Publik secara baik dan efisien</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">4. Pertimbangan Tertulis</h4>
                      <p className="text-gray-700 text-sm">Membuat pertimbangan secara tertulis setiap kebijakan yang diambil untuk memenuhi hak setiap orang atas Informasi Publik</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">7. SOP Layanan</h4>
                      <p className="text-gray-700 text-sm">Menetapkan peraturan mengenai standar prosedur operasional layanan Informasi Publik</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">9. Penunjukan PPID</h4>
                      <p className="text-gray-700 text-sm">Menunjuk dan mengangkat PPID untuk melaksanakan tugas dan tanggung jawab serta wewenangnya</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">10. Anggaran</h4>
                      <p className="text-gray-700 text-sm">Menganggarkan pembiayaan secara memadai bagi layanan Informasi Publik</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-[#1B4332] mb-2">11. Sarana Prasarana</h4>
                      <p className="text-gray-700 text-sm">Menyediakan sarana dan prasarana layanan Informasi Publik, termasuk papan pengumuman dan situs resmi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jenis Informasi Publik */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Jenis Informasi Publik
                </h2>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] p-8 rounded-b-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-blue-700 mb-3">📅 Informasi Berkala</h3>
                    <p className="text-gray-700 text-sm">Informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan</p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">⚡ Informasi Serta Merta</h3>
                    <p className="text-gray-700 text-sm">Informasi yang apabila tidak disampaikan dapat mengancam hajat hidup orang banyak dan ketertiban umum yang berhubungan dengan tupoksi Badan Publik tanpa ada permintaan</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">🕐 Informasi Setiap Saat</h3>
                    <p className="text-gray-700 text-sm">Informasi yang telah dikuasasi dan didokumentasikan oleh Badan Publik serta telah dinyatakan terbuka sebagai informasi yang dapat diakses oleh pengguna informasi bilamana ada permintaan</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">🚫 Informasi Dikecualikan</h3>
                    <p className="text-gray-700 text-sm">Informasi yang dikuasai dan didokumentasikan oleh Badan Publik yang tidak dapat diakses oleh pemohon informasi berdasarkan alasan-alasan pengecualian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TugasFungsiPPID;
