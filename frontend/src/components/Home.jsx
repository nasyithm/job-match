import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const daftar = () => {
    navigate("/daftar");
  };

  return (
    <article>
      <section className="hero"></section>
      <section className="container-full">
        <h2>Apa itu Job Match?</h2>
        <p className="text">
          Job Match merupakan platform pencarian tenaga kerja dan lowongan kerja
          sesuai kriteria yang diinginkan dan ditujukan untuk pekerjaan kecil,
          umkm, sampai pekerjaan skala besar. Job Match adalah sebuah platform
          mencari lowongan pekerjaan dan tenaga kerja yang sesuai dengan
          keinginan anda. Aplikasi pencarian tenaga kerja ini dikembangkan
          bertujuan untuk memudahkan perusahaan dalam mencari calon pekerja yang
          sesuai dengan kriteria yang dibutuhkan.
        </p>
        <h2>---</h2>
        <h2>Bagaimana menggunakan website ini?</h2>
        <p className="text">
          <b>
            1. Anda dapat mendaftar akun terlebih dahulu dengan memilih salah
            satu role antara Pekerja atau Loker
          </b>
          <br />
          (Role Pekerja memiliki fungsi sebagai akun data pekerja yang akan
          ditampilkan pada halaman List Pekerja dan Role Loker memiliki fungsi
          sebagai akun data lowongan kerja yang akan ditampilkan pada halaman
          List Lowongan Kerja)
          <br />
          <b>
            2. Setelah mendaftar akun Anda dapat mengisi data pada halaman Data
            Saya agar dapat ditampilkan pada halaman Pekerja atau Loker
          </b>
          <br />
          <b>
            3. Setelah mendaftar Anda dapat melihat data pekerja atau loker lain
            yang ada, mengedit profil, edit data pribadi, dan sebagainya
          </b>
        </p>
        <h2>---</h2>
        <h2>Tertarik untuk mendaftar?</h2>
        <button className="button-secondary" onClick={daftar}>
          DAFTAR
        </button>
      </section>
    </article>
  );
};

export default Home;
