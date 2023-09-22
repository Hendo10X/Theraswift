import { useState } from "react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import pointer from "../assets/pointer.svg";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

const faq = [
  {
    title: "How do I send a new prescription to Theraswift Rx ?",
    desc: "Every doctor can send prescription to Theraswift Rx.Tell your doctor to e- prescribe to: Theraswift Rx, They can always call 09065783958. Once its done we send you a text to schedule your free delivery.",
  },
  {
    title: "How much does Theraswift Rx cost? Is delivery really free?",
    desc: "Yes! Our delivery is free. Theraswift Rx accept major insurance. We will always let you know  how much your medications cost before you schedule a delivery.",
  },
  {
    title: "When and Where do you deliver to?",
    desc: "we currently deliver within Lagos and Ogun state. However, we are expanding rapidly- We just need someone - a friend, a colleague or a doorman to receive your medications when it arrives",
  },
  {
    title: "Who will deliver my medication?",
    desc: "All our couriers undergo background check and rigorous training.To ensure privacy, your medications will arrive in discreet, tamper sealed package and only you and your pharmacist will know what's inside.",
  },

  {
    title: "How do I refill my medication?",
    desc: "we offer a smart refill.We coordinate with your doctor and HMO to make sure you never run out of the medication you need or pay too much for your prescription.We will text you to schedule a delivery when your refill is ready.",
  },
  {
    title: "Is my information secure? ",
    desc: " Your information is always secure.We store all your data in an encrypted environment.",
  },
  {
    title: "What if I have a special request?",
    desc: "Feel free to ask your pharmacist.We offer medication syncing, medication counselling, delivery of temperature, controlled drugs, appointment reminder and more. We work with you to manage your medication.",
  },

  {
    title:"Do you deliver controlled substances?",
    desc:'Yes. For controlled substances, we will require a signature from you with your prescription if physical'
  }
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  return (
    <>
      <Navbar />
      <div className=" container mx-auto py-[100px] px-5">
        <div className="mb-10">
          <h1 className="text-center font-semibold md:text-[48px]">
            Our Frequently Asked Question
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="font-poppins font-light lg:w-1/2 ">
            {faq.map((faq, index) => (
              <div
                className="flex justify-between bg-[#f7f7f7] p-5 mb-10 cursor-pointer rounded gap-5"
                key={index}
                onClick={() => toggle(index)}
              >
                <div>
                  <h1 className="font-semibold">{faq.title}</h1>
                  <Collapse isOpened={index === isOpen}>
                    <h1 className="py-2">{faq.desc}</h1>
                  </Collapse>
                </div>
                <img
                  src={pointer}
                  className={`w-[12.41px] h-[13.61px] flex items-center transition-all duration-300 ${
                    isOpen === index && "rotate-90"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="lg:w-[408px] w-full bg-[#1A4942] text-[#f7f7f7] rounded-[10px] flex flex-col py-5 justify-center items-center">
            <p className="font-semibold lg:text-[25px] leading-[34px] mb-5">
              Need Assistance?
            </p>
            <p className="font-light italic  md:text-[20px] leading-[34px] lg:mb-5">
              We are here to assist
            </p>
            <Link to="mailto:help@theraswift.com">
              <p className="hover:underline font-light italic  md:text-[20px] leading-[34px]">
                E-mail : help@theraswift.com{" "}
              </p>
            </Link>
            <Link to="tel:09065783958">
              <p className="hover:underline font-light italic md:text-[20px] leading-[34px] md:mb-5">
                Call/Text : 09065783958{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
