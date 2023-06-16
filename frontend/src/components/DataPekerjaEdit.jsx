import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataPekerjaEdit = () => {
  const { uuid } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [placeDateBirth, setPlaceDateBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
    const getPekerjaByUuid = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pekerja/uuid/${uuid}`
        );
        setName(response.data.pekerja.name);
        setAddress(response.data.pekerja.address);
        setPlaceDateBirth(response.data.pekerja.placeDateBirth);
        setReligion(response.data.pekerja.religion);
        setGender(response.data.pekerja.gender);
        setSkill(response.data.pekerja.skill);
        setEducation(response.data.pekerja.education);
        setDescription(response.data.pekerja.description);
        setPhoneNumber(response.data.pekerja.phoneNumber);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getPekerjaByUuid();
  }, [uuid]);

  const savePekerja = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
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
      await axios.patch(
        `http://localhost:5000/pekerja/uuid/${uuid}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      navigate(`/data/pekerja/${uuid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    navigate(`/data/loker/${uuid}`);
  };

  return (
    <div>
      <form onSubmit={savePekerja}>
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
                <option value="Pria">Pria</option>
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
              Simpan
            </button>
            <button onClick={cancel}>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DataPekerjaEdit;
