import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import {schema} from "../../Validations/userValidate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  //state to handle weather the request is inProgess
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(()=>{
      setIsLoading(false);
    },5000);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-3 "
    >
      <FormInput
        type="text"
        name="firstName"
        label="FirstName"
        register={register}
      ></FormInput>
      <p>{errors.firstName?.message}</p>
      <FormInput
        type="text"
        name="lastName"
        label="LastName"
        register={register}
      ></FormInput>
      <p>{errors.lastName?.message}</p>
      <FormInput
        type="text"
        name="email"
        label="email"
        register={register}
      ></FormInput>
      <p>{errors.email?.message}</p>
      <FormInput
        type="password"
        name="password"
        label="password"
        register={register}
      ></FormInput>
      <p>{errors.password?.message}</p>
      <FormInput
        type="text"
        name="confirmPassword"
        label="confirmPassword"
        register={register}
      ></FormInput>
      <p>{errors.confirmPassword?.message}</p>
      <div className=" mt-4">
        <SubmitBtn isLoading={isLoading} text="Register"></SubmitBtn>
      </div>
    </form>
  );
};

export default Register;
