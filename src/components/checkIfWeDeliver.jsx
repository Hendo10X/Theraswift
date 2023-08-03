import user from "../assets/user.svg";
import forward from "../assets/forward.svg";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { Heading, Flex, Text } from "@chakra-ui/react";
import Button from "./common/button";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const nigerianStates = [
  { label: "Abia", value: "abia" },
  { label: "Adamawa", value: "adamawa" },
  { label: "Akwa ibom", value: "akwa-ibom" },
  { label: "Anambra", value: "anambra" },
  { label: "Bauchi", value: "bauchi" },
  { label: "Bayelsa", value: "bayelsa" },
  { label: "Benue", value: "benue" },
  { label: "Borno", value: "borno" },
  { label: "Cross river", value: "cross-river" },
  { label: "Delta", value: "delta" },
  { label: "Ebonyi", value: "ebonyi" },
  { label: "Edo", value: "edo" },
  { label: "Ekiti", value: "ekiti" },
  { label: "Enugu", value: "enugu" },
  { label: "Gombe", value: "gombe" },
  { label: "Imo", value: "imo" },
  { label: "Jigawa", value: "jigawa" },
  { label: "Kaduna", value: "kaduna" },
  { label: "Kano", value: "kano" },
  { label: "Katsina", value: "katsina" },
  { label: "Kebbi", value: "kebbi" },
  { label: "Kogi", value: "kogi" },
  { label: "Kwara", value: "kwara" },
  { label: "Lagos", value: "lagos" },
  { label: "Nasarawa", value: "nasarawa" },
  { label: "Niger", value: "niger" },
  { label: "Ogun", value: "ogun" },
  { label: "Ondo", value: "ondo" },
  { label: "Osun", value: "osun" },
  { label: "Oyo", value: "oyo" },
  { label: "Plateau", value: "plateau" },
  { label: "Rivers", value: "rivers" },
  { label: "Sokoto", value: "sokoto" },
  { label: "Taraba", value: "taraba" },
  { label: "Yobe", value: "yobe" },
  { label: "Zamfara", value: "zamfara" },
];
const validationSchema = Yup.object().shape({
  address: Yup.string().required("Enter a valid address to continue"),
  state: Yup.string().required("Please select a state"),
});

const CheckIfWeDeliver = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("values", values);

    if (values.state === "lagos" || values.state === "ogun")
      return navigate("/download");

    return navigate("/join-waitlist");
  };
  return (
    <>
      <Navbar />

      <Flex
        justify="center"
        gap="5rem"
        direction="column"
        placeItems="center"
        minH="35rem"
      >
        <Flex textAlign="center" direction="column" gap="5">
          <Heading>Check if we deliver to you</Heading>
          <Text>We are quicker, smarter, simpler and kinder pharmacy.</Text>
        </Flex>

        <Formik
          initialValues={{ state: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="container mx-auto lg:w-[50%] flex flex-col items-center gap-10 w-[100%] px-10 ">
            <div className="flex flex-col text-center">
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />

              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex lg:flex-row flex-col w-full gap-x-2 gap-y-3 items-stretch justify-center">
              <div className="w-full">
                <Field
                  type="text"
                  placeholder="Enter your home/office address"
                  id="address"
                  name="address"
                  className="
                    outline-none focus:border-teal-500 border-b border-teal-500
                    w-full  py-3"
                />
              </div>

              <div className="flex flex-col lg:w-[50%] w-[100%] lg:gap-5 gap-10 items-center">
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className=" w-full p-2 py-3 border border-gray-300 text-white bg-teal-500"
                >
                  <option value="">Select a state</option>
                  {nigerianStates.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <Button type="submit" variant="filled" color="black">
              Continue
            </Button>
          </Form>
        </Formik>
      </Flex>

      <Footer />
    </>
  );
};

export default CheckIfWeDeliver;
