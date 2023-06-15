import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const { user } = useSelector((state) => state.auth);

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
        </article>
      </div>
    </div>
  );
};

export default Profil;
