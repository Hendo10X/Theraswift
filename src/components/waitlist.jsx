import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Grid,
  Container,
  Text,
} from "@chakra-ui/react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Button from "./common/button";

import { useFormik } from "formik";

import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const WaitList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setSaved(true);
        setIsLoading(false);
      }, 2000);
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <Grid py="20">
        <Container maxW="50rem">
          <Grid placeItems="center">
            {!saved ? (
              <Text textAlign="center" fontSize="xl" mb="10">
                We are expanding rapidly! Add your email address to our wait
                list to let you know you want Theraswift RX in your area
              </Text>
            ) : (
              <Text textAlign="center" fontSize="xl" mb="10">
                You will be among the first to find out when we start serving
                your neighborhood we can’t wait to look after you.
              </Text>
            )}

            {!saved && (
              <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <Grid gap="2" placeItems="center">
                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                    mb={4}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                      {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>

                  <div className="flex flex-col gap-4 items-center justify-center">
                    <Button
                      isLoading={isLoading}
                      type="submit"
                      variant="filled"
                      color="black"
                    >
                      Join our waitlist
                    </Button>

                    {saved && (
                      <h1>
                        <strong className="text-green-500">Saved!</strong> We
                        will contact you soon
                      </h1>
                    )}
                  </div>
                </Grid>
              </form>
            )}

            {saved && (
              <Button
                color="black"
                onClick={() => navigate("/")}
                variant="filled"
              >
                Done
              </Button>
            )}
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </>
  );
};

export default WaitList;
