import { Router } from "express";
import {
    crearUser,
    deleteUser,
    getUser,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router.route("/usuarios").get(getUser).post([validacionUsuario], crearUser);
router.route("/usuario/:id").delete(deleteUser);

export default router;
