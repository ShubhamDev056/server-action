import * as z from "zod";
import * as yup from "yup";

const registerSchema = z.object({
  firstname: z.string().min(3, {
    message: "First name is required",
  }),
  lastname: z
    .string()
    .min(3, { message: "Last name Must be 3 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  city: z
    .string()
    .min(3, { message: "City Must be 3 or more characters long" }),
  address: z
    .string()
    .min(3, { message: "Address Must be 8 or more characters long" }),
});

const addUserSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First Name is a required field")
    .min(5, "Must be more than 5"),
  lastname: yup.string().required("Last Name is a required field"),
  email: yup.string().email().required("email is a required field"),
  city: yup.string().required("City is a required field"),
  address: yup.string().required("Address is a required field"),
});

export { registerSchema, addUserSchema };
