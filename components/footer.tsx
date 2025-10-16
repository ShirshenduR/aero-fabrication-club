import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  src="/logo.png"
                  alt="AeroFabrication Club Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">AeroFabrication Club</span>
            </Link>
            <p className="text-sm text-gray-400">
              Where Passion Meets Propulsion
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/afc.iiitdmj"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/afc_iiitdmj"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2Fiiitdm"
                className="text-gray-400 hover:text-primary"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/aero-fabrication-club-iiitdmj/posts/?feedView=all"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCODKL--xMCqXIK31cRdOWOw"
                className="text-gray-400 hover:text-primary"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Aero Fabrication Club</p>
              <p>IIITDMJ</p>
              <p>Email: afc@iiitdmj.ac.in</p>
              <p>Phone: +91 85428 27761</p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} AeroFabrication Club. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
