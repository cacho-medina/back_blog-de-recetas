import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/database.js";
import recetasRouter from "./src/routes/recetas.routes.js";
import usuariosRouter from "./src/routes/usuarios.routes.js";

const app = express();

//setear variable de express
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.info(`servidor corriendo en puerto ${app.get("port")}`);
});

//MIDDLEWARES
app.use(cors()); //permite aceptar conexiones remotas
app.use(morgan("dev")); //muestra informacion de las solicitudes
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite interpretar los datos del body de una solicitud
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", recetasRouter);
app.use("/api", usuariosRouter);
