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
    <div className="flex flex-row justify-center mx-auto border w-full py-10 px-10 mt-10 text-white bg-[#016FA2]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between w-full max-w-[1040px]">
          <div>
            40968 W. Portis Drive, Maricopa, AZ 85138 <br />
            <span className="font-bold">PH</span> (520) 457-7645 | <span className="font-bold">FX</span> (520) 423-3363

            <br /><br />
          </div>
          <div className="flex flex-col justify-end align-bottom">
            <div className="flex flex-row gap-6">
              <div>
                <Link href="/about">About Us</Link>
              </div>
              <div>
                <Link href="/services">Services</Link>
              </div>
              <div>
                <Link href="/facilities">Facilities</Link>
              </div>
              <div>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="flex flex-row text-right pt-5 justify-end">
              <Link href="/quote">
                <div className={`${bebas.className} flex text-[20px] items-center justify-center tracking-wider bg-white text-[#016FA2] shadow-xl text-lg rounded-full py-2 px-5 ml-1`}>
                  Schedule a Tour
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-10 pt-10 justify-between w-full max-w-[1040px]">
          <div>
            <Link href="/">
              <Image src="/img/logo_ondark.png" alt="Logo Basic" width={340} height={300}></Image>
            </Link>
          </div>
          <div className="text-right">
            <Image src="/social-facebook.svg" className="inline mr-7" alt="Facebook Logo" width={40} height={30}></Image>
            <Image src="/social-instagram.svg" className="inline" alt="Instagram Logo" width={40} height={30}></Image>
            <br /><br />
            Penda Assisted Living © 2024
          </div>
        </div>
      </div>

    </div>
  );
}
