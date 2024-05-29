import React from "react";
import barner from "../assets/baner.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import Navbar from "./common/navbar";

const DeleteAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/verify-account");
  };

  return (
    <>
      <Navbar />
      <section className="p-5">
        <div className="mt-20 p-8 md:pl-[7em]">
          <div className="max-sm:text-center">
            <p className="font-semibold text-xl">Delete my account</p>
            <p className="">Deleting your account will delete all your info</p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-around">
          <div className="max-sm:hidden">
            <img
              src={barner}
              className="w-[30em] h-[25em] mt-10"
              alt="theraswift"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-[30em]">
            <p className="mb-1 font-semibold">Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-[#F3F3F3] p-3 w-full outline-none"
              {...register("email", { required: true })}
            />
            <div className="mt-3">
              <input
                type="checkbox"
                className="bg-[#F3F3F3] mr-2"
                {...register("terms", { required: true })}
              />
              <span>I agree to the terms and privacy policy</span>
            </div>
            <button className="bg-[#40B36E] rounded-md text-white shadow-md font-semibold p-3 mt-10 w-full">
              Proceed
            </button>

            {errors && errors.email ? (
              <p className=" flex items-center text-red-500 mt-4">
                <IoIosWarning className="mr-2 h-6 w-6" /> Email is required
              </p>
            ) : errors.terms ? (
              <p className=" flex items-center text-red-500 mt-4">
                <IoIosWarning className="mr-2 h-6 w-6" /> You need to agree with
                our terms and conditions
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
};

export default DeleteAccount;
