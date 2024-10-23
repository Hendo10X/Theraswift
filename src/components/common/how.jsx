import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Heart } from 'lucide-react';
import man from "../../assets/man.png";
import Plus from "../../assets/plus.svg";
import Equal from "../../assets/equal.png";
import Hearts from "../../assets/heart.png";
import medsDeliveryImage from '../../assets/medsDelivery.png';
import supportImage from '../../assets/Support.png';
import manageCareImage from '../../assets/manageCare.png';

const How = () => {
  return (
    <>
      <div className="w-full border-t-[3px] border-[#00000026] py-10 lg:py-[80px] px-5 lg:px-[80px]">
        <div className="container mx-auto">
          <h1 className="text-[24px] lg:text-[36px] text-center font-semibold mb-10">
            Experience a simple and <span className="text-[#40B36E]">affordable healthcare</span>
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-10 py-10 lg:py-[70px]">
            {[
              { img: medsDeliveryImage, alt: "Meds Delivery", title: "Free same day meds delivery within two hours" },
              { img: supportImage, alt: "Support", title: "Expert support 24/7 by chat, text or video" },
              { img: manageCareImage, alt: "Manage Care", title: "Manage your care from your phone" },
            ].map((item, index) => (
              <div key={index} className="text-center mb-10 lg:mb-0">
                <img src={item.img} alt={item.alt} className="mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-t-[3px] border-[#00000026] py-10 lg:py-[80px] px-5 lg:px-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <h1 className="text-[34px] lg:text-[36px] text-center lg:text-left font-semibold mb-6 lg:mb-0">
              How Theraswift <span className="text-[#40B36E]">Works</span>
            </h1>
            <button className="text-sm font-semibold px-4 py-2 bg-white rounded-full hover:bg-green-500 hover:text-white">
              Learn More
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-10 py-10 lg:py-[70px]">
            {[
              { Icon: ArrowRight, title: "Sign up for Theraswift", description: "Find your meds or Chose what you want to treat" },
              { Icon: Clock, title: "Schedule your free same day delivery", description: "We deliver your medications to you No HMO/Insurance is needed." },
              { Icon: Heart, title: "Manage your care", description: "We will coordinate with your doctor and text you when its time to refill" },
            ].map((item, index) => (
              <div key={index} className="text-center mb-10 lg:mb-0">
                <item.Icon size={88} className="text-[#40B36E] mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-10 lg:py-[90px] px-5 lg:px-[90px]">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-[35px] font-semibold leading-normal mb-8 text-center lg:text-left">
            Theraswift is <span className="text-[#40B36E]">free!</span>
            <br />
            You only pay for your meds.
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-28 mt-6 lg:mt-12">
            <div className="text-center mb-4 lg:mb-0">
              <p className="text-xl lg:text-[20px] font-medium">Free same-day delivery</p>
            </div>
            <div className="shrink-0 mb-4 lg:mb-0">
              <img src={Plus} alt="Plus Icon" className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <p className="text-xl lg:text-[20px] font-medium">
                Expert support <br /> Seven days a week
              </p>
            </div>
            <div className="shrink-0 mb-4 lg:mb-0">
              <img src={Equal} alt="Equal Icon" className="w-10 h-10 lg:w-[40px] lg:h-[40px]" />
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <p className="text-xl lg:text-[20px] font-medium">
                An extraordinary care <br /> At no extra cost
              </p>
            </div>
            <div className="shrink-0">
              <img src={Hearts} alt="Hearts Icon" className="w-20 h-20 lg:w-[50px] lg:h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;