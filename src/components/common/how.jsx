import arrow from "../../assets/Arrow.svg";
import note from "../../assets/note.svg";
import chat from "../../assets/chat.svg";
import man from "../../assets/man.png";
import Plus from "../../assets/plus.png";
import Equal from "../../assets/equal.png";
import { Link } from "react-router-dom";

const How = () => {
  return (
    <>
      <div className="w-full border-t-[1px] border-[#00000026] py-[80px] lg:px-[90px] px-5 ">
        <div className="container mx-auto">
          <h1 className="lg:text-[50px] lg:leading-[75px] text-2xl font-poppins text-center font-semibold mb-[100px]">
            How is Theraswift <span className="text-[#40B36E]">Rx</span>{" "}
            different?
          </h1>
          <div className=" flex items-center justify-between flex-col lg:flex-row gap-10 lg:gap-5">
            <div className="w-[374px] h-[325px] px-5 py-10 flex flex-col items-center justify-center shadow-2xl ">
              <img src={arrow} className="w-20 lg:w-21" />
              <h1 className=" font-poppins font-semibold text-2xl ">
                LOWEST MEDS PRICE{" "}
              </h1>
              <p className=" text-[18px] font-body leading-[135%] text-center ">
                Same pills, same quality
                <br />
                lowest price on
                <br /> prescription drugs.
              </p>
            </div>

            <div className="w-[374px] h-[325px] px-5 py-10 flex flex-col items-center justify-center shadow-2xl ">
              <img src={note} className="w-20 lg:w-21" />
              <h1 className="font-semibold text-center text-2xl ">
                WORK WITH YOUR HMO
              </h1>
              <h1 className="font-sans text-[18px] text-center leading-[33px]">
                Theraswift works with or without HMO
              </h1>
            </div>

            <div className="w-[374px] h-[325px] px-5 py-10 flex flex-col items-center justify-center shadow-2xl ">
              <img src={chat} className="w-20 lg:w-21" />
              <h1 className=" text-2xl font-semibold text-center ">
                CHAT WITH A PHARMACIST
              </h1>
              <p className=" font-body font-normal text-center text-[18px] ">
                Worried about side effect? <br />
                something else? Chat with a pharmacist
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[3px] border-[#00000026] py-[80px] lg:px-[90px] px-5 ">
        <div className="container mx-auto">
          <h1 className="lg:text-[50px] text-2xl text-center font-semibold">
            How Theraswift <span className="text-[#40B36E]">Rx</span> Works{" "}
          </h1>
          <div className="flex justify-between gap-10 flex-col-reverse lg:flex-row lg:py-[100px] py-10">
            <div className="lg:w-[60%]">
              <h1 className="font-normal lg:text-2xl ">
                Skip the pharmacy trip, get your medications <br /> delivered to
                you.
              </h1>

              <div className="flex items-center mt-5 ">
                <div className="bg-[#1A4942] rounded-full lg:p-10 p-5 lg:w-[80px] lg:h-[80px] w-10 h-10 shadow-2xl mr-5 flex justify-center items-center">
                  <h1 className="font-poppins lg:text-[30px] font-semibold text-white">
                    1
                  </h1>
                </div>
                <div>
                  <h1 className="font-poppins lg:text-[24px] font-semibold">
                    Sign up for Theraswift{" "}
                    <span className="text-[#40B36E]">Rx</span>
                  </h1>

                  <p className="lg:text-[24px] font-normal font-body">
                    Order a refill or have your doctor send us a prescription
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-10 ">
                <div className="bg-[#1A4942] rounded-full lg:p-10 p-5 lg:w-[80px] lg:h-[80px] w-10 h-10 shadow-2xl mr-5 flex justify-center items-center">
                  <h1 className="font-poppins lg:text-[30px] font-semibold text-white">
                    2
                  </h1>
                </div>
                <div>
                  <h1 className="font-poppins lg:text-[24px] font-semibold">
                    Schedule your free same day delivery
                  </h1>

                  <p className="lg:text-[24px] font-normal font-body">
                    We accept your HMO and deliver your <br />
                    medications to you
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-10 ">
                <div className="bg-[#1A4942] rounded-full lg:p-10 p-5 lg:w-[80px] lg:h-[80px] w-10 h-10 shadow-2xl mr-5 flex justify-center items-center">
                  <h1 className="font-poppins lg:text-[30px] font-semibold text-white">
                    3
                  </h1>
                </div>
                <div>
                  <h1 className="font-poppins lg:text-[24px] font-semibold">
                    We manage your refill
                  </h1>

                  <p className="lg:text-[24px] font-normal font-body">
                    We will coordinate with your doctor and text you when it is
                    time to refill
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] flex justify-end">
              <img src={man} className="lg:w-[455px]" />
            </div>
          </div>

          <div className="flex justify-center text-white">
            <Link to="/check-if-we-deliver">
              <button className="lg:text-[18px] font-semibold px-5 py-3 rounded capitalize mr-5 bg-[#1A4942]">
                Sign-Up
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="lg:text-[18px] font-semibold px-5 py-3 capitalize rounded bg-[#1A4942]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[3px] border-[#00000026] py-[80px] lg:px-[90px] px-5 ">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-semibold lg:text-[35px] lg:leading-[65px] text-2xl">
              Theraswift <span className="text-[#40B36E]">Rx</span> is free, you
              or your HMO pays for your medication.
            </h1>
          </div>
          <div className="w-full gap-10 flex lg:flex-row flex-col items-center justify-between">
            <div className="">
              <h1 className="leading-10 flex text-center lg:text-[30px] text-2xl">
                Lowest prescription price.
              </h1>
            </div>
            <div className="shrink-0">
              <img
                src={Plus}
                alt="Plus Sign"
                className="lg:h-[80px] lg:w-[80px] w-16 h-16"
              />
            </div>

            <div className="">
              <h1 className="leading-10 flex text-center lg:text-[30px] text-2xl">
                Free same day Delivery.
              </h1>
            </div>
            <div className="shrink-0">
              <img
                src={Equal}
                alt="Plus Sign"
                className="lg:h-[70px] lg:w-[70px] w-16 h-16"
              />
            </div>
            <div className="shrink-0">
              <h1 className="leading-10 flex text-center lg:text-[25px] text-2xl">
                The pharmacy you will love at <br /> no extra cost.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
