'use client';

import { Space_Grotesk } from 'next/font/google';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

export default function POSServicePage() {
  return (
    <div className={`min-h-screen bg-[#f5efe7] text-[#112033] ${spaceGrotesk.variable} font-sans`}>
      <LandingNavbar />

      <main className="pt-32">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c86c49]">
                Services / POS Systems
              </p>
              <h1 className="mt-6 font-[family:var(--font-space-grotesk)] text-5xl font-bold tracking-[-0.06em] text-[#0d1b2b] sm:text-7xl">
                Modern POS Command Centers.
              </h1>
              <p className="mt-8 text-xl leading-8 text-[#5b6778]">
                Streamline your retail operations with modern point-of-sale rollouts designed for smoother billing, cleaner reporting, and sharper inventory visibility.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Seamless Billing',
                  description: 'Reduce checkout friction with lightning-fast transaction processing and intuitive interfaces.',
                  icon: Zap
                },
                {
                  title: 'Inventory Precision',
                  description: 'Real-time stock tracking across all locations to prevent outages and overstocking.',
                  icon: ShieldCheck
                },
                {
                  title: 'Advanced Reporting',
                  description: 'Deep insights into your sales performance with automated daily and monthly reports.',
                  icon: CheckCircle2
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
              Ready to transform your checkout?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Join 50+ businesses that have leveled up their operations with TitanCore's POS solutions.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-2xl bg-[#c86c49] px-8 py-4 text-lg font-bold transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Start Your Rollout
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
