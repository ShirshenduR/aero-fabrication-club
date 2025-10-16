"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AboutPage() {
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
            ABOUT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg" data-aos="fade-up">
                The Aero Fabrication Club. As the name itself suggests the clubs
                invokes learning in students by incorporating two major topics
                which form the building blocks of all the engineering sciences.
                Here at AFC we believe in "Creating to Learn, Learning to
                Create" and try to build out of the very basic laws provided by
                the nature. Constituting of a huge participation from all the
                years of the UG program we are an ever growing and an ever
                learning family.
              </p>
              <p className="text-gray-300 text-lg" data-aos="fade-up">
                Our mission is to provide hands-on experience in designing,
                building, and flying unmanned aerial vehicles. We aim to foster
                innovation, teamwork, and practical engineering skills among our
                members.
              </p>
              <p className="text-gray-300 text-lg" data-aos="fade-up">
                Through competitions, workshops, and collaborative projects, we
                create an environment where students can apply theoretical
                knowledge to real-world challenges in aerospace engineering.
              </p>
            </div>
            <div
              className="relative h-[500px] rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <Image
                src="/about.jpg"
                alt="Team Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-gradient-to-b from-blue-950/10 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-8 card-hover"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-gray-300 mb-4">
                To be at the forefront of innovation in unmanned aerial vehicle
                technology, inspiring the next generation of aerospace engineers
                through hands-on learning and collaborative problem-solving.
              </p>
              <p className="text-gray-300">
                We envision a community where students can freely explore their
                ideas, learn from failures, and celebrate successes in a
                supportive environment that promotes technical excellence and
                creativity.
              </p>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-8 card-hover"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4">
                To provide students with practical experience in aerospace
                engineering through the design, fabrication, and operation of
                unmanned aerial vehicles.
              </p>
              <p className="text-gray-300">
                We are committed to fostering technical skills, teamwork, and
                innovation while participating in competitions and creating
                real-world solutions to engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary">2018</div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Club Foundation</h3>
                <p className="text-gray-300">
                  The AeroFabrication Club was established with a small group of
                  passionate aerospace engineering students who wanted to apply
                  their theoretical knowledge to practical projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary">2020</div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">First Competition</h3>
                <p className="text-gray-300">
                  The club participated in its first national-level drone
                  competition, marking the beginning of our competitive journey
                  and establishing our presence in the aerospace community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary">2022</div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Major Achievements</h3>
                <p className="text-gray-300">
                  Secured multiple awards in prestigious competitions including
                  2nd place in Autonomous Drone-Aerothon22 and 1st place in the
                  SAE Indian Southern Section DDC '23 for Best Aerodynamics
                  Analysis.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl font-bold text-primary">Today</div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Growing Community</h3>
                <p className="text-gray-300">
                  Now with a diverse team of students from various engineering
                  disciplines, we continue to innovate and push the boundaries
                  of drone technology while fostering a collaborative learning
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section
        className="py-20 bg-gradient-to-b from-blue-950/20 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Interested in aerospace engineering and drone technology? Become a
            part of our innovative team and help shape the future of unmanned
            aerial vehicles.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold"
            asChild
          >
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
