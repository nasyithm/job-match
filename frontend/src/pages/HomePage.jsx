import React, { useEffect } from "react";
import Layout from "./Layout";
import Home from "../components/Home";
import { useDispatch } from "react-redux";
import { getMe } from "../features/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
