import React from "react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Manufacturer1 from "../assets/manufacturer.png"
import Manufacturer2 from "../assets/labman.png"


function Manufacturer() {
    return (
        <div>
            <Navbar />
            <div className=" font-poppins container mx-auto items-center my-[100px] ">
                <div className="flex justify-center ">
                    <h1 className=" flex font-semibold text-[12px] md:text-[48px] ">For manufacturers</h1>
                </div>
                <div className=" flex flex-col-reverse  md:flex-row mt-5 md:mt-[100px] md:gap-[100px]">
                    <div className=" mt-8 w-[327px] md:w-[790px] mr-auto ml-auto  md:ml-[80px] ">
                        <p className=" font-normal font-poppins font-body text-[10px] text-start md:leading-[43px] leading-3  md:text-[24px] md:pt-[200px] ">Theraswift solution for market access removes obstacles for patients to begin and continue their treatment. They experience the advantages of clear low costs, complimentary delivery to their home, and exceptional assistance.
                            <br />
                            <p className="pt-[30px] md:pt-[100px]">Lets impact lives together</p>
                        </p>
                        <div className=" pt-14 md:pt-[150px] flex justify-center items-center">
                            <a href='/about-us' className=" bg-[#1A4942]  md:px-[50px] px-[70px] py-[12px] md:py-[25px] rounded-[5px] md:rounded-[30px] "><p className=" text-white font-semibold text-[12px] md:text-[20px]">Contact Us</p></a>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center  ">
                        <img
                            src={Manufacturer2}
                            className=" sm: md:hidden w-[330px] ml-auto mr-auto "
                        />
                        <img
                            src={Manufacturer1}
                            className="  md:mr-[200px] w-[330px] hidden sm:hidden md:block h-[258px] md:h-[1045px]  md:w-[670px] "
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

};

export default Manufacturer;