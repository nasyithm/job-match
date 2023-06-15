import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import TenagaKerja from "./pages/TenagaKerja";
import LowonganKerja from "./pages/LowonganKerja";
import DetailTenagaKerjaPage from "./pages/DetailTenagaKerjaPage";
import DetailLowonganKerjaPage from "./pages/DetailLowonganKerjaPage";
import HomePage from "./pages/HomePage";
import DaftarPage from "./pages/DaftarPage";
import ProfilPage from "./pages/ProfilPage";
import DataLokerPage from "./pages/DataLokerPage";
import DataPekerjaPage from "./pages/DataPekerjaPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<DaftarPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/data/loker/:uuid" element={<DataLokerPage />} />
          <Route path="/data/pekerja/:uuid" element={<DataPekerjaPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/tenagakerja" element={<TenagaKerja />} />
          <Route path="/tenagakerja/detail/:id" element={<DetailTenagaKerjaPage />} />
          <Route path="/lowongankerja" element={<LowonganKerja/>} />
          <Route path="/lowongankerja/detail/:id" element={<DetailLowonganKerjaPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
