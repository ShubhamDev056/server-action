"use server";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";
const schema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(1),
});

import { addUserSchema } from "@/app/lib/schema";

export const login = async (prevState, formData) => {
  try {
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(formData.get("email"));
    const validatedFields = schema.safeParse(rawFormData);
    // Return early if the form data is invalid
    if (!validatedFields.success) {
      console.log("error", validatedFields.error.flatten().fieldErrors);

      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    } else {
      console.log("success");
    }
    //console.log("formData", formData);

    //await createTodo(formData.get("email"));
    return revalidatePath("/");
  } catch (error) {
    return { message: error.message };
  }
};

export const addUsers = async (formData) => {
  try {
    console.log("formdata", formData);
    // parse and assert validity
    const user = await addUserSchema.validate(
      {
        firstname: 4646,
        lastname: "ku",
        email: "056shubham@gmail.com",
        city: "noida",
        address: "sec",
      },
      { strict: true }
    );
    console.log("VALIDATE user !!!", user);

    let userData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      city: formData.get("city"),
      address: formData.get("address"),
    };
    console.log("user data", userData);
    // const users = await User.find();
    // console.log(users);
    // return users;
  } catch (error) {
    return { message: error.message };
  }
};
