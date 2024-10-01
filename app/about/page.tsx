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
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px]`}>
              Who We Are
            </div>
          </div>

          <div className="w-full mb-10 max-w-[1040px]">
            <Image src="/img/about_01.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>
          {/* 
          <div className="w-full max-w-[1040px] mb-10">
            At Penda Assisted Living, we take pride in providing a comfortable, safe, and welcoming environment for our residents. Our state-of-the-art facilities are thoughtfully designed to meet the unique needs of seniors while fostering a sense of community and independence.
            <br /><br />
            From spacious private and semi-private rooms to beautifully landscaped outdoor areas, every detail of our living spaces promotes both comfort and accessibility. Our common areas, including cozy lounges, dining spaces, and activity rooms, encourage social interaction and engagement, making our residents feel truly at home.
          </div> */}

          <div className="grid grid-cols-2 gap-20 max-w-[1040px]">

            <div className="w-full">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                About Us
              </div>
              Hands untouching, breath forgotten, care floats in circles, where whispers stretch time into endless folds. Memory crumbles like dusk, where Alzheimer&apos;s dissolves into echoes, spiraling through empty mirrors of yesterday&apos;s faces. Dementia bends like waves breaking, each ripple a fragment of something never held.
              <br /><br />
              Daily twists into nothing, routines scatter like scattered wind. ADLs flicker, lost threads of existence undone, merging into spaces where shadows hold more weight than form. Tasks drift, shapeless, as medication becomes mist—floating, neither here nor there, dissolving into soft ripples of what could be.
            </div>


            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Story
              </div>
              Skilled hands, absent yet present, weave through time&apos;s fabric, holding silence where memory breaks. Wellness hovers, undefined, a phantom breeze in the stillness. Rehabilitation spins into an endless loop, movements without direction, without past or future—just the now, suspended in something unseen.
              <br /><br />
              In addition, we offer specialized amenities such as a fitness center, therapy rooms, and a wellness program to support the physical health of our residents. Whether enjoying a quiet moment in our gardens or participating in group activities, Penda Assisted Living is designed to enrich daily life, allowing residents to thrive in a nurturing and secure environment.
            </div>

            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Difference
              </div>
              Palliative hums in the distance, a quiet presence that holds without touching, a gentle wave of nothingness meeting the horizon of long-term care. Boundaries blur, sky fades into sea, where the infinite holds all that has been forgotten, and in that space, care becomes everything yet nothing.
              <br /><br />
              Shadows drift, care untangles into fragments, lost in the quiet hum of what was never there. Time slips, bending back upon itself, spiraling into whispers that fade before they are heard. Alzheimer’s dissolves into mist, memories like feathers falling into the void, where faces and names become echoes of echoes, unheld, unraveling.
            </div>


            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Values
              </div>
              Tasks disappear, ADLs like scattered light, broken by the wind, rituals floating as dust through forgotten spaces. Movements blur, steps without ground, floating between moments where nothing holds. Medication fades into vapor, lost in the space between breaths, a soft promise that dissolves before it can be touched.
              <br /><br />
              Hands—skilled, yet intangible—move through space, guiding the unseen threads that bind us all. Wellness is a distant star, flickering on the horizon, while rehabilitation swirls in endless cycles, journeys with no destination, a labyrinth of motion without purpose.
            </div>


          </div>

        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
