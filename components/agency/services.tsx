import React from "react";
import { InView } from "../motion-primitives/in-view";
import { Indie_Flower } from "next/font/google";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogContainer,
} from "../motion-primitives/morphing-dialog";
import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos,FaPaintBrush } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { HiMiniPaintBrush } from "react-icons/hi2";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

/**
 * Renders the Services section of the agency website.
 *
 * This component displays a section with a title "Our Services" and a morphing dialog
 * for Website Development service. It uses InView for animation and provides
 * details about the web development offering, including delivery time and pricing.
 *
 * @returns {JSX.Element} A section displaying agency services with an interactive dialog
 */
/**
 * Renders the Services section of the agency website, specifically focusing on Website Development.
 *
 * This component displays a section with an interactive morphing dialog that provides details
 * about the agency's website development service. It includes a title, service description,
 * delivery timeframe, and pricing information.
 *
 * @returns {JSX.Element} A section with an animated services dialog for website development
 */
export default function Services() {
  return (
    <div className="lg:mt-[15rem] mt-[7rem] snap-center snap-mandatory">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h4 className="text-center lg:text-4xl md:text-3xl text-2xl animate-fade-up animate-delay-[1400ms]">
          Our Services
        </h4>
        <div className="relative mx-auto flex flex-wrap justify-center lg:w-[55%] md:w-[70%] w-full">
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
              className="flex flex-col overflow-hidden w-auto"
            >
              <div className="flex items-center p-3">
                <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full">
                  <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[12px] ">
                    <span className="flex gap-2 items-center"><CgWebsite className="size-[20] text-[#e1c6b5]"/>Website Development</span>
                  </MorphingDialogTitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: "10px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#004030]/70 sm:w-[500px]"
              >
                <MorphingDialogTitle className="uppercase lg:text-base md:text-base text-[14px] text-[#e1c6b5] p-6">
                 <span className="flex gap-2 items-center"><CgWebsite className="size-[20] text-[#e1c6b5]"/>Website Development</span>
                </MorphingDialogTitle>
                <div className={` text-[#e1c6b5]  !font-light p-6`}>
                  <h2>
                    Transform your online presence with a modern,
                    mobile-friendly website from Ciado. We deliver high-quality,
                    custom web designs with built-in SEO and one year of free
                    maintenance, ensuring your site looks great and performs
                    seamlessly.
                  </h2>
                  <div>
                    <span>1-4 weeks delivery</span>
                    <span> Starting from KES 25,000 </span>
                  </div>
                  <div>
                    <ul>
                      <li>High-quality, custom website design </li>
                      <li>
                        Built-in SEO optimization for better search rankings{" "}
                      </li>
                      <li>One year of free maintenance and updates </li>
                      <li>
                        Responsive, mobile-friendly layout for all devices{" "}
                      </li>
                      <li>Fast load times and optimized performance </li>
                    </ul>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

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
              className="flex flex-col overflow-hidden w-auto"
            >
              <div className="flex items-center  p-3">
                <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full">
                  <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[12px] ">
                   <span className="flex gap-2 items-center"> <FaAppStoreIos  className="size-[20] text-[#e1c6b5]"/>Mobile App Development</span>
                  </MorphingDialogTitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: "10px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#004030]/70 sm:w-[500px]"
              >
                <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[14px] text-[#e1c6b5] p-6">
                 <span className="flex gap-2 items-center"> <FaAppStoreIos className="size-[20] text-[#e1c6b5]"/>Mobile App Development</span>
                </MorphingDialogTitle>
                <div className={` text-[#e1c6b5]  !font-light p-6`}>
                  <h2>
                    Reach customers on every device with Ciado’s custom mobile
                    app solutions. We build polished, cross-platform apps (iOS
                    and Android) with stunning design and seamless performance.
                    Our service includes one year of free maintenance, app store
                    submission support, and a month of user training to ensure
                    your app’s success.
                  </h2>
                  <div>
                    <span>4-12 weeks delivery</span>
                    <span> Starting from KES 70,000</span>
                  </div>
                  <div>
                    <ul>
                      <li>Cross-platform development for Android and iOS </li>
                      <li>High-quality, user-friendly UI/UX design </li>
                      <li>One year of free maintenance and updates </li>
                      <li>
                        End-to-end app store submission (Apple App Store &
                        Google Play)
                      </li>
                      <li>One month of free user training</li>
                      <li>App support</li>
                    </ul>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

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
              className="flex flex-col overflow-hidden w-auto"
            >
              <div className="flex items-center  p-3">
                <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full">
                  <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[12px] ">
                   <span className="flex gap-2 items-center"> <IoBusiness  className="size-[20] text-[#e1c6b5]"/> Enterprise System Development</span>
                  </MorphingDialogTitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: "10px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#004030]/70 sm:w-[500px]"
              >
                <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[14px] text-[#e1c6b5] p-6">
                 <span className="flex gap-2 items-center"> <IoBusiness className="size-[20] text-[#e1c6b5]"/> Enterprise System Development</span>
                </MorphingDialogTitle>
                <div className={` text-[#e1c6b5]  !font-light p-6`}>
                  <h2>
                  
                    Empower your business with a fully customized, scalable
                    system from Ciado. We deliver robust enterprise solutions
                    with multiple user roles and secure login controls, tailored
                    to your workflow. Our platforms are designed for growth,
                    with flexible hosting options and integrated databases to
                    handle complex data and processes.
                  </h2>
                  <div>
                    <span>3-7 weeks delivery</span>
                    <span> Starting from KES 50,000 </span>
                  </div>
                  <div>
                    <ul>
                      <li>Multiple user roles and permission levels </li>
                      <li>
                        Tailored system design to match your brand and
                        requirements
                      </li>
                      <li>
                        Scalable, modular system architecture for future growth{" "}
                      </li>
                      <li>Options for local (on-premise) or cloud hosting </li>
                      <li> Integrated database management and reporting </li>
                      <li>
                        {" "}
                        Advanced security with data encryption and backups
                      </li>
                    </ul>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

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
              className="flex flex-col overflow-hidden w-auto"
            >
              <div className="flex items-center  p-3">
                <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full">
                  <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[12px] ">
                     <span className="flex gap-2 items-center"><RiSecurePaymentFill  className="size-[20] text-[#e1c6b5]"/>M-Pesa Integration</span>
                  </MorphingDialogTitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: "10px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#004030]/70 sm:w-[500px]"
              >
                <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[14px] text-[#e1c6b5] p-6">
                 <span className="flex gap-2 items-center"><RiSecurePaymentFill className="size-[20] text-[#e1c6b5]"/>M-Pesa Integration</span>
                </MorphingDialogTitle>
                <div className={` text-[#e1c6b5]  !font-light p-6`}>
                  <h2>
                    Enable secure mobile payments effortlessly with Ciado’s
                    M-Pesa Integration. We connect your platform to Safaricom’s
                    M-Pesa API, allowing you to send and receive payments
                    seamlessly. Our service includes full SDK configuration and
                    automated statement reconciliation, plus real-time
                    transaction notifications for smooth financial management.
                  </h2>
                  <div>
                    <span>1-2 weeks delivery</span>
                    <span> Starting from KES 15,000 </span>
                  </div>
                  <div>
                    <ul>
                      <li>M-Pesa SDK setup and Lipa na M-Pesa integration </li>
                      <li>Automated payment statement reconciliation </li>
                      <li>Real-time payment notifications via SMS/email</li>
                      <li>Secure, compliant transaction processing</li>
                      <li>
                        Dedicated support for sandbox and live configuration{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

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
              className="flex flex-col overflow-hidden w-auto"
            >
              <div className="flex items-center  p-3">
                <div className="flex flex-col items-start justify-center space-y-0 border p-5 rounded-full">
                  <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[12px] ">
                     <span className="flex gap-2 items-center"><HiMiniPaintBrush  className="size-[20] text-[#e1c6b5]"/>Web Redesign</span>
                  </MorphingDialogTitle>
                </div>
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: "10px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-[#004030] bg-[#004030]/70 sm:w-[500px]"
              >
                <MorphingDialogTitle className="font-semibold uppercase lg:text-base md:text-base text-[14px] text-[#e1c6b5] p-6">
                 <span className="flex gap-2 items-center"><HiMiniPaintBrush className="size-[20] text-[#e1c6b5]"/>Web Redesign</span>
                </MorphingDialogTitle>
                <div className={` text-[#e1c6b5]  !font-light p-6`}>
                  <h2>
                    Give your website a fresh, modern look with Ciado’s Web
                    Redesign service. We perform a full design overhaul—updating
                    your layout, content, and images—to enhance user experience
                    and brand appeal. Boost your brand’s credibility with a
                    modern, professional design and improved typography, while
                    ensuring the site is fully responsive and easy to navigate.
                  </h2>
                  <div>
                    <span>2-4 Weeks delivery</span>
                    <span> Starting from KES 15,000 </span>
                  </div>
                  <div>
                    <ul>
                      <li>Complete design refresh with modern UI/UX </li>
                      <li>
                        Updated content, images, and graphics for engagement
                      </li>
                      <li>Modern fonts and improved typography</li>
                      <li> Responsive layout optimized for mobile devices</li>
                      <li>Streamlined navigation and user experience </li>
                      <li>Improved site speed and SEO-friendly structure</li>
                    </ul>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        </div>
      </InView>
    </div>
  );
}
