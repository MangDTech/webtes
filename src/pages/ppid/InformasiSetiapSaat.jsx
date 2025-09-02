import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

const InformasiSetiapSaat = () => {
  const informasiItems = [
    {
      id: 1,
      title: "Profil Singkat Dinas Pangan",
      content: "Informasi umum mengenai profil, visi, misi, dan struktur organisasi Dinas Pangan Provinsi Sumatera Barat.",
      category: "Informasi Setiap Saat"
    },
    {
      id: 2,
      title: "Data Program dan Kegiatan",
      content: "Informasi mengenai program dan kegiatan yang dilaksanakan oleh Dinas Pangan dalam bidang ketahanan pangan.",
      category: "Informasi Setiap Saat"
    },
    {
      id: 3,
      title: "Laporan Keuangan",
      content: "Laporan keuangan dan anggaran yang dapat diakses oleh masyarakat sesuai dengan ketentuan yang berlaku.",
      category: "Informasi Setiap Saat"
    },
    {
      id: 4,
      title: "Prosedur Pelayanan Publik",
      content: "Informasi mengenai prosedur, persyaratan, dan mekanisme pelayanan publik yang tersedia di Dinas Pangan.",
      category: "Informasi Setiap Saat"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Informasi Setiap Saat
          </h1>
          <div className="w-32 h-1 bg-purple-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Informasi yang dapat diakses kapan saja oleh masyarakat</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {informasiItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex">
                {/* Document Icon */}
                <div className="w-48 h-40 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <div className="relative">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15,7V3H9V7H3V21H21V7H15M11,19H9V9H11V19M15,19H13V9H15V19M19,19H17V9H19V19Z" />
                    </svg>
                    {/* Small icon overlay */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6A2,2 0 0,1 14,8A2,2 0 0,1 12,10A2,2 0 0,1 10,8A2,2 0 0,1 12,6M12,20C10.67,20 9.46,19.5 8.5,18.68L8.5,17C8.5,15.9 10.6,15.4 12,15.4C13.4,15.4 15.5,15.9 15.5,17V18.68C14.54,19.5 13.33,20 12,20Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Dokumen Resmi</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Setiap Saat</span>
                      </div>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InformasiSetiapSaat;
