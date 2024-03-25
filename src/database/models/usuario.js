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
        validate: {
            validator: function (value) {
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            },
            message: (props) => `${props.value} no es un email valido`,
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 12,
    },
});

const Usuario = mongoose.model("usuario", userSchema);

export default Usuario;
