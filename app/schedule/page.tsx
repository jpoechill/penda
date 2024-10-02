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
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px]`}>
              Arrange a visit
            </div>
          </div>

          <div className="w-full max-w-[1040px] pb-10">
            Experience the warm and welcoming environment at Penda Assisted Living firsthand. We invite you to schedule a tour of our community, where you can see our top-notch amenities, meet our compassionate staff, and get a feel for what life is like with us.
          </div>

          <div className="w-full max-w-[1040px] mt-0 bg-[#F5F5F5] p-10 rounded-2xl mb-0">

            <div className="flex flex-col font-bold md:flex-row gap-5 ">
              <div className="w-full">
                Name<span className="text-[#025176]">*</span> <br />
                <input type="text" name="full_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
              </div>
              <div className="w-full">
                Email/Phone<span className="text-[#025176]">*</span> <br />
                <input type="text" name="email" className="px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
              </div>
            </div>

            <span className="font-bold">
              What is your availability?
            </span>
            <input type="text" name="location" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="An address to your location or property..." />
            <br /><br />


            <span className="font-bold">
              How did you hear about us?
            </span>
            <input type="text" name="location" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="An address to your location or property..." />
            <br /><br />

            <div className={`${bebas.className} mt-2 flex flex-row text-[20px] items-center justify-center tracking-wider bg-[#016FA2] shadow-xl text-lg rounded-full text-white py-2 px-5 ml-1`}>
              Let&apos;s Connect!
            </div>

          </div>



        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
