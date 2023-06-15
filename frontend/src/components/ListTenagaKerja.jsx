import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListTenagaKerja = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers();
  }, []);

  const getWorkers = async () => {
    const response = await axios.get("http://localhost:5000/pekerja");
    setWorkers(response.data.pekerja);
  };

//   const deleteWorkers = async (userId) => {
//     await axios.delete(`http://localhost:5000/pekerja/${userId}`);
//     getWorkers();
//   };

  return (
    <div>
      <div className="hero"></div>
      <div id="main-content">
        <article className="content">
          <h2 className="content__title">Cari Tenaga Kerja</h2>
          <div id="restaurant-list" className="content__list">
            {workers.map((worker) => (
              <div className="card" key={worker.id}>
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={worker.url}
                    alt={worker.name}
                    title={worker.name}
                  />
                </div>
                <div className="card__content">
                  <h2>
                    <Link to={"/tenagakerja/detail/" + worker.id} className="card__title">
                      {worker.name}
                    </Link>
                  </h2>
                  <p className="card__gender">
                    <b>Jenis Kelamin : </b>
                    {worker.gender}
                  </p>
                  <p className="card__edu">
                    <b>Pendidikan : </b>
                    {worker.education}
                  </p>
                  <p className="card__skill">
                    <b>Keahlian : </b>
                    {worker.skill.slice(0, 100)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ListTenagaKerja;
