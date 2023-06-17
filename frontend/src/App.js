import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PekerjaPage from "./pages/PekerjaPage";
import LokerPage from "./pages/LokerPage";
import DetailPekerjaPage from "./pages/DetailPekerjaPage";
import DetailLokerPage from "./pages/DetailLokerPage";
import HomePage from "./pages/HomePage";
import DaftarPage from "./pages/DaftarPage";
import ProfilPage from "./pages/ProfilPage";
import DataLokerPage from "./pages/DataLokerPage";
import DataPekerjaPage from "./pages/DataPekerjaPage";
import DataPekerjaBaruPage from "./pages/DataPekerjaBaruPage";
import DataLokerBaruPage from "./pages/DataLokerBaruPage";
import DataPekerjaEditPage from "./pages/DataPekerjaEditPage";
import DataLokerEditPage from "./pages/DataLokerEditPage";
import ProfilEditPage from "./pages/ProfilEditPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/daftar" element={<DaftarPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/profil/edit/:uuid" element={<ProfilEditPage />} />
          <Route path="/pekerja" element={<PekerjaPage />} />
          <Route path="/pekerja/detail/:id" element={<DetailPekerjaPage />} />
          <Route path="/loker" element={<LokerPage/>} />
          <Route path="/loker/detail/:id" element={<DetailLokerPage />} />
          <Route path="/data/pekerja/:uuid" element={<DataPekerjaPage />} />
          <Route path="/data/pekerja/baru" element={<DataPekerjaBaruPage />} />
          <Route path="/data/pekerja/edit/:uuid" element={<DataPekerjaEditPage />} />
          <Route path="/data/loker/:uuid" element={<DataLokerPage />} />
          <Route path="/data/loker/baru" element={<DataLokerBaruPage />} />
          <Route path="/data/loker/edit/:uuid" element={<DataLokerEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
