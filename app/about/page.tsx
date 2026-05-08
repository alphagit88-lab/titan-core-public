'use client';

import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { ShieldCheck, Users, TrendingUp, Zap } from 'lucide-react';

// Images
import image1 from '@/public/landing/analytics-laptop.jpg';
import image3 from '@/public/landing/pos-planning.jpg';
import image5 from '@/public/landing/warehouse-team.jpg';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-[#f5efe7] text-[#112033] ${spaceGrotesk.variable} font-sans`}>
      <LandingNavbar />

      <main className="pt-32">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c86c49]">
                  Our Story
                </p>
                <h1 className="mt-6 font-[family:var(--font-space-grotesk)] text-5xl font-bold tracking-[-0.06em] text-[#0d1b2b] sm:text-7xl">
                  Technology without Friction.
                </h1>
                <p className="mt-8 text-lg leading-8 text-[#5b6778]">
                  TitanCore is a technology delivery partner dedicated to simplifying business operations. We combine strategic planning with technical execution to provide complete solutions—from modern POS systems and custom software to responsive websites and digital growth strategies.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#5b6778]">
                  We specialize in helping growing teams move past disconnected tools and manual workflows. Our approach ensures your infrastructure is not just functional, but a driver for measurable performance and long-term scalability.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#5b6778] font-semibold italic">
                  Our goal is simple: to be the power behind your smart business.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
                <Image
                  src={image1}
                  alt="Our craft"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold text-[#0d1b2b] sm:text-5xl">
                The TitanCore Values
              </h2>
            </div>
            <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShieldCheck, title: 'Reliability', text: 'Systems that work as hard as you do.' },
                { icon: Zap, title: 'Innovation', text: 'Future-proof technology for tomorrow.' },
                { icon: Users, title: 'Partnership', text: 'Full-service support for every client.' },
                { icon: TrendingUp, title: 'Growth', text: 'Scaling your business with confidence.' },
              ].map((val) => (
                <div key={val.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5efe7] text-[#c86c49]">
                    <val.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0d1b2b]">{val.title}</h3>
                  <p className="mt-3 text-sm text-[#5b6778]">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[4rem] bg-[#0d1b2b] p-12 lg:p-24">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
                  Powering Your Growth.
                </h2>
                <p className="mt-8 text-lg text-white/70">
                  Our unified delivery roadmap ensures that your websites, software, and POS systems work together seamlessly, eliminating technical drag and building a more resilient operation.
                </p>
                <div className="mt-10 flex gap-4">
                  <div className="h-12 w-1 rounded-full bg-[#c86c49]" />
                  <p className="italic text-white/90">"The #1 way to build a loyal customer base is a dependable, high-quality technology foundation."</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative overflow-hidden rounded-3xl">
                  <Image src={image3} alt="Store interior" fill className="object-cover" />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-3xl translate-y-8">
                  <Image src={image5} alt="Equipment installation" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
