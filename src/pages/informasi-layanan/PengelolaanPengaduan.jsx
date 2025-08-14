import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function PengelolaanPengaduan() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#0C3823]">Pengelolaan Pengaduan</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                Tentang Pengelolaan Pengaduan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pengelolaan pengaduan adalah proses penanganan pengaduan yang meliputi penerimaan, pencatatan, verifikasi, investigasi, analisis, dan penyelesaian pengaduan dari masyarakat mengenai pelayanan publik di lingkungan Dinas Ketahanan Pangan Provinsi Sumatera Barat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-4">Jenis Pengaduan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Keterlambatan pelayanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Pelayanan tidak sesuai standar</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Pungutan tidak resmi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Sikap petugas yang tidak baik</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Fasilitas pelayanan tidak memadai</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-700 mb-4">Cara Menyampaikan Pengaduan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">📧</span>
                    <span>Email: pengaduan@dinaspangan.sumbarprov.go.id</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">📞</span>
                    <span>Telepon: (0751) 123456</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">💬</span>
                    <span>WhatsApp: 0812-3456-7890</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">🏢</span>
                    <span>Datang langsung ke kantor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">📮</span>
                    <span>Kotak pengaduan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Alur Pengelolaan Pengaduan</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-medium text-gray-700">Penerimaan</h4>
                  <p className="text-sm text-gray-600 mt-1">Pengaduan diterima melalui berbagai kanal</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-medium text-gray-700">Pencatatan</h4>
                  <p className="text-sm text-gray-600 mt-1">Pengaduan dicatat dalam sistem</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-medium text-gray-700">Verifikasi</h4>
                  <p className="text-sm text-gray-600 mt-1">Verifikasi kebenaran pengaduan</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-medium text-gray-700">Investigasi</h4>
                  <p className="text-sm text-gray-600 mt-1">Investigasi dan analisis masalah</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold text-lg">5</span>
                  </div>
                  <h4 className="font-medium text-gray-700">Penyelesaian</h4>
                  <p className="text-sm text-gray-600 mt-1">Tindak lanjut dan penyelesaian</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-700 mb-4">Waktu Penyelesaian</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pengaduan Sederhana:</span>
                    <span className="font-medium text-red-600">3 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pengaduan Kompleks:</span>
                    <span className="font-medium text-red-600">14 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Konfirmasi Penerimaan:</span>
                    <span className="font-medium text-red-600">1x24 Jam</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Persyaratan Pengaduan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Identitas pengadu yang jelas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Uraian pengaduan yang rinci</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Bukti pendukung (jika ada)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Kontak yang dapat dihubungi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">Hak dan Kewajiban</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Hak Pengadu:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Mendapat konfirmasi penerimaan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Memperoleh informasi perkembangan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Mendapat jawaban yang memuaskan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Kerahasiaan identitas dijaga</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Kewajiban Pengadu:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Menyampaikan informasi yang benar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Memberikan bukti yang valid</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Kooperatif dalam investigasi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Bertanggung jawab atas pengaduan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Unit Pengelola Pengaduan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Penanggung Jawab:</h4>
                  <p className="text-gray-600">Kepala Bagian Umum dan Kepegawaian</p>
                  <p className="text-gray-600">Dinas Ketahanan Pangan Provinsi Sumatera Barat</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Jam Layanan:</h4>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00 WIB</p>
                  <p className="text-gray-600">Istirahat: 12:00 - 13:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PengelolaanPengaduan;
