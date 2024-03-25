import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReceta = [
    check("nombreAutor")
        .notEmpty()
        .withMessage("Nombre de autor es obligatorio")
        .isLength({ min: 6 }),
    check("nombreReceta")
        .notEmpty()
        .withMessage("Nombre de la receta es obligatorio")
        .isLength({ min: 5, max: 50 }),
    check("ingredientes")
        .notEmpty()
        .withMessage("Los ingredientes son obligatorios")
        .isLength({ min: 10 }),
    check("descripcion")
        .notEmpty()
        .withMessage("La descripcion es obligatoria")
        .isLength({ min: 10 }),
    check("imagen")
        .notEmpty()
        .withMessage("La imagen es obligatoria")
        .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
        .withMessage(
            "La imagen debe tener el formato de una url valida y terminar en (png|jpg|jpeg|gif|svg)"
        ),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReceta;
