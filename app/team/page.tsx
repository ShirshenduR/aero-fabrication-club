"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function TeamPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">TEAM</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-96">
                <Image
                  src="/fic.jpeg"
                  alt="Dr. Akshay Pandey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Dr. AKSHAY PANDEY
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Faculty Incharge
                </h4>
                <p className="text-gray-400 mt-2">
                  Providing guidance and mentorship to the team, bringing years
                  of experience in aerospace engineering and research.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-96">
                <Image
                  src="/coordinator.jpeg"
                  alt="Chetan Anand Jhariya"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    CHETAN ANAND JHARIYA
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Coordinator
                </h4>
                <p className="text-gray-400 mt-2">
                  Leading the team's overall direction and strategy,
                  coordinating between different sub-teams to ensure cohesive
                  project execution.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-96">
                <Image
                  src="/co-coordinator.jpeg"
                  alt="Shashaank Srivastava"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">SHASHAANK SRIVASTAVA</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Co-Coordinator
                </h4>
                <p className="text-gray-400 mt-2">
                  Supporting the coordination efforts and providing leadership
                  in specific project areas, ensuring smooth day-to-day
                  operations.
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover"
              data-aos="fade-up"
            >
              <div className="relative h-96">
                <Image
                  src="/co-coordinator1.jpg"
                  alt="ROHIT TM"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">ROHIT TM</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-primary">
                  Co-Coordinator
                </h4>
                <p className="text-gray-400 mt-2">
                  Supporting the coordination efforts and providing leadership
                  in specific project areas, ensuring smooth day-to-day
                  operations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-2">Technical Team</h3>
              <p className="text-gray-400">
                Responsible for the design, engineering, and technical aspects
                of all drone projects.
              </p>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-2">Management Team</h3>
              <p className="text-gray-400">
                Handles promotion, outreach, and communication of the club's
                activities and achievements.
              </p>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-2">Finance Team</h3>
              <p className="text-gray-400">
                Manages budgeting, fundraising, and financial planning for all
                club projects and activities.
              </p>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-2">Events Team</h3>
              <p className="text-gray-400">
                Oversees club operations, membership, and coordination between
                different teams.
              </p>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-2">Social Media Team</h3>
              <p className="text-gray-400">
                Focuses on acquiring resources, developing partnerships, and
                planning for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
