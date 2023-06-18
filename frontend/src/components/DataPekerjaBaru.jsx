import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DataPekerjaBaru = () => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("Pria");
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
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
    formData.append("dateBirth", dateBirth);
    formData.append("religion", religion);
    formData.append("gender", gender);
    formData.append("skill", skill);
    formData.append("education", education);
    formData.append("description", description);
    formData.append("phoneNumber", phoneNumber);
    formData.append("file", file);
    try {
      await axios.post(
        "https://job-match-api.up.railway.app/pekerja",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      navigate(`/data/pekerja/${user.uuid}`);
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  return (
    <article className="content">
      <h2 className="content-title">Isi Data Saya</h2>
      <div className="container">
        <div className="detail-content">
          <form onSubmit={savePekerja}>
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
              <label className="text">Alamat</label>
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
            <div className="input-container">
              <label className="text">Tanggal Lahir</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={dateBirth}
                  onChange={(e) => setDateBirth(e.target.value)}
                  placeholder="Tanggal Lahir"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Agama</label>
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
            <div className="input-container">
              <label className="text">Jenis Kelamin</label>
              <div className="control">
                <select
                  className="input input-select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Pria" selected>
                    Pria
                  </option>
                  <option value="Wanita">Wanita</option>
                </select>
              </div>
            </div>
            <div className="input-container">
              <label className="text">Skill</label>
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
            <div className="input-container">
              <label className="text">Pendidikan</label>
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
              <label className="text">No Handphone</label>
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

export default DataPekerjaBaru;
