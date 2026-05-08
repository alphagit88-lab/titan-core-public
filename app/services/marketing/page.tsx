'use client';

import { Space_Grotesk } from 'next/font/google';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { Target, ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

export default function MarketingServicePage() {
  return (
    <div className={`min-h-screen bg-[#f5efe7] text-[#112033] ${spaceGrotesk.variable} font-sans`}>
      <LandingNavbar />

      <main className="pt-32">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c86c49]">
                Services / Digital Marketing
              </p>
              <h1 className="mt-6 font-[family:var(--font-space-grotesk)] text-5xl font-bold tracking-[-0.06em] text-[#0d1b2b] sm:text-7xl">
                Connected Growth Strategies.
              </h1>
              <p className="mt-8 text-xl leading-8 text-[#5b6778]">
                Campaign planning and performance-minded execution focused on reaching your target audience and driving measurable business growth.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Strategic Planning',
                  description: 'Comprehensive roadmaps that identify your most profitable channels and audience segments.',
                  icon: Target
                },
                {
                  title: 'Growth Execution',
                  description: 'Active campaign management across social, search, and email to keep your brand top-of-mind.',
                  icon: TrendingUp
                },
                {
                  title: 'Data-Driven Insights',
                  description: 'Continuous monitoring and optimization to ensure every marketing dollar is working its hardest.',
                  icon: BarChart3
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
              Ready to reach your next milestone?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Let's build a performance-focused strategy that turns digital presence into measurable growth.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-2xl bg-[#c86c49] px-8 py-4 text-lg font-bold transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Grow Your Brand
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
