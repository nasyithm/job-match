import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataPekerja = () => {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    getWorker();
  }, []);

  const getWorker = async () => {
    const response = await axios.get(
      `https://job-match-api.up.railway.app/pekerja/uuid/${uuid}`
    );
    setWorker(response.data.pekerja);
  };

  const editData = () => {
    navigate(`/data/pekerja/edit/${uuid}`);
  };

  return (
    <article className="content">
      <h2 className="content-title">Data Saya</h2>
      <div className="detail-container">
        <div className="container">
          <div className="detail-image-container">
            <img
              className="detail-image"
              src={worker.url}
              alt={worker.name}
              title={worker.name}
            />
          </div>
        </div>
        <div className="container">
          <div className="detail-content">
            <p className="subtitle">Nama</p>
            <p className="text">{worker.name}</p>
            <p className="subtitle">Alamat</p>
            <p className="text">{worker.address}</p>
            <p className="subtitle">Jenis Kelamin</p>
            <p className="text">{worker.gender}</p>
            <p className="subtitle">Tanggal Lahir</p>
            <p className="text">{worker.dateBirth}</p>
            <p className="subtitle">Agama</p>
            <p className="text">{worker.religion}</p>
            <p className="subtitle">Pendidikan</p>
            <p className="text">{worker.education}</p>
            <p className="subtitle">Skill</p>
            <p className="text">{worker.skill}</p>
            <p className="subtitle">Deskripsi</p>
            <p className="text">{worker.description}</p>
            <p className="subtitle">Email</p>
            <p className="text">{worker.email}</p>
            <p className="subtitle">Nomor Handphone</p>
            <p className="text">{worker.phoneNumber}</p>
            <div className="button-container">
              <button className="button-yellow" onClick={editData}>
                Edit Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DataPekerja;
