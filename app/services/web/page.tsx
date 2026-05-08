'use client';

import { Space_Grotesk } from 'next/font/google';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { Monitor, ArrowRight, Smartphone, Palette } from 'lucide-react';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

export default function WebServicePage() {
  return (
    <div className={`min-h-screen bg-[#f5efe7] text-[#112033] ${spaceGrotesk.variable} font-sans`}>
      <LandingNavbar />

      <main className="pt-32">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c86c49]">
                Services / Website Design & Build
              </p>
              <h1 className="mt-6 font-[family:var(--font-space-grotesk)] text-5xl font-bold tracking-[-0.06em] text-[#0d1b2b] sm:text-7xl">
                High-Converting Digital Hubs.
              </h1>
              <p className="mt-8 text-xl leading-8 text-[#5b6778]">
                We build responsive, mobile-first websites focused on stronger trust signals, better messaging, and effective lead capture to represent your brand with confidence.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Mobile-First Design',
                  description: 'Ensuring your site looks and performs perfectly on every screen, from phones to desktops.',
                  icon: Smartphone
                },
                {
                  title: 'Visual Excellence',
                  description: 'Modern aesthetics combined with clear layouts that build trust and professional authority.',
                  icon: Palette
                },
                {
                  title: 'Performance Optimized',
                  description: 'Lightning-fast load speeds and SEO-ready structure to ensure your business gets noticed.',
                  icon: Monitor
                }
              ].map((feature) => (
                <div key={feature.title} className="rounded-[2.2rem] border border-black/5 bg-white p-10 shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe7] text-[#c86c49]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0d1b2b]">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5b6778]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0d1b2b] px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
              Ready for a digital relaunch?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Transform your online presence into a powerful growth engine for your business.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-2xl bg-[#c86c49] px-8 py-4 text-lg font-bold transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Start Your Design
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
