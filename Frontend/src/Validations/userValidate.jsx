import * as yup from "yup";

export const schema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First name must be at least 2 characters long")
    .trim("Please remove leading/trailing whitespaces"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(1, "Last name must be at least 1 character long")
    .trim("Please remove leading/trailing whitespaces"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be atleast 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)",
      }
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const schema2 = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
  pwd: yup.string().required("Password is required"),
});

