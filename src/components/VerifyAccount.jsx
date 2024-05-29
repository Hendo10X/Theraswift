import React from "react";
import { useForm } from "react-hook-form";
import { IoChevronBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "./common/navbar";

const VerifyAccount = () => {
  const { register, handleSubmit, setFocus } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="pb-20">
      <Navbar />
      <Link to={"/delete-account"}>
        <IoChevronBackCircle className="w-10 h-10 mt-6 ml-10" />
      </Link>
      <div className="flex flex-col items-center pt-20">
        <div className="text-center">
          <p className="text-3xl mb-1 font-semibold">Verify your account</p>
          <p>
            We sent a code to this E-mail:{" "}
            <span className="font-semibold">emm*********com</span>
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 max-w-[20em] w-[82vw]"
          >
            <div>
              <p className="mb-1 font-semibold">Enter Code</p>
              <div className="flex items-center gap-5 justify-between">
                <input
                  type="number"
                  className="w-[3em] h-[3em] outline-none rounded-lg border-zinc-500 border-[1.5px] text-center"
                  onInput={(e) => {
                    setFocus("code2");
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  maxLength={1}
                  {...register("code1", { required: true })}
                />
                <input
                  type="number"
                  maxLength={1}
                  className="w-[3em] h-[3em] outline-none rounded-lg border-zinc-500 border-[1.5px] text-center"
                  {...register("code2", { required: true })}
                  onInput={(e) => {
                    setFocus("code3");
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                />
                <input
                  type="number"
                  maxLength={1}
                  className="w-[3em] h-[3em] outline-none rounded-lg border-zinc-500 border-[1.5px] text-center"
                  {...register("code3", { required: true })}
                  onInput={(e) => {
                    setFocus("code4");
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                />
                <input
                  type="number"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  maxLength={1}
                  className="w-[3em] h-[3em] outline-none rounded-lg border-zinc-500 border-[1.5px] text-center"
                  {...register("code4", { required: true })}
                />
              </div>
            </div>
            <div className="mt-10 text-center">
              <button className="bg-red-600 font-semibold w-full p-3 text-white rounded-lg shadow-lg">
                Delete
              </button>
              <p className="mt-5 cursor-pointer font-semibold">Resend code?</p>
              <p className="mt-3">Need help? contact us</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
