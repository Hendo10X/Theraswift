import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Grid } from "@chakra-ui/react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Hero from "./common/hero";
import How from "./common/how";
import Review from "./common/review";
import FaqReusable from "./common/faqResuable";
import EssentialsPage from "./EssentialsPage";

const RevealSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  // Initial animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Grid>
        <motion.div variants={itemVariants}>
          <Navbar />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>
        <RevealSection>
          <How />
        </RevealSection>
        <RevealSection>
          <Review />
        </RevealSection>
        <RevealSection>
          <FaqReusable />
        </RevealSection>
        <RevealSection>
          <Footer />
        </RevealSection>
      </Grid>
    </motion.div>
  );
};

export default Homepage;