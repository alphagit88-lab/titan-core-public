'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, ScanLine, Headset, MessageCircle } from 'lucide-react';
import { TitanCoreLogo } from './TitanCoreLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Works', href: '/#work' },
  { label: 'Insights', href: '/#insights' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1b2b] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-1">
                <TitanCoreLogo compact markClassName="h-10 w-9" />
                <div className="ml-1">
                  <p className="font-[family:var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.05em] text-white">
                    TITANCORE
                  </p>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/50">
                    The Power Behind Smart Business
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/64">
                TitanCore helps growing businesses simplify operations with dependable POS systems, custom software, polished web experiences, digital marketing, and long-term IT support.
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/40">
                SRI LANKA AND GROWTH-MINDED TEAMS BEYOND
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/50">Navigate</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-white/80">
              <Link href="/#services" className="transition hover:text-white">Services</Link>
              <Link href="/#results" className="transition hover:text-white">Results</Link>
              <Link href="/#work" className="transition hover:text-white">Work</Link>
              <Link href="/#insights" className="transition hover:text-white">Insights</Link>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/50">Services</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-white/80">
              <p>POS Systems</p>
              <p>Software Development</p>
              <p>Website Design & Build</p>
              <p>Digital Marketing</p>
              <p>IT Support</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/50">Focus</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60">
                    <ScanLine className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-white/80">Business systems</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60">
                    <Monitor className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-white/80">Responsive websites</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60">
                    <Headset className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-white/80">Long-term support</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/70 transition hover:bg-white/10 hover:text-white">
                LINKEDIN
              </Link>
              <Link href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/70 transition hover:bg-white/10 hover:text-white">
                FACEBOOK
              </Link>
              <Link href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/70 transition hover:bg-white/10 hover:text-white">
                WHATSAPP
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-[0.8rem] text-white/40">
          Copyright 2026 TitanCore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
