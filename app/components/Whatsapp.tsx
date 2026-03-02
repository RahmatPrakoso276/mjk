import React from 'react'
import Image from 'next/image';
export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/+6281250094111"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" className='rounded-full' width={55} height={55}/>

    </a>
  )
}
