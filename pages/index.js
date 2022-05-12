import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutSection from "../templates/AboutSection";
import HeroSection from "../templates/HeroSection";
import en from '../public/i18n/En_en';
import es from '../public/i18n/Es_es';
import ServicesSection from "../templates/ServicesSection";
import StatisticsSection from "../templates/StatisticsSection";
import PortfolioSection from "../templates/PortfolioSection";
import TechnologiesSection from "../templates/TechnologiesSection";
import ClientsSection from "../templates/ClientsSection";
import TestimonialsSection from "../templates/TestimonialsSection";
import WhySection from "../templates/WhySection";

export default function Home() {
  // TODO: custom hook useLanguage
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : es;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Devlights - Home</title>
        <meta
          name="description"
          content="We are a company dedicated to provide technological solutions. In Devlights, we truly understand the idea that there are no two companies alike, and that each one has its own unique needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection strings={translation.intro} />
      <AboutSection strings={translation.aboutUs} />
      <WhySection strings={translation.whyUs}/>
      <ServicesSection strings={translation.services} />
      <StatisticsSection strings={translation.projectsBanner} />
      <PortfolioSection strings={translation.portfolio} />
      <TechnologiesSection strings={translation.technologies} />
      <ClientsSection strings={translation.clients} />
      <TestimonialsSection strings={translation.testimonials} />
    </div>
  );
}
