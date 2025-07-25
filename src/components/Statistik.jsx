// function Statistik({ StatistikList }) {
//   return (
//     <section className="py-16 bg-primary">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Data Statistik
//           </h2>
//           <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             Data dan statistik terkini mengenai ketahanan pangan di Provinsi Sumatera Barat
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {StatistikList.map((item, index) => (
//             <div key={index} className="text-center bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300">
//               <div className="text-4xl md:text-5xl font-bold text-accent mb-3">
//                 {item.number}
//               </div>
//               <div className="text-lg font-semibold text-gray-800 mb-2">
//                 {item.label}
//               </div>
//               <div className="text-sm text-gray-600 leading-relaxed">
//                 {item.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Statistik
