import React from 'react'
import { CheckCircle, Target, Eye } from 'lucide-react';
import Image from 'next/image';
export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading"
      className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/mjkabout.jpeg"
              alt="Rental Excavator Mulya Jaya Konstruksi di Banjarbaru untuk Proyek Sungai, Drainase, dan Irigasi"
              className="rounded-lg shadow-2xl" width={650}
              height={450}
            />
            <div className="absolute mr-5 -bottom-6 -right-6 bg-yellow-600 text-white p-8 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm">Tahun Melayani</p>
            </div>
          </div>

          {/* Content */}
          <article className='text-justify'>
            <h2 id="about-heading" className="text-start md:text-justify text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Mulya Jaya Konstruksi – Rental Excavator & Alat Berat Profesional
            </h2>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Mulya Jaya Konstruksi</span> adalah penyedia jasa
              rental excavator dan alat berat yang berlokasi di Banjarbaru, Kalimantan Selatan.
              Kami melayani Banjarbaru, Banjarmasin, dan wilayah sekitarnya untuk pekerjaan
              sungai dan saluran air seperti pembangunan tanggul, normalisasi sungai,
              pengerukan sedimentasi, serta rehabilitasi drainase dan irigasi.
            </p>
            <p className="text-gray-600 mb-8">
              Dengan pengalaman <span className="font-semibold">lebih dari 20 tahun</span>,
              kami menyediakan <span className="font-semibold">armada terawat</span>,
              <span className="font-semibold"> operator berpengalaman</span>, dan
              <span className="font-semibold"> layanan yang responsif</span>.
              Unit siap kerja di lapangan untuk membantu proyek berjalan
              <span className="font-semibold"> aman, cepat, dan sesuai target</span>.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Keunggulan Kami
            </h3>
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Armada Terawat</h4>
                  <p className="text-gray-600">Semua unit rutin dilakukan perawatan dan inspeksi berkala</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Operator Berpengalaman</h4>
                  <p className="text-gray-600">Tim operator profesional dan kompeten</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Harga Kompetitif</h4>
                  <p className="text-gray-600">Penawaran harga terbaik dengan kualitas terjamin</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Eye className="w-10 h-10 text-yellow-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Visi</h4>
                <p className="text-gray-600 text-sm">
                  Menjadi penyedia rental alat berat terpercaya dan terdepan di Indonesia
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Target className="w-10 h-10 text-yellow-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Misi</h4>
                <p className="text-gray-600 text-sm">
                  Memberikan solusi terbaik dengan layanan prima dan armada berkualitas
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
