import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DataPekerjaBaru = () => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [placeDateBirth, setPlaceDateBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const savePekerja = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uuid", user.uuid);
    formData.append("name", name);
    formData.append("email", user.email);
    formData.append("address", address);
    formData.append("placeDateBirth", placeDateBirth);
    formData.append("religion", religion);
    formData.append("gender", gender);
    formData.append("skill", skill);
    formData.append("education", education);
    formData.append("description", description);
    formData.append("phoneNumber", phoneNumber);
    formData.append("file", file);
    try {
      await axios.post("https://job-match-api.up.railway.app/pekerja", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate(`/data/pekerja/${user.uuid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={savePekerja}>
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
          <label className="label">Alamat</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Alamat"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tempat Tanggal Lahir</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={placeDateBirth}
              onChange={(e) => setPlaceDateBirth(e.target.value)}
              placeholder="Tempat Tanggal Lahir"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Agama</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              placeholder="Agama"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Jenis Kelamin</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Pria" selected>Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Skill</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Skill"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Pendidikan</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Pendidikan"
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
          <label className="label">No Handphone</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="No Handphone"
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
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DataPekerjaBaru;
