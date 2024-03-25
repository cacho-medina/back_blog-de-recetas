import { Router } from "express";
import {
    deleteReceta,
    crearReceta,
    getRecetaById,
    getRecetas,
    editarReceta,
} from "../controllers/recetas.controllers.js";
import validacionReceta from "../helpers/validacionReceta.js";

const router = Router();

router.route("/recetas").get(getRecetas).post([validacionReceta], crearReceta);
router
    .route("/recetas/:id")
    .get(getRecetaById)
    .delete(deleteReceta)
    .put([validacionReceta], editarReceta);

export default router;
