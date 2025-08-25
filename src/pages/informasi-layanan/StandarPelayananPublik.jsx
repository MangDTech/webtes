import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function StandarPelayananPublik() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#0C3823]">Standar Pelayanan Publik</h1>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Tentang Standar Pelayanan Publik
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Standar Pelayanan Publik adalah tolak ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan dan acuan penilaian kualitas pelayanan sebagai kewajiban dan janji penyelenggara kepada masyarakat dalam rangka pelayanan yang berkualitas, cepat, mudah, terjangkau, dan terukur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Komponen Standar Pelayanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Dasar Hukum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Persyaratan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Sistem, Mekanisme, dan Prosedur</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Jangka Waktu Penyelesaian</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Biaya/Tarif</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-700 mb-4">Prinsip Pelayanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Sederhana</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Terbuka</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Partisipatif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Berkeadilan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Dapat Dipertanggungjawabkan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Jenis Pelayanan Dinas Ketahanan Pangan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-medium text-green-700">Perizinan</h4>
                  <p className="text-sm text-gray-600 mt-2">Penerbitan izin usaha pangan dan sertifikasi</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🔍</div>
                  <h4 className="font-medium text-blue-700">Pengawasan</h4>
                  <p className="text-sm text-gray-600 mt-2">Monitoring dan evaluasi keamanan pangan</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-medium text-yellow-700">Informasi</h4>
                  <p className="text-sm text-gray-600 mt-2">Penyediaan data dan informasi pangan</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Waktu Pelayanan</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Hari Kerja:</h4>
                  <p className="text-gray-600">Senin - Jumat</p>
                  <p className="text-gray-600">08:00 - 16:00 WIB</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Istirahat:</h4>
                  <p className="text-gray-600">12:00 - 13:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Komitmen Pelayanan</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dinas Ketahanan Pangan Provinsi Sumatera Barat berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat dengan menjunjung tinggi prinsip-prinsip pelayanan publik yang berkualitas.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Target Pelayanan:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kepuasan masyarakat ≥ 85%</li>
                    <li>• Waktu penyelesaian sesuai standar</li>
                    <li>• Zero complaint handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Kontak Pengaduan:</h4>
                  <p className="text-sm text-gray-600">Email: pengaduan@dinaspangan.sumbarprov.go.id</p>
                  <p className="text-sm text-gray-600">Telp: (0751) 123456</p>
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

export default StandarPelayananPublik;
