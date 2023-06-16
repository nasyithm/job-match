import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TenagaKerja from "./pages/TenagaKerja";
import LowonganKerja from "./pages/LowonganKerja";
import DetailTenagaKerjaPage from "./pages/DetailTenagaKerjaPage";
import DetailLowonganKerjaPage from "./pages/DetailLowonganKerjaPage";
import HomePage from "./pages/HomePage";
import DaftarPage from "./pages/DaftarPage";
import ProfilPage from "./pages/ProfilPage";
import DataLokerPage from "./pages/DataLokerPage";
import DataPekerjaPage from "./pages/DataPekerjaPage";
import DataPekerjaBaruPage from "./pages/DataPekerjaBaruPage";
import DataLokerBaruPage from "./pages/DataLokerBaruPage";
import DataPekerjaEditPage from "./pages/DataPekerjaEditPage";
import DataLokerEditPage from "./pages/DataLokerEditPage";
import UserEditPage from "./pages/UserEditPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/daftar" element={<DaftarPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/user/edit/:uuid" element={<UserEditPage />} />
          <Route path="/data/loker/:uuid" element={<DataLokerPage />} />
          <Route path="/data/loker/baru" element={<DataLokerBaruPage />} />
          <Route path="/data/loker/edit/:uuid" element={<DataLokerEditPage />} />
          <Route path="/data/pekerja/:uuid" element={<DataPekerjaPage />} />
          <Route path="/data/pekerja/baru" element={<DataPekerjaBaruPage />} />
          <Route path="/data/pekerja/edit/:uuid" element={<DataPekerjaEditPage />} />
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
