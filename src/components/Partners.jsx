function Partners(props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Link Website Terkait
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Website instansi pemerintah dan organisasi yang terkait dengan bidang pangan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {props.PartnersList.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 group"
            >
              <div className="flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-accent transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.link}</p>
              </div>
              <div className="text-accent opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
