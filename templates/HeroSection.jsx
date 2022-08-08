import React,{useState,useEffect, useRef} from "react";
import GoldActionButton from "../components/GoldActionButton";
import GoldLinkButton from "../components/GoldLinkButton";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import Boop from "../components/Boop";
import {useTypedSuperpower} from "../customHooks/useTypeText";

function HeroSection({ strings }) {
  const ref = useRef()

  const router = useRouter();
  
  const springConfig = {
    tension: 100,
    friction: 10,
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }

  }, [isMenuOpen])
    
    const typedArray = strings.typingText
    let typedText = useTypedSuperpower(typedArray)
    console.log(typedText)

    if (!typedText) {
      console.log('vacio')
      typedText = <span className="invisible -ml-12">|</span>
    }

  return (
    <section className="h-[90vh] w-full flex justify-center items-center bg-hero-section bg-left-top bg-no-repeat" ref={ref}>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[20px] mx-[clamp(40px,0%,100%)]">
          <img
            className="flex-[1_1_59%] md:max-w-[51%] object-contain transition-all duration-300 ease-in-out drop-shadow-[0_0px_3px_rgba(0,0,0,0.3)]"
            style={{imageRendering: ''}}
            src="/images/intro-img.png"
          />
          <div className="flex-[1_1_41%] mb-10">
            <h2 className="text-neutral-black text-center lg:text-left text-lg sm:text-[lg] md:text-xl font-semibold md:leading-[72px] transition-all duration-300 ease-in-out">
              {strings.title}
            </h2>
            <h2 className="text-gradient-tertiary text-center lg:text-left text-lg sm:text-[lg] md:text-lg font-bold md:leading-[72px] transition-all duration-300 ease-in-out">
              {typedText}<span className="blinking-cursor font-semibold">|</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10 pt-8">
              <GoldLinkButton 
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
