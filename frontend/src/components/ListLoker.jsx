import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListLoker = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const response = await axios.get(
      "https://job-match-api.up.railway.app/loker"
    );
    setJobs(response.data.loker);
  };

  return (
    <article className="content">
      <h2 className="content-title">Cari Lowongan Kerja</h2>
      <div className="content-list">
        {jobs.map((job) => (
          <div className="card" key={job.id}>
            <div className="card-header">
              <img
                className="card-thumb lazyload"
                data-src={job.url}
                alt={job.name}
                title={job.name}
              />
            </div>
            <div className="card-content">
              <h2>
                <Link to={"/loker/detail/" + job.id} className="card-title">
                  {job.name}
                </Link>
              </h2>
              <p className="subtitle">Lokasi</p>
              <p className="text">{job.location}</p>
              <p className="subtitle">Deskripsi</p>
              <p className="text">{job.description.slice(0, 100)}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ListLoker;
