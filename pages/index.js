import Head from "next/head";
import AboutSection from "../templates/AboutSection";
import HeroSection from "../templates/HeroSection";

export default function Home() {
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
      <HeroSection />
      <AboutSection />
    </div>
  );
}
