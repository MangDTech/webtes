import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const VisiMisiPPID = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Visi Misi PPID
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                Pemerintah Provinsi Sumatera Barat
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex text-sm text-gray-600">
                <a href="/" className="hover:text-[#1B4332]">Home</a>
                <span className="mx-2">/</span>
                <a href="#" className="hover:text-[#1B4332]">PPID</a>
                <span className="mx-2">/</span>
                <span className="text-[#1B4332] font-medium">Visi Misi PPID</span>
              </nav>
            </div>

            {/* Article Info */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
                <span>📅 Posted on 2021-01-07 15:03:46</span>
                <span>👤 by : Rio Bayu Sentosa</span>
                <span>👁️ 1330 kali dibaca</span>
              </div>
            </div>

            {/* Visi Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  VISI PPID
                </h2>
                <p className="text-center text-green-100 mt-2">
                  Pemerintah Provinsi Sumatera Barat
                </p>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] p-8 rounded-b-lg shadow-lg">
                <div className="text-center">
                  <div className="inline-block p-6 bg-green-50 rounded-lg border-l-4 border-[#1B4332]">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                      "Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk memenuhi hak pemohon informasi sesuai dengan ketentuan peraturan perundang-undangan."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Misi Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A27] text-white p-6 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  MISI PPID
                </h2>
                <p className="text-center text-green-100 mt-2">
                  Pemerintah Provinsi Sumatera Barat
                </p>
              </div>
              
              <div className="bg-white border-2 border-[#1B4332] rounded-b-lg shadow-lg">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Membangun dan mengembangkan sistem penyediaan dan layanan informasi
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Meningkatkan kompetensi sumberdaya manusia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 border-l-4 border-[#1B4332] p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-[#1B4332] text-2xl">
                    ℹ️
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-[#1B4332] mb-2">
                    Komitmen PPID
                  </h3>
                  <p className="text-gray-700">
                    Visi dan Misi PPID Pemerintah Provinsi Sumatera Barat ini menjadi landasan dalam memberikan pelayanan informasi publik yang optimal kepada masyarakat dengan mengedepankan prinsip transparansi, akuntabilitas, dan kualitas layanan.
                  </p>
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

export default VisiMisiPPID;
