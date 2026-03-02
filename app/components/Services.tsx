import { Bolt, Wrench, Clock, HeadphonesIcon, Shield, HardHat } from 'lucide-react';

const services = [
  {
    icon: Bolt,
    title: 'Rental Excavator',
    description: 'Excavator siap kerja untuk percepat tanggul, normalisasi sungai, pengerukan, dan drainase proyek Anda.'
  },
  {
    icon: HardHat,
    title: 'Operator Berpengalaman',
    description: 'Tim operator profesional dan berkompeten siap mengoperasikan alat berat sesuai kebutuhan proyek'
  },
  {
    icon: Clock,
    title: 'Sewa Fleksibel',
    description: 'Paket sewa harian, mingguan, bulanan, atau jangka panjang sesuai kebutuhan proyek'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support 24/7',
    description: 'Layanan dukungan teknis dan customer service siap membantu kapan saja'
  },
  {
    icon: Shield,
    title: 'Asuransi Terjamin',
    description: 'Semua unit dilengkapi dengan asuransi untuk keamanan dan kenyamanan Anda'
  },
  {
    icon: Wrench,
    title: 'Perawatan Rutin',
    description: 'Maintenance dan inspeksi berkala memastikan performa optimal'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan rental alat berat dengan layanan profesional dan terpercaya
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh Konsultasi untuk Proyek Anda?
          </h3>
          <p className="text-yellow-50 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu menemukan solusi rental Excavator yang tepat untuk kebutuhan proyek Anda
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
