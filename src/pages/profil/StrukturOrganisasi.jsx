import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function StrukturJabatan() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-[#0C3823]">Struktur Organisasi Dinas Pangan Provinsi Sumatera Barat</h1>
  {/* Meta removed as requested */}
        
        {/* Struktur Organisasi Chart - Using Image */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-center">
            <img 
              src="/Struktur_Organisasi.jpeg" 
              alt="Susunan Organisasi Dinas Pangan Provinsi Sumatera Barat" 
              className="w-full max-w-4xl h-auto rounded-lg shadow-md"
            />
          </div>
        </div>        
      </main>
      <Footer />
    </div>
  );
}

export default StrukturJabatan;
