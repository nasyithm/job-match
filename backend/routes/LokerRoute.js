import express from "express";
import {
getLoker,
getLokerById,
getLokerByUuid,
saveLoker,
updateLoker,
deleteLoker
} from "../controllers/LokerController.js";

const router = express.Router();

router.get('/loker', getLoker);
router.get('/loker/:id', getLokerById);
router.get('/loker/uuid/:uuid', getLokerByUuid);
router.post('/loker', saveLoker);
router.patch('/loker/:id', updateLoker);
router.delete('/loker/:id', deleteLoker);

export default router;