// import React, { useEffect } from 'react'
// import Head from "next/head";
// import { useRouter } from "next/router";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import en from "/public/i18n/En_en";
// import es from "/public/i18n/Es_es";
// import ExtraLayout from "../../layouts/ExtraLayout";
// import GoldActionButton from "../../components/GoldActionButton";


// export function creativehumans() {
//     useEffect(() => {
//         Aos.init();
//     }, []);

//     const router = useRouter();
//     const { locale } = router;
//     const testimonials = locale === "en" ? en.testimonials : es.testimonials;
//     const translation =
//         locale === "en" ? en.nearshore_landing : es.nearshore_landing;

//     return (
//        <div className="w-full flex flex-col items-center justify-center ">
//             <Head>
//                 <title>{translation.metaTitle}</title>
//                 <meta name={translation.metaName} content={translation.metaContent} />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <section className="w-full h-[750px] flex items-center justify-center bg-portfolio-1 bg-working-cover bg-center bg bg-no-repeat md:h-[900px] md:-mt-24  md:pt-40 md:pb-32 ">
//                 <div className="w-full p-8 md:w-[70rem] md:p-0 flex flex-col md:flex-row">
//                     <div className="relative"
//                         data-aos="fade-left"
//                         data-aos-duration={1000}
//                         data-aos-once >
//                         <img src={`/images/portfolio/creativeHumans/.png`}
//                             alt=""
//                             className="hidden md:inline"
//                         />
                
//                     </div>
//                     <div
//                         className="flex flex-col justify-center items-center md:items-start md:w-[30rem]  "
//                         data-aos="fade-right"
//                         data-aos-duration={1000}
//                         data-aos-once
//                     >
//                         <h2 className="font-aleo text-white font-bold text-[1.7rem] text-center md:text-[3rem] md:leading-[1.4] md:text-left ">
//                         {translation.headerTitle}
//                         </h2>
//                         <p className="font-poppins text-white font-normal text-center mt-2 mb-8 md:text-[1.2rem] md:leading-[1.4] md:mb-10 md:mt-2 md:text-left">
//                         {translation.headerSubTitle}
//                         </p>
//                         <GoldActionButton
//                         text={translation.headerBtn}
//                         resize={false}
//                         onClickAction={() =>
//                             window.open(`https://calendly.com/devlights/30min`, "_blank")
//                         }
//                         />
//                     </div>
//                 </div>
//             </section>
//       </div>
//     )
// }


// creativehumans.getLayout = function getLayout(page) {
//     return (
//       <ExtraLayout>
//         {page}
//       </ExtraLayout>
//     )
//   }