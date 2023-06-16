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
    <div>
      <form onSubmit={saveLoker}>
        <p className="has-text-centered">{msg}</p>
        <div className="field">
          <label className="label">Nama</label>
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
        <div className="field">
          <label className="label">Lokasi</label>
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
        <div className="field">
          <label className="label">Deskripsi</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Kontak</label>
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
        <div className="field">
          <label className="label">Gambar</label>
          <div className="control">
            <div className="file">
              <label className="file-label">
                <input
                  type="file"
                  className="file-input"
                  onChange={loadImage}
                />
                <span className="file-cta">
                  <span className="file-label">Pilih gambar...</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        {preview ? (
          <figure className="image is-128x128">
            <img src={preview} alt="Preview" />
          </figure>
        ) : (
          ""
        )}

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success">
              Simpan
            </button>
            <button onClick={cancel}>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DataLokerEdit;
