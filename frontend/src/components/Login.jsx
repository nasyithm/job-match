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
    <article className="content">
      <h2 className="content-title">Login</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={Auth} className="box">
            {isError && <p className="text red">{message}</p>}
            <div className="input-container">
              <label className="text">Email</label>
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
            <div className="input-container">
              <label className="text">Password</label>
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
            <div className="button-container">
              <button type="submit" className="button-blue">
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            <div>
              <p className="text">Belum punya akun?</p>
              <Link className="text blue" to={"/daftar"}>Daftar</Link>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Login;
