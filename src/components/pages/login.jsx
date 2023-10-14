import { useState } from "react";
import Button from "../common/button";
import usePageTitle from "../hooks/pageTitle";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Toast from "../common/toast";

const Login = () => {
  usePageTitle("TheraswiftRX — Admin Login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(2).max(100).required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setToast({ type: "success", message: "Log in successful!" });
    }, 3000);
    console.log(values);
  };

  return (
    <div className="container mx-auto">
      <Toast type={toast.type} message={toast.message} />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl py-10 text-center">
          Log in to TheraswiftR&nbsp;Admin
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center gap-10 w-full px-5">
            <div className="lg:w-auto w-full">
              <div className="text-red-500 mb-2">
                <ErrorMessage name="username" component="div" />
              </div>
              <Field
                className="lg:w-[500px] w-[100%] outline-none border border-gray.300 focus:border-green-500 p-3 px-5 rounded-xl"
                placeholder="Username"
                type="username"
                autoFocus
                id="username"
                name="username"
              />
            </div>

            <div className="lg:w-auto w-full">
              <div className="text-red-500 mb-2">
                <ErrorMessage name="password" component="div" />
              </div>
              <Field
                className="lg:w-[500px] w-[100%] outline-none border border-gray.300 focus:border-green-500 p-3 px-5 rounded-xl"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <Button
              type="submit"
              isSubmitting={isSubmitting}
              variant="filled"
              colorScheme="dark"
              size="lg"
            >
              Log in
            </Button>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

export default Login;
