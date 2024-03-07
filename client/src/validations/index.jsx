import * as Yup from "yup";

const formValidationSchema = {
  firstName: Yup.string()
    .required("Required")
    .max(120, "Must be 120 characters or less"),
  lastName: Yup.string()
    .required("Required")
    .max(120, "Must be 120 characters or less"),
  email: Yup.string().required("Required").email("Enter valid email"),
  company: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "At least 8 characteres")
    .matches(/(?=.*\d)/, "At least 1 digit")
    .matches(/(?=.*[A-Z])/, "At least 1 Uppercase letter"),
};

export default formValidationSchema;
