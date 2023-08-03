import Footer from "./common/footer";
import Navbar from "./common/navbar";

import career1 from "../assets/career-1.svg";
import photo3 from "../assets/photo3.png";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";

import { FaBriefcase, FaHeart, FaUsers } from "react-icons/fa";
import { Icon, Link } from "@chakra-ui/react";

const Card = ({ icon, title, path }) => {
  return (
    <Link style={{ textDecoration: "none" }} href={path}>
      <div className="flex flex-col items-center">
        <Icon as={icon} color="green.500" fontSize={"4rem"} />
        <h3 className="text-[30px] font-medium mt-4">{title}</h3>
      </div>
    </Link>
  );
};

const Career = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="w-full pb-[70px] pt-[120px] px-[20px] xl:px-[120px] sm:px-[60px] md:px-[40px] relative">
          <div className="container mx-auto">
            <div className="md:flex md:flex-row md:justify-between sm:flex-col gap-6">
              <div className="w-full md:w-[50%] md:mb-0 sm:w-[100%] sm:mb-12 mb-12">
                <h1 className="font-bold text-2xl lg:text-4xl xl:text-5xl sm:text-3xl text-gray-900 mb-8 leading-[1.1]">
                  We are reshaping the Pharmacy Experience: Next-Generation
                  Solutions for Efficiency and Personalized Care
                </h1>
                <p className="text-md md:text-lg sm:text-lg text-gray-600 leading-[1.5]">
                  Our mission is to rebuild the pharmacy by providing innovative
                  solutions that enhances customer experience, promote efficient
                  and accurate prescription processing, and ensure personalized
                  care for patient. Through cutting-edge technology, exceptional
                  customer service and commitment to patient well-being, we
                  strive to exceed expectations and become the premier
                  destination for all health needs.
                </p>
              </div>
              <div className="w-full md:w-[50%] sm:w-[100%]">
                <div className="flex md:justify-end sm:justify-center">
                  <div className="relative max-w-[370px] mx-auto lg:w-[455px] rounded-t-3xl rounded-r-3xl rounded-b-3xl rounded-l-3xl before:w-full before:absolute before:bg-[#339900] before:right-0 sm:before:right-[-20px] before:bottom-0 before:top-5 before:-z-10 before:rounded-t-3xl before:rounded-r-3xl before:rounded-b-3xl before:rounded-l-3xl">
                    <img
                      src={career1}
                      alt=""
                      className="w-full] h-full relative rounded-l-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pt-[70px] pb-[20px] px-[20px] xl:px-[120px] sm:px-[60px] border-t-[2px]">
          <div className="container mx-auto">
            <div className="flex justify-around pt-5 pb-20">
              <Card icon={FaBriefcase} title="Career" path="#career" />
              <Card icon={FaHeart} path="#value" title="Value" />
              <Card icon={FaUsers} path="#our-team" title="Our Team" />
            </div>

            <div className="">
              <div className="flex justify-center mb-6">
                <h3 className="text-center text-md sm:text-2xl sm:text-center text-gray-900 font-bold">
                  Join us in Building the Future of Healthcare: Innovating for
                  Better Patient Outcomes
                </h3>
              </div>
              <div className="max-w-[850px] mx-auto mb-20">
                <p className="text-center text-md sm:text-lg text-gray-600 leading-[1.5]">
                  At our core, we are a dynamic and curious team that never
                  stops learning, constantly pushing the boundaries of
                  innovation to enhance the lives of our customers. We are
                  driven by a shared passion for the future of healthcare and
                  strive to create a collaborative environment where ideas can
                  thrive. Join us in our mission to revolutionize the industry
                  and make a meaningful impact on patient outcomes.
                </p>
              </div>
            </div>
            <div id="career">
              <div className="sm:flex sm:justify-center flex-wrap">
                <div className="sm:w-[45%] md:w-[30%] sm:mr-6 xl:mr-8 mb-8 text-center bg-[#F2F2F2] py-[2rem] px-[2rem] shadow-lg">
                  <h3 className="text-lg text-gray-900 font-bold">
                    Pharmacy Operation
                  </h3>
                  <span className="block text-md text-gray-600 my-2 italic">
                    0 position
                  </span>
                  <p className="text-md text-gray-900 font-bold">Remote</p>
                </div>
                <div className="sm:w-[45%] md:w-[30%] sm:mr-6 xl:mr-8 mb-8 text-center bg-[#F2F2F2] py-[2rem] px-[2rem] shadow-lg">
                  <h3 className="text-lg text-gray-900 font-bold">Logistics</h3>
                  <span className="block text-md text-gray-600 my-3 italic">
                    0 position
                  </span>
                  <p className="text-md text-gray-900 font-bold">Surulere</p>
                </div>
                <div className="sm:w-[45%] md:w-[30%] sm:mr-6 xl:mr-8 mb-8 text-center bg-[#F2F2F2] py-[2rem] px-[3rem] shadow-lg">
                  <h3 className="text-lg text-gray-900 font-bold">
                    Engineering
                  </h3>
                  <span className="block text-md text-gray-600 my-2 italic">
                    0 position
                  </span>
                  <p className="text-md text-gray-900 font-bold">Remote</p>
                </div>
                <div className="sm:w-[45%] md:w-[30%] sm:mr-6 xl:mr-8 mb-8 flex-col text-center bg-[#F2F2F2] py-[2rem] px-[3rem] shadow-lg">
                  <h3 className="text-lg text-gray-900 font-bold">IT</h3>
                  <span className="block text-md text-gray-600 my-2 italic">
                    0 position
                  </span>
                  <p className="tex7t-md text-gray-900 font-bold">Remote</p>
                </div>
                <div className="sm:w-[45%] md:w-[30%] sm:mr-6 xl:mr-8 mb-8 flex-col text-center bg-[#F2F2F2] py-[2rem] px-[3rem] shadow-lg">
                  <h3 className="text-lg text-gray-900 font-bold">Cooperate</h3>
                  <span className="block text-md text-gray-600 my-2 italic">
                    0 position
                  </span>
                  <p className="text-md text-gray-900 font-bold">
                    Surulere Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="value"
          className="w-full py-[70px] px-[20px] xl:px-[110px] sm:px-[40px] border-t-[2px]"
        >
          <div className="container mx-auto">
            <div className="flex justify-center font-bold mb-12">
              <div className="text-lg text-center text-gray-900 sm:text-2xl">
                Our first principles drive our mission and impact in healthcare.
              </div>
            </div>
            <div>
              <div className="md:flex md:flex-row sm:flex-col justify-between gap-10 md:gap-6 lg:gap-10 mx-auto">
                <div className="text-center basis-1/3">
                  <h2 className="text-[20px] sm:text-2xl text-gray-900 font-semibold mb-4">
                    Patient First
                  </h2>
                  <p className="text-md sm:text-lg text-gray-600 leading-[1.5]">
                    We would always act in the best interest of patients, be
                    empathetic and attentive to their concerns, and constantly
                    seek to improve their health outcomes through innovative and
                    effective treatments.
                  </p>
                </div>

                <div className="text-center basis-1/3 mt-10 md:mt-0">
                  <h2 className="text-[20px] sm:text-2xl text-gray-900 font-semibold mb-4">
                    Innovation
                  </h2>
                  <p className="text-md sm:text-lg text-gray-600 leading-[1.5]">
                    We constantly seek new and better ways to deliver healthcare
                    solutions. Whether through advanced technologies or
                    groundbreaking research,We would always strive to stay ahead
                    of the curve and provide patients with the most effective
                    treatments available.
                  </p>
                </div>

                <div className="text-center basis-1/3 mt-10 md:mt-0">
                  <h2 className="text-[20px] sm:text-2xl text-gray-900 font-semibold mb-4">
                    Integrity
                  </h2>
                  <p className="text-md sm:text-lg text-gray-600 leading-[1.5]">
                    We operates with honesty, transparency, and ethical
                    principles in all of its interactions. From its
                    relationships with patients and healthcare providers to its
                    business practices and partnerships, we would always uphold
                    the highest standards of integrity and trustworthiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-team"
          className="w-full py-[70px] px-[20px] xl:px-[110px] sm:px-[40px] border-t-[2px]"
        >
          <div className="container mx-auto">
            <div className="bg-white">
              <div className="max-w2xl text-center">
                <h2 className="text-lg sm:text-3xl font-bold tracking-tight text-gray-900">
                  Meet the driving force behind our innovation and success
                </h2>
                <p className="mt-6 text-md sm:text-lg leading-8 text-gray-600 max-w-xl mx-auto">
                  We’re a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div>

              <div className="mt-16">
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-16 sm:grid-cols-2 xl:col-span-3"
                >
                  <li>
                    <div>
                      <img
                        src={one}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Abdullahi Alabi
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Founder / CTO
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Pharmacist
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={photo3}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Magaret Dickson
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Chief Pharmacist
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Pharmacist
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={five}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Dr. Hazeeb Ibrahim{" "}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Chief Operating Officer
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Pharmacist
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={two}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Adele Lambo{" "}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Head of Business Development
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Microbiologist
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={three}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Nwani Somtochi Prosper
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Chief Marketing Officer
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Pharmacist
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={four}
                        alt=""
                        className="h-40 w-40 rounded-full mb-7 mx-auto object-cover object-center"
                      />
                      <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Aramide Ramadan{" "}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-[#339900]">
                          Backend Engineer
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          Intern
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;
