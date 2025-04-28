import React from "react";
import { Indie_Flower } from "next/font/google";
import { TextEffect } from "../motion-primitives/text-effect";
import { InView } from "../motion-primitives/in-view";


const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div>
      <div className="text-center">
        <TextEffect
          per="word"
          delay={1}
          preset="fade-in-blur"
          className="lg:text-6xl md:text-5xl text-4xl  tracking-wide"
        >
          Web Design 
        </TextEffect>
       
        <TextEffect
          per="word"
          delay={1}
          preset="fade-in-blur"
          className={`text-2xl ${indieFlower.className}`}
        >
          & Development Agency
        </TextEffect>
      </div>
      <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
      <div className="lg:mt-[12rem] md:mt-[10rem] mt-[10rem] snap-center snap-mandatory">
        <h4 className="text-center  lg:text-4xl md:text-3xl text-2xl">About Us</h4>
       
          <p className={`text-center lg:text-xl md:text-lg text-[14px]  px-10 lg:w-1/2  md:w-[70%] mx-auto !font-medium ${indieFlower.className}`}>
         We are a web design and development agency that specializes in creating stunning and functional websites and systems. Our team of experts is dedicated to delivering high-quality solutions that meet the unique needs of our clients. Whether you need a simple landing page or a complex e-commerce platform, we have the skills and experience to bring your vision to life. We pride ourselves on our attention to detail, creativity, and commitment to customer satisfaction. Let us help you take your online presence to the next level!
          </p>
      </div>
        </InView>
    </div>
  );
}
