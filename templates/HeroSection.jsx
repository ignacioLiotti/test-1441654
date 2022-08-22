import React,{useState,useEffect, useRef} from "react";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/router";
import TypedText from "../components/TypingText";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection({ strings }) {
  const ref = useRef()

  useEffect(() => {
    Aos.init();
  }, []);
    
  return (
    <section className="h-[max(90vh,900px)] w-full flex justify-center items-center sm:bg-hero-section bg-left-top bg-no-repeat" ref={ref}>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[20px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,0%,100%)]">
          <img
            className="flex-[1_1_59%] min-w-[300px] max-w-[60vw] md:max-w-[51%] object-contain transition-all duration-300 ease-in-out drop-shadow-[0_0px_3px_rgba(0,0,0,0.3)] animate-hoveringAstronaut"
            src="/images/intro-img.webp"
            alt="Astronaut Floating"
          />
          <div className="flex-[1_1_41%] mb-10">
            <h2 className="text-neutral-black text-center lg:text-left text-[clamp(1.25rem,5vw,2.125rem)] sm:text-[clamp(2.125rem,5vw,3rem)] md:text-[clamp(2rem,5vw,3rem)] font-semibold md:leading-[min(72px,5vw)] transition-all duration-300 ease-in-out">
              {strings.title}
            </h2>
            <TypedText typedArray={strings?.typingText}/>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10 pt-8">
              <LinkButton 
                text={strings.btnWork} 
                resize={false} 
                link={'/#contact'}
                padx={'6'}
                pady={'3'}
              />
            </div>
        </div>
    </div>
    </section>
  );
}

export default HeroSection;
