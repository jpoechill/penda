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
    <main className="bg-[#fdf8ff]">
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[100px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center mt-[16px] w-full pb-2">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px]`}>
              Who We Are
            </div>
          </div>

          <div className="w-full mb-10 max-w-[1040px] overflow-hidden">
            <Image src="/img/about_04.png" alt="Group Photo" className="rounded-2xl h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1040px]">

            <div className="w-full">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                About Us
              </div>

              Located in Maricopa, Arizona, we are a small private home dedicated to providing personalized care in a warm and welcoming environment. With over 10 years of experience, our compassionate caregivers specialize in delivering professional support tailored to meet the unique needs of each resident.
              <br /><br />
              We focus on offering specialized care services for seniors, empowering them to actively plan and manage their own long-term care, ensuring a comfortable and fulfilling living experience.
              {/* Located in Maricopa, Arizona, we are a small private home dedicated to providing personalized care in a warm and welcoming environment.
              <br /><br />
              With over 10 years of experience, our compassionate caregivers are committed to delivering professional support tailored to meet the unique needs of each resident.
              <br /><br /> */}
              {/* We prioritize comfort and safety, ensuring that everyone feels at home while receiving the highest quality of care. */}
            </div>


            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Story
              </div>
              Penda Home Care began as a response to the lack of personal connection often seen in large care facilities. The founders, driven by their own experiences with elderly loved ones, wanted to create a more intimate and nurturing environment.
              <br /><br />
              They envisioned a home where seniors wouldn&apos;t just be cared for physically but where their emotional well-being and personal preferences were prioritized.
              With a commitment to personalized care, Penda Home Care set out to redefine elder care.

              {/* What makes Penda unique is its focus on empowering seniors to take an active role in planning their own long-term care. The team believes that every resident deserves to feel valued and understood. By offering specialized services and fostering a warm, supportive atmosphere, Penda Home Care provides a place where seniors can live with dignity, comfort, and independence. */}


            </div>

            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Difference
              </div>
              What sets us apart is our unwavering commitment to personalized care and community connection. In our small private home, every resident is treated like family, and we take the time to understand their individual needs and preferences.
              <br /><br />
              We prioritize comfort and engagement, offering tailored activities that promote physical and emotional well-being. Our holistic approach ensures that each resident receives the attention and care they deserve, making every day meaningful.
            </div>


            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Values
              </div>
              At the heart of our community lies a commitment to compassion, respect, and excellence. We believe in treating every resident with dignity and fostering an environment where they feel valued and empowered.
              <br /><br />
              We are dedicated to creating a safe, inclusive atmosphere that promotes independence while enhancing the quality of life for all.
              Together, we strive to build a nurturing community where everyone can thrive.
            </div>


          </div>

        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
