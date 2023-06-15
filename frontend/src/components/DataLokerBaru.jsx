import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

const DataLokerBaru = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confPassword: "",
      role: "",
    },
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
            formik.errors.name && formik.touched.name ? "border-rose-600" : ""
          }`}
        >
          <input
            type="file"
            name="file"
            placeholder="Foto"
            {...formik.getFieldProps("file")}
          />
        </div>
        <button type="submit">Simpan Data</button>
      </form>
    </div>
  );
};

export default DataLokerBaru;
