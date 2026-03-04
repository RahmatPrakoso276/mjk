import { Scale, Layers, Fuel, Calendar } from 'lucide-react';
import Image from 'next/image';
const fleetData = [
  {
    name: 'Excavator Standar',
    image: '/standar.png',
    capacity: '10 Ton',
    fuelType: 'Solar',
    year: '2013-2026',
    unit: '3 Unit',
    description: 'Ideal untuk saluran air, drainase, dan pekerjaan penggalian di ruang terbatas.'
  },
  {
    name: 'Excavator Long Arm',
    image: '/longarm.png',
    capacity: '20 Ton',
    fuelType: 'Solar',
    year: '2015-2020',
    unit: '7 Unit',
    description: 'Ideal untuk normalisasi sungai, pengerukan sedimentasi, dan pekerjaan tanggul dengan jangkauan lebih panjang'
  },

];

export default function Armada() {
  return (
    <section id="armada" aria-labelledby="armada-heading"
      className="py-20 bg-gray-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Armada Excavator Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilihan unit rental excavator dan alat berat di Banjarbaru
            dengan kondisi prima dan siap kerja untuk proyek konstruksi dan sungai.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {fleetData.map((equipment, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-84 overflow-hidden">
                <Image
                  src={equipment.image}
                  alt={`${equipment.name} Rental Excavator Mulya Jaya Konstruksi di Banjarbaru`}
                  width={1080}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Tersedia
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {equipment.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {equipment.description}
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Scale className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-sm">Kapasitas: {equipment.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Layers className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-sm">Total Unit: {equipment.unit}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Fuel className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-sm">Bahan Bakar: {equipment.fuelType}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-sm">Tahun: {equipment.year}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                  Hubungi Untuk Harga
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
