'use client';

import type { CSSProperties } from 'react';
import { startTransition, useEffect, useEffectEvent, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronLeft,
  ChevronRight,
  Menu,
  Zap,
  ShieldCheck,
  Truck,
  Award,
  Monitor,
  Globe,
  BarChart3,
  X,
} from 'lucide-react';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import image1 from '@/public/landing/analytics-laptop.jpg';
import image4 from '@/public/landing/pos-planning.jpg';
import imageInsights from '@/public/images/insights/planing.jpg';
import workRetail from '@/public/images/works/retail center.jpg';
import workRelaunch from '@/public/images/works/service relaunch.webp';
import workAutomation from '@/public/images/works/automation.png';
import workGrowth from '@/public/images/works/growth.webp';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

const themeVars: CSSProperties = {
  ['--landing-bg' as string]: '#f5efe7',
  ['--landing-surface' as string]: '#fffaf4',
  ['--landing-surface-strong' as string]: '#f1e6d7',
  ['--landing-ink' as string]: '#112033',
  ['--landing-muted' as string]: '#5b6778',
  ['--landing-brand' as string]: '#1d4160',
  ['--landing-brand-strong' as string]: '#0d1b2b',
  ['--landing-accent' as string]: '#c86c49',
  ['--landing-accent-soft' as string]: '#ead2c3',
  ['--landing-highlight' as string]: '#5f9ea0',
};

// navLinks moved to LandingNavbar

const heroSlides: Array<{
  eyebrow: string;
  title: string;
  description: string;
}> = [
    {
      eyebrow: 'Technology Delivery',
      title: 'The Power Behind Smart Business.',
      description:
        'TitanCore helps growing businesses simplify operations with dependable POS systems, custom software, and long-term IT support.',
    },
    {
      eyebrow: 'Business-First Planning',
      title: 'Responsive Experiences Built to Grow.',
      description: 'Interfaces stay sharp and usable across desktop, tablet, and mobile touchpoints — shaped for real workflow needs.',
    },
    {
      eyebrow: 'Support After Launch',
      title: 'Smart Solutions, Lasting Impact.',
      description: 'TitanCore stays close with practical guidance, maintenance, and next-phase improvements after every launch.',
    },
  ];

const proofTags = [
  'POS Systems',
  'Custom Software',
  'Website Design & Build',
];

const overviewChecks = [
  'POS Systems: Modern point-of-sale rollouts for smoother billing and cleaner reporting.',
  'Software Development: Custom tools that turn repetitive workflows into streamlined digital systems.',
  'Website Design & Build: Responsive sites with stronger structure and a more confident visual presence.',
  'Digital Marketing: Campaign planning and performance-minded execution for business growth.',
];

const statCards = [
  {
    value: '50+',
    label: 'Projects Delivered',
    description: 'Across POS, software, web, and marketing for growing businesses.',
    icon: Zap,
  },
  {
    value: '5',
    label: 'Core Services',
    description: 'POS, software, websites, digital growth, and support — one coordinated stack.',
    icon: ShieldCheck,
  },
  {
    value: '100%',
    label: 'Client Focused',
    description: 'Every recommendation starts with workflow pain points and measurable priorities.',
    icon: Award,
  },
];

const reasons = [
  {
    title: 'One Coordinated Stack',
    description: 'POS, software, websites, digital growth, and support can work together instead of in silos.',
  },
  {
    title: 'Designed for Every Screen',
    description: 'Layouts are mobile-friendly first, then expanded for tablet and desktop without losing clarity.',
  },
  {
    title: 'Built for the Next Phase',
    description: 'TitanCore prioritizes maintainable systems, clear structure, and room for operational growth.',
  },
];

const serviceCards = [
  {
    eyebrow: 'Strategy',
    title: 'Retail Command Center',
    description: 'A cleaner operational layer for checkout speed, stock awareness, and better daily reporting.',
    image: workRetail,
    alt: 'Retail POS command center dashboard for operations.',
    featured: false,
    outcomes: ['Faster counter workflows', 'Sharper inventory visibility', 'Less manual reconciliation'],
  },
  {
    eyebrow: 'Digital',
    title: 'Service Brand Relaunch',
    description: 'A mobile-first website focused on stronger trust signals, better messaging, and lead capture.',
    image: workRelaunch,
    alt: 'Mobile-first service brand website redesign.',
    featured: false,
    outcomes: ['Sharper mobile presentation', 'Clearer conversion paths', 'More consistent brand feel'],
  },
  {
    eyebrow: 'Automation',
    title: 'Operations Desk',
    description: 'A tailored internal workspace that reduces spreadsheet juggling and steadies operations.',
    image: workAutomation,
    alt: 'Internal operations automation workspace dashboard.',
    featured: false,
    outcomes: ['Fewer repetitive tasks', 'Better internal visibility', 'Smoother team handoffs'],
  },
  {
    eyebrow: 'Growth',
    title: 'Connected Growth',
    description: 'Where disconnected apps create drag — and how a unified delivery roadmap changes pace.',
    image: workGrowth,
    alt: 'Connected business growth strategy and analytics.',
    featured: true,
    outcomes: ['Integrated data flow', 'Unified operational view', 'Scalable performance tracking'],
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  const advanceSlide = useEffectEvent((direction: 1 | -1 = 1) => {
    startTransition(() => {
      setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
    });
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceSlide(1);
    }, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 720);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Removed menuOpen effect since it's now in LandingNavbar

  const currentSlide = heroSlides[activeSlide];

  return (
    <div
      style={themeVars}
      className={`min-h-screen overflow-x-hidden bg-[var(--landing-bg)] text-[var(--landing-ink)] ${spaceGrotesk.variable}`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        [data-reveal] {
          opacity: 0;
          filter: blur(10px);
          transform: translate3d(0, 42px, 0) scale(0.98);
          transition:
            opacity 0.85s ease,
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.85s ease;
          will-change: opacity, transform, filter;
        }

        [data-reveal='left'] {
          transform: translate3d(-52px, 18px, 0) scale(0.98);
        }

        [data-reveal='right'] {
          transform: translate3d(52px, 18px, 0) scale(0.98);
        }

        [data-reveal='zoom'] {
          transform: scale(0.92);
        }

        [data-reveal].is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0) scale(1);
        }

        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translate3d(0, 34px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .hero-copy {
          animation: heroContent 0.72s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          [data-reveal] {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
          }

          .hero-copy {
            animation: none;
          }
        }
      `}</style>

      <LandingNavbar />

      <main className="pt-[116px]">
        <section id="home" className="relative isolate overflow-hidden scroll-mt-32">
          <div className="relative min-h-[calc(100svh-116px)] bg-[var(--landing-brand-strong)]">
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/8170596-uhd_3840_2160_25fps.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(200,108,73,0.30),transparent_18%),linear-gradient(90deg,rgba(10,17,28,0.94)_0%,rgba(10,17,28,0.80)_44%,rgba(10,17,28,0.36)_74%,rgba(10,17,28,0.58)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(95,158,160,0.16)_0%,transparent_26%,transparent_72%,rgba(10,17,28,0.62)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-[36%] bg-[linear-gradient(180deg,rgba(29,65,96,0.18)_0%,rgba(29,65,96,0.02)_100%)]" />

            <button
              type="button"
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-20 hidden h-[3.75rem] w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-white/16 md:inline-flex"
              onClick={() => advanceSlide(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-20 hidden h-[3.75rem] w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:bg-white/16 md:inline-flex"
              onClick={() => advanceSlide(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-116px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div className="max-w-3xl">
                  <div key={currentSlide.title} className="hero-copy">
                    <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--landing-accent-soft)]">
                      {currentSlide.eyebrow}
                    </p>
                    <h1 className="mt-6 max-w-[12ch] font-[family:var(--font-space-grotesk)] text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.35rem]">
                      {currentSlide.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                      {currentSlide.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {proofTags.map((tag) => (
                        <div
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/82 backdrop-blur-sm"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3 px-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-12 bg-white' : 'w-3 bg-white/35 hover:bg-white/55'
                    }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div data-reveal="left" className="relative min-h-[520px] sm:min-h-[620px]">
                <div className="absolute left-0 top-0 w-[62%] overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_30px_80px_rgba(17,32,51,0.10)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image1}
                      alt="Business team reviewing analytics dashboard and project progress."
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 26vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-[60%] overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_30px_80px_rgba(17,32,51,0.12)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image4}
                      alt="Developer workspace with code editor and responsive design layouts."
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 25vw, 56vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-[9%] left-[8%] max-w-[16rem] rounded-[1.8rem] border border-[var(--landing-accent-soft)] bg-[var(--landing-surface)] p-5 shadow-[0_20px_50px_rgba(17,32,51,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--landing-accent)]">
                    Full-Stack Delivery
                  </p>
                  <p className="mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.05em] text-[var(--landing-brand-strong)]">
                    Reliable Systems.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--landing-muted)]">
                    Our team ensures your operations are always running with the latest tools and fully operational technology.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--landing-accent)]">
                  The TitanCore standard
                </p>
                <h2 className="mt-4 max-w-[13ch] font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-[var(--landing-brand-strong)] sm:text-5xl">
                  Business-First Technology Delivery.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--landing-muted)]">
                  Rather than stacking disconnected tools and vendors, TitanCore combines delivery tracks into one more confident roadmap.
                </p>

                <div className="mt-8 grid gap-4">
                  {overviewChecks.map((item, index) => (
                    <div
                      key={item}
                      data-reveal="zoom"
                      style={{ transitionDelay: `${index * 100}ms` }}
                      className="flex items-start gap-4 rounded-[1.7rem] border border-black/6 bg-[rgba(255,250,244,0.85)] px-5 py-4 shadow-[0_16px_44px_rgba(17,32,51,0.05)] backdrop-blur-sm"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--landing-accent-soft)] text-[var(--landing-accent)]">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-7 text-[var(--landing-muted)]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-black/6 bg-white p-5 shadow-[0_18px_50px_rgba(17,32,51,0.06)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-brand-strong)] text-white">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--landing-brand-strong)]">Dependable Delivery</p>
                        <p className="text-sm text-[var(--landing-muted)]">On-time project milestones.</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.8rem] border border-black/6 bg-white p-5 shadow-[0_18px_50px_rgba(17,32,51,0.06)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--landing-accent)] text-white">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--landing-brand-strong)]">Consistent Quality</p>
                        <p className="text-sm text-[var(--landing-muted)]">Polished handoff every time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--landing-brand)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {statCards.map((card, index) => (
                <article
                  key={card.label}
                  data-reveal="zoom"
                  style={{ transitionDelay: `${index * 110}ms` }}
                  className="rounded-[2rem] border border-white/12 bg-white/5 p-8 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-sm"
                >
                  <card.icon className="h-8 w-8 text-[var(--landing-accent-soft)]" />
                  <p className="mt-6 font-[family:var(--font-space-grotesk)] text-6xl font-bold tracking-[-0.06em] text-white">
                    {card.value}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{card.label}</p>
                  <p className="mt-2 max-w-[30ch] text-sm leading-7 text-white/72">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div data-reveal="left" className="relative overflow-hidden rounded-[2.4rem] border border-black/6 bg-[var(--landing-brand-strong)] shadow-[0_28px_80px_rgba(17,32,51,0.16)]">
                <div className="relative aspect-[5/6]">
                  <Image
                    src={imageInsights}
                    alt="Team collaborating on technology solutions in a modern workspace."
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,43,0.04)_0%,rgba(13,27,43,0.64)_100%)]" />
                </div>
              </div>

              <div data-reveal="right">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--landing-accent)]">
                  Why Choose TitanCore?
                </p>
                <h2 className="mt-4 max-w-[12ch] font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-[var(--landing-brand-strong)] sm:text-5xl">
                  Strategy to support, in one flow.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--landing-muted)]">
                  TitanCore combines planning, design, implementation, and post-launch care in one delivery flow.
                </p>

                <div className="mt-8 space-y-5">
                  {reasons.map((reason, index) => (
                    <div
                      key={reason.title}
                      data-reveal="right"
                      style={{ transitionDelay: `${index * 110}ms` }}
                      className="flex items-start gap-4 rounded-[1.8rem] border border-black/6 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(17,32,51,0.05)]"
                    >
                      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--landing-accent)] text-white shadow-[0_14px_32px_rgba(200,108,73,0.22)]">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--landing-brand-strong)]">{reason.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--landing-muted)]">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.9rem] border border-[var(--landing-accent-soft)] bg-[var(--landing-surface)] p-6 shadow-[0_18px_42px_rgba(17,32,51,0.05)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--landing-brand-strong)] text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--landing-brand-strong)]">Built to stay simple</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--landing-muted)]">
                        Discovery, planning, implementation, and support stay connected in one clear roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-32 px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center" data-reveal="zoom">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--landing-accent)]">
                Works
              </p>
              <h2 className="mt-4 font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-[var(--landing-brand-strong)] sm:text-5xl">
                Reliable Technology Solutions.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--landing-muted)]">
                The full-stack behind your business, built for performance and growth.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  data-reveal="zoom"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="relative pt-12"
                >
                  <article className="group relative h-full rounded-[2.2rem] border border-black/6 bg-white px-7 pb-8 pt-16 text-center text-[var(--landing-brand-strong)] shadow-[0_24px_64px_rgba(17,32,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(29,65,96,0.4)] hover:bg-[linear-gradient(180deg,#1d4160_0%,#0d1b2b_100%)] hover:text-white hover:shadow-[0_30px_72px_rgba(13,27,43,0.18)]">
                    <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.6rem] border-4 border-[var(--landing-surface)] bg-white shadow-[0_18px_44px_rgba(17,32,51,0.12)]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        placeholder="blur"
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <p
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--landing-accent)] transition-colors duration-300 group-hover:text-white/70"
                    >
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-4 font-[family:var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.05em]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--landing-muted)] transition-colors duration-300 group-hover:text-white/78">
                      {card.description}
                    </p>

                    <div className="mt-8 border-t border-black/5 pt-8 text-left transition-colors duration-300 group-hover:border-white/10">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[var(--landing-muted)] transition-colors duration-300 group-hover:text-white/52">
                        Expected Outcomes
                      </p>
                      <div className="mt-4 space-y-3">
                        {(card as any).outcomes?.map((outcome: string) => (
                          <div key={outcome} className="flex items-center gap-3 rounded-full border border-black/[0.03] bg-black/[0.02] px-4 py-2 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/5">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--landing-accent)]/20 text-[var(--landing-accent)] transition-colors duration-300 group-hover:border-white/20 group-hover:text-white">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-[0.825rem] font-medium leading-tight tracking-tight text-[var(--landing-brand-strong)] transition-colors duration-300 group-hover:text-white/90">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 text-left">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--landing-accent)] transition-all hover:gap-3"
                      >
                        Launch a similar project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--landing-brand-strong)] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center" data-reveal="zoom">
            <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready to Simplify Your Operations?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/72 sm:text-xl">
              Take the first step toward a smarter, more connected business built on dependable technology.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--landing-accent)] px-8 py-4 text-base font-bold text-white shadow-[0_20px_50px_rgba(200,108,73,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(200,108,73,0.4)]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />

      {showTopButton ? (
        <button
          type="button"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-50 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[var(--landing-accent)] text-white shadow-[0_20px_40px_rgba(200,108,73,0.34)] transition hover:-translate-y-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
