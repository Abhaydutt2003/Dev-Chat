import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className=" w-screen h-screen bg-base-200 flex flex-row items-center justify-center">
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
          <span className=" text-primary-content font-bold text-3xl">D</span>
        </div>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Auth;
