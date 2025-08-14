import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function SurveyKepuasanMasyarakat() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#0C3823]">Survey Kepuasan Masyarakat</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                Tentang Survey Kepuasan Masyarakat (SKM)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Survey Kepuasan Masyarakat adalah pengukuran secara komprehensif tentang tingkat kepuasan masyarakat yang diperoleh dari hasil pengukuran atas pendapat masyarakat dalam memperoleh pelayanan dari penyelenggara pelayanan publik dengan membandingkan antara harapan dan kebutuhannya.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-4">Tujuan SKM</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">🎯</span>
                    <span>Mengukur tingkat kepuasan masyarakat</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">📊</span>
                    <span>Mengetahui kelemahan pelayanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">🔧</span>
                    <span>Meningkatkan kualitas pelayanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">📈</span>
                    <span>Sebagai bahan evaluasi kinerja</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-700 mb-4">Aspek Penilaian</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">⭐</span>
                    <span>Persyaratan pelayanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">⭐</span>
                    <span>Sistem, mekanisme, dan prosedur</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">⭐</span>
                    <span>Waktu penyelesaian</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">⭐</span>
                    <span>Biaya/tarif pelayanan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Unsur Pelayanan yang Dinilai</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-medium text-blue-700">Prosedur</h4>
                  <p className="text-sm text-gray-600 mt-2">Kemudahan tahapan pelayanan</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <h4 className="font-medium text-green-700">Petugas</h4>
                  <p className="text-sm text-gray-600 mt-2">Kompetensi dan keramahan</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-2">🏢</div>
                  <h4 className="font-medium text-yellow-700">Sarana</h4>
                  <p className="text-sm text-gray-600 mt-2">Kenyamanan dan keamanan</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">Metode Pelaksanaan SKM</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Cara Survey:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">📱</span>
                      <span>Survey online melalui website</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">📝</span>
                      <span>Kuesioner langsung di kantor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">📞</span>
                      <span>Wawancara melalui telepon</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">📧</span>
                      <span>Survey melalui email</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Jadwal Survey:</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">Triwulan I:</span> Januari - Maret</p>
                    <p><span className="font-medium">Triwulan II:</span> April - Juni</p>
                    <p><span className="font-medium">Triwulan III:</span> Juli - September</p>
                    <p><span className="font-medium">Triwulan IV:</span> Oktober - Desember</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Hasil SKM Terbaru</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">87.5</div>
                  <h4 className="font-medium text-gray-700">Skor Kepuasan</h4>
                  <p className="text-sm text-gray-600">Kategori: Baik</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <h4 className="font-medium text-gray-700">Tingkat Respons</h4>
                  <p className="text-sm text-gray-600">Partisipasi Aktif</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">456</div>
                  <h4 className="font-medium text-gray-700">Total Responden</h4>
                  <p className="text-sm text-gray-600">Periode Q3 2024</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">9.2</div>
                  <h4 className="font-medium text-gray-700">Nilai Mutu</h4>
                  <p className="text-sm text-gray-600">Skala 1-10</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-700 mb-4">Kategori Nilai Mutu</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-red-100 rounded">
                    <span className="text-gray-700">25.00 - 64.99</span>
                    <span className="font-medium text-red-600">Tidak Baik</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                    <span className="text-gray-700">65.00 - 76.60</span>
                    <span className="font-medium text-yellow-600">Kurang Baik</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                    <span className="text-gray-700">76.61 - 88.30</span>
                    <span className="font-medium text-blue-600">Baik</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                    <span className="text-gray-700">88.31 - 100.00</span>
                    <span className="font-medium text-green-600">Sangat Baik</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-4">Manfaat Partisipasi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">✨</span>
                    <span>Membantu meningkatkan kualitas layanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">🤝</span>
                    <span>Memberikan masukan yang berharga</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">🎯</span>
                    <span>Mendorong inovasi pelayanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">📊</span>
                    <span>Data untuk pengambilan keputusan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Ikuti Survey Kepuasan Masyarakat
              </h3>
              <p className="text-gray-600 mb-6">
                Partisipasi Anda sangat berharga untuk meningkatkan kualitas pelayanan kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Survey Online
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Unduh Kuesioner
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Lihat Hasil SKM
                </button>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Kontak Tim SKM</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Koordinator SKM:</h4>
                  <p className="text-gray-600">Nama: Tim Pengelola SKM</p>
                  <p className="text-gray-600">Email: skm@dinaspangan.sumbarprov.go.id</p>
                  <p className="text-gray-600">Telp: (0751) 123456 ext. 234</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Jam Layanan:</h4>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00 WIB</p>
                  <p className="text-gray-600">Istirahat: 12:00 - 13:00 WIB</p>
                  <p className="text-gray-600">Survey Online: 24/7</p>
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

export default SurveyKepuasanMasyarakat;
