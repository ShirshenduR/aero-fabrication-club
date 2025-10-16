"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section
        className="relative min-h-screen flex items-center pt-16"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-7xl tracking-tight font-extrabold text-white"
                style={{ fontFamily: "Archivo, sans-serif" }}
                data-aos="fade-right"
              >
                AERO
                <br />
                FABRICATION
                <br />
                CLUB
              </h1>

              <p
                className="text-yellow-500 max-w-lg text-2xl font-bold font-serif" // Updated text color to yellow
                style={{ fontFamily: "Roboto, sans-serif" }}
                data-aos="fade-up"
              >
                WHERE PASSION MEETS PROPULSION ✈️
              </p>

              <p
                className="text-gray-200 max-w-lg"
                style={{ fontFamily: "Roboto, sans-serif" }}
                data-aos="fade-up"
              >
                Designing, building, and flying innovative unmanned aerial
                vehicles. Join us in pushing the boundaries of aerospace
                engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition duration-300"
                  asChild
                  data-aos="fade-up"
                >
                  <Link href="/projects">Explore Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-100 transition duration-300"
                  asChild
                  data-aos="fade-up"
                >
                  <Link href="/contact">Join Us</Link>
                </Button>
              </div>
            </div>
            <div
              className="relative h-[600px] hidden lg:block rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-left"
            >
              <Image
                src="/drone3new.png"
                alt="Drone"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 " data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2
            className="section-heading text-white text-3xl font-bold mb-8"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            <FontAwesomeIcon icon={faRocket} className="mr-2" />
            FEATURED PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Micro Class UAV",
                image: "/Project1.jpg",
                description:
                  "3D printed RC Plane optimized for maximum payload fraction and minimum empty weight.",
              },
              {
                title: "Autonomous UAV",
                image: "/Project2.jpg",
                description:
                  "Autonomous unmanned aerial vehicle capable of hotspot detection.",
              },
              {
                title: "Racing Drone",
                image: "/Project3.jpg",
                description:
                  "High-speed, agile racing drone with carbon fiber frame for competitive racing.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                data-aos="fade-up"
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
                  <h3
                    className="text-xl font-bold mb-2 text-white"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-400 mb-4"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {project.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-yellow-500 p-0 flex items-center gap-1"
                    asChild
                  >
                    <Link href="/projects">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-100 transition duration-300"
              asChild
            >
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 " data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2
            className="section-heading text-white text-3xl font-bold mb-8"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            <FontAwesomeIcon icon={faTrophy} className="mr-2" />
            ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "2nd Place - Autonomous Drone-Aerothon22",
                image: "/Achievement1.jpg",
                description:
                  "Secured 2nd place in the design phase of the prestigious Autonomous Drone-Aerothon22.",
              },
              {
                title: "1st Place - SAE Indian Southern Section DDC '23",
                image: "/Achievement2.jpg",
                description:
                  "Secured 1st place in the Best Aerodynamics Analysis (CFD) category at the SAE Indian Southern Section DDC '23.",
              },
              {
                title: "3rd Place - Flight Fury at IIT Roorkee Tech Fest",
                image: "/Achievement3.jpg",
                description:
                  "Achieved 3rd place in Flight Fury at the esteemed IIT Roorkee Tech Fest.",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-white"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-100 transition duration-300"
              asChild
            >
              <Link href="/achievements" className="flex items-center gap-2">
                View All Achievements <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 " data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/aboutpng.png"
                alt="Team Photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                ABOUT US
              </h2>
              <p
                className="text-gray-300"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                The Aero Fabrication Club. As the name itself suggests the clubs
                invokes learning in students by incorporating two major topics
                which form the building blocks of all the engineering sciences.
                Here at AFC we believe in "Creating to Learn, Learning to
                Create" and try to build out of the very basic laws provided by
                the nature. Constituting of a huge participation from all the
                years of the UG program we are an ever growing and an ever
                learning family.
              </p>
              <Button
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition duration-300"
                asChild
                data-aos="fade-up"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Ready to Take Flight?
          </h2>
          <p
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Join the AeroFabrication Club and be part of our innovative team
            pushing the boundaries of aerospace engineering.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition duration-300"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
