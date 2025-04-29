import React from "react";
import { FaReact, FaNodeJs, FaPython, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs, TbBrandKotlin } from "react-icons/tb";
import { ImAndroid } from "react-icons/im";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiMysql,
  SiRubyonrails,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSvelte,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGoogledrive,
} from "react-icons/si";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import { InView } from "../motion-primitives/in-view";

export default function Howedoit() {
  return (
    <div className="lg:mt-[10rem] mt-[7rem] lg:w-1/2 md:w-[70%] lg:mx-auto md:mx-auto mx-5 snap-center snap-mandatory">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h4 className="text-center lg:text-4xl md:text-3xl text-2xl">Tech We Used</h4>
        <InfiniteSlider
          speedOnHover={20}
          gap={30}
          className="mt-10 animate-fade-up animate-delay-[1400ms]"
          speed={50}
        >
          <SiTypescript  className="text-inherit lg:size-[70] md:size-[60] size-[50]" />
          <SiJavascript   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <FaReact   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiSvelte   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <TbBrandNextjs   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <FaNodeJs   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <TbBrandKotlin   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <ImAndroid   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <FaPython   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiRubyonrails   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiMysql   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <BiLogoPostgresql   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiMongodb   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <FaBootstrap   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiTailwindcss   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiCanva   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiAdobephotoshop   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiAdobeillustrator   className="text-inherit lg:size-[70] md:size-[60] size-[50]"  />
          <SiGoogledrive className="text-inherit lg:size-[70] md:size-[60] size-[50]" />
        </InfiniteSlider>
      </InView>
    </div>
  );
}
