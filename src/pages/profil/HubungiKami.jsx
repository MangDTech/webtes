import { useState } from 'react';
import { useToast } from '../../components/ToastProvider';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

function HubungiKami() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    komentar: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  addToast({ type: 'success', title: 'Terkirim', description: 'Pesan Anda telah dikirim.' });
    // Reset form
    setFormData({
      email: '',
      nama: '',
      komentar: ''
    });
  };

  const handleReset = () => {
    setFormData({
      email: '',
      nama: '',
      komentar: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Dinas Pangan Provinsi Sumatera Barat.
          </h1>                    
        </div>
        
        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sekilas Info</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div>
              <span className="text-blue-600">📧 e_mail :</span>
              <span className="ml-2">
                <a href="mailto:dinaspangansumbar@gmail.com" className="text-blue-600 hover:underline">
                  dinaspangansumbar@gmail.com
                </a>
                , website : 
                <a href="https://dinaspangan.sumbarprov.go.id" className="text-blue-600 hover:underline ml-1">
                  dinaspangan.sumbarprov.go.id
                </a>
              </span>
            </div>
            <div>
              <span className="text-blue-600">🏢 Dinas Pangan Provinsi Sumatera Barat</span>
            </div>
          </div>
        </div>
        {/* Location Map */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Dinas Pangan</h3>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Google Maps Embed - Dinas Pangan Provinsi Sumatera Barat */}
            <iframe
              src="https://maps.google.com/maps?q=Dinas+Pangan+Provinsi+Sumatera+Barat,+Jl.+Jaksa+Agung+R.Soeprapto+No.4,+Padang&t=&z=18&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Lokasi Dinas Pangan Provinsi Sumatera Barat"
            ></iframe>
          </div>
          
          {/* Address Details */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Alamat Lengkap:</h4>
            <p className="text-gray-700">
              Jl. Jaksa Agung R.Soeprapto No.4, Flamboyan Baru, Kec. Padang Bar., Kota Padang, Sumatera Barat 25114
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <div>
                <span className="font-medium">Telepon:</span>
                <a href="tel:+6275170515256" className="text-blue-600 hover:underline ml-1">
                  (0751) 7051526
                </a>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <a href="mailto:dinaspangansumbar@gmail.com" className="text-blue-600 hover:underline ml-1">
                  dinaspangansumbar@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium">Website:</span>
                <a href="https://dinaspangan.sumbarprov.go.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  dinaspangan.sumbarprov.go.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave a reply</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Name Field */}
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Nama"
                value={formData.nama}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Comment Field */}
            <div>
              <label htmlFor="komentar" className="block text-sm font-medium text-gray-700 mb-2">
                Komentar
              </label>
              <textarea
                id="komentar"
                name="komentar"
                placeholder="Komentar Anda *"
                value={formData.komentar}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                KIRIM
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                BATAL
              </button>
            </div>
          </form>
        </div> 

      </div>
      
      <Footer />
    </div>
  );
}

export default HubungiKami;
