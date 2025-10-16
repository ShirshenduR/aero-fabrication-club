"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h1 className="section-heading" data-aos="fade-up">
            CONTACT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-gray-300" data-aos="fade-up">
                Have questions about our club or interested in joining? We'd
                love to hear from you! Fill out the form or use our contact
                information below to get in touch with the AeroFabrication Club
                team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4" data-aos="fade-up">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-400">afc@iiitdmj.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-aos="fade-up">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-400">+91 70009 47461</p>
                    <p className="text-gray-400">+91 91403 40531</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-aos="fade-up">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-gray-400">AFC Workshop</p>
                    <p className="text-gray-400">
                      Above Canteen, Hall-1, IIITDMJ
                    </p>
                    <p className="text-gray-400">Pin: 482005</p>
                  </div>
                </div>
              </div>
{/* 
              <div className="pt-6" data-aos="fade-up">
                <h3 className="font-bold text-lg mb-4">Club Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span>11:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6"
              data-aos="fade-up"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 max-w-md">
                    Thank you for reaching out to the AeroFabrication Club.
                    We'll get back to you as soon as possible.
                  </p>
                  <Button
                    className="mt-6 bg-primary hover:bg-primary/90 text-black font-bold"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="bg-blue-950/20 border-blue-900/20 focus:border-primary/50 focus:ring-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="bg-blue-950/20 border-blue-900/20 focus:border-primary/50 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="bg-blue-950/20 border-blue-900/20 focus:border-primary/50 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="bg-blue-950/20 border-blue-900/20 focus:border-primary/50 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="bg-blue-950/20 border-blue-900/20 focus:border-primary/50 focus:ring-primary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="py-20 bg-gradient-to-b from-blue-950/10 to-black"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            FIND US
          </h2>

          <div className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4731098402004!2d80.02302124615409!3d23.178050262801165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9006297c6a3%3A0x79a1a4030eeb7795!2sHall-1%2C%20IIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1760628864540!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AeroFabrication Club Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-black" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Interested in aerospace engineering and drone technology? The
            AeroFabrication Club is always looking for passionate students to
            join our team!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <p className="text-gray-400 mb-6">
                Join our team to gain hands-on experience in drone design,
                building, and flying. No prior experience required!
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Apply to Join
              </Button>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4">For Sponsors</h3>
              <p className="text-gray-400 mb-6">
                Support the next generation of aerospace engineers and gain
                visibility for your organization.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Become a Sponsor
              </Button>
            </div>

            <div
              className="bg-gradient-to-b from-blue-950/30 to-black border border-blue-900/20 rounded-lg p-6 card-hover"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4">For Partners</h3>
              <p className="text-gray-400 mb-6">
                Collaborate with us on research projects or technical challenges
                in drone technology.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
