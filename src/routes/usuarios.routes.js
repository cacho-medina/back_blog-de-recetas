import { Router } from "express";
import { crearUser, getUser } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/usuarios").get(getUser).post(crearUser);

export default router;
