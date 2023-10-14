import { useState, useEffect } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

import Button from "../../common/button";
import { postData, handleApiError } from "../../utils/api";

const categoryOptions = [
  { label: "Select a category", value: "" },
  { label: "Top Seller", value: "top-seller" },
  { label: "New Arrival", value: "new-arrival" },
  { label: "Anti-Malarai", value: "anti-malarai" },
  { label: "COVID-Care", value: "covid-care" },
  { label: "Allergy & Ashma", value: "allergy-ashma" },
  { label: "Cough Cold & Flu", value: "cough-cold-flu" },
  { label: "Diabetes Care", value: "diabetes-care" },
  { label: "Digestive Health", value: "digestive-health" },
  { label: "Eye Care", value: "eye-care" },
  { label: "First Aid", value: "first-aid" },
  { label: "Infant & Children", value: "infant-children" },
  { label: "Pain & Fever", value: "pain-fever" },
  { label: "Sexual Health", value: "sexual-health" },
  { label: "Skin Care", value: "skin-care" },
  { label: "Vitamins & Supplements", value: "vitamins-supplements" },
  { label: "Women's Health", value: "womens-health" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Drug name is required"),
  strength: Yup.string().required("Strength is required"),
  form: Yup.string().required("Form is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  uses: Yup.string().required("Uses is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileType", "Only images are allowed", (value) => {
      if (!value) return true;
      return value && value.type.includes("image");
    }),
  description: Yup.string(),
});

const initialValues = {
  drugName: "",
  strength: "",
  form: "",
  quantity: 1,
  price: 0,
  uses: "",
  category: "",
  image: undefined,
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
    name: "strength",
    label: "Strength",
    placeholder: "eg. 100mg",
    type: "text",
  },
  { name: "form", label: "Form", placeholder: "Enter form", type: "text" },
  {
    name: "quantity",
    label: "Quantity",
    placeholder: "",
    type: "number",
  },
  { name: "price", label: "Price", placeholder: "", type: "number" },
  {
    name: "uses",
    label: "Uses",
    placeholder: "For pain relieve",
    type: "text",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: categoryOptions,
  },
  { name: "image", label: "Image", type: "file" },
  {
    name: "description",
    label: "Note",
    placeholder: "Enter note",
    type: "textarea",
  },
];

const EssentialForm = ({ updateInventory, editInventory, editObj }) => {
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
        toast.success("Updated succesfully");
        formik.resetForm();
        setIsEdit(false);
        return;
      }

      const data = {
        id: new Date().getTime(),
        type: "essential",
        ...values,
      };

      await postData("/add_medication", data);

      // updateInventory(data);
      formik.resetForm();
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
            key={field.name}
            className="flex flex-col justify-between text-white gap-5 mb-10"
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
            ) : field.type === "file" ? (
              <div>
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  onChange={(event) => {
                    formik.setFieldValue(
                      field.name,
                      event.currentTarget.files[0]
                    );
                  }}
                  onBlur={formik.handleBlur}
                  className="w-[100%] border border-gray-50  px-5 py-3 rounded-md outline-none focus:border-green-500 text-white bg-primary-50
                "
                />
                {formik.values[field.name] && (
                  <img
                    src={URL.createObjectURL(formik.values[field.name])}
                    alt="Uploaded"
                    className="mt-2 rounded-lg"
                  />
                )}
              </div>
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

export default EssentialForm;

EssentialForm.propTypes = {
  updateInventory: PropTypes.func,
  editObj: PropTypes.object,
  editInventory: PropTypes.func,
};
