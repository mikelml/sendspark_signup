import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
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
        <div className="form-group">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        <div className="form-group">
          <Button
            color="primary"
            fullWidth
            text="Submit"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default App;
