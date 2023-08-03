import { Link } from "react-router-dom";

import Navbar from "./common/navbar";
import Footer from "./common/footer";

import photo1 from "../assets/pharm1.png";
import photo2 from "../assets/photo2.svg";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

const About = () => {
  return (
    <>
      <Navbar />

      <div className=" lg::px-[90px] py-[90px] px-5">
        <h1 className="text-center md:text-[48px] md:mt-10 font-poppins tracking-[0.575em] font-bold">
          {" "}
          ABOUT US
        </h1>
        <div className="container mx-auto  ">
          <div className="flex gap-5 md:gap-[80px] items-center flex-col-reverse mt-4 md:flex-row md:py-[90px]">
            <section className="lg:w-[615px] ">
              <h1 className=" text-[#40B36E] capitalize md:text-[30px] md:block hidden font-poppins font-semibold mb-5">
                A new kind of care
              </h1>
              <p className=" font-body md:text-[18px]">
                At our pharmacy, we understand that you're not just another
                number in line. You're a unique individual with specific needs
                and concerns, and we're here to provide the care and support you
                deserve. Our friendly and compassionate team of pharmacists
                delivers prescriptions straight to your door, so you can focus
                on what matters most - your health and well-being. We take pride
                in building long-lasting relationships with our customers and we
                look forward to being a trusted partner in your healthcare
                journey for years to come
                <br />
                <br />
                with love,
                <br />
                <b>Theraswift Rx.</b>
              </p>
            </section>
            <div>
              <h1 className=" text-[#40B36E] capitalize md:text-[30px] sm:hiddden  md:hidden font-poppins font-semibold mb-5">
                A new kind of care
              </h1>
              <img src={photo1} className=" md:h-[350px] md:w-[600px]" />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:px-[90px] px-5 md:py-20 py-10">
        <div className="container mx-auto flex flex-col md:flex-col items-center ">
          <div className="lg:hidden">
            <h1 className="uppercase font-bold text-center  md:text-[32px] tracking-wider md:mb-20">
              Our philosphy
            </h1>
            <h1 className=" text-[#40B36E] capitalize md:text-[30px] font-poppins font-semibold mb-5">
              A New Era of Pharmacy: Prioritizing Care Above All Else
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-40">
            <div className=" ">
              <img src={photo2} className="md:w-[600px]" />
            </div>
            <div className="md:w-[615px]">
              <div className="hidden lg:block">
                <h1 className="uppercase font-bold text-center lg:text-left md:text-2xl tracking-wider">
                  Our philosphy
                </h1>
                <h1 className=" text-[#40B36E] capitalize md:text-[30px] font-poppins font-semibold mb-5">
                  A New Era of Pharmacy: Prioritizing Care Above All Else
                </h1>
              </div>

              <p className="font-body md:text-[18px] mb-5">
                We envision a world where pharmacies prioritize care above all
                else. We believe its not crazy, Its necessary. That's why we are
                leading the charge to completely rebuild the old pharmacy model.
                We believe that - patients, doctors and insurers alike- by
                providing the highest level of care and support. Join us in our
                mission to create a better, more compassionate health care
                system.
              </p>
              <div className="items-center flex flex-col">
                <Link to="https://medium.com/@help_18335" target="_blank">
                  <button className=" font-poppins text-[20px] items-center flex flex-row font-bold border border-black px-10 py-2">
                    visit our blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-[90px] px-5 md:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-40">
          <div className="md:w-[700px]">
            <div className="">
              <h1 className=" font-poppins font-bold hidden md:block text-[18px] uppercase">
                Our people
              </h1>
              <h1 className=" font-poppins text-[30px] hidden md:block font-bold text-[#40B36E] mb-10">
                Margie Cares Don't panic
              </h1>
            </div>

            <p className=" font-body font-normal  md:text-[18px] md:leading-[32px]">
              Meet Margaret, our Chief Pharmacist with over half a decade of
              experience in traditional pharmacies. She knows all too well the
              frustrations that patients face in the current system. But she and
              her team are eager to show you how a new approach to pharmacy can
              make things easier. With their expertise and passion for patient
              care, they're ready to transform the pharmacy experience and
              deliver the highest level of service to you
            </p>
          </div>

          <div className=" flex flex-col items-center">
            <div className="w-full lg:hidden ">
              <h1 className=" font-poppins font-bold text=[12px] md:text-[18px] uppercase mt-11 text-center mb-3">
                Our people
              </h1>
              <h1 className="text-left font-bold text-[#40B36E] mb-1">
                Margie Cares Don't panic
              </h1>
            </div>

            <img src={photo3} className="md:w-[600px] " />
          </div>
        </div>
      </div>

      <div className="md:px-[90px] px-5 mb-10 md:mb-20 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row mt-11 items-center md:gap-10 ">
          <div className="lg:w-[45%] ">
            <h1 className=" font-bold text-center lg:text-left mb-5 md:text-[18px] tracking-[0.225em] ">
              OUR PHARMACY
            </h1>
            <h1 className=" font-poppins text-start  block md:hidden md:text-[30px] font-bold text-[#40B36E] mb-1 ">
              Patient-centered pharmacy of the future: Collaborative,
              innovative, and empowering.
            </h1>
            <img src={photo4} className="" />
          </div>
          <div className="lg:w-[55%]">
            <h1 className=" font-bold hidden md:block md:text-[18px] md:tracking-[0.225em] ">
              OUR PHARMACY
            </h1>
            <h1 className=" font-poppins  md:text-[30px] hidden md:block  font-bold text-[#40B36E] mb-10 ">
              Patient-centered pharmacy of the future: Collaborative,
              innovative, and empowering.
            </h1>
            <p className="font-poppins font-normal md:w-[600px] md:text-[18px] ">
              Our pharmacy is here to make your life easier and healthier. With
              advanced technology and a dedicated team, we provide a seamless
              and stress-free experience that puts your health and happiness
              first. Our predictive inventory system ensures that you always
              have access to the medications and products you need, while our
              personalized approach and expert advice help you take control of
              your health. Trust us to be your partner in achieving your
              wellness goals and living your best life.
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-[90px] px-5 md:py-20 place-content-center ">
        <div className="container mx-auto flex flex-col items-center ">
          <div className="mb-10">
            <h1 className="font-poppins font-bold lg:text-[32px] text-2xl tracking-[0.39em] text-[#40B36E] text-center mt-[100px]">
              WHO WE ARE
            </h1>
            <h1 className=" font-poppins font-bold lg:text-[38px] leading-[51px] text-center">
              Theraswift <span className=" text-[#40B36E] "> Rx </span> is...
            </h1>
          </div>

          <div className=" flex flex-wrap w-full justify-between ">
            <div className=" lg:w-[500px] w-full shadow-2xl rounded py-10 md:py-20 px:5 md:px-10 mb-10">
              <h1 className=" font-poppins  text-2xl md:text-[30px] font-bold md:leading-[50px] text-center text-[#40B36E] mb-10">
                Quicker
              </h1>
              <h1 className=" font-body font-normal md:text-[20px] text-center md:leading-[32px] ">
                skip the pharmacy trip
                <br /> <br />
                we bring your medication to your door
              </h1>
            </div>

            <div className=" lg:w-[500px] w-full shadow-2xl rounded py-10 md:py-20 px:5 md:px-10 mb-10">
              <h1 className=" font-poppins text-2xl md:text-[30px] font-bold md:leading-[50px] text-center text-[#40B36E] mb-10">
                Smarter
              </h1>
              <h1 className=" font-body font-normal md:text-[20px] text-center md:leading-[32px] ">
                Never worry about refills <br /> <br />
                We monitor and manage your refills
              </h1>
            </div>

            <div className=" lg:w-[500px] w-full shadow-2xl rounded py-10 md:py-20 px:5 md:px-10 mb-10">
              <h1 className=" font-poppins text-2xl md:text-[30px] font-bold md:leading-[50px] text-center text-[#40B36E] mb-10">
                Simpler
              </h1>
              <h1 className=" font-body font-normal md:text-[20px] text-center md:leading-[32px] ">
                Never Speak to an insurance company again <br />
                <br />
                We work directly with your doctors and the <br />
                HMO to save you time and hassle.
              </h1>
            </div>

            <div className="  w-[250px] md:w-[500px] shadow-2xl rounded hidden md:block py-10 md:py-20 px:5 md:px-10 mb-10">
              <h1 className=" font-poppins  md:text-[30px] font-bold md:leading-[50px] text-center text-[#40B36E] mb-10">
                Kinder
              </h1>
              <h1 className=" font-body font-normal text-[10px] md:text-[20px] text-center md:leading-[32px] ">
                Never Chat or speak with a bot <br />
                <br />
                Text, call, email, or chat with your pharmacist whenever is
                convenient.
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex place-content-center mt-10 mb-[100px]">
          <Link to="/check-if-we-deliver">
            <button className="bg-[#40B36E] items-center font-poppins font-semibold text-[18px] leading-[49px] text-white px-10 py-2">
              Join Theraswift RX
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
