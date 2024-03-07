import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { Button } from "@mui/material";
import FormInput from "./components/FormInput";
import formValidationSchema from "./validations";
function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object(formValidationSchema);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div>
        <h1>Nice to meet you!</h1>
        <h4>We´re excited to have you aboard!</h4>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
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
        </div>
        <div className="form-group">
          <FormInput formik={formik} name="company" label="Company"></FormInput>
        </div>
        <div className="form-group">
          <FormInput
            formik={formik}
            name="jobTitle"
            label="Job Title"
          ></FormInput>
        </div>
        <div className="form-group">
          <FormInput
            formik={formik}
            name="email"
            label="Work Email"
          ></FormInput>
        </div>
        <div className="form-group">
          <FormInput
            formik={formik}
            name="password"
            label="Create Password"
            type="password"
          ></FormInput>
        </div>

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
