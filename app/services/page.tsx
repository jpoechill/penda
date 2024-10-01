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
    <main>
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[130px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center w-full pb-2">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px]`}>
              Services
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1040px]">

            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/cozy.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Comfortable Living Spaces
              </div>
              <div>
                Our facility is thoughtfully designed to accommodate residents with varying mobility needs. With wide hallways, grab bars, and wheelchair-friendly entrances, everyone can navigate their home with ease.
              </div>
            </div>
            <div className="bg-[#016FA2] rounded-xl p-5 text-white">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/accessibility.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
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
                Your loved ones’ safety is our top priority. Penda Assisted Living is equipped with advanced emergency response systems and 24/7 staff supervision, ensuring that help is always just a call away.
              </div>
            </div>

            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/transport.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Transportation Services
              </div>
              <div>
                Daily twists into nothing, routines scatter like scattered wind. ADLs flicker, lost threads of existence undone, merging into spaces where shadows hold more weight than form. Tasks drift, shapeless, as medication becomes mist—floating, neither here nor there, dissolving into soft ripples of what could be.
              </div>
            </div>
            <div className="bg-[#016FA2] rounded-xl p-5 text-white">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/pills.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[24px] pb-2`}>
                Medication Management
              </div>
              <div>
                Skilled hands, absent yet present, weave through time's fabric, holding silence where memory breaks. Wellness hovers, undefined, a phantom breeze in the stillness. Rehabilitation spins into an endless loop, movements without direction, without past or future—just the now, suspended in something unseen.
              </div>
            </div>
            <div className="bg-white border-[1px] border-[#016FA2] rounded-xl p-5">
              <div className="flex relative flex-row w-full rounded-xl overflow-hidden mb-4">
                <Image src="/img/brain.jpeg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className={`${bebas.className} text-[#016FA2] text-[24px] pb-2`}>
                Memory Care
              </div>
              <div>
                Palliative hums in the distance, a quiet presence that holds without touching, a gentle wave of nothingness meeting the horizon of long-term care. Boundaries blur, sky fades into sea, where the infinite holds all that has been forgotten, and in that space, care becomes everything yet nothing.
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
