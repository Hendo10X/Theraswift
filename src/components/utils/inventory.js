import * as Yup from "yup";

const initialValues = {
  drugName: "",
  activeIngredient: "",
  strength: "",
  form: "",
  quantity: 1,
  price: 0,
  note: "",
  prescription: "",
};

const initialValuesTwo = {
  drugName: "Paracetamol",
  strength: "Atorvastatin",
  form: "Tablet",
  quantity: 1,
  price: 1000,
  note: "A brief note about this medication",
  uses: "Used to relieve pain",
  category: "top-seller",
  image: null,
};

const validationSchema = Yup.object().shape({
  drugName: Yup.string().required("Drug name is required"),
  activeIngredient: Yup.string().required("Active ingredient is required"),
  strength: Yup.string().required("strength is required"),
  form: Yup.string().required("Form is required"),
  quantity: Yup.string().required("Quantity is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  note: Yup.string(),
  prescription: Yup.string().required("Prescription is required"),
});

const validationSchemaTwo = Yup.object().shape({
  drugName: Yup.string().required("Drug name is required"),
  strength: Yup.string().required("Strength is required"),
  form: Yup.string().required("Form is required"),
  quantity: Yup.number().required("Quantity is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  note: Yup.string(),
  uses: Yup.string(),
  category: Yup.string().required("Category is required"),
  image: Yup.mixed().required("Please select an image file"),
});

const fields = [
  {
    id: 1,
    label: "Drug Name",
    type: "text",
    name: "drugName",
    eg: "eg. Lipitor",
  },
  {
    id: 2,
    label: "Active Ingredient",
    type: "text",
    name: "activeIngredient",
    eg: "eg. Atorvastatin",
  },
  {
    id: 3,
    label: "Strength",
    type: "text",
    name: "strength",
    eg: "eg. 100mg",
  },
  {
    id: 4,
    label: "Form",
    type: "text",
    name: "form",
    eg: "eg. Tablet or Capsule",
  },
  {
    id: 5,
    label: "Quantity",
    type: "text",
    name: "quantity",
    placeholder: "eg. 30",
  },
  {
    id: 6,
    label: "Price",
    type: "number",
    name: "price",
  },
];

const fieldsTwo = [
  {
    id: 1,
    label: "Drug Name",
    type: "text",
    name: "drugName",
    placeholder: "eg. Lipitor",
  },
  {
    id: 2,
    label: "Strength",
    type: "text",
    name: "strength",
    placeholder: "eg. 10 mg",
  },
  {
    id: 3,
    label: "Form",
    type: "text",
    name: "form",
    placeholder: "eg. Tablet",
  },
  {
    id: 4,
    label: "Quantity",
    type: "text",
    name: "quantity",
    placeholder: "eg. 30",
  },
  {
    id: 5,
    label: "Price",
    type: "number",
    name: "price",
    placeholder: "eg. 100",
  },
  {
    id: 6,
    label: "Uses",
    type: "text",
    name: "uses",
    placeholder: "eg. For relieve of pain",
  },

  {
    id: 7,
    label: "Category",
    type: "select",
    name: "category",
    options: [
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
    ],
  },
];

export default {
  initialValues,
  initialValuesTwo,
  validationSchema,
  validationSchemaTwo,
  fields,
  fieldsTwo,
};
