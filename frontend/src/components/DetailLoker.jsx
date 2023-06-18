import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailLoker = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    const response = await axios.get(
      `https://job-match-api.up.railway.app/loker/${id}`
    );
    setJob(response.data.loker);
  };

  return (
    <article className="content">
      <h2 className="content-title">Detail Lowongan Kerja</h2>
      <div className="detail-container">
        <div className="container">
          <div className="detail-image-container">
            <img
              className="detail-image"
              src={job.url}
              alt={job.name}
              title={job.name}
            />
          </div>
        </div>
        <div className="container">
          <div className="detail-content">
            <p className="subtitle">Nama</p>
            <p className="text">{job.name}</p>
            <p className="subtitle">Lokasi</p>
            <p className="text">{job.location}</p>
            <p className="subtitle">Deskripsi</p>
            <p className="text">{job.description}</p>
            <p className="subtitle">Kontak</p>
            <p className="text">{job.contact}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailLoker;
