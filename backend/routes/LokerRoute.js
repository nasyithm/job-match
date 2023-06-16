import express from "express";
import {
getLoker,
getLokerById,
getLokerByUuid,
saveLoker,
updateLokerById,
updateLokerByUuid,
deleteLokerById,
deleteLokerByUuid
} from "../controllers/LokerController.js";

const router = express.Router();

router.get('/loker', getLoker);
router.get('/loker/:id', getLokerById);
router.get('/loker/uuid/:uuid', getLokerByUuid);
router.post('/loker', saveLoker);
router.patch('/loker/:id', updateLokerById);
router.patch('/loker/uuid/:uuid', updateLokerByUuid);
router.delete('/loker/:id', deleteLokerById);
router.delete('/loker/uuid/:uuid', deleteLokerByUuid);

export default router;