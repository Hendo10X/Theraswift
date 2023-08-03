import { Link } from "react-router-dom";
import pointer from "../../assets/pointer.svg";
const FaqReusable = () => {
  const faq = [
    {
      title: "How much does Theraswift Rx cost?",
    },
    {
      title: "Do you take my HMO?",
    },
    {
      title: "Does Theraswift Rx deliver to me ?",
    },
    {
      title: "Can all doctors use Theraswift Rx ?",
    },
  ];
  return (
    <div className="text-black border-t-[3px] border-[#00000026] py-[80px] lg:px-[90px] px-5">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-semibold lg:text-[48px] text-2xl mb-5">
            Still Have Questions?
          </h1>
          <p className="font-body font-normal leading-[34px] lg:text-2xl ">
            Explore our Frequently Asked Questions (FAQ)
          </p>
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <div className="lg:w-[50%] w-full mb-10 lg:mb-0">
            {faq.map((faq) => (
              <Link to="/faq">
                <div
                  key={faq.title}
                  className="w-full shadow-lg bg-[#f7f7f7] flex items-center justify-between mb-5 lg:px-10 px-5 py-7 rounded"
                >
                  <h1 className="font-poppins font-semibold lg:text-[20px] leading-[35px]">
                    {faq.title}
                  </h1>
                  <img src={pointer} className="w-[12.41px] h-[13.61px] " />
                </div>
              </Link>
            ))}

            <p className="h-[48px] font-body font-normal text-[20px] l">
              Still have more questions?
              <b className="italic">
                <Link to="/faq"> see more</Link>{" "}
              </b>
            </p>
          </div>
          <div className="lg:w-[40%] w-full h-[253px] bg-[#1A4942] text-[#f7f7f7] rounded-[10px] flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl  leading-[34px] mb-5">
              Need help?
            </p>
            <Link to="tel:09065783958">
              <p className="hover:underline font-light italic text-[20px] leading-[34px] mb-5">
                Call/Text : 09065783958{" "}
              </p>
            </Link>
            <Link to="mailto:help@theraswift.com">
              <p className="hover:underline font-light italic text-[20px] leading-[34px]">
                E-mail : help@theraswift.com{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqReusable;
