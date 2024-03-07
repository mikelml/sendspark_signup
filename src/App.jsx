import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { Button } from "@mui/material";
import FormInput from "./components/FormInput";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .max(120, "Must be 120 characters or less"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          formik={formik}
          name="firstName"
          label="First Name"
        ></FormInput>
        <FormInput
          formik={formik}
          name="lastName"
          label="Last Name"
        ></FormInput>
        <FormInput formik={formik} name="company" label="Company"></FormInput>
        <FormInput
          formik={formik}
          name="jobTitle"
          label="Job Title"
        ></FormInput>

        <div className="form-group">
          <Button
            color="primary"
            fullWidth
            text="Submit"
            type="submit"
            variant="contained"
          >
            Continue
          </Button>
        </div>
      </form>
    </>
  );
}

export default App;
