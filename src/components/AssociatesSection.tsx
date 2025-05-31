'use client'

import React from 'react';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

export default function ClientsSection() {
  const clients: Client[] = [
    { id: 1, name: "TATA", logo: "/tata.png" },
    { id: 2, name: "delhi metro rail corporation", logo: "/delhi.svg" },
   
    { id: 4, name: "rail vikas nigam limited", logo: "/rail.png" },
    { id: 5, name: "PWD Govt of Maharasrhtra", logo: "/pwd.png" },
    { id: 4, name: "jaipur development authority", logo: "/jaipur.png" },
    { id: 5, name: "irctc", logo: "/irctc.png" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
              <div className="h-1 w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-5xl font-bold text-black">Our Clients</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
  {clients.map((client) => (
    <div
      key={client.id}
      className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white shadow-md p-2"
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={100}
        height={100}
        className="object-contain w-full h-full rounded-full"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}