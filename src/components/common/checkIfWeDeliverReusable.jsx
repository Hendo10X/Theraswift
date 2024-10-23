import user from "../../assets/user.svg";
import forward from "../../assets/forward.svg";

import { Formik, Field, Form } from "formik";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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

const CheckIfWeDeliverReusable = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    if (values.state === "lagos" || values.state === "ogun")
      return navigate("/download");

    return navigate("/join-waitlist");
  };

  return (
    <div className="bg-white py-[50px]">
      <div className="flex w-full flex-wrap justify-center items-center px-5">
        <h1 className="font-inter font-bold lg:text-[35px] text-2xl text-black mr-5 mb-5 lg:mb-0">
          Check if we deliver to you
        </h1>
        <div className="flex lg:w-auto w-full justify-between items-center text-black border-[rgba(0, 0, 0, 0.15)] mr-5">
          <Formik
            initialValues={{ state: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full">
              <div className="flex lg:flex-row flex-col w-full gap-x-2 gap-y-3 items-stretch justify-center">
                <img src={user} className="lg:block hidden w-10" />
                <div>
                  <Field
                    type="text"
                    placeholder="Enter your home/office address"
                    id="address"
                    name="address"
                    className="
                    outline-none focus:border-teal-500 border-b border-teal-500
                    w-full px-3 py-3"
                  />
                </div>

                <div className="flex flex-row lg:gap-5 gap-10 items-center">
                  <Field
                    as="select"
                    id="state"
                    name="state"
                    className=" w-full p-2 border border-gray-300 text-white rounded bg-emerald-800"
                  >
                    <option value="">Select a state</option>
                    {nigerianStates.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </Field>
                  <button type="submit">
                    <img src={forward} className="lg:w-15 w-15" />
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CheckIfWeDeliverReusable;
