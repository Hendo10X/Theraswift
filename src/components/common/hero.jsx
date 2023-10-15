import { Link } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import CheckIfWeDeliverReusable from "./checkIfWeDeliverReusable";
import Button from "./button";

const Hero = () => {
  return (
    <Grid>
      <div
        className={`font-sans text-white w-full px-5 lg:px-[90px] py-[60px] flex  items-center bg-[url('/src/assets/background.png')] bg-cover`}
      >
        <section className="container mx-auto">
          <div className="lg:w-[660px] mb-10">
            <h1 className="pt-10 lg:pt-0 lg:text-[64px] text-center lg:text-left font-bold mb-5 text-2xl leading-[96px]">
              MEDS <br className="hidden lg:block" />
              MADE SIMPLE.
            </h1>

            <h1 className="font-medium lg:text-[20px] text-center lg:text-left text-[#94BAF2]  ">
              Theraswift Rx is the pharmacy that delivers your prescription,{" "}
              <br className="hidden lg:block" /> the same day for free- with
              just a few clicks
            </h1>
          </div>

          <div className="font-poppins text-white font-extrabold text-base flex justify-center lg:justify-start gap-3">
            <Link to="/check-if-we-deliver">
              <Button color="danger" variant="filled">
                GET STARTED
              </Button>
            </Link>
            <Link to="tel:09065783958">
              <Button color="danger" variant="filled">
                ORDER BY PHONE
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <CheckIfWeDeliverReusable />
    </Grid>
  );
};

export default Hero;
