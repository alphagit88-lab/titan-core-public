'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Insights', href: '/#insights' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d4160] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.05em]">
              TitanCore
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/74">
              Business-focused technology delivery across websites, software, POS systems, marketing, and support.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/52">Why TitanCore?</p>
            <div className="mt-4 space-y-3 text-sm text-white/76">
              <p>POS Systems.</p>
              <p>Custom Software.</p>
              <p>Website Design & Build.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/52">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/76">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/52">
          © 2026 TitanCore (Pvt) Ltd. All rights reserved. Powered by <Link href="https://cyberdreams.net" className='text-white hover:underline'>Cyber Dreams</Link>
        </div>
      </div>
    </footer>
  );
}
