"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
} from "@nextui-org/react";

import { addUsers } from "../lib/action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, addUserSchema } from "../lib/schema";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(addUserSchema) });

  const action = async (data) => {
    console.log("data", data);
    const response = await addUsers(data);
    if (!response) {
      console.log("something wrong");
    }
    if (response.error) {
      console.log(response.error);
    }
    //setServerResponse(response);
  };
  return (
    <>
      <form action={handleSubmit(action)}>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="First Name"
            name="firstname"
            {...register("firstname")}
          />
          <p>{errors.firstname?.message}</p>
          <Input
            type="text"
            label="Last Name"
            name="lastname"
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
          <Input
            type="email"
            label="Email"
            name="email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <Input type="text" label="City" name="city" {...register("city")} />
          <p>{errors.city?.message}</p>
          <Input
            type="text"
            label="Address"
            name="address"
            {...register("address")}
          />
          <p>{errors.address?.message}</p>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;
