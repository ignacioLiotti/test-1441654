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
import CareersSection from "../templates/CareersSection";
import DefaultLayout from "../layouts/DefaultLayout";
import ClutchSection from "../templates/ClutchSection";
import BadgesSection from "../templates/BadgesSection";

export default function Home() {
  // TODO: custom hook useLanguage
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : es;

  // 
  const postSocial = async () => {
    
    const social = await fetch('/api/get', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "post": `${router.query.post}`,
          "date": `${router.query.date}`,
        })
    });
    const socialFound = await social.json();
    // const socialFound = {social:[]};
    console.log(socialFound)
    
    if( socialFound.social ) {
      console.log("entre al update");
      console.log(socialFound.social)
      console.log(socialFound.date)
      console.log(router.query.date)
      console.log(router.query.post)
      const updateCount=socialFound.social[0].amount+1;
      console.log(updateCount);
      
      const social = await fetch('/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "post": `${router.query.post}`,
          "date": `${router.query.date}`,
          "amount": `${updateCount}`
        })
      });
    }else{
      console.log('no social found');
      const social = await fetch('/api/add', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "post": `${router.query.post}`,
          "date": `${router.query.date}`,
          "amount": `1`
        })
      });
    }
  }


  // Check if the user has in their localstorage the visited flag witch determines if the user can be counted as a new visitor
  const socialCounter=()=>{
    if (typeof window !== 'undefined') { // needed to prevent error in SSR with Next.js
      if(window.sessionStorage.getItem('visited')){
        postSocial(); 
        
        
      }
      else{
      
        window.sessionStorage.setItem('visited','true');
      
        postSocial(); 
      
      }
    }
  }
  

  useEffect(() => {
    Aos.init();
    if(router.isReady){ //The router doesn't load until the page is loaded so it can cause problems reading undefined, must wait till .isReady=true
    socialCounter();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [router.isReady]);

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
      <ClutchSection strings={translation.clutch} />
      <ClientsSection strings={translation.clients} />
      <TestimonialsSection strings={translation.testimonials} />
      <CareersSection strings={translation.careers}  />
      <BadgesSection />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
