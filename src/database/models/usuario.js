import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 40,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 16,
        match: [
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/,
            "Por favor ingrese una contraseña valida",
        ],
    },
});

const Usuario = mongoose.model("usuario", userSchema);

export default Usuario;
