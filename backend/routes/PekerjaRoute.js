import express from "express";
import {
    getPekerja,
    getPekerjaById,
    getPekerjaByUuid,
    savePekerja,
    updatePekerjaById,
    updatePekerjaByUuid,
    deletePekerjaById,
    deletePekerjaByUuid
} from "../controllers/PekerjaController.js";

const router = express.Router();

router.get('/pekerja', getPekerja);
router.get('/pekerja/:id', getPekerjaById);
router.get('/pekerja/uuid/:uuid', getPekerjaByUuid);
router.post('/pekerja', savePekerja);
router.patch('/pekerja/:id', updatePekerjaById);
router.patch('/pekerja/uuid/:uuid', updatePekerjaByUuid);
router.delete('/pekerja/:id', deletePekerjaById);
router.delete('/pekerja/uuid/:uuid', deletePekerjaByUuid);

export default router;
