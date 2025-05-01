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
import { GitBranch, Globe,Video } from "lucide-react";
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
        <h4 className="text-center lg:text-4xl md:text-3xl text-2xl">
          Selected Works
        </h4>
        <div className="flex lg:flex-row flex-col justify-center flex-wrap items-center gap-x-10 lg:w-1/2 mx-auto">
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
                className="flex flex-col overflow-hidden shadow"
              >
                <MorphingDialogImage
                  src="/erp.png"
                  alt=""
                  className="h-66 w-[25rem] object-cover"
                />
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: "10px",
                  }}
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#dfe8ea] sm:w-[500px]"
                >
                  <MorphingDialogImage
                    src="/erp.png"
                    alt="."
                    className="h-full w-full object-cover"
                  />
                  <div className="p-6">
                    <MorphingDialogTitle className="text-xl text-[#004030] ">
                      ERP System
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle
                      className={`${indieFlower.className} text-[#004030] !font-light`}
                    >
                      This is Full Stack ERP System for a client that enables
                      them to manage their Sacco Activites all from the same web
                      system. Hosted locally on the clients server 
                    </MorphingDialogSubtitle>
                    <MorphingDialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: 100 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: 100 },
                      }}
                    >
                      <p
                        className={`${indieFlower.className} text-[#004030] !font-light`}
                      >
                        Tech Stack: NextJs, MySQL, Tailwind, ShadCN
                      </p>
                      <Link
                        target="_blank"
                        className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`}
                        href="https://res.cloudinary.com/dlmiqsnpe/video/upload/v1745583618/qgokt0s7gecqnvdaunc8.mp4"
                      >
                        Preview <Video size={16} className="ml-1" />
                      </Link>
                      
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className="text-[#dfe8ea]" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </div>

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
                className="flex flex-col overflow-hidden shadow"
              >
                <MorphingDialogImage
                  src="/menucha.png"
                  alt="menucha"
                  className="h-66 w-[25rem] object-cover"
                />
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: "10px",
                  }}
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#dfe8ea] sm:w-[500px]"
                >
                  <MorphingDialogImage
                    src="/menucha.png"
                    alt="menucha"
                    className="h-full w-full object-cover"
                  />
                  <div className="p-6">
                    <MorphingDialogTitle className="text-xl text-[#004030] ">
                      Menucha Crafts 
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle
                      className={`${indieFlower.className} text-[#004030] !font-light`}
                    >
                      An e-commerce site for an instagram shop, developed with Nextjs and intergates WhatsApp message API for order completion
                    </MorphingDialogSubtitle>
                    <MorphingDialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: 100 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: 100 },
                      }}
                    >
                      <p
                        className={`${indieFlower.className} text-[#004030] font-medium`}
                      >
                        Tech Stack: NextJs, Tailwind, Framer Motion
                      </p>
                      <Link
                        target="_blank"
                        className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`}
                        href="https://menucha.co.ke"
                      >
                       Live Preview <Globe size={16} className="ml-1" />
                      </Link>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className="text-[#dfe8ea]" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </div>
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
                      className="flex flex-col overflow-hidden shadow"
                    >
                      <MorphingDialogImage
                        src="/bonkelinks.png"
                        alt=""
                        className="h-66 w-[25rem] object-cover"
                      />
                    </MorphingDialogTrigger>
                    <MorphingDialogContainer>
                      <MorphingDialogContent
                        style={{
                          borderRadius: "10px",
                        }}
                        className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#dfe8ea] sm:w-[500px]"
                      >
                        <MorphingDialogImage
                          src="/bonkelinks.png"
                          alt="."
                          className="h-full w-full object-cover"
                        />
                        <div className="p-6">
                          <MorphingDialogTitle className="text-xl text-[#004030] ">
                            Bonkelinks Internet Solutions
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle
                            className={`${indieFlower.className} text-[#004030] !font-light`}
                          >
                            A Nextjs Project for a client that is still in development stage and will be live in due time 
                          </MorphingDialogSubtitle>
                          <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                              initial: { opacity: 0, scale: 0.8, y: 100 },
                              animate: { opacity: 1, scale: 1, y: 0 },
                              exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                          >
                            <p
                              className={`${indieFlower.className} text-[#004030] !font-light`}
                            >
                              Tech Stack: NextJs, TailwindCss, GoogleMap API, WhatsApp API
                            </p>
                            <Link
                              target="_blank"
                              className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`}
                              href="https://bonkeliks.vercel.app/"
                            >
                              Demo <Globe size={16} className="ml-1" />
                            </Link>
                          </MorphingDialogDescription>
                        </div>
                        <MorphingDialogClose className="text-[#dfe8ea]" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </div>

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
                className="flex flex-col overflow-hidden shadow"
              >
                <MorphingDialogImage
                  src="/crm.png"
                  alt=""
                  className="h-66 w-[25rem] object-cover"
                />
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: "10px",
                  }}
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#dfe8ea] sm:w-[500px]"
                >
                  <MorphingDialogImage
                    src="/crm.png"
                    alt="."
                    className="h-full w-full object-cover"
                  />
                  <div className="p-6">
                    <MorphingDialogTitle className="text-xl text-[#004030] ">
                      CRM System
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle
                      className={`${indieFlower.className} text-[#004030] !font-light`}
                    >
                      A Full Stack CRM system for a client to manage members in Clusters offering an easy way to group members in clusters: Hosted locally on the clients local server
                    </MorphingDialogSubtitle>
                    <MorphingDialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: 100 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: 100 },
                      }}
                    >
                      <p
                        className={`${indieFlower.className} text-[#004030] !font-light`}
                      >
                        Tech Stack: ReactJs, MongoDB, Tailwind, NodeJs, ExpressJs, Multer
                      </p>
                      <Link
                        target="_blank"
                        className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`}
                        href="https://clustermgt.vercel.app/"
                      >
                        Demo <Globe size={16} className="ml-1" />
                      </Link>
                      <Link
                        target="_blank"
                        className={`${indieFlower.className} text-[#004030] !font-light !text-[20px] underline flex items-center`}
                        href="https://github.com/Ciamuthama/clustermgt"
                      >
                        Code Preview <GitBranch size={16} className="ml-1" />
                      </Link>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className="text-[#dfe8ea]" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </div>

        </div>
      </InView>
    </div>
  );
}
