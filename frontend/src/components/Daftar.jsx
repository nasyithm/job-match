import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Daftar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("pekerja");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://job-match-api.up.railway.app/users`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <article className="content">
      <h2 className="content-title">Daftar Akun</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={saveUser}>
            <p className="text red">{msg}</p>
            <div className="input-container">
              <label className="text">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
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
            <div className="input-container">
              <label className="text">Konfirmasi Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="******"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Role</label>
              <div className="control">
                <select
                  className="input input-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="pekerja" selected>
                    Pekerja
                  </option>
                  <option value="loker">Loker</option>
                </select>
              </div>
            </div>
            <div className="button-container">
              <button className="button-blue" type="submit">
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Daftar;
