import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import registerValidate from "../lib/validate";

const Daftar = () => {
  const [show, setShow] = useState({ password: false, confPassword: false });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confPassword: "",
      role: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const data = JSON.stringify(values);
    try {
      await axios.post(`http://localhost:5000/users`, data, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }
  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div
          className={`${
            formik.errors.name && formik.touched.name ? "border-rose-600" : ""
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
        </div>
        <div
          className={`${
            formik.errors.email && formik.touched.email ? "border-rose-600" : ""
          }`}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div
          className={`${
            formik.errors.password && formik.touched.password
              ? "border-rose-600"
              : ""
          }`}
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
        </div>

        <div
          className={`${
            formik.errors.confPassword && formik.touched.confPassword
              ? "border-rose-600"
              : ""
          }`}
        >
          <input
            type="password"
            name="confPassword"
            placeholder="Confirm Password"
            {...formik.getFieldProps("confPassword")}
          />
        </div>

        <div
          className={`${
            formik.errors.role && formik.touched.role ? "border-rose-600" : ""
          }`}
        >
          <input
            type="text"
            name="role"
            placeholder="Role"
            {...formik.getFieldProps("role")}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Daftar;
