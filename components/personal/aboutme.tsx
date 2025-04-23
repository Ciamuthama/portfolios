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
          Software Engineer
        </TextEffect>
       
        <TextEffect
          per="word"
          delay={1}
          preset="fade-in-blur"
          className={`text-2xl ${indieFlower.className}`}
        >
          Mobile & Web Dev
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
        <h4 className="text-center  lg:text-4xl md:text-3xl text-2xl">About Me</h4>
       
          <p className={`text-center lg:text-xl md:text-lg text-[14px]  px-10 lg:w-1/2  md:w-[70%] mx-auto !font-medium ${indieFlower.className}`}>A year ago, I was an intern curious about code. Today, I’m a
          full-stack engineer building production-grade ERP and mobile apps used
          by real clients. I specialize in React Native and Kotlin for mobile
          development, with hands-on experience in Next.js,Node.js, and MySQL
          for the backend. I’m on a journey to become a well-rounded engineer,
          solving meaningful problems through clean code, thoughtful design, and
          scalable tech.</p>
      </div>
        </InView>
    </div>
  );
}
