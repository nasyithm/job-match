import express from "express";
import {
    getUsers,
    getUserById,
    getUserByUuid,
    createUser,
    updateUserById,
    updateUserByUuid,
    deleteUserById,
    deleteUserByUuid
} from "../controllers/UsersController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.get('/users/uuid/:uuid', verifyUser, getUserByUuid);
router.post('/users', createUser);
router.patch('/users/:id', verifyUser, updateUserById);
router.patch('/users/uuid/:uuid', verifyUser, updateUserByUuid);
router.delete('/users/:id', verifyUser, deleteUserById);
router.delete('/users/uuid/:uuid', verifyUser, deleteUserByUuid);

export default router;