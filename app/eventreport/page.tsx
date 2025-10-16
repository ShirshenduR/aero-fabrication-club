"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function EventReportPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1111") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const events = [
    {
      title: "WRC 24",
      image: "/googledocs.png",
      reportText:
        "The WRC 24 event showcased innovative designs and engineering solutions in the world of competitive drone racing. Teams from various universities participated, demonstrating their skills and creativity.",
      date: "2024", // Updated date
    },
    {
      title: "Sky Maneuvers 24",
      image: "/googledocs.png",
      reportText:
        "Sky Maneuvers 24 focused on advanced aerial maneuvers and techniques, providing participants with hands-on experience in drone piloting and control. The event included workshops and live demonstrations.",
      date: "2024", // Updated date
    },
    {
      title: "Aerothon '24",
      image: "/googledocs.png",
      reportText:
        "Aerothon '24 was a thrilling competition where teams designed and built drones to complete a series of challenging tasks. The event encouraged innovation and teamwork among participants.",
      date: "2024", // Updated date
    },
    {
      title: "Sky Maneuvers 25",
      image: "/googledocs.png",
      reportText:
        "Sky Maneuvers 25 aimed to push the boundaries of drone technology with a focus on agility and precision. Participants engaged in various challenges that tested their skills and creativity.",
      date: "2025", // Updated date
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="pt-16">
      {!isAuthenticated ? (
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Enter Password
          </h2>
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col items-center"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold mb-12 text-center"
              data-aos="fade-up"
            >
              Event Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`} // Add delay for staggered effect
                >
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.reportText}</p>
                  <div className="text-primary font-medium">
                    Date: {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
