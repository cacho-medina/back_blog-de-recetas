import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
    check("nombre")
        .notEmpty()
        .withMessage("El nombre y apellido del usuario son obligatorios")
        .isLength({ min: 3, max: 40 })
        .withMessage("El nombre debe tener entre 3 y 40 caracteres"),
    check("username")
        .notEmpty()
        .withMessage("El username es obligatorio")
        .isLength({ min: 3, max: 40 })
        .withMessage("El username debe tener entre 3 y 40 caracteres"),
    check("email")
        .notEmpty()
        .withMessage("El correo del usuario es obligatorio")
        .matches(/.+\@.+\..+/)
        .withMessage("El correo electronico debe ser valido"),
    check("password")
        .notEmpty()
        .withMessage("la contraseña es obligatoria")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/
        )
        .withMessage(
            "La contraseña debe tener al menos una letra minuscula, una letra mayuscula, un numero y un caracter especial"
        )
        .isLength({ min: 8, max: 16 })
        .withMessage("La contraseña debe tener entre 8 y 16 caracteres"),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
