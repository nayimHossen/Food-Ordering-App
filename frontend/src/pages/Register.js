import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const Register = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(registerUser(user));
  };

  return (
    <div className="flex pt-8 pb-16 px-2 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Registr</h2>
          {loading && <Loading />}
          {success && <Success success="User Register Successfull" />}
          {error && <Error error="Email already in use" />}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input filed start */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Name Input filed end */}

            {/* Email Input filed start */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email Input filed end */}

            {/* Password Input filed start */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Password Input filed start */}

            {/* Login Button */}
            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Register"
            />
          </form>
          <p>
            <small>
              Alrady have an account?{" "}
              <Link className="text-primary hover:underline" to="/login">
                please login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
