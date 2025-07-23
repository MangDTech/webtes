import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { HomeSection } from "../data/HomeSection"
import { CourseSection } from "../data/CourseSection"
import { Tutorlist } from "../data/TutorsSection"
import { Partnerlist } from "../data/PartnersSection"
import { ContactSection } from "../data/ContactSection"
import { GaleriList } from "../data/GaleriSection"
import { BeritaList } from "../data/BeritaSection"
import { LayananList } from "../data/LayananSection"
import { StatistikList } from "../data/StatistikSection"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import Galeri from "../components/Galeri"
import Berita from "../components/Berita"
import Layanan from "../components/Layanan"
import Statistik from "../components/Statistik"
import parse from 'html-react-parser'
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
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
      </section>

      {/* Statistik Section */}
      <section id="statistik">
        <Statistik StatistikList={StatistikList}/>
      </section>

      {/* Program Section */}
      <section id="program" className="bg-white">
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
      </section>

      {/* Berita Section */}
      <section id="berita">
        <Berita BeritaList={BeritaList}/>
      </section>

      {/* Layanan Section */}
      <section id="layanan">
        <Layanan LayananList={LayananList}/>
      </section>

      {/* Galeri Section */}
      <section id="galeri">
        <Galeri GaleriList={GaleriList}/>
      </section>

      {/* Partners Section */}
      <section id="kemitraan">
        <Partners PartnersList={Partnerlist}/>
      </section>

      {/* Tim Section */}
      <section id="struktur">
        <Tutors Tutorlist={Tutorlist}/>
      </section>

      {/* Contact Section */}
      <Contact ContactSection={ContactSection}/>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
