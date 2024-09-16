import man from "../../assets/man.png";
import Plus from "../../assets/plus.svg";
import Equal from "../../assets/equal.png";
import Hearts from "../../assets/heart.png";
import { Link } from "react-router-dom";
import medsDeliveryImage from '../../assets/medsDelivery.png';  // Add the path to your image
import supportImage from '../../assets/Support.png';  // Add the path to your image
import manageCareImage from '../../assets/manageCare.png';  // Add the path to your image
import { ArrowRight, Clock, Heart } from 'lucide-react';


const How = () => {
  return (
    <>
       {/* New Section */}
       <div className="w-full border-t-[3px] border-[#00000026] py-[80px] lg:px-[80px] px-5 ">
          <div className="container ">
            <h1 className="text-[24px] lg:text-[36px] text-center font-medium">
              Experience a simple and <span className="text-[#40B36E]">affordable healthcare</span>
            </h1>
            <div className="flex justify-between gap-10 flex-col-reverse lg:flex-row lg:py-[70px] py-10">
              <div className="text-center">
                <img src={medsDeliveryImage} alt="Meds Delivery" className="mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">Free same day meds delivery<br/>within two hours</h2>
              </div>
              <div className="text-center">
                <img src={supportImage} alt="Support" className="mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">Expert support 24/7 by chat, <br/> text or video</h2>
              </div>
              <div className="text-center">
                <img src={manageCareImage} alt="Manage Care" className="mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">Manage your care <br/>from your phone</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t-[3px] border-[#00000026] py-[80px] lg:px-[90px] px-5 ">
      <div className="container ">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[34px] lg:text-[36px] text-center font-medium">
            How Theraswift <span className="text-[#40B36E]">Works</span>
          </h1>
          <button className="text-sm font-semibold px-4 py-2 bg-white rounded-full hover:bg-green-500 hover:text-white">
            Learn More
          </button>
        </div>
        <div className="flex justify-between gap-10 lg:py-[70px] py-10">
          <div className="text-center">
            <ArrowRight size={88} className="text-[#40B36E] mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">Sign up for Theraswift</h2>
            <p className="text-gray-600">Find your meds or Chose what <br /> you want to treat</p>
          </div>
          <div className="text-center">
            <Clock size={88} className="text-[#40B36E] mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">Schedule your free same day delivery</h2>
            <p className="text-gray-600">We deliver your medications to you<br/>No HMO/Insurance is needed.</p>
          </div>
          <div className="text-center">
            <Heart size={88} className="text-[#40B36E] mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">Manage your care</h2>
            <p className="text-gray-600">We will coordinate with your doctor<br/>and text you when its time to refill</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full py-[90px] lg:px-[90px] px-10">
      <div className="container mx-auto text-left">
        <h1 className="lg:text-[35px] text-2xl font-semibold leading-normal">
          Theraswift is <span className="text-[#40B36E]">free!</span>
          <br />
          You only pay for your meds.
        </h1>
        <div className="flex justify-center items-center gap-28 lg:mt-12 mt-6">
          <div className="text-center">
            <p className="lg:text-[20px] text-xl font-medium">Free same-day delivery</p>
          </div>
          <div className="shrink-0">
            <img
              src={Plus}
              alt="Plus Icon"
              className="lg:h-[40px] lg:w-[40px] w-10 h-10"
            />
          </div>
          <div className="text-center">
            <p className="lg:text-[20px] text-xl font-medium">
              Expert support <br /> Seven days a week
            </p>
          </div>
          <div className="shrink-0">
            <img
              src={Equal}
              alt="Equal Icon"
              className="lg:h-[40px] lg:w-[40px] w-10 h-10"
            />
          </div>
          <div className="text-center">
            <p className="lg:text-[20px] text-xl font-medium">
              An extraordinary care <br /> At no extra cost
            </p>
          </div>
          <div className="shrink-0">
          <img
              src={Hearts}
              alt="Equal Icon"
              className="lg:h-[50px] lg:w-[50px] w-20 h-20"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default How;
