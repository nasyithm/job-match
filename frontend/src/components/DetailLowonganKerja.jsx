import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailLowonganKerja = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    const response = await axios.get(`http://localhost:5000/loker/${id}`);
    setJob(response.data.loker);
  };

  return (
    <div>
      <div id="main-content">
        <article className="content">
          <h2 className="content__title">Detail Lowongan Kerja</h2>
          <div className="card">
            <div className="card__header">
              <img
                className="detail__image"
                src={job.url}
                alt={job.name}
                title={job.name}
              />
            </div>
            <div className="card__content">
              <p className="card__name">
                <b>Nama : </b>
                {job.name}
              </p>
              <p className="card__gender">
                <b>Lokasi : </b>
                {job.location}
              </p>
              <p className="card__gender">
                <b>Deskripsi : </b>
                {job.description}
              </p>
              <p className="card__gender">
                <b>Kontak : </b>
                {job.contact}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DetailLowonganKerja;
