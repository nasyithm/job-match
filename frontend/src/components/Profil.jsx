import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

function useConfirm(message, onConfirm, onAbort) {
  const confirm = () => {
    if (window.confirm(message)) onConfirm();
    else onAbort();
  };
  return confirm;
}

const Profil = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const handleDelete = async () => {
    if (user.role === "pekerja") {
      try {
        await axios.delete(
          `https://job-match-api.up.railway.app/pekerja/uuid/${user.uuid}`
        );
      } catch (error) {
        console.log(error);
      }
    } else if (user.role === "loker") {
      try {
        await axios.delete(
          `https://job-match-api.up.railway.app/loker/uuid/${user.uuid}`
        );
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.delete(
        `https://job-match-api.up.railway.app/users/uuid/${user.uuid}`
      );
    } catch (error) {
      console.log(error);
    }

    logout();
  };

  const handleAbort = () => {
    navigate("/profil");
  };

  const confirmDelete = useConfirm(
    "Apakah benar Anda ingin menghapus akun? Seluruh data akan dihapus dan tidak dapat dikembalikan!",
    handleDelete,
    handleAbort
  );

  const editUser = () => {
    navigate(`/profil/edit/${user.uuid}`);
  };

  return (
    <article className="content">
      <h2 className="content-title">Profil</h2>
      <div className="container">
        <div className="detail-content">
          <p className="subtitle">Nama</p>
          <p className="text">{user.name}</p>
          <p className="subtitle">Email</p>
          <p className="text">{user.email}</p>
          <p className="subtitle">Role</p>
          <p className="text">{user.role}</p>
          <div className="button-container">
            <button className="button-yellow" onClick={editUser}>
              Edit Profil
            </button>
            <button className="button-red" onClick={confirmDelete}>
              Hapus Akun
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Profil;
