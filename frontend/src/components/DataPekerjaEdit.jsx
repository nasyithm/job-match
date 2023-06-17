import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataPekerjaEdit = () => {
  const { uuid } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("Pria");
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
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
        setDateBirth(response.data.pekerja.dateBirth);
        setReligion(response.data.pekerja.religion);
        setGender(response.data.pekerja.gender);
        setSkill(response.data.pekerja.skill);
        setEducation(response.data.pekerja.education);
        setDescription(response.data.pekerja.description);
        setEmail(response.data.pekerja.email);
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
    formData.append("dateBirth", dateBirth);
    formData.append("religion", religion);
    formData.append("gender", gender);
    formData.append("skill", skill);
    formData.append("education", education);
    formData.append("description", description);
    formData.append("email", email);
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
    navigate(`/data/pekerja/${uuid}`);
  };

  return (
    <article className="content">
      <h2 className="content-title">Edit Data Saya</h2>
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
              <label className="text">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="input-container">
              <label className="text">Nomor Handphone</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Nomor Handphone"
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

export default DataPekerjaEdit;
