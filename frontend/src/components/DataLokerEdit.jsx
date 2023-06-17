import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataLokerEdit = () => {
  const { uuid } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  useEffect(() => {
    const getLokerByUuid = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/loker/uuid/${uuid}`
        );
        setName(response.data.loker.name);
        setLocation(response.data.loker.location);
        setDescription(response.data.loker.description);
        setContact(response.data.loker.contact);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getLokerByUuid();
  }, [uuid]);

  const saveLoker = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("contact", contact);
    formData.append("file", file);
    try {
      await axios.patch(`http://localhost:5000/loker/uuid/${uuid}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate(`/data/loker/${uuid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    navigate(`/data/loker/${uuid}`);
  };

  return (
    <article className="content">
      <h2 className="content-title">Edit Data Saya</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={saveLoker}>
            <p className="text red">{msg}</p>
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
              <button className="button-blue" onClick={cancel}>
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default DataLokerEdit;
