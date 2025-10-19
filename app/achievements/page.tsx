"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AchievementsPage() {
  useEffect(() => {
    AOS.init({
  duration: 1000,
  once: true,
    });
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h1 className="section-heading" data-aos="fade-up">
            ACHIEVEMENTS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aerothon 2024 - Best Autonomous Drone */}
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover" data-aos="fade-up">
              <div className="relative h-64">
                <Image src="/images/achievements/Aerothon24.jpg" alt="Aerothon 2024" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aerothon 2024</h3>
                <p className="text-gray-400">We won the Best Autonomous Drone award.</p>
              </div>
            </div>

            {/* Sky Maneuver - IIT Roorkee (2nd Prize) */}
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover" data-aos="fade-up">
              <div className="relative h-64">
                <Image src="/images/achievements/SkyManeuver25.jpg" alt="Sky Maneuver - IIT Roorkee" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sky Maneuver - IIT Roorkee</h3>
                <p className="text-gray-400">We won 2nd prize.</p>
              </div>
            </div>

            {/* Flight Fury - IIT Roorkee (Participated) */}
            <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden card-hover" data-aos="fade-up">
              <div className="relative h-64">
                <Image src="/images/achievements/Flight%20Fury%20IIT%20Roorkee.jpg" alt="Flight Fury - IIT Roorkee" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flight Fury - IIT Roorkee</h3>
                <p className="text-gray-400">We participated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-gradient-to-b from-blue-950/10 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            MORE ACCOMPLISHMENTS
          </h2>

          <div className="space-y-8">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">2021</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    National Drone Competition Finalist
                  </h3>
                  <p className="text-gray-400">
                    Selected as one of the top 10 teams in the National Drone
                    Design Competition, showcasing our innovative approach to
                    UAV design and functionality.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">2022</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Best Technical Paper Award
                  </h3>
                  <p className="text-gray-400">
                    Received recognition for our research paper on "Optimizing
                    Drone Flight Efficiency Through Aerodynamic Innovations" at
                    the International Conference on Aerospace Engineering.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">2023</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation Award</h3>
                  <p className="text-gray-400">
                    Honored with the Innovation Award for our autonomous
                    navigation system implementation in fixed-wing UAVs at the
                    Regional Drone Technology Expo.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">2023</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Community Outreach Excellence
                  </h3>
                  <p className="text-gray-400">
                    Recognized for our efforts in promoting STEM education
                    through drone workshops conducted for high school students
                    across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
