"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h1 className="section-heading" data-aos="fade-up">
            PROJECTS
          </h1>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            COMPLETED PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Micro Class UAV",
                image: "/Project1.jpg",
                description:
                  "The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible.",
              },
              {
                id: 2,
                title: "Autonomous UAV with Hotspot Detection",
                image: "/Project2.jpg",
                description:
                  "The Club designed, built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection.",
              },
              {
                id: 3,
                title: "Racing Drone",
                image: "/Project3.jpg",
                description:
                  "The club designed, built and flew a high-speed, agile unmanned aerial vehicle designed specifically for competitive racing. Its sleek, aerodynamic frame is typically made from lightweight material i.e. carbon fiber to maximize speed and maneuverability while ensuring durability.",
              },
            ].map((project, index) => (
              <div
                key={project.id}
                className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Staggered effect
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section
        className="py-20 bg-gradient-to-b from-blue-950/10 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            ONGOING PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/ongoingProject1.jpg"
                  alt="Flying wing configuration of RC Plane"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  1. Flying wing configuration of RC Plane
                </h3>
                <p className="text-gray-400">
                  An innovative design approach that eliminates the conventional
                  tail section, resulting in a more efficient and aerodynamic
                  aircraft with reduced drag and improved performance.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/ongoingProject2.jpg"
                  alt="Ornithopter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">2. Ornithopter</h3>
                <p className="text-gray-400">
                  A fascinating aircraft that mimics the flapping-wing motion of
                  birds, providing unique flight characteristics and research
                  opportunities in biomimetic engineering.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  3. Custom build flight controller firmware using STM 32
                  microcontroller
                </h3>
                <p className="text-gray-400">
                  Developing specialized firmware for precise control and
                  optimization of drone flight characteristics, tailored to our
                  specific requirements and performance goals.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  4. Autonomous fixed wing UAV
                </h3>
                <p className="text-gray-400">
                  Creating a self-navigating fixed-wing aircraft capable of
                  executing missions autonomously, with applications in
                  surveillance, mapping, and data collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">FUTURE IDEAS</h2>
          <p className="text-center text-gray-400 mb-12">
            *Below images are only for reference*
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/futureProject1.jpg"
                  alt="Control Multiple Drones with IPS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Control Multiple Drones with IPS (Indoor Positioning System)
                </h3>
                <p className="text-gray-400">
                  Advanced system for coordinating multiple drones in indoor
                  environments with precise positioning, enabling complex
                  choreographed movements and collaborative tasks.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/futureProject2.jpg"
                  alt="High Endurance UAV Drones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  High Endurance UAV Drones
                </h3>
                <p className="text-gray-400">
                  Long-duration unmanned aerial vehicles designed for extended
                  flight times, capable of covering vast distances and
                  performing prolonged monitoring missions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Collaboration CTA */}
      <section
        className="py-20 bg-gradient-to-b from-blue-950/20 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project Idea?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for new challenges and collaborations. If you
            have an innovative drone project idea, we'd love to hear from you!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Propose a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
