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
    <main className="bg-[#f8fff8]">
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[100px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center mt-[16px] w-full pb-2">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px]`}>
              Our Living Accommodations
            </div>
          </div>
          <div className="w-full mb-10">
            <Image src="/img/facilities/facil_02.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>

          <div className="w-full max-w-[1040px] mb-10">
            At Penda Assisted Living, we take pride in providing a comfortable, safe, and welcoming environment for our residents. Our state-of-the-art facilities are thoughtfully designed to meet the unique needs of seniors while fostering a sense of community and independence.
            <br /><br />
            From spacious private and semi-private rooms to beautifully landscaped outdoor areas, every detail of our living spaces promotes both comfort and accessibility. Our common areas, including cozy lounges, dining spaces, and activity rooms, encourage social interaction and engagement, making our residents feel truly at home.
          </div>

          <div className="w-full mb-10">
            <Image src="/img/facilities/facil_01.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>

          {/* <div className="w-full max-w-[1040px] mb-10">
            Safety and well-being are our top priorities. Our facility features 24/7 security, emergency call systems in each room, and easily accessible layouts to ensure peace of mind for both residents and their families.
            <br /><br />
            In addition, we offer specialized amenities such as a fitness center, therapy rooms, and a wellness program to support the physical health of our residents. Whether enjoying a quiet moment in our gardens or participating in group activities, Penda Assisted Living is designed to enrich daily life, allowing residents to thrive in a nurturing and secure environment.
          </div> */}

          <div className="w-full grid grid-cols-2 gap-8 max-w-[1040px]">
            <div>
              <Image src="/img/facilities/facil_03.jpg" alt="Group Photo" className="w-full " priority width={1200} height={500}></Image>
            </div>
            <div className="grid grid-rows-2">
              <Image src="/img/facilities/facil_04.jpg" alt="Group Photo" className="w-full " priority width={1200} height={500}></Image>
              <Image src="/img/facilities/facil_05.jpg" alt="Group Photo" className="w-full " priority width={1200} height={500}></Image>
            </div>
          </div>

        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
