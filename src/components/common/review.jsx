import scroll from "../../assets/scroll.svg";
import scroll2 from "../../assets/scroll2.svg";
import LanreImage from "../../assets/lanre.png";

const Review = () => {
  return (
    <div className="w-full border-t-[3px] border-[#00000026] py-[80px] lg:px-[90px]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-semibold lg:text-[48px] lg:leading-[65px] text-2xl ">
            Everyone Loves Theraswift <span className="text-[#40B36E]">Rx</span>
          </h1>
          <p className="lg:text-[26px] font-normal font-body lg:leading-[35px] text-lg">
            Look at what our customers are saying
          </p>
        </div>

        <div className="flex items-center justify-between">
          <img src={scroll} className="lg:w-14 lg:h-14 w-10 h-10 " />
          <div className="box-border lg:px-10 px-5 lg:py-20 py-10 shadow-2xl rounded-lg flex flex-col lg:flex-row items-center lg:w-[70%]">
            <img
              src={LanreImage}
              className="lg:w-[150px] lg:h-[150px] w-20 h-20 lg:mr-5 mb-5 "
            />
            <div>
              <p className="font-body font-normal lg:text-xl">
                Using Theraswift <span className="text-[#26EF77]">Rx</span> has
                been one of the best decisions I made in my life immediately I
                took my health serious, their customer service time is fast and
                seamless
              </p>
              <h1 className="font-semibold lg:text-xl text-right">
                Anthony Ismaila
              </h1>
            </div>
          </div>
          <img src={scroll2} className="lg:w-14 lg:h-14 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Review;
