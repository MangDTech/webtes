import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import { HomeSection } from "../data/HomeSection"
// import { CourseSection } from "../data/CourseSection"
// import { Tutorlist } from "../data/TutorsSection"
// import { Partnerlist } from "../data/PartnersSection"
// import { ContactSection } from "../data/ContactSection"
// import { GaleriList } from "../data/GaleriSection"
import { BeritaList } from "../data/BeritaSection"
//import { LayananList } from "../data/LayananSection"
// import { StatistikList } from "../data/StatistikSection"
// import Tutors from "../components/Tutors"
// import Partners from "../components/Partners"
//import Contact from "../components/Contact"
// import Galeri from "../components/Galeri"
// import Berita from "../components/Berita"
// import Layanan from "../components/Layanan"
// import Statistik from "../components/Statistik"
//import parse from 'html-react-parser'
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section
      <section id="home" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                {parse(HomeSection.content)}
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <img 
                src={HomeSection.image} 
                alt="Dinas Pangan Sumatera Barat"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content Section - Berita dan Sidebar */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Berita Utama */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-footer">
                  Berita Utama
                </h2>
              </div>
              
              {/* Grid Berita */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BeritaList.slice(0, 6).map((berita, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      {berita.image ? (
                        <img src={berita.image} alt={berita.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2">📷</div>
                          <div className="text-sm">NO IMAGE<br/>AVAILABLE</div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {berita.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {berita.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{berita.views} views | {berita.date}</span>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded">
                          {berita.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Gubernur dan Wagub */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-footer text-white p-3">
                  <h3 className="font-semibold">Gubernur dan Wakil Gubernur</h3>
                </div>
                <div className="p-4 text-center">
                  <img 
                    src="/pimpinan.webp" 
                    alt="Gubernur dan Wagub Sumatera Barat"
                    className="w-full h-auto object-cover rounded mb-3"
                  />                  
                </div>
              </div>

              {/* Pengumuman */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-footer text-white p-3">
                  <h3 className="font-semibold">Pengumuman</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Agenda Kegiatan</p>
                      <p className="text-xs text-gray-500">Informasi terkini mengenai kegiatan dinas</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Pengumuman Pengadaan</p>
                      <p className="text-xs text-gray-500">Info pengadaan barang dan jasa</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Info Penting Lainnya</p>
                      <p className="text-xs text-gray-500">Informasi penting untuk masyarakat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-footer text-white p-3">
                  <h3 className="font-semibold">Agenda</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Rapat Koordinasi Pangan</p>
                      <p className="text-xs text-blue-500">28 | Jul | 2025</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Sosialisasi Keamanan Pangan</p>
                      <p className="text-xs text-blue-500">30 | Jul | 2025</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-700 mb-1">Monitoring Distribusi Pangan</p>
                      <p className="text-xs text-blue-500">02 | Aug | 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* RESEP PANGAN LOKAL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-footer text-white p-4">
                <h2 className="text-xl font-bold text-white">Resep Pangan Lokal</h2>
              </div>
              <div className="p-6">
                {/* Featured Recipe */}
                <div className="mb-6">
                  <div className="h-40 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-orange-800">
                      <div className="text-4xl mb-2">🍽️</div>
                      <div className="text-sm font-semibold">Bingka Kentang</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bingka Kentang</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Bahan: 3 Butir Telur Bebek 1 Sdm Mentega Untuk Olesan Aduk Rata. 75 G Tepung Terigu Berprotein Sedang, Ayak 300 G Kentang, Rebus, Kupas, Haluskan 75 G Gula Pasir...
                  </p>
                </div>
                
                {/* Recipe List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-12 h-12 bg-yellow-100 rounded flex items-center justify-center">
                      🥞
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Pancake Kentang</p>
                      <p className="text-xs text-gray-500">17 Juni 2015 • Berita • 6,928 views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                      🍜
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Resep Kue Talam</p>
                      <p className="text-xs text-gray-500">02 April 2015 • Berita • 102,767 views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center">
                      🧁
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Kue Lumpur Ubi Ungu</p>
                      <p className="text-xs text-gray-500">30 Maret 2015 • Berita • 13,728 views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ARTIKEL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-footer text-white p-4">
                <h2 className="text-xl font-bold text-white">Artikel</h2>
              </div>
              <div className="p-6">
                <div className="h-40 bg-gradient-to-br from-orange-200 to-red-300 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">📄</div>
                    <div className="text-sm font-semibold">Artikel Terbaru</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Revisi Renstra Dinas Pangan Prov. Sumbar Tahun 2016-2021
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">Berita • 04 Februari 2022 17:24:15 WIB • 1,951 views</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Laporan Kinerja Dinas Pangan Provinsi Sumatera Barat Tahun 2021
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">Berita • 04 Februari 2022 17:24:15 WIB • 1,951 views</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Panduan Keamanan Pangan untuk Masyarakat
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">Berita • 15 Januari 2022 10:30:00 WIB • 2,543 views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* INFORMASI HARGA PANGAN */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-footer text-white p-4">
                <h2 className="text-xl font-bold text-white">Informasi Harga Pangan</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Daftar Harga Pangan di Titik (Dinas Pangan Sumbar) Tanggal 24 Mei 2018
                    </h3>
                    <p className="text-xs text-blue-600 mb-2">24 Mei 2018 13:14:39 WIB • Berita • 3,618 views</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Panen, Harga Beras Tetap Tinggi
                    </h3>
                    <p className="text-xs text-green-600 mb-2">24 April 2018 09:54:08 WIB • Berita • 3,845 views</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      Info Harga Komoditas Pangan Harian
                    </h3>
                    <p className="text-xs text-yellow-600 mb-2">Update setiap hari • Live Data</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      Monitoring Harga Pangan Strategis
                    </h3>
                    <p className="text-xs text-purple-600 mb-2">Laporan mingguan • Data Terkini</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistik Section */}
      {/* <section id="statistik">
        <Statistik StatistikList={StatistikList}/>
      </section> */}

      {/* Program Section */}
      {/* <section id="program" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="prose prose-lg max-w-none">
                {parse(CourseSection.content)}
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={CourseSection.image} 
                alt="Program Dinas Pangan"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Berita Section */}
      {/* <section id="berita">
        <Berita BeritaList={BeritaList}/>
      </section> */}

      {/* Layanan Section */}
      {/* <section id="layanan">
        <Layanan LayananList={LayananList}/>
      </section> */}

      {/* Galeri Section */}
      {/* <section id="galeri">
        <Galeri GaleriList={GaleriList}/>
      </section> */}

      {/* Partners Section */}
      {/* <section id="kemitraan">
        <Partners PartnersList={Partnerlist}/>
      </section> */}

      {/* Tim Section */}
      {/* <section id="struktur">
        <Tutors Tutorlist={Tutorlist}/>
      </section> */}

      {/* Contact Section */}
      {/* <Contact ContactSection={ContactSection}/> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
