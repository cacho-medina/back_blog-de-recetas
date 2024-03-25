import { Router } from "express";
import {
    deleteReceta,
    crearReceta,
    getRecetaById,
    getRecetas,
    editarReceta,
} from "../controllers/recetas.controllers.js";

const router = Router();

router.route("/recetas").get(getRecetas).post(crearReceta);
router
    .route("/recetas/:id")
    .get(getRecetaById)
    .delete(deleteReceta)
    .put(editarReceta);

export default router;
