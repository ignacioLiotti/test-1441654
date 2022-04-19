import Head from "next/head";
import { useRouter } from "next/router";
import AboutSection from "../templates/AboutSection";
import HeroSection from "../templates/HeroSection";
import en from '../public/i18n/En_en';
import es from '../public/i18n/Es_es';
import ServicesSection from "../templates/ServicesSection";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

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
      <HeroSection strings={t.intro} />
      <AboutSection strings={t.aboutUs} />
      <ServicesSection strings={t.services} />
    </div>
  );
}
