import Navbar from "./common/navbar";
import Footer from "./common/footer";
import StepsSlide from "./common/stepsSlide";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./common/button";
import { useState } from "react";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  speciality: Yup.string().required("Speciality is required"),
  office_address: Yup.string().required("Office Address is required"),
  reg_no: Yup.string().required("Registration Number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  phone_number: Yup.string()
    .matches(/^(\+?234|0)[7-9]{1}[0-1]{1}[0-9]{8}$/, {
      message: "Invalid Nigerian phone number format",
    })
    .required("Phone number is required"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  speciality: "",
  office_address: "",
  reg_no: "",
  password: "",
  confirm_password: "",
  phone_number: "",
};

const Doctors = () => {
  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);

    setTimeout(() => {
      setSaved(true);
      setIsLoading(false);
    }, 2000);

    console.log(values);
  };

  return (
    <>
      <Navbar />
      <div className=" h-full w-[90%] flex flex-col justify-center ml-[5%]">
        <div className="px-10 container mx-auto">
          <h3 className="text-[1em] sm:text-[1.7em] font-poppins font-semibold mb-[3%] text-[#40B36E]">
            Join Other Doctors Using <br />
            Theraswift <span className="text-[#206B3E]">RX</span>
          </h3>
          <p className="font-poppins text-[.8em] sm:text-[1.1em]">
            Just send us your script, we will handle the rest
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="lg:w-[60%] w-full flex flex-col gap-8 mx-auto my-20">
              <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="first_name" className="block mb-1">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="eg. John"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="last_name" className="block mb-1">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="eg. Doe"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="flex gap-5 lg:flex-row flex-col">
                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="eg. somewhere@gmail.com"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="phone_number" className="block mb-1">
                    Phone Number (Nigerian only)
                  </label>
                  <Field
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="eg. +2347000000000"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="phone_number"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="office_address" className="block mb-1">
                  Office Address
                </label>
                <Field
                  type="text"
                  name="office_address"
                  id="office_address"
                  placeholder={`eg. 14A Allen Avenue, Ikeja, Lagos, 100271, Nigeria`}
                  className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                />
                <ErrorMessage
                  name="office_address"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex gap-5 lg:flex-row flex-col">
                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="speciality" className="block mb-1">
                    Speciality
                  </label>
                  <Field
                    type="text"
                    name="speciality"
                    id="speciality"
                    placeholder="eg. General Practitioner"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="speciality"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="reg_no" className="block mb-1">
                    Registration Number
                  </label>
                  <Field
                    type="text"
                    name="reg_no"
                    id="reg_no"
                    placeholder="eg. fg2767ds2ww"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="reg_no"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="flex gap-5 lg:flex-row flex-col">
                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4 lg:w-[50%] w-[100%]">
                  <label htmlFor="confirm_password" className="block mb-1">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className="w-full px-5 py-3 border border-gray-400 outline-none focus:border-green-500 hover:border-green-500 "
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center">
                <Button
                  isLoading={isLoading}
                  type="submit"
                  variant="filled"
                  color="black"
                >
                  Learn more
                </Button>

                {saved && (
                  <h1>
                    <strong className="text-green-500">Saved!</strong> We will
                    contact you soon
                  </h1>
                )}
              </div>
            </Form>
          </Formik>
        </div>

        <StepsSlide />
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
