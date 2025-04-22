import React from "react";
import { Indie_Flower } from "next/font/google";
import { TextEffect } from "../motion-primitives/text-effect";

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
          className="text-6xl !font-[200] tracking-wide"
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
      <div>
        <TextEffect
          per="line"
          as="p"
          delay={1}
          preset="fade-in-blur"
          className={`text-center text-xl mt-5 px-10 w-1/2 mx-auto !font-medium ${indieFlower.className}`}
        >
          A year ago, I was an intern curious about code. Today, I’m a
          full-stack engineer building production-grade ERP and mobile apps used
          by real clients. I specialize in React Native and Kotlin for mobile
          development, with hands-on experience in Next.js,Node.js, and MySQL
          for the backend. I’m on a journey to become a well-rounded engineer,
          solving meaningful problems through clean code, thoughtful design, and
          scalable tech.
        </TextEffect>
      </div>
    </div>
  );
}
