import React from "react";
import { TextEffect } from "../motion-primitives/text-effect";
import { Indie_Flower } from "next/font/google";
import Link from "next/link";
import { BiLinkAlt } from "react-icons/bi";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Experiences() {
  return (
    <div className="mt-10">
      <h4
        className="text-center text-4xl animate-fade-up animate-delay-[1400ms]"
      >
        Experiences
      </h4>
      <div>
        <div className="w-[50%] mx-auto animate-fade-up animate-delay-[1400ms]">
          <h4 className="font-semibold uppercase">FrontEnd Developer</h4>
          <div className="flex gap-3">
            <h4 className={`${indieFlower.className} !font-semibold`}>
              JumboStar Solutions | Nakuru,Kenya
            </h4>
            <h4 className={`${indieFlower.className} !font-semibold`}>
              Jan 2024 - Present
            </h4>
          </div>
          <div className="flex">
            <span className="mt-3.5">🍥</span>
            <p className={`mt-4 ${indieFlower.className}`}>
              At JumboStar Solutions, I work as a Frontend Deloper building ERP
              systems for over 150 SACCOs across Kenya. My role involves
              designing and developing responsive, user-friendly web apps and
              mobile using SvelteKit, Bootsrap, Tailwind and React Naitve.
            </p>
          </div>
        </div>

        <div className="w-[50%] mx-auto mt-5 animate-fade-up animate-delay-[1400ms]">
          <h4 className="font-semibold uppercase">Software Engineer</h4>
          <div className="flex gap-3">
            <h4 className={`${indieFlower.className} !font-semibold`}>
              Freelancer
            </h4>
            <h4 className={`${indieFlower.className} !font-semibold`}>
              April 2024 - Present
            </h4>
          </div>
          <div className="flex ">
            <span className="mt-3.5">🍥</span>
            <p className={`mt-4 ${indieFlower.className}`}>
              Worked with small businesses and community groups to build custom
              web and mobile solutions. Delivered a CRM and ERP systems, set up
              online presence through websites and Google Business profiles, and
              helped streamline user experiences through responsive design.
            </p>
          </div>
          <Link
            className="font-semibold uppercase flex mt-3"
            href="/agency/#projects"
          >
            <BiLinkAlt className="text-inherit mr-2" />Showcase
          </Link>
        </div>
      </div>
    </div>
  );
}
