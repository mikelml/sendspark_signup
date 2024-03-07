import { TextField } from "@mui/material";

const FormInput = ({ formik, name, label, type }) => {
  return (
    <div className="input-form">
      <TextField
        fullWidth
        id={name}
        name={name}
        label={label}
        type={type || "text"}
        onChange={formik.handleChange}
        value={formik.values[name]}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </div>
  );
};

export default FormInput;
