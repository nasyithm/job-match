import React, { useEffect } from "react";
import Layout from "./Layout";
import ListTenagaKerja from "../components/ListTenagaKerja";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const TenagaKerja = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <ListTenagaKerja />
    </Layout>
  );
};

export default TenagaKerja;