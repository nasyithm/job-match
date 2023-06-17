import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DataLokerBaru = () => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveLoker = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uuid", user.uuid);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("contact", contact);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/loker", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate(`/data/loker/${user.uuid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="content">
      <h2 className="content-title">Isi Data Saya</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={saveLoker}>
            <div className="input-container">
              <label className="text">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Lokasi</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Lokasi"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Deskripsi</label>
              <div className="control">
                <textarea
                  className="input"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi"
                ></textarea>
              </div>
            </div>
            <div className="input-container">
              <label className="text">Kontak</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Kontak"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Gambar</label>
              <div className="input">
                <input
                  type="file"
                  accept="image/*"
                  className="input-file"
                  onChange={loadImage}
                />
                {preview ? (
                  <img className="image-preview" src={preview} alt="Preview" />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="button-green">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default DataLokerBaru;
