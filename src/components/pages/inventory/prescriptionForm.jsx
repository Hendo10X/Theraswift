import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { postData, handleApiError } from "../../utils/api";

import { toast } from "react-hot-toast";
import Button from "../../common/button";
import PropTypes from "prop-types";

const prescriptionOptions = [
  { label: "Required", value: "required" },
  { label: "Not Required", value: "not-required" },
  { label: "Optional", value: "optional" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Drug name is required"),
  activeIngredient: Yup.string().required("Active ingredient is required"),
  strength: Yup.string().required("Strength is required"),
  form: Yup.string().required("Form is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  prescription: Yup.string().required("Prescription is required"),
  description: Yup.string(),
});

const initialValues = {
  drugName: "",
  activeIngredient: "",
  strength: "",
  form: "",
  quantity: 1,
  price: 0,
  prescription: "",
  note: "",
};

const formFields = [
  {
    name: "name",
    label: "Drug Name",
    placeholder: "eg. Lipitor",
    type: "text",
  },
  {
    name: "activeIngredient",
    label: "Active Ingredient",
    placeholder: "eg. Atorvastatin",
    type: "text",
  },
  {
    name: "strength",
    label: "Strength",
    placeholder: "eg. 100mg",
    type: "text",
  },
  { name: "form", label: "Form", placeholder: "eg. Tablet", type: "text" },
  {
    name: "quantity",
    label: "Quantity",
    placeholder: "",
    type: "number",
  },
  { name: "price", label: "Price", placeholder: "", type: "number" },
  {
    name: "prescription",
    label: "Prescription",
    type: "select",
    options: prescriptionOptions,
  },
  {
    name: "description",
    label: "Note",
    placeholder: "A brief note about this medication",
    type: "textarea",
  },
];

const PrescriptionForm = ({ updateInventory, editInventory, editObj }) => {
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (editObj) {
      setIsEdit(true);
      formik.setValues(editObj);
    }
  }, [editObj]);

  const handleSubmit = async (values) => {
    try {
      if (isEdit) {
        editInventory(editObj.id, values);
        formik.resetForm();
        setIsEdit(false);
        return;
      }

      const data = {
        id: new Date().getTime(),
        type: "prescription",
        ...values,
      };

      await postData("/add_medication", data);
      // console.log("response data", response.data);

      // updateInventory(data);
      formik.resetForm();
      toast.success("Medication added succesfully");
    } catch (error) {
      handleApiError(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form className="mx-auto w-[80%] pb-10" onSubmit={formik.handleSubmit}>
        {formFields.map((field) => (
          <div
            className="flex flex-col justify-between text-white gap-5 mb-10"
            key={field.name}
          >
            <label
              className="font-semibold w-[30%] text-sm"
              htmlFor={field.name}
            >
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className="w-[100%] border border-gray-50  px-5 py-3 rounded-md outline-none focus:border-green-500 text-white bg-primary-50
                    "
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className="border border-gray-50 bg-transparent w-full px-5 py-3 rounded-xl outline-none h-[100px]"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className="w-[100%] border border-gray-50  px-5 py-3 rounded-md outline-none focus:border-green-500 text-white bg-primary-50
                    "
              />
            )}
            {formik.touched[field.name] && formik.errors[field.name] && (
              <div className="text-red-500">{formik.errors[field.name]}</div>
            )}
          </div>
        ))}

        <div className="flex gap-5">
          <Button
            size="lg"
            type="submit"
            variant="filled"
            colorScheme="secondary"
            isLoading={formik.isSubmitting}
          >
            {isEdit ? "Update Medication" : "Save Medication"}
          </Button>

          <Button
            size="lg"
            type="submit"
            variant="filled"
            colorScheme="danger"
            onClick={() => {
              formik.resetForm();
              setIsEdit(false);
            }}
          >
            {isEdit ? "Cancel Update" : "Clear Form"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PrescriptionForm;

PrescriptionForm.propTypes = {
  updateInventory: PropTypes.func,
  editObj: PropTypes.object,
  editInventory: PropTypes.func,
};
