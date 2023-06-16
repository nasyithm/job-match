import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListLowonganKerja = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const response = await axios.get("https://job-match-api.up.railway.app/loker");
    setJobs(response.data.loker);
  };

  return (
    <div>
      <div className="hero"></div>
      <div id="main-content">
        <article className="content">
          <h2 className="content__title">Cari Lowongan Kerja</h2>
          <div id="restaurant-list" className="content__list">
            {jobs.map((job) => (
              <div className="card" key={job.id}>
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={job.url}
                    alt={job.name}
                    title={job.name}
                  />
                </div>
                <div className="card__content">
                  <h2>
                  <Link to={"/lowongankerja/detail/" + job.id} className="card__title">
                      {job.name}
                    </Link>
                  </h2>
                  <p className="card__age">
                    <b>Lokasi : </b>
                    {job.location}
                  </p>
                  <p className="card__edu">
                    <b>Deskripsi : </b>
                    {job.description.slice(0, 100)}
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

export default ListLowonganKerja;
