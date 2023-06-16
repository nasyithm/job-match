import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const { uuid } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserByUuid = async () => {
      try {
        const response = await axios.get(
          `https://job-match-api.up.railway.app/users/uuid/${uuid}`
        );
        setName(response.data.users.name);
        setEmail(response.data.users.email);
        setRole(response.data.users.role);
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
      await axios.patch(`https://job-match-api.up.railway.app/users/uuid/${uuid}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
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
    <div>
      <form onSubmit={updateUser}>
        <p className="has-text-centered">{msg}</p>
        <div className="field">
          <label className="label">Nama</label>
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
        <div className="field">
          <label className="label">Konfirmasi Password</label>
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
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success">
              Simpan
            </button>
            <button onClick={cancel}>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
