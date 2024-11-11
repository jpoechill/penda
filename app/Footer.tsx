import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Footer() {
  return (
    <div className="custom-bg flex flex-row justify-center mx-auto border w-full py-10 px-10 mt-10 text-white bg-[#016FA2]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1040px]">
          <div>
            40968 W. Portis Drive, Maricopa, AZ 85138 <br />
            <span className="font-bold">PH</span> (520) 457-7645 | <span className="font-bold">FX</span> (520) 423-3363
            <br /><br />
          </div>
          <div className="flex flex-col justify-end pt-8 md:pt-0 align-bottom">
            <div className="flex flex-row gap-4">
              <div>
                <Link href="/about">About Us</Link>
              </div>
              <div>
                <Link href="/services">Services</Link>
              </div>
              <div>
                <Link href="/facilities">Facilities</Link>
              </div>
              {/* <div>
                <Link href="/testimonials">Testimonials</Link>
              </div> */}
              <div>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="flex flex-row text-right pt-5 md:justify-end">
              {/* <Link href="/schedule" className="w-full md:w-fit">
                <div className={`${bebas.className} flex text-[20px] mr-5 items-center justify-center tracking-wider border-2 border-white text-white shadow-xl hover:bg-white hover:text-[#016FA2] text-lg rounded-full py-2 px-5 ml-1`}>
                  Schedule a Tour
                </div>
              </Link> */}
              <Link href="tel:5204233363" className="w-full md:w-fit">
                <div className={`${bebas.className} flex text-[20px] mr-5 items-center justify-center tracking-wider border-2 border-white text-white shadow-xl hover:bg-white hover:text-[#016FA2] text-lg rounded-full py-2 px-8 ml-1`}>
                  Call now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 pt-0 md:pt-0 justify-center md:justify-between w-full max-w-[1040px]">
          <div className="w-full flex justify-center md:justify-start">
            <Link href="/">
              <Image src="/logo_full_on_dark_clr_02.png" alt="Logo Basic" width={170} height={300}></Image>
            </Link>
          </div>
          <div className="md:text-right mt-10 md:mt-0 flex w-full text-center flex-col justify-end align-end">
            <div className="flex w-full justify-center md:justify-end">
              <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61568741845327">
                <Image src="/social-facebook.svg" className="inline mr-7" alt="Facebook Logo" width={40} height={30}></Image>
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pendahomecare">
                <Image src="/social-instagram.svg" className="inline" alt="Instagram Logo" width={40} height={30}></Image>
              </Link>
              <br /><br />
            </div>
            <br />
            Penda Assisted Living © 2024
          </div>
        </div>
      </div>

    </div>
  );
}
