import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function MaklumatLayanan() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#0C3823]">Maklumat Layanan</h1>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Maklumat Pelayanan Dinas Ketahanan Pangan Provinsi Sumatera Barat
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai dengan standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai dengan peraturan perundang-undangan yang berlaku.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">Janji Layanan Kami</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Melayani Dengan:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Ramah dan sopan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Cepat dan tepat waktu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Transparan dan akuntabel</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Tidak diskriminatif</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Memberikan:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Pelayanan berkualitas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Informasi yang jelas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Proses yang mudah</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Biaya sesuai ketentuan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-700 mb-4">Komitmen Waktu Pelayanan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-medium text-gray-700">Pelayanan Cepat</h4>
                  <p className="text-sm text-gray-600 mt-2">Sesuai standar yang ditetapkan</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="font-medium text-gray-700">Respon Cepat</h4>
                  <p className="text-sm text-gray-600 mt-2">Maksimal 1x24 jam</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-medium text-gray-700">Tepat Sasaran</h4>
                  <p className="text-sm text-gray-600 mt-2">Sesuai kebutuhan masyarakat</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Sanksi dan Kompensasi</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Jika Kami Tidak Memenuhi Janji:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Meminta maaf secara terbuka</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Memberikan pelayanan ulang</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Menerapkan sanksi internal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Melakukan perbaikan sistem</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Hak Masyarakat:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Mengajukan keluhan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Mendapat klarifikasi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Meminta perbaikan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Melaporkan pelanggaran</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Kontak dan Informasi</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Alamat Kantor:</h4>
                  <p className="text-gray-600">Jl. Raya Padang - Solok</p>
                  <p className="text-gray-600">Padang, Sumatera Barat</p>
                  <p className="text-gray-600">Kode Pos: 25000</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Kontak:</h4>
                  <p className="text-gray-600">Telp: (0751) 123456</p>
                  <p className="text-gray-600">Fax: (0751) 123457</p>
                  <p className="text-gray-600">Email: info@dinaspangan.sumbarprov.go.id</p>
                  <p className="text-gray-600">Website: www.dinaspangan.sumbarprov.go.id</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-green-100 border border-green-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                "Melayani Dengan Hati, Membangun Ketahanan Pangan"
              </h3>
              <p className="text-gray-700">
                Kepala Dinas Ketahanan Pangan Provinsi Sumatera Barat
              </p>
              <div className="mt-4 text-sm text-gray-600">
                Maklumat ini berlaku sejak tanggal ditetapkan dan akan dievaluasi secara berkala
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MaklumatLayanan;
