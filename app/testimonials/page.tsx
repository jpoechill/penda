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
    <main className="bg-[#fffff5]">
      <Header></Header>

      <div className="animate-[fade-me-in_.5s_ease-in-out]">
        <div className="flex flex-col mt-[100px] justify-center items-center w-full pt-0 p-5 px-10 my-5">
          <div className="text-center w-full max-w-[1040px] mt-[16px] mb-4">
            <div className={`${bebas.className} text-[#025176] tracking-wider text-[24px] mb-2`}>
              What Customers are Saying
            </div>
            {/* <div className="w-full mb-5 max-w-[1040px] overflow-hidden">
              <Image src="/img/landscape.jpg" alt="Group Photo" className="rounded-2xl h-[300px] lg:h-full w-full index-0 object-cover bg-cover bg-no-repeat" priority width={1200} height={500}></Image>
            </div> */}

            {/* <div className="pt-4 text-left">
              At Penda Assisted Living, we are committed to providing compassionate, personalized care for every resident. Whether you&apos;re seeking more information about our services, scheduling a tour, or have any questions, we are here to help.
            </div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1040px] gap-6">
            <div className="grid auto-rows-min gap-6 justify-start">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                The team at Penda Assisted Living has been a blessing for our family. My mom is so happy and well-cared for. The staff is attentive, compassionate, and always go the extra mile to make sure she&apos;s comfortable. It&apos;s such a relief knowing she&apos;s in great hands.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Sarah M.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Phoenix, AZ
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                After searching for the right place for my father, we found Penda Assisted Living, and it&apos;s been incredible. The staff truly care, and my dad feels at home here. We couldn’t be more grateful.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      John D.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Maricopa, AZ
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                We couldn&apos;t have asked for better care. The personalized attention and friendly environment make all the difference. The staff really treat the residents like family, and that means everything to us.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Emily R.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Phoenix, AZ
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                Penda Assisted Living has been a lifesaver for our family. My dad receives excellent care, and the staff always go above and beyond. He&apos;s more engaged and happier than ever before. The personal attention he gets makes all the difference!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Emily R.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Maricopa, AZ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                Moving my mother into an assisted living facility was one of the hardest decisions I&apos;ve ever had to make, but the staff at Penda Assisted Living made the process so much easier. From the moment we stepped in for a tour, we were welcomed with warmth and professionalism. The caregivers take the time to get to know each resident, and they&apos;ve created such a positive, home-like atmosphere. My mother has thrived here — she&apos;s made friends, participates in activities, and her overall well-being has improved dramatically. Knowing she&apos;s in such caring hands has given our family peace of mind, and I&apos;m so grateful to Penda for everything they&apos;ve done.
                <br /><br />
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-04.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      José P.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Tucson, AZ
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                We visited several places before choosing Penda Assisted Living for my father, and it was the best decision we could have made. What sets them apart is the genuine compassion of the staff and their dedication to each resident&apos;s unique needs. My father is treated with dignity and respect, and the team has been amazing in providing personalized care, whether it&apos;s help with his medications or just sitting with him to chat. He&apos;s more active and engaged than he&apos;s been in years, and we&apos;ve seen such a positive change in his mood and health. I can&apos;t recommend Penda enough. They have made a huge difference in our family&apos;s life.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-07.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Arthur O.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Scottsdale, AZ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                After searching for months, we finally found Penda Assisted Living for my aunt, and it has exceeded all our expectations. The facility itself is clean, comfortable, and feels like home, but it&apos;s the staff who really make the difference. They are always so kind and attentive, and they treat my aunt like she&apos;s part of their own family. She&apos;s receiving top-notch care, from daily assistance to managing her health needs, and she&apos;s so much happier than she was before. The peace of mind that comes from knowing she&apos;s in such capable, loving hands is priceless. I highly recommend Penda to anyone looking for the best care for their loved one.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-06.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Alicia A.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Maricopa, AZ
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                Our experience with Penda Assisted Living has been nothing short of amazing. From day one, the staff have shown so much care and attention to my husband&apos;s well-being. He requires daily assistance, and the caregivers not only provide that but also go above and beyond to make sure he feels valued and involved in the community. The activities they offer keep him mentally and socially engaged, and I&apos;ve seen his confidence grow since moving here. Penda truly feels like a second family to us, and I can&apos;t thank them enough for the kindness they&apos;ve shown to my husband.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-05.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Jennifer B.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Phoenix, AZ
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-base p-7 text-left">
                Polene and the crew at Maid for Me are the real MVPs of house cleaning in the Bay Area! No joke, they tackled our deep cleaning like pros, leaving no dust bunny untouched. If you want your place to shine brighter than the Golden Gate Bridge, Maid for Me is the only way to go!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-08.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Michael X.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, AZ
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1040px]">
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
          </div> */}

        </div>

      </div>

      <Footer></Footer>
    </main >
  );
}
