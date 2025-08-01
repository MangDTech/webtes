import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function StrukturOrganisasiPPID() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-[#0C3823]">Struktur Organisasi PPID</h1>
    </main>
      <Footer />
    </div>
    );
}

export default StrukturOrganisasiPPID;