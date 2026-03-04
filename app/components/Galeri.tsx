"use client";

import { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
const projects = [
  {
    id: 1,
    image: '/galeri1.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pekerjaan pembangunan tanggul sungai untuk pengendalian banjir dengan penggunaan excavator medium dan long arm dalam proses penggalian serta pembentukan struktur tanah.'
  },
  {
    id: 2,
    image: '/galeri2.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Proyek normalisasi sungai yang meliputi pengerukan sedimentasi dan pelebaran alur sungai guna meningkatkan kapasitas aliran air saat musim hujan.'
  },
  {
    id: 3,
    image: '/galeri3.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pembangunan sistem drainase kawasan industri menggunakan excavator 10 ton untuk memastikan aliran air berjalan optimal dan mencegah genangan.'
  },
  {
    id: 4,
    image: '/hero.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pembuatan tanggul pelindung kawasan perumahan untuk mengantisipasi luapan air sungai dengan metode pemadatan tanah bertahap.'
  },
  {
    id: 5,
    image: '/galeri4s.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pekerjaan pengerukan dan pembersihan saluran irigasi guna meningkatkan distribusi air ke area pertanian dan mengurangi sedimentasi.'
  },
  {
    id: 6,
    image: '/galeri1.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Proses cut and fill serta perataan lahan untuk pembangunan gedung perkantoran menggunakan excavator medium dengan efisiensi waktu kerja tinggi.'
  },
  {
    id: 7,
    image: '/galeri1.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pembuatan tanggul sementara untuk mendukung proses konstruksi dan pengamanan area proyek dari potensi limpasan air.'
  },
  {
    id: 8,
    image: '/galeri1.png',
    title: 'Pembangunan tanggul',
    location: 'Kalimantan Selatan',
    year: '2024',
    description: 'Pekerjaan peningkatan infrastruktur sungai melalui pengerukan dan pembentukan struktur tebing guna memperkuat daya tahan terhadap erosi.'
  },

];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dokumentasi Proyek & Pekerjaan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai proyek konstruksi dan infrastruktur yang telah kami dukung dengan armada alat berat kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={`${project.title} - Dokumentasi Proyek Mulya Jaya Konstruksi`}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Image */}
              <div className="relative h-96">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} - Dokumentasi Proyek Mulya Jaya Konstruksi`}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
                    <span>{selectedProject.year}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    Proyek ini menggunakan armada alat berat dari Mulya Jaya Konstruksi dengan hasil yang memuaskan dan selesai tepat waktu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h4 className="text-4xl font-bold mb-2">150++</h4>
              <p className="text-yellow-50">Proyek Diselesaikan</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">50+</h4>
              <p className="text-yellow-50">Klien Swasta & Pemerintah</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">100%</h4>
              <p className="text-yellow-50">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
