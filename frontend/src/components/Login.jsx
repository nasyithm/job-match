import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div id="main-content">
      <article className="content">
        <h2 className="content__title">Login</h2>
        <form onSubmit={Auth} className="box">
          {isError && <p className="has-text-centered">{message}</p>}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
          </div>
          <div className="field mt-5">
            <button type="submit" className="button is-success is-fullwidth">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div>
            <p>Sudah punya akun?</p>
            <Link to={"/daftar"}>Daftar</Link>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Login;
