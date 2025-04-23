import React from "react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "../motion-primitives/morphing-dialog";
import { GitBranch, Globe, PlusIcon } from "lucide-react";
import { Indie_Flower } from "next/font/google";
import Link from "next/link";
import { InView } from "../motion-primitives/in-view";


const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <div className="mt-[7rem] mx-auto flex flex-col pb-5">
         <InView
              variants={{
                hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >

      <h4 className="text-center lg:text-4xl md:text-3xl text-2xl">Projects</h4>
<div className="flex lg:flex-row flex-col justify-center items-center gap-12 ">
      <div className="mt-5 lg:mx-0 mx-5 ">
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
              
            }}
            className="flex flex-col overflow-hidden border-[#004030] bg-[#e1c6b5] shadow"
          >
            <MorphingDialogImage
              src="/movie.png"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-[#004030] text-left">
                SvelteKit Movie
                </MorphingDialogTitle>
               
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border-[#004030]  text-[#004030] transition-color  focus-visible:ring-2 active:scale-[0.98]"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "10px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#e1c6b5] sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/movie.png"
                alt="."
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-xl text-[#004030] ">
                  SvelteKit Movie
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className={`${indieFlower.className} text-[#004030] !font-light`}>
                    A movie site developed using SvelteKit,Tailwind CSS and MovieDB API.
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className={`${indieFlower.className} text-[#004030] !font-light`}>
                    Tech Stack: SvelteKit, Tailwind CSS, MovieDB API   
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-[#e1c6b5]" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      </div>

      <div className="mt-5 lg:mx-0 mx-5">
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex flex-col overflow-hidden border-[#004030] bg-[#e1c6b5] shadow "
          >
            <MorphingDialogImage
              src="/movie.png"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-[#004030] text-left">
                SvelteKit Movie
                </MorphingDialogTitle>
               
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border-[#004030]  text-[#004030] transition-color  focus-visible:ring-2 active:scale-[0.98]"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "10px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#e1c6b5] sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/movie.png"
                alt="."
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-xl text-[#004030] ">
                  SvelteKit Movie
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className={`${indieFlower.className} text-[#004030] !font-light`}>
                    A movie site developed using SvelteKit,Tailwind CSS and MovieDB API.
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className={`${indieFlower.className} text-[#004030] !font-light`}>
                    Tech Stack: SvelteKit, Tailwind CSS, MovieDB API   
                  </p>
                  <Link className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`} href="https://sveltemovie-umber.vercel.app">Visit{" "} <Globe size={16} className="ml-1" /></Link>
                  <Link className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`} href="https://github.com/Ciamuthama/movie-app">Github{" "} <GitBranch size={16} className="ml-1" /></Link>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-[#e1c6b5]" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      </div></div>
      </InView>
    </div>
  );
}
