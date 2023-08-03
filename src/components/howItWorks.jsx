import Footer from "./common/footer";
import Navbar from "./common/navbar";
import never from "../assets/drugs.png";
import shortly from "../assets/man-on-bike.png";
import { Link } from "react-router-dom";

import TheraSwiftPlus from "../assets/TheraSwiftPlus.svg";

const HowItWorks = () => {
  return (
    <>
      <Navbar />

      <header>
        <section className="w-[100%] h-[100vh] text-white text-center flex bg-[url('/src/assets/how-it-work-background-image.jpg')] bg-cover bg-no-repeat items-center flex-col justify-center">
          <h3 className="font-poppins font-[600] xl:text-[24px] text-sm lg:text-[1.1em] tracking-[0.82em]">
            HOW IT WORKS
          </h3>
          <h1 className="font-poppins font-[700] xl:text-[50px] text-[2em] lg:text-[2.1em] mb-5 ">
            The mobile pharmacy
          </h1>
          <p className=" font-sans xl:text-[24px] md:text-[.9em] lg:text-[1.05em]">
            Theraswift <span className="text-[#26EF77]">Rx</span> is always free
            we deliver your medications whenever you need it
          </p>
        </section>
      </header>

      <main>
        <div className="font-poppins pt-5">
          <div className="container mx-auto text-center mb-[120px]">
            <h3 className="xl:text-[30px] md:text-[1em] lg:text-[1.25em] font-[700] xl:mt-[56px] md:mt-[3em] lg:mb-[84px] mb-5">
              When your doctor asks “What’s your pharmacy”? just say,
              “Theraswift <span className="text-[#26EF77]">Rx</span>’’
            </h3>
            <h3 className="xl:text-[30px] md:text-[1em] lg:text-[1.25em] font-[700] md:mt-[3em]">
              Send us your new prescription or refill
            </h3>
          </div>

          <section className="w-full py-[70px] lg:px-[150px] px-5">
            <div className="container mx-auto">
              <div className="flex lg:flex-row flex-col justify-between lg:gap-14 items-center relative mb-[100px]">
                <div className="relative lg:w-[49%] font-sans mb-10 lg:mb-0">
                  <div className="relative flex items-center justify-center lg:w-[550px] lg:h-[450px] w-[255px] h-[155px] px-5 bg-white shadow-[5px_5px_10px_rgba(38,239,119,1)]">
                    <img
                      src={TheraSwiftPlus}
                      alt="theraswift"
                      className="absolute z-10 top-[-5rem;] lg:left-[-4rem] h-[56px] w-[56px] lg:w-[200px] lg:h-[200px]"
                    />
                    <div className="max-w-[350px] h-auto mx-auto">
                      <h1 className="lg:text-[36px] font-[700]">
                        When your doctor asks “What’s your pharmacy”? just say,
                        “Theraswift <span className="text-[#26EF77]">Rx</span>’’
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="font-sans lg:w-[49%]">
                  <div className="text-center lg:text-left">
                    <h2 className="text-[#26EF77] lg:text-[30px] font-[700] uppercase mb-[20px]">
                      Send a new prescription
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      click on order a refill or provide us with the information
                      about the medication you are using, we will coordinate
                      your med with your doctor and HMO or pay Through our med
                      wallet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row gap-14 items-center relative mb-[100px]">
                <div className="font-sans lg:w-[50%] text-center lg:text-left">
                  <div className="mb-10">
                    <h2 className="text-[#40B36E] hidden lg:block text-[30px] font-[700] mb-[20px] uppercase">
                      Order a refill
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      click on order a refill or provide us with the information
                      about the medication you are using, we will coordinate
                      your med with your doctor and HMO or pay Through our med
                      wallet.
                    </p>
                  </div>
                  <div className="">
                    <h2 className="text-[#40B36E] lg:text-[30px] font-[700] uppercase mb-[20px]">
                      NEVER WORRY ABOUT A REFILL
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      We’ll manage it for you, we’ll coordinate your refill with
                      your HMO to save your time and hassle.
                    </p>
                  </div>
                </div>

                <div className="relative lg:w-[50%] font-sans">
                  <h2 className="text-[#40B36E] lg:hidden text-base text-center font-[700] mb-[20px] uppercase">
                    Order a refill
                  </h2>
                  <div className="relative flex items-center justify-center">
                    <img src={never} className="" alt="drugs" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:gap-14 gap-5 items-center relative">
                <div className="relative lg:w-[50%] font-sans">
                  <h2 className="text-[#26EF77] text-center mb-5 lg:text-[30px] font-[700] uppercase lg:hidden">
                    WE'LL BE THERE SHORTLY
                  </h2>
                  <img src={shortly} className="" alt="man on bike" />
                </div>

                <div className="font-sans lg:w-[50%] text-center lg:text-left ">
                  <div>
                    <h2 className="text-[#26EF77] text-[30px] font-[700] uppercase hidden lg:block">
                      WE'LL BE THERE SHORTLY
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      We'll text you to arrange your free delivery whenever and
                      wherever you need it once we have your prescription.
                      Simply have someone accept and sign for your medication
                      when it comes – a friend, a doorman, a coworker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-[70px] lg:px-[100px] px-5 mb-[70px]">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-14 relative text-center lg:text-left">
                <div className="relative lg:w-[50%] font-sans">
                  <div className="lg:mb-10 mb-5">
                    <h2 className="text-[#40B36E] lg:text-[30px] font-[700] mb-[20px]">
                      Order a refile
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      Order a refill Tell us the medication you are taking
                    </p>
                  </div>
                  <div className="">
                    <Link to="/check-if-we-deliver">
                      <button className="bg-[#1A4942] lg:rounded-[50px] rounded lg:text-lg font-[700] text-white lg:px-7 px-10 lg:py-3 py-2">
                        Order now
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="font-sans lg:w-[50%]">
                  <div>
                    <h2 className="text-[#40B36E] lg:text-[30px] font-[700] mb-[20px]">
                      Need more information? <br /> How can we help?
                    </h2>
                    <p className="lg:text-[22px] font-[400]">
                      see more questions <br /> <br />
                      call or text us at{" "}
                      <Link to="tel:09065783958">09065783958</Link> <br />{" "}
                      <br /> Did your doctor already send us a prescription?{" "}
                      <br /> <br />
                      We receive your prescription and follow up within an hour,
                      but if you haven’t heard from us just call or send us a
                      text — <Link to="tel:09065783958">09065783958</Link>.
                      We’re always here to help.
                    </p>
                    <p className="lg:text-[22px] font-[400] mt-[20px] text-gray-600">
                      Did your doctor already send us a prescription?.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HowItWorks;
