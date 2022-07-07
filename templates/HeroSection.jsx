import React,{useState,useEffect, useRef} from "react";
import GoldActionButton from "../components/GoldActionButton";
import GoldLinkButton from "../components/GoldLinkButton";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

function HeroSection({ strings }) {
  const ref = useRef()

  const router = useRouter();
  

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

  return (
    <div className="h-[50.75rem] w-full bg-hero-section bg-center-bottom bg-cover bg-no-repeat">
      <section className="flex items-center justify-center w-full mx-auto pt-48 pb-64" ref={ref}>
        {isMenuOpen ? (
            <div className="fixed left-0 top-0 opacity-1 bg-gray-500/50 z-50" >
              <div className="flex items-center justify-center h-[100vh] w-[100vw]">
                <div className="" >
                  <div className="flex relative bottom-37px">
                    <iframe
                      className="z-50"
                      loading="lazy"
                      width="800"
                      height="500"
                      src="https://www.youtube.com/embed/2mC4zqdTWs4?&autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer;fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        <div
          className="flex flex-col justify-center items-center lg:items-start lg:flex-row z-10 px-4
          w-[45rem] lg:w-[60rem] xl:w-[71.25rem] md:-translate-y-10 lg:translate-y-0 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center justify-center sm:w-[35rem] mb-4 order-1 lg:order-2">
            <img
              className="object-contain max-h-[15rem] sm:max-h-fit sm:h-[15rem] md:h-[20.5rem] lg:h-[17.25rem] xl:h-[20.5rem] transition-all duration-300 ease-in-out"
              src="/images/intro-img.png"
            />
          </div>
          <div className="sm:w-[35rem] h-[20.5rem]  lg:h-[17.25rem] xl:h-[20.5rem] mb-10 order-2 lg:order-1">
            <h2 className="text-white text-center lg:text-left text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-9 sm:leading-hero-section font-extrabold font-aleo transition-all duration-300 ease-in-out">
              {strings.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10 pt-8">
              <GoldLinkButton 
                text={strings.btnWork} 
                resize={false} 
                link={'/#contact'}
                padx={'6'}
                pady={'3'}
              />
              {/* <VideoButton text={strings.btnVideo} /> */}
              <button
                className="flex flex-row items-center justify-center w-30 h-15 gap-4 relative overflow-hidden rounded-full"
                id="fl-homepage-video"
                onClick={(e)=>{
                  // For functionality
                  setIsMenuOpen(oldState => !oldState)
                }}
              >
                <div className="flex items-center justify-center h-12 w-12 bg-white rounded-full">
                  <span className=" triangle "></span>
                </div>
                <span className="text-white">{strings.btnVideo}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="left-[4%] top-[10%] absolute animate-idleIcon1">
        <img src="/images/icons/icon_1.png" />
      </div>
      <div className="left-[5%] bottom-[35%] absolute animate-idleIcon2">
        <img src="/images/icons/icon_2.png" />
      </div>
      <div className="left-[50%] bottom-[40%] absolute animate-idleIcon3">
        <img src="/images/icons/icon_8.png" />
      </div>
      <div className="left-[51%] top-[13%] absolute animate-idleIcon1">
        <img src="/images/icons/icon_7.png" />
      </div>
      <div className="left-[68%] top-[60%] absolute animate-idleIcon2">
        <img src="/images/icons/icon_8.png" />
      </div>
    </div>
  );
}

export default HeroSection;
