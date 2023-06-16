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
        await axios.delete(`https://job-match-api.up.railway.app/pekerja/uuid/${user.uuid}`);
      } catch (error) {
        console.log(error);
      }
    } else if (user.role === "loker") {
      try {
        await axios.delete(`https://job-match-api.up.railway.app/loker/uuid/${user.uuid}`);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.delete(`https://job-match-api.up.railway.app/users/uuid/${user.uuid}`);
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
    navigate(`/user/edit/${user.uuid}`);
  };

  return (
    <div>
      <div id="main-content">
        <article className="content">
          <h2 className="content__title">Profil</h2>
          <div className="card">
            <div className="card__content">
              <p className="card__name">
                <b>Nama : </b>
                {user.name}
              </p>
              <p className="card__gender">
                <b>Email : </b>
                {user.email}
              </p>
              <p className="card__gender">
                <b>Role : </b>
                {user.role}
              </p>
            </div>
          </div>
          <button onClick={editUser}>Edit Profil</button>
          <button onClick={confirmDelete}>Hapus Akun</button>
        </article>
      </div>
    </div>
  );
};

export default Profil;
