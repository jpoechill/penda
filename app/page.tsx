import Image from "next/image";
import Header from "./Header"
import Footer from "./Footer"
import localFont from "next/font/local";

const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex justify-center w-full p-5 pt-0 px-10 relative">
          <div className="flex relative flex-row w-full max-w-[1040px] rounded-xl overflow-hidden mt-[120px] shadow-xl">
            <Image src="/img/cover_03.jpg" alt="Group Photo" className="h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
            <div className="flex items-center justify-center absolute bottom-0 text-[40px] font-['Georgia'] italic bg-black bg-opacity-50 text-center text-white w-full p-5 mb-10">
              Your Home Away from Home
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-5 px-10 mt-0 my-5">
          <div className="text-center w-full pb-2">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px]`}>
              Mission
            </div>
          </div>
          <div className="flex flex-row w-full max-w-[1040px]">
            <div className="w-full overflow-hidden  grid md:grid-cols-6 grid-cols-1">
              <div className="col-span-1 p-5 pl-0">
                <Image src="/img/nurse_03.jpeg" alt="Group Photo" className="rounded-xl lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              </div>
              <div className="col-span-5 p-5">
                Our mission at Penda Home is to embody the love and care that &apos;Penda&apos; represents.
                We are committed to offering our clients a home-like experience, where respect, loyalty, and integrity are at the core of everything we do.
                <br /><br />
                At Penda Home, we believe that genuine care comes from the heart, and we provide
                personalized services that are carefully tailored to each person&apos;s specific requirements, ensuring the highest level of comfort and care.
                {/* At Penda, our mission is to provide compassionate, personalized care that empowers individuals to live independently and with dignity in the comfort of their own homes. */}
                <br /><br />
                {/* We are dedicated to creating a safe, nurturing environment where each client’s physical, emotional, and social needs are met with respect and kindness. Our holistic approach to care ensures that every service is tailored to the unique preferences and requirements of our clients, fostering their well-being and happiness. */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full px-10 pb-4">
          <div className="flex flex-col w-full max-w-[1040px]">
            <div className="grid lg:grid-rows-1 lg:grid-cols-2 gap-8">
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/sofa.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={30} height={30}></Image>
                    </div>
                    Comfortable Living Spaces
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/wheelchair.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={30} height={30}></Image>
                    </div>
                    Accessibility for All
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/lock.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={24} height={24}></Image>
                    </div>
                    Safety and Security
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/van.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={30} height={30}></Image>
                    </div>
                    Transportation Services
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/pill.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={24} height={24}></Image>
                    </div>
                    Medication Management
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} flex items-center tracking-wider text-[22px] text-[#025176]`}>
                    <div className="min-w-[20px] min-h-[20px] inline-block mr-3">
                      <Image src="/svg/brain.svg" alt="Group Photo" className="object-cover bg-cover bg-no-repeat" priority width={28} height={28}></Image>
                    </div>
                    Memory Care
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* 
        <div className="flex justify-center w-full px-10 pb-4">
          <div className="flex flex-col w-full max-w-[1040px]">
            <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-8">
              <div className="w-full rounded-2xl min-h-[200px] border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} tracking-wider text-[22px] text-[#025176]`}>
                    &quot;The transition to assisted living was challenging for our family, but the staff at
                    made it so much easier for us. They took the time to understand my mother&apos;s needs and helped her adjust to her new home with patience and kindness.&quot;
                  </div>
                  <br />
                  <Image src="/img/avatar_02.png" alt="Group Photo" className="h-[100px] lg:h-full index-0 object-cover bg-cover bg-no-repeat pb-4" priority width={75} height={75}></Image>
                  <div className="text-[16px]">
                    <span className="">Jane Smith</span>
                    <br />
                    <span className="italic">Oakland, CA</span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl min-h-[200px] bg-[#025176] text-white overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} tracking-wider text-[22px]`}>
                    &quot;The transition to assisted living was challenging for our family, but the staff at
                    made it so much easier for us. They took the time to understand my mother&apos;s needs and helped her adjust to her new home with patience and kindness.&quot;
                  </div>
                  <br />
                  <Image src="/img/avatar_02.png" alt="Group Photo" className="h-[100px] lg:h-full index-0 object-cover bg-cover bg-no-repeat pb-4" priority width={75} height={75}></Image>
                  <div className="text-[16px]">
                    <span className="">Jane Smith</span>
                    <br />
                    <span className="italic">San Leandro, CA</span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-2xl min-h-[200px] border border-[#0089c8] overflow-hidden">
                <div className={`p-5`}>
                  <div className={`${bebas.className} tracking-wider text-[22px] text-[#025176]`}>
                    &quot;The transition to assisted living was challenging for our family, but the staff at
                    made it so much easier for us. They took the time to understand my mother&apos;s needs and helped her adjust to her new home with patience and kindness.&quot;
                  </div>
                  <br />
                  <Image src="/img/avatar_02.png" alt="Group Photo" className="h-[100px] lg:h-full index-0 object-cover bg-cover bg-no-repeat pb-4" priority width={75} height={75}></Image>
                  <div className="text-[16px]">
                    <span className="">Jane Smith</span>
                    <br />
                    <span className="italic">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="flex justify-center w-full p-5 pt-0 px-10 mt-0 py-10">
          <div className="flex flex-col w-full max-w-[1040px]">
            <div className="relative z-[-1] mt-10 ">
              <Image src="/img/landscape_02.jpg" alt="Group Photo" className="rounded-xl h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
              <div className="flex items-center justify-center absolute bottom-0 text-[40px] font-['Georgia'] italic bg-black bg-opacity-60 text-center text-white w-full p-5 mb-10">
                Excellence in Every Moment of Care
              </div>
            </div>
          </div>
        </div> */}

      </div>

      <Footer></Footer>
    </main >
  );
}
