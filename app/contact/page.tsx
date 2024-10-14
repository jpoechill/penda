import Header from "../Header"
import Footer from "../Footer"
import localFont from "next/font/local";
import Image from "next/image";

const bebas = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-[#f7f7f7]">
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[100px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center mt-[16px] w-full max-w-[1040px] mb-10">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px] mb-2`}>
              Get In Touch
            </div>



            <div className="w-full mb-5 max-w-[1040px] overflow-hidden">
              <Image src="/img/landscape.jpg" alt="Group Photo" className="rounded-2xl h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
            </div>

            <div className="pt-4 text-left">
              At Penda Assisted Living, we are committed to providing compassionate, personalized care for every resident. Whether you&apos;re seeking more information about our services, scheduling a tour, or have any questions, we are here to help.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1040px]">
            <div>
              <div className="w-full mb-5">
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Phone
              </div>
              <div>
                PH (520) 457-7645 <br />
                FX (520) 423-3363
              </div>
            </div>

            <div>
              <div className="w-full mb-5">
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Hours
              </div>
              <div>
                Monday-Friday: 9AM - 6PM <br />
                Saturday: 10AM - 4PM
              </div>
            </div>

            <div>
              <div className="w-full mb-5">
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Email
              </div>
              <div>
                pendacare2023@gmail.com
              </div>
            </div>


            <div>
              <div className="w-full mb-5">
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Address
              </div>
              <div>
                40968 W. Portis Drive, Maricopa, AZ 85138
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
