import Receta from "../database/models/receta.js";
import resultadoValidacion from "../helpers/resultadoValidacion.js";

export const getRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        res.status(200).json(recetas);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "No se pudo obtener las recetas" });
    }
};

export const crearReceta = async (req, res) => {
    try {
        const nuevo = new Receta(req.body);
        const receta = await nuevo.save();
        res.status(201).json({ message: "Receta creada con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "No se pudo guardar la receta" });
    }
};

export const getRecetaById = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        if (!receta) {
            res.status(404).json({ message: "La receta no fue encontrada" });
        }
        res.status(200).json(receta);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "La receta no fue encontrada" });
    }
};

export const deleteReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        if (!receta) {
            res.status(404).json({ message: "La receta no fue encontrada" });
        }
        const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Receta eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la receta" });
    }
};

export const editarReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        if (!receta) {
            res.status(404).json({ message: "La receta no fue encontrada" });
        }
        const recetaEditada = await Receta.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json({ message: "Receta actualizada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar la receta" });
    }
};
