import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { schema2 } from "../../Validations/userValidate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  //state to handle weather the request is inProgess
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema2) });
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-3 "
    >
      <FormInput
        type="email"
        name="email"
        label="Email"
        register={register}
      ></FormInput>
      <p>{errors.email?.message}</p>
      <FormInput
        type="password"
        name="pwd"
        label="Password"
        register={register}
      ></FormInput>
      <p>{errors.pwd?.message}</p>
      <div className=" mt-4">
        <SubmitBtn isLoading={isLoading} text="Login"></SubmitBtn>
      </div>
    </form>
  );
};

export default Login;
