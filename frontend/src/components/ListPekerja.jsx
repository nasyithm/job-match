import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPekerja = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers();
  }, []);

  const getWorkers = async () => {
    const response = await axios.get(
      "https://job-match-api.up.railway.app/pekerja"
    );
    setWorkers(response.data.pekerja);
  };

  return (
    <article className="content">
      <h2 className="content-title">Cari Pekerja</h2>
      <div className="content-list">
        {workers.map((worker) => (
          <div className="card" key={worker.id}>
            <div className="card-header">
              <img
                className="card-thumb lazyload"
                data-src={worker.url}
                alt={worker.name}
                title={worker.name}
              />
            </div>
            <div className="card-content">
              <h2>
                <Link
                  to={"/pekerja/detail/" + worker.id}
                  className="card-title"
                >
                  {worker.name}
                </Link>
              </h2>
              <p className="subtitle">Pendidikan</p>
              <p>{worker.education}</p>
              <p className="subtitle">Keahlian</p>
              <p>{worker.skill.slice(0, 100)}</p>
              <p className="subtitle">Jenis Kelamin</p>
              <p>{worker.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ListPekerja;
