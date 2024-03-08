const yup = require('yup')

const signupScheme = yup.object({
    body: yup.object({
        firstName: yup.string()
            .required("Required")
            .max(120, "Must be 120 characters or less").matches(/^(?!\s)(?!.*\s+$).+/, "First Name don't allow space or start with space"),
        lastName: yup.string()
            .required("Required")
            .max(120, "Must be 120 characters or less").matches(/^(?!\s)(?!.*\s+$).+/, "Last Name don't allow space or start with space"),
        email: yup.string().required("Required").email("Enter valid email"),
        company: yup.string().required("Required").matches(/^(?!\s)(?!.*\s+$).+/, "Company don't allow space or start with space"),
        password: yup.string()
            .required("Required")
            .min(8, "At least 8 characteres")
            .matches(/(?=.*\d)/, "Password needs at least 1 digit")
            .matches(/(?=.*[A-Z])/, "Password needs at least 1 Uppercase letter")
            .matches(/^(?!\s)(?!.*\s+$).+/, "Password don't allow space or start with space"),
            
    })
});

module.exports = signupScheme