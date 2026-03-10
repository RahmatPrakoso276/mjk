"use client";

import { useState, useEffect } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
const projects = [
  {
    id: 1,
    image: '/galeri1.png',
    title: 'Rehabilitasi Jaringan Irigasi D.I.R Pakacangan',
    location: 'Padang Besar, Kabupaten Hulu Sungai Utara, Kalimantan Selatan.',
    year: '2024',
    description: `Proyek Rehabilitasi Jaringan Irigasi D.I.R Pakacangan berlokasi di Padang Besar, Kabupaten Hulu Sungai Utara, Kalimantan Selatan. Pekerjaan ini mencakup pemulihan dan peningkatan fungsi jaringan irigasi yang telah mengalami kerusakan akibat faktor usia dan kondisi alam, guna memastikan distribusi air pertanian kembali berjalan optimal bagi para petani di kawasan tersebut.\n\nKegiatan utama yang dilaksanakan meliputi pembersihan saluran dari sedimentasi dan vegetasi liar, perbaikan struktur bangunan bagi (saddle) dan pintu air, serta penguatan lereng saluran dengan pasangan batu dan beton. Seluruh pekerjaan dikerjakan menggunakan armada alat berat dari Mulya Jaya Konstruksi, termasuk excavator long arm untuk efisiensi maksimal di lapangan.\n\nDaerah Irigasi Pakacangan memiliki luas layanan ratusan hektare lahan sawah produktif yang menjadi tulang punggung ketahanan pangan masyarakat Hulu Sungai Utara. Dengan rehabilitasi jaringan ini, efisiensi penggunaan air meningkat signifikan serta mengurangi kehilangan air akibat kebocoran dan kerusakan struktur saluran yang lama.\n\nProyek ini merupakan bagian dari komitmen pemerintah daerah dalam mendukung sektor pertanian berkelanjutan di Kalimantan Selatan. Mulya Jaya Konstruksi berhasil menyelesaikan seluruh pekerjaan tepat waktu sesuai kontrak dengan standar kualitas yang memenuhi spesifikasi teknis Dinas Pekerjaan Umum Kabupaten Hulu Sungai Utara.`
  },
  {
    id: 2,
    image: '/galeri22.png',
    title: 'Pembukaan & Normalisasi Saluran Lahan Basah',
    location: 'Pulau Sari, Kec. Tambang Ulang, Kabupaten Tanah Laut, Kalimantan Selatan',
    year: '2026',
    description: `Pekerjaan pembukaan dan normalisasi saluran drainase dilaksanakan di Desa Pulau Sari, Kecamatan Tambang Ulang, Kabupaten Tanah Laut, Kalimantan Selatan. Lokasi pekerjaan berada di kawasan lahan basah dengan vegetasi rawa yang lebat, sehingga membutuhkan penanganan khusus menggunakan alat berat yang sesuai dengan kondisi medan berlumpur dan berair.\n\nProses pekerjaan meliputi pembersihan vegetasi rawa (land clearing) dan penggalian saluran baru untuk memperlancar aliran air di kawasan tersebut. Excavator Hitachi long arm dikerahkan oleh Mulya Jaya Konstruksi sebagai unit utama dalam pekerjaan ini, beroperasi langsung di atas permukaan lahan basah guna menjangkau area yang sulit diakses dengan metode konvensional.\n\nKawasan Tambang Ulang merupakan salah satu wilayah yang memiliki potensi lahan pertanian dan perkebunan cukup besar di Kabupaten Tanah Laut. Pembukaan saluran drainase ini bertujuan untuk mengurangi genangan air yang menghambat produktivitas lahan, sekaligus mendukung rencana pengembangan kawasan pertanian yang lebih luas di sekitar Desa Pulau Sari.\n\nSeluruh pekerjaan dilaksanakan dengan memperhatikan kondisi cuaca dan kontur tanah yang dinamis di lingkungan rawa. Mulya Jaya Konstruksi memastikan operasional alat berat berjalan aman dan efisien, sehingga target volume galian dan pembentukan saluran dapat tercapai sesuai dengan rencana kerja yang telah ditetapkan. Proyek ini merupakan bagian dari Program Ketahanan Pangan Nasional yang dicanangkan oleh Presiden Prabowo Subianto, sebagai upaya mewujudkan kedaulatan pangan Indonesia melalui optimalisasi lahan pertanian produktif di seluruh pelosok nusantara.`
  },
  {
    id: 3,
    image: '/galeri3.png',
    title: 'Normalisasi Sungai & Pembangunan Tanggul',
    location: 'Bati Bati, Kalimantan Selatan',
    year: '2025',
    description: `Pekerjaan normalisasi sungai dan pembangunan tanggul dilaksanakan di kawasan Bati Bati, Kalimantan Selatan. Proyek ini bertujuan untuk memulihkan kapasitas aliran sungai yang mengalami penyempitan akibat sedimentasi dan pertumbuhan vegetasi liar di sepanjang bantaran, sekaligus membangun struktur tanggul yang kokoh sebagai pelindung kawasan di sekitar aliran sungai.\n\nPada gambar tampak excavator Hitachi long arm beroperasi di tepi sungai, melakukan proses pembersihan vegetasi dan pembentukan struktur tanggul secara bersamaan. Lengan panjang excavator memungkinkan jangkauan kerja yang lebih luas ke tengah alur sungai, sehingga proses pengerukan sedimentasi dan pembentukan profil tebing sungai dapat dikerjakan dengan presisi tinggi tanpa memerlukan akses langsung ke dalam aliran air.\n\nKawasan Bati Bati merupakan daerah dengan aktivitas pertanian dan permukiman yang padat. Normalisasi sungai di kawasan ini menjadi prioritas untuk mengurangi risiko banjir musiman yang kerap merendam lahan pertanian dan pemukiman warga, seiring meningkatnya curah hujan dan pendangkalan sungai yang terus terjadi setiap tahunnya.\n\nMulya Jaya Konstruksi mengerahkan unit excavator long arm terbaik untuk memastikan seluruh pekerjaan normalisasi dan pembangunan tanggul dapat diselesaikan dengan standar teknis yang tinggi. Proyek ini menjadi salah satu bukti nyata komitmen perusahaan dalam mendukung program pengendalian banjir dan perlindungan infrastruktur daerah di Kalimantan Selatan, sekaligus menjadi bagian dari Program Ketahanan Pangan Nasional yang dicanangkan oleh Presiden Prabowo Subianto demi mewujudkan ketahanan dan kedaulatan pangan Indonesia.`
  },
  {
    id: 4,
    image: '/hero.png',
    title: 'Pembangunan Tanggul Pengaman Sekunder & Tersier',
    location: 'Pelaihari, Kalimantan Selatan',
    year: '2025',
    description: `Proyek pembangunan tanggul pengaman sekunder dan tersier dilaksanakan di kawasan Pelaihari, Kalimantan Selatan, sebagai bagian dari upaya menyeluruh dalam melindungi lahan pertanian produktif dari ancaman genangan dan luapan air. Pekerjaan ini meliputi pembentukan tanggul-tanggul penahan air di sepanjang saluran sekunder dan tersier guna mengoptimalkan tata kelola air di kawasan sawah yang rawan tergenang.\n\nTampak dalam dokumentasi, tiga unit excavator Hitachi dikerahkan sekaligus dan beroperasi secara paralel di atas lahan yang tergenang air. Mobilisasi multi-unit alat berat ini mencerminkan skala dan urgensi pekerjaan yang harus diselesaikan dalam waktu efektif. Para pekerja lapangan turut berperan aktif membantu koordinasi antar unit di tengah kondisi medan yang sangat menantang dengan kedalaman genangan yang cukup tinggi.\n\nPelaihari memiliki kawasan pertanian yang luas dan strategis. Pembangunan tanggul pengaman sekunder dan tersier ini menjadi tulang punggung sistem irigasi kawasan, memastikan setiap petak sawah mendapatkan suplai air yang teratur sekaligus terlindungi dari risiko banjir yang dapat merusak hasil panen dan menghambat produktivitas pertanian.\n\nProyek ini merupakan implementasi langsung dari Program Ketahanan Pangan Nasional yang dicanangkan oleh Presiden Prabowo Subianto. Mulya Jaya Konstruksi berperan aktif dalam mewujudkan program strategis nasional ini dengan mengerahkan armada alat berat terbaik, sehingga infrastruktur pengairan lahan pertanian di Kalimantan Selatan dapat terbangun kuat dan berkelanjutan demi kedaulatan pangan Indonesia.`
  },


];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [selectedProject]);

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
                aria-label="Tutup galeri"
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

                <p className="text-gray-700 leading-relaxed text-justify">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-white">
            <div>
              <h4 className="text-4xl font-bold mb-2">100+</h4>
              <p className="text-yellow-50">Proyek Diselesaikan</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">50+</h4>
              <p className="text-yellow-50">Klien Swasta & Pemerintah</p>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}
