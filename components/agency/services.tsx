import React from "react";
import { InView } from "../motion-primitives/in-view";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogContainer,
} from "../motion-primitives/morphing-dialog";

import { BsCalendar3RangeFill, BsFillRocketTakeoffFill, BsPatchCheckFill } from "react-icons/bs";
import { TbArrowRightToArc } from "react-icons/tb";


import { services } from "../../data/index";
import { GrTag } from "react-icons/gr";
import Link from "next/link";
import { Magnetic } from "../motion-primitives/magnetic";



export default function Services() {
  return (
    <div className="lg:mt-[15rem] mt-[7rem] select-none">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h4 className="text-center lg:text-4xl md:text-3xl text-2xl">
          Our Services
        </h4>
        <div className="relative mx-auto flex flex-wrap justify-center lg:w-[60%] md:w-[70%] w-full">
          {services.map((item, _) => (
            <MorphingDialog
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 0.25,
              }}
              key={_}
            >
              <MorphingDialogTrigger
                style={{
                  borderRadius: "12px",
                }}
                className="flex flex-col overflow-hidden w-auto select-none"
              >
                <div className="flex items-center p-3">
                  <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full shadow">
                    <MorphingDialogTitle className="uppercase lg:text-base md:text-base text-[12px]">
                      <span className="flex gap-3 items-center ">
                        {item.service}
                        <TbArrowRightToArc className="text-[#e1c6b5] size-[20] -rotate-45" />
                      </span>
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: "10px",
                  }}
                  className=" select-none pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#e1c6b5] sm:w-[500px]"
                >
                  <MorphingDialogTitle className="uppercase lg:text-lg md:text-base text-[14px] text-[#004030] text-center px-6 pt-6 mx-auto font-semibold">
                    <span className="flex gap-2 items-center ">
                      {item.service}
                    </span>
                  </MorphingDialogTitle>
                  <div className={` text-[#004030]  !font-light p-6`}>
                    <p className="font-base mb-1 text-center">{item.description}</p>
                    <div className="flex my-2 gap-2 items-center justify-center">
                    <Magnetic intensity={0.2}>
                      <span className="flex gap-3 items-center text-[14px] text-center bg-[#004030]/80 p-2 rounded-full text-[#e1c6b5] font-semibold shadow-md">
                        <BsFillRocketTakeoffFill  className="text-[#e1c6b5] size-[18]" />
                        {item.delivery_time} Turn Around
                      </span>
                      </Magnetic>
                      <Magnetic intensity={0.2}>

                      <span className="flex gap-3 items-center text-[14px] text-center bg-[#004030]/80 p-2 rounded-full text-[#e1c6b5] font-semibold shadow-md">
                        <GrTag  className="text-[#e1c6b5] size-[20] " />
                        {item.price}
                      </span>
                      </Magnetic>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      <h6 className="text-center text-[16px] ">
                        Features
                        </h6>
                      {item.features.map((feat, i) => (
                        <div key={i} className="mt-3">
                          <ul>
                            <li className="flex gap-1 items-center text-[14px]"><BsPatchCheckFill className="text-[#004030] size-[18]" />{feat}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-4">
                      <Magnetic intensity={0.2}>
                      <Link href="https://calendar.app.google/YgGBkrT7f3x8hXvy7" target="_blank" className="flex gap-3 items-center px-5 py-3 bg-[#004030]/80 text-[#e1c6b5] text-[14px] rounded-full shadow-md font-semibold"> Book A Meeting <BsCalendar3RangeFill className="text-[#e1c6b5] size-[15] "/></Link>
                      </Magnetic>
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </InView>
    </div>
  );
}
