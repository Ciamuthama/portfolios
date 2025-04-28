import React from "react";
import { InView } from "../motion-primitives/in-view";
import Link from "next/link";
import { Indie_Flower } from "next/font/google";


const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Experiences() {
  return (
    <div className="lg:mt-[15rem] mt-[7rem] snap-center snap-mandatory">
       <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >

            
      <h4 className="text-center lg:text-4xl md:text-3xl text-2xl animate-fade-up animate-delay-[1400ms]">
        Experiences
      </h4>
      <div>
        <div className="lg:w-[50%] lg:mx-auto mx-5 animate-fade-up animate-delay-[1400ms]">
          <h4 className="font-semibold uppercase lg:text-base md:text-base text-[14px]">FrontEnd Developer</h4>
          <div className="flex gap-3 mt-2 justify-between">
            <h4 className={`${indieFlower.className} !font-semibold lg:text-base md:text-base text-[13px]`}>
              JumboStar Solutions | Nakuru,Kenya
            </h4>
            <h4 className={`${indieFlower.className} !font-semibold lg:text-base md:text-base text-[13px]`}>
              Jan 2024 - Present
            </h4>
          </div>
          <div className="flex">
            <span className="mt-3.5 text-base">🍥</span>
            <p className={`mt-4 ${indieFlower.className} lg:text-base md:text-base text-[12px]`}>
              At JumboStar Solutions, I work as a Frontend Deloper building ERP
              systems for over 150 SACCOs across Kenya. My role involves
              designing and developing responsive, user-friendly web apps and
              mobile using SvelteKit, Bootsrap, Tailwind and React Naitve.
            </p>
          </div>
        </div>

        <div className="lg:w-[50%] lg:mx-auto mx-5 animate-fade-up animate-delay-[1400ms] mt-5">
          <h4 className="font-semibold uppercase lg:text-base md:text-base text-[14px]">Software Engineer</h4>
          <div className="flex gap-3 mt-2 justify-between">
            <h4 className={`${indieFlower.className} !font-semibold lg:text-base md:text-base text-[13px]`}>
              Freelancer
            </h4>
            <h4 className={`${indieFlower.className} !font-semibold lg:text-base md:text-base text-[13px]`}>
              April 2024 - Present
            </h4>
          </div>
          <div>
            <Link href="/agency/#projects" className="flex ">
              <span className="mt-3.5 text-base">🍥</span>
              <p className={`mt-4 ${indieFlower.className} lg:text-base md:text-base text-[12px]`}>
                Worked with small businesses and community groups to build
                custom web and mobile solutions. Delivered a CRM and ERP
                systems, set up online presence through websites and Google
                Business profiles, and helped streamline user experiences
                through responsive design.
                
              </p>
            </Link>
          </div>
        </div>
      </div>
      </InView>
    </div>
  );
}
