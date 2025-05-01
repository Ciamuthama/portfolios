import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter ,FaSquareInstagram ,FaRegAddressBook   } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsCalendar3Week  } from "react-icons/bs";

export default function NavAgency() {
  return (
    <div className="flex justify-between items-center shadow bottom-2 left-0 right-0 sticky w-[22rem]  py-3 px-2 mx-auto text-[#004030] bg-[#dfe8ea]/70 backdrop-blur-xl rounded-2xl">
      <Link
        href="/"
        className="uppercase font-semibold bg-[#004030]  p-1 rounded-full relative w-8 h-8"
      >
        <Image src="/ciado.png" fill alt="Cia" className="rounded-full" />
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="mailto:agencyciado@gmail.com"><SiGmail className="size-[30] text-[#004030]" /></Link>
        </li>
      <li>
          <Link href="tel:+254703911863"><FaRegAddressBook   className="size-[28] text-[#004030]" /></Link>
        </li>
        <li>
          <Link href="https://github.com/ciamuthama"><BsCalendar3Week    className="size-[28] text-[#004030]" /></Link>
        </li>
        {/* <li>
         <Link href="https://www.tiktok.com/@ciado.agency"> <FaTiktok  className="size-[28] text-[#004030]" /></Link>
        </li> */}
        <li>
        <Link href="https://x.com/AgencyCiado">  <FaSquareXTwitter  className="size-[30] text-[#004030]" /></Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/ciadoagency/"><FaSquareInstagram  className="size-[30] text-[#004030] " /></Link>
        </li>
      </ul>
    </div>
  );
}
