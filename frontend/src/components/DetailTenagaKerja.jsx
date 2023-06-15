import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailTenagaKerja = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    getWorker();
  }, []);

  const getWorker = async () => {
    const response = await axios.get(`http://localhost:5000/pekerja/${id}`);
    setWorker(response.data.pekerja);
  };

  return (
    <div>
      <div id="main-content">
        <article className="content">
          <h2 className="content__title">Detail Tenaga Kerja</h2>
            <div className="card">
              <div className="card__header">
                <img
                  className="detail__image"
                  src={worker.url}
                  alt={worker.name}
                  title={worker.name}
                />
              </div>
              <div className="card__content">
                <p className="card__name">
                  <b>Nama : </b>
                  {worker.name}
                </p>
                <p className="card__gender">
                  <b>Alamat : </b>
                  {worker.address}
                </p>
                <p className="card__gender">
                  <b>Jenis Kelamin : </b>
                  {worker.gender}
                </p>
                <p className="card__gender">
                  <b>Tempat Tanggal Lahir : </b>
                  {worker.placeDateBirth}
                </p>
                <p className="card__gender">
                  <b>Agama : </b>
                  {worker.religion}
                </p>
                <p className="card__edu">
                  <b>Pendidikan : </b>
                  {worker.education}
                </p>
                <p className="card__skill">
                  <b>Keahlian : </b>
                  {worker.skill}
                </p>
                <p className="card__skill">
                  <b>Deskripsi : </b>
                  {worker.description}
                </p>
                <p className="card__skill">
                  <b>Email : </b>
                  {worker.email}
                </p>
                <p className="card__skill">
                  <b>No Handphone : </b>
                  {worker.phoneNumber}
                </p>
              </div>
            </div>
        </article>
      </div>
    </div>
  );
};

export default DetailTenagaKerja;
