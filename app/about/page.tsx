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
        <div className="flex flex-col mt-[116px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center w-full pb-2">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px]`}>
              Who We Are
            </div>
          </div>

          <div className="w-full mb-10 max-w-[1040px] overflow-hidden">
            <Image src="/img/about_04.jpg" alt="Group Photo" className="rounded-2xl h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1040px]">

            <div className="w-full">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                About Us
              </div>
              Located in Maricopa, Arizona, we are a small private home dedicated to providing personalized care in a warm and welcoming environment.
              <br /><br />
              With over 10 years of experience, our compassionate caregivers are committed to delivering professional support tailored to meet the unique needs of each resident.
              <br /><br />
              {/* We prioritize comfort and safety, ensuring that everyone feels at home while receiving the highest quality of care. */}
            </div>


            <div className="w-full max-w-[1040px]">
              <div className={`${bebas.className} text-[#025176] tracking-wider text-[22px] mb-5`}>
                Our Story
              </div>
              In addition, we offer specialized amenities such as a fitness center, therapy rooms, and a wellness program to support the physical health of our residents.
              <br /><br />
              Whether enjoying a quiet moment in our gardens or participating in group activities, Penda Assisted Living is designed to enrich daily life, allowing residents to thrive in a nurturing and secure environment.
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
              We are dedicated to creating a safe, inclusive atmosphere that promotes independence while enhancing the quality of life for all. Together, we strive to build a nurturing community where everyone can thrive.
            </div>


          </div>

        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
