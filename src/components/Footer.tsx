// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-chase  text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">UniHive</h2>
            <p className="text-lg text-gray-400 mb-4">
              Empowering Tech Enthusiasts and Students to Innovate and
              Collaborate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Resources", "Hackathons", "Community", "Post-resources"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@unihive.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@unihive.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 6207277958
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 UniHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
