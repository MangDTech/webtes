import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function TupoksiKetersediaanKerawananPangan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-2 text-footer">
            Tupoksi Bidang Ketersediaan dan Kerawanan Pangan
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img 
            src="/bidang_ketersediaan.jpeg"            
            className="w-120 h-140 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tugas */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Tugas :</h2>
            <p className="text-gray-700 leading-relaxed">
              Melaksanakan penyusunan dan pelaksanaan kebijakan, pemberian bimbingan teknis, pemantauan dan evaluasi di bidang Ketersediaan dan Kerawanan Pangan.
            </p>
          </div>

          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Fungsi :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>1. Penyiapan sarana dan prasarana dalam rangka penyelenggaraan Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>2. Penyiapan penyusunan bahan rumusan kebijakan daerah di bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>3. Penyiapan pelaksanaan kebijakan di bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>4. Penyiapan pelaksanaan Pengendalian dan pengawasan bidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>5. Pemberian bimbingan teknis dan supervisi dibidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>6. Penyiapan pelaksanaan koordinasi operasional dibidang Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>7. Koordinasi, monitoring, evaluasi, informasi dan promosi terhadap Ketersediaan dan Kerawanan Pangan;</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>8. Pelaksanaan tugas lain yang diberikan oleh kepala Dinas.</span>
              </li>
            </ul>
          </div>       
          {/* Fungsi */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-footer">Bidang Ketersediaan dan Kerawanan Pangan terdiri dari :</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>1. Seksi Ketersediaan Pangan</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>2. Seksi Sumberdaya Pangan</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>3. Seksi Kerawanan Pangan</span>
              </li>
         
            </ul>
          </div>    
        </div>
      </div>      
      <Footer />
    </div>
  );
}

export default TupoksiKetersediaanKerawananPangan;
