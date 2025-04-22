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
} from "react-icons/si";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import { InView } from "../motion-primitives/in-view";

export default function Skills() {
  return (
    <div className="mt-[10rem] w-1/2 mx-auto snap-center snap-mandatory">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h4 className="text-center text-4xl">Tech Stack</h4>
        <InfiniteSlider
          speedOnHover={20}
          gap={30}
          className="mt-10 animate-fade-up animate-delay-[1400ms]"
          speed={50}
        >
          <SiTypescript size={70} className="text-inherit" />
          <SiJavascript size={70} className="text-inherit" />
          <FaReact size={70} className="text-inherit" />
          <SiSvelte size={70} className="text-inherit" />
          <TbBrandNextjs size={70} className="text-inherit" />
          <FaNodeJs size={70} className="text-inherit" />
          <TbBrandKotlin size={70} className="text-inherit" />
          <ImAndroid size={70} className="text-inherit" />
          <FaPython size={70} className="text-inherit" />
          <SiRubyonrails size={70} className="text-inherit" />
          <SiMysql size={70} className="text-inherit" />
          <BiLogoPostgresql size={70} className="text-inherit" />
          <SiMongodb size={70} className="text-inherit" />
          <FaBootstrap size={70} className="text-inherit" />
          <SiTailwindcss size={70} className="text-inherit" />
          <SiCanva size={70} className="text-inherit" />
          <SiAdobephotoshop size={70} className="text-inherit" />
          <SiAdobeillustrator size={70} className="text-inherit" />
        </InfiniteSlider>
      </InView>
    </div>
  );
}
