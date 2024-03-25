import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombreAutor: {
        type: String,
        required: true,
        minLength: 6,
    },
    nombreReceta: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    ingredientes: {
        type: String,
        required: true,
        minLength: 10,
    },
    descripcion: {
        type: String,
        required: true,
        minLength: 10,
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(
                    value
                );
            },
            message: (props) => `${props.value} no es una url valida`,
        },
    },
});

const Receta = mongoose.model("Receta", recetaSchema);

export default Receta;
