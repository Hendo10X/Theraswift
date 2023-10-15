import React from "react";

import Step1Img from "../../assets/how-it-works-step1.svg";
import Step2Img from "../../assets/how-it-works-step2.svg";
import Step3Img from "../../assets/how-it-works-step3.svg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const Step1 = () => (
  <div className="w-[100%] h-[100%] flex flex-col items-center">
    <h2 className="font-[600] text-[1.4em]">How It Works</h2>
    <span className="text-[#40B36E] text-[1.1em] font-[700]">STEP 1</span>
    <img src={Step1Img} className="w-[4em] h-[6em]" alt="step1" />
    <p className="font-[500] text-[.8em] sm:text-[1em]">
      E prescribe to Theraswift <span className="text-[#40B36E]">Rx</span>
      <br /> Or
      <br /> send prescription by phone to:
      <br /> 09065783958
    </p>
  </div>
);

const Step2 = () => (
  <div className="w-[100%] h-[100%] flex flex-col items-center">
    <h2 className="font-[600] text-[1em] sm:text-[1.4em]">How It Works</h2>
    <span className="text-[#40B36E] text-[1.1em] font-[700]">STEP 2</span>
    <img src={Step2Img} className="w-[4em] h-[6em]" alt="step2" />
    <h3 className="font-[600] text-[1em]">We contact your patient</h3>
    <p className="font-[500] text-[.7em] sm:text-[.9em]">
      We reach out to your patient with a secure text coordinate with their HMO
      if they have one and get free home delivery.{" "}
    </p>
  </div>
);

const Step3 = () => (
  <div className="w-[100%] h-[100%] flex flex-col items-center">
    <h2 className="font-[600] text-[1.4em]">How It Works</h2>
    <span className="text-[#40B36E] text-[1.1em] font-[700]">STEP 3</span>
    <img src={Step3Img} className="w-[10em] h-[7em]" alt="step3" />
    <p className="font-[500] text-[.8em] sm:text-[1em] mt-[2%]">
      Your patients <span className="text-[#40B36E]">Rx</span> is delivered for
      free.
    </p>
  </div>
);

class StepsSlide extends React.Component {
  constructor(props) {
    super(props);

    //WIll later be remodified this is just for testing.
    this.state = {
      step: 1,
      slides: [<Step1 />, <Step2 />, <Step3 />],
    };
  }

  leftSlide = () => {
    let step = this.state.step;

    if (step == 1) {
      this.setState({ step: 3 });
    } else {
      this.setState({ step: step - 1 });
    }
  };

  rightSlide = () => {
    let step = this.state.step;

    if (step == 3) {
      this.setState({ step: 1 });
    } else {
      this.setState({ step: step + 1 });
    }
  };

  getSlide = () => {
    let slide = this.state.step;
    return this.state.slides[slide - 1];
  };

  render() {
    return (
      <div className="font-poppins text-center w-[95vw] sm:w-[35em] mx-auto h-[22em] mb-[6em] flex justify-center items-center">
        <div className="w-[100%] h-[100%] flex items-center mx-auto bg-[#D9D2D2] border-none pt-[3em] sm:pt-[1.8%] shadow-[5px_5px_10px_#40B36E]">
          <div
            onClick={this.leftSlide}
            className="w-[15%] h-[40%] flex items-center justify-center cursor-pointer"
          >
            <img
              src={leftArrow}
              className="h-[1.5em] sm:h-[5em] w-[2em] sm:w-[2.5em]"
              alt="left arrow"
            />
          </div>
          {this.getSlide()}
          <div
            onClick={this.rightSlide}
            className="w-[15%] h-[40%] flex items-center justify-center cursor-pointer"
          >
            <img
              src={rightArrow}
              className="h-[1.5em] sm:h-[5em] w-[2em] sm:w-[2.5em]"
              alt="right arrow"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StepsSlide;
