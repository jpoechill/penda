import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import localFont from "next/font/local";

const bebas = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-[#eff7ff]">
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[0px] justify-center items-center w-full pt-0 p-5 px-10">
          <div className="text-center w-full pb-2 mt-[116px]">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px]`}>
              Our Wellness Solutions
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-[1040px]">

            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/cozy_04.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Comfortable Living Spaces
              </div>
              <div>
                We prioritize creating comfortable living spaces that feel like home. Each room is thoughtfully designed to balance privacy with accessibility, offering cozy furnishings, personalized touches, and ample natural light.
              </div>
            </div>
            <div className="bg-[#016FA2] rounded-xl p-5 text-white">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/accessibility_03.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[24px] pb-2`}>
                Accessibility for All
              </div>
              <div>
                Our facility is thoughtfully designed to accommodate residents with varying mobility needs. With wide hallways, grab bars, and wheelchair-friendly entrances, everyone can navigate their home with ease.
              </div>
            </div>
            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/keys.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Safety and Security
              </div>
              <div>
                Your loved ones&apos; safety is our top priority. Penda Assisted Living is equipped with advanced emergency response systems and 24/7 staff supervision, ensuring that help is always just a call away.
              </div>
            </div>

            <div className="bg-[#016FA2] rounded-xl p-5 text-white">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/transport_02.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-white text-[24px] pb-2`}>
                Transportation Services
              </div>
              <div>
                We offer reliable and accessible transportation for all residents. Our vehicles are equipped for mobility needs, and our staff are trained to assist every step of the way, helping you stay connected and independent.
              </div>
            </div>
            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/pills_02.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Medication Management
              </div>
              <div>
                We provide comprehensive medication management to ensure residents take their medications safely and on time. We coordinate with healthcare providers, monitor prescriptions, and administer medications according to personalized care plans. </div>
            </div>
            <div className="bg-[#016FA2] rounded-xl p-5 text-white">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/cook.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-white text-[24px] pb-2`}>
                {/* Memory Care */}
                Prepared Meals
              </div>
              <div>
                Specializing in dietary needs, we offer heart-healthy, low-sodium, diabetic-friendly, and customized meal options. Our kitchen creates a warm, home-like dining experience where residents enjoy fresh, balanced meals that support their well-being.
                {/* We support residents living with Alzheimer&apos;s, dementia, and other cognitive challenges. Daily routines are tailored to each resident’s needs, focusing on enhancing memory, reducing confusion, and fostering a sense of security. */}
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
