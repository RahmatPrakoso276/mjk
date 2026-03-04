import React from 'react'
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative min-h-screen flex items-center py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/hero.png"
          alt="Rental Excavator Profesional di Banjarbaru - Mulya Jaya Konstruksi"
          className="w-full h-full object-cover opacity-100"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Rental Excavator Profesional di Banjarbaru Harga Terbaik & Siap Kerja
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Menyediakan jasa rental excavator untuk pembangunan tanggul, normalisasi sungai, irigasi, drainase, dan pengerukan.
            Melayani Banjarbaru, Banjarmasin, dan seluruh wilayah Kalimantan Selatan..
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#armada"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition"
            >
              Lihat Armada
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Award className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">20+</h3>
            <p className="text-gray-200">Tahun Pengalaman</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Wrench className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-200">Unit Excavator</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Users className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-200">Klien Puas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
