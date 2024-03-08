import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import FormInput from "../components/FormInput";
import formValidationSchema from "../validations";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const baseURL = "https://sendspark-signup.vercel.app/";

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
      try {
        const response = await axios.post(`${baseURL}/register`, values, {
          headers: {
            "x-apikey": "API_KEY",
          },
          responseType: "json",
        });

        navigate(`/dashboard/${response.data.data.firstName}`);
      } catch (error) {
        console.error(
          "Error al registrar usuario:",
          error.response.data.message
        );
      }
    },
  });

  return (
    <>
      <div>
        <h1>Nice to meet you!</h1>
        <span>We´re excited to have you aboard!</span>
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

export default Signup;
