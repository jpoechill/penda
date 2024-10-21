'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import localFont from "next/font/local";
import { usePathname } from 'next/navigation'

const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Header() {
  const pathname = usePathname().split('/')[1]

  // const [activeAbout, setActiveAbout] = useState(pathname === "about");
  // const [activeServices, setActiveServices] = useState(false);
  // const [activeFacilities, setActiveFacilities] = useState(false);
  // const [activeContact, setActiveContact] = useState(false);
  // const [activeSchedule, setActiveSchedule] = useState(false);


  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed bg-[#ffffff] flex justify-center w-full z-[10] top-0 border-b py-0 lg:pt-2 lg:p-3 px-10 ">
        <div className="flex flex-row justify-between w-full max-w-[1040px]">
          <div className="grid lg:grid-cols-12 grid-cols-4 w-full justify-between lg:items-center">
            <div className="flex flex-row gap-4 mt-0 mb-0 col-span-3">
              <Link href="/" className="flex my-2 mt-2 flex-row gap-3 items-center">
                <Image src="/logo_full_on_white_clr_03.png" alt="Top Logo" width={230} height={20}></Image>
              </Link>
            </div>
            <div className="hidden lg:flex flex-row lg:items-center justify-start col-span-6 gap-10 text-lg">
              <div>
                <Link href="/about" className={`${pathname == 'about' ? 'text-[#016FA2] font-medium underline' : ''} hover:text-[#016FA2] hover:underline underline-offset-4`} scroll={true}>About</Link>
              </div>
              <div>
                <Link href="/services" className={`${pathname == 'services' ? 'text-[#016FA2] font-medium underline' : ''} hover:text-[#016FA2] hover:underline underline-offset-4`} scroll={true}>Services</Link>
              </div>
              <div>
                <Link href="/facilities" className={`${pathname == 'facilities' ? 'text-[#016FA2] font-medium underline' : ''} hover:text-[#016FA2] hover:underline underline-offset-4`} scroll={true}>Facilities</Link>
              </div>
              <div>
                <Link href="/testimonials" className={`${pathname == 'testimonials' ? 'text-[#016FA2] font-medium underline' : ''} hover:text-[#016FA2] hover:underline underline-offset-4`} scroll={true}>Testimonials</Link>
              </div>
              <div>
                <Link href="/contact" className={`${pathname == 'contact' ? 'text-[#016FA2] font-medium underline' : ''} hover:text-[#016FA2] hover:underline underline-offset-4`} scroll={true}>Contact</Link>
              </div>

            </div>
            <div className="hidden lg:flex flex-row lg:items-center gap-10 text-lg col-span-3 text-right justify-end">
              <div className="flex flex-row">
                <Link href="/schedule">
                  <div className={`${bebas.className} flex flex-row text-[20px] items-center justify-center tracking-wider border-2 border-[#016FA2] shadow-xl text-lg rounded-full text-[#016FA2] hover:bg-[#016FA2] hover:text-white mr-2 py-2 px-4 ml-1`}>
                    Schedule Tour
                  </div>
                </Link>
                <Link href="tel:5555555555">
                  <div className={`${bebas.className} flex flex-row text-[20px] items-center justify-center tracking-wider border-2 border-[#016FA2] shadow-xl text-lg rounded-full text-[#016FA2] hover:bg-[#016FA2] hover:text-white py-2 px-4 ml-1`}>
                    Call Now
                  </div>
                </Link>
              </div>
            </div>

            <div className="cursor-pointer flex justify-end items-center lg:hidden pr-0" onClick={() => { setShowMenu(!showMenu) }}>
              {
                showMenu ?
                  <Image src="/cross_icon.svg" alt="logo" className="fill-[#FFFFFF]" width={23} height={23}></Image>
                  :
                  <Image src="/hamburger_icon.svg" className="fill-[#FFFFFF]" alt="logo" width={30} height={30}></Image>
              }
            </div>

          </div>


        </div>

      </div>
      {
        showMenu &&
        <div className="fixed pt-[125px] top-0 z-[1] w-full px-10 pb-5 shadow-xl bg-white bg-[#fbfefe]">
          <div className="flex flex-col w-full gap-5 text-left text-lg">
            <Link href="/about">
              <div>
                About Us
              </div>
            </Link>
            <hr /><Link href="/services">
              <div>
                Services
              </div>
            </Link>
            <hr />
            <Link href="/facilities">
              <div>
                Facilities
              </div>
            </Link>
            <hr />
            <Link href="/testimonials">
              <div>
                Testimonials
              </div>
            </Link>
            <hr /><Link href="/contact">
              <div>
                Contact
              </div>
            </Link >
            <hr />
          </div >
          <div>
            <Link href="/schedule" className="flex mt-5">
              <div className="bg-[#016FA2] shadow-xl font-bold text-lg rounded-full w-full text-center text-white py-2 px-8 ml-1">
                Schedule a Tour
              </div>
            </Link>
          </div>
        </div >
      }
    </div >


  );
}
