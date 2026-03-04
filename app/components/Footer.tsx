import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Mulya Jaya Konstruksi</h3>
            <p className="text-gray-400 mb-4 text-xs">
              Mulya Jaya Konstruksi merupakan penyedia layanan rental excavator
              dan alat berat untuk proyek konstruksi, pembangunan tanggul,
              normalisasi sungai, serta pekerjaan infrastruktur lainnya.
            </p>
            <div className="flex space-x-4 ">
              <a href="#" aria-label="Facebook Mulya Jaya Konstruksi" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram Mulya Jaya Konstruksi" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-yellow-600 transition">Beranda</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-600 transition">Tentang Kami</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-600 transition">Layanan</a>
              </li>
              <li>
                <a href="#armada" className="hover:text-yellow-600 transition">Armada</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-600 transition">Galeri</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-600 transition">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-yellow-600 transition">Rental Excavator Standar</span>
              </li>
              <li>
                <span className="hover:text-yellow-600 transition">Rental Excavator Long Arm</span>
              </li>
              <li>
                <span className="hover:text-yellow-600 transition">Pekerjaan Normalisasi Sungai</span>
              </li>
              <li>
                <span className="hover:text-yellow-600 transition">Pembangunan Tanggul & Drainase</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
                <span>Jl. Trikora KM 7, Kelurahan Guntung Manggis
                  Kecamatan Landasan Ulin
                  Banjarbaru, Kalimantan Selatan, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>+62 812-5009-4111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>cv.mulyajayakonstruksi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Mulya Jaya Konstruksi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}