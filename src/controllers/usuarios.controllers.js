import Usuario from "../database/models/usuario.js";

export const crearUser = async (req, res) => {
    try {
        const user = new Usuario(req.body);
        const nuevoUser = await user.save();
        res.status(201).json({ message: "Usuario creado con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al crear usuario" });
    }
};

export const getUser = async (req, res) => {
    try {
        const users = await Usuario.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener los usuarios" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({
                message: "No se encontro al usuario requerido",
            });
        }
        const deleted = await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Usuario eliminado con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al eliminar el usuario" });
    }
};

