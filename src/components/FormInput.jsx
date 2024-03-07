import { TextField } from "@mui/material";

const FormInput = ({ formik, name, label }) => {
  return (
    <div className="form-group">
      <div>
        <TextField
          fullWidth
          id={name}
          name={name}
          label={label}
          onChange={formik.handleChange}
          value={formik.values[name]}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] && formik.errors[name]}
        />
        {formik.errors[name] ? <div>{formik.errors[name]}</div> : null}
      </div>
    </div>
  );
};

export default FormInput;
