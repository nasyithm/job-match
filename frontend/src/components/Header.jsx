import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    navigate("/profil");
    setOpen(false);
  };

  const handleMenuTwo = async () => {
    if (user.role === "pekerja") {
      const response = await axios.get(
        `https://job-match-api.up.railway.app/pekerja/uuid/${user.uuid}`
      );
      if (response.data.pekerja !== null) {
        navigate(`/data/pekerja/${user.uuid}`);
      } else {
        navigate("/data/pekerja/baru");
      }
    } else if (user.role === "loker") {
      const response = await axios.get(
        `https://job-match-api.up.railway.app/loker/uuid/${user.uuid}`
      );
      if (response.data.loker !== null) {
        navigate(`/data/loker/${user.uuid}`);
      } else {
        navigate("/data/loker/baru");
      }
    }

    setOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="#" id="menu" className="header__menu" onClick={handleToggle}>
        ☰
      </NavLink>
      <div className="header__logo">
        <img src="icons/icon-32.png" alt="" />
        <h1 className="header__title">Job Match</h1>
      </div>
      <nav id="drawer" className={isActive ? "nav open" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/lowongankerja"}>Lowongan Kerja</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/tenagakerja"}>Tenaga Kerja</NavLink>
          </li>
          <li className="nav__item">
            {user ? (
              <div className="dropdown">
                <NavLink onClick={handleOpen}>{user.name}</NavLink>
                {open ? (
                  <ul className="menu">
                    <li className="menu-item">
                      <button onClick={handleMenuOne}>Profil</button>
                    </li>
                    <li className="menu-item">
                      <button onClick={handleMenuTwo}>Data Saya</button>
                    </li>
                    <li className="menu-item">
                      <button onClick={logout}>Logout</button>
                    </li>
                  </ul>
                ) : null}
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
