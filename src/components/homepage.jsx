import { Grid } from "@chakra-ui/react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Hero from "./common/hero";
import How from "./common/how";
import Review from "./common/review";
import FaqReusable from "./common/faqResuable";

const Homepage = () => {
  return (
    <Grid>
      <Navbar />
      <Hero />
      <How />
      <Review />
      <FaqReusable />
      <Footer />
    </Grid>
  );
};

export default Homepage;
