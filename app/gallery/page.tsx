"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="section-heading" data-aos="fade-up">
            GALLERY
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden card-hover"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Staggered effect
              >
                <Image
                  src="/place.png"
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            EVENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Drone Exhibition",
                date: "MAY 2023",
                description:
                  "Showcasing our latest drone projects and innovations to the university community and industry partners.",
                image: "/place.png",
              },
              {
                title: "Workshop Series",
                date: "JULY 2023",
                description:
                  "A series of hands-on workshops teaching drone building, programming, and flight techniques to new members.",
                image: "/place.png",
              },
              {
                title: "Competition Preparation",
                date: "SEPTEMBER 2023",
                description:
                  "Intensive training and preparation sessions for the upcoming national drone competition.",
                image: "/place.png",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Staggered effect
              >
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-primary text-black text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
