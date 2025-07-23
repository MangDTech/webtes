import parse from 'html-react-parser'

function Contact(props) {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kontak Kami
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.ContactSection.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-gray-700 leading-relaxed">
                {parse(item.content)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
