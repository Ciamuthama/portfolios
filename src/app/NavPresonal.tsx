import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin,  } from "react-icons/fa";
import { FaSquareXTwitter ,FaGithub,FaSquareInstagram   } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function NavPresonal() {
  return (
    <div className="flex justify-between items-center shadow bottom-2 left-0 right-0 sticky w-[22rem]  py-3 px-2 mx-auto text-[#e1c6b5] bg-[#004030]/50 backdrop-blur-xl rounded-2xl">
      <Link
        href="#/"
        className="uppercase font-semibold bg-[#e1c6b5]  p-1 rounded-full relative w-8 h-8"
      >
        <Image src="/profile-pic.png" fill alt="CM" />
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="https://github.com/ciamuthama"><FaGithub className="size-[30] text-[#e1c6b5]" /></Link>
        </li>
        <li>
          <Link href="mailto:muthamapeter79@gmail.com"><SiGmail className="size-[30] text-[#e1c6b5]" /></Link>
        </li>
        <li>
         <Link href="https://linkedin.com/in/petermuthama"> <FaLinkedin className="size-[30] text-[#e1c6b5]" /></Link>
        </li>
        <li>
        <Link href="https://x.com/ciamuthama">  <FaSquareXTwitter  className="size-[30] text-[#e1c6b5]" /></Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/ciamuthama/"><FaSquareInstagram  className="size-[30] text-[#e1c6b5] " /></Link>
        </li>
      </ul>
    </div>
  );
}
