import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProfilEdit = () => {
  const { uuid } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserByUuid = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/uuid/${uuid}`
        );
        setName(response.data.users.name);
        setEmail(response.data.users.email);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserByUuid();
  }, [uuid]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/uuid/${uuid}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/profil");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const cancel = () => {
    navigate("/profil");
  };

  return (
    <article className="content">
      <h2 className="content-title">Edit Profil</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={updateUser}>
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
            <div className="button-container">
              <button type="submit" className="button-green">
                Simpan
              </button>
              <button className="button-blue" onClick={cancel}>
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default ProfilEdit;
