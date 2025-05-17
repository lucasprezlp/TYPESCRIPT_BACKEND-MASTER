import "dotenv/config";
import express from "express";
import { ConnectDatabase } from "./database";
import bodyParser from "body-parser";
import TodoRoutes from "./routes/todo-list.routes";
import UserRoutes from "./routes/user.routes";
import AuthRoutes from "./routes/auth.routes";
import { validateToken } from "./middleware/jwt.middleware";
import { patitoSecret } from "./middleware/ejemoplo.middeware";

const port = process.env.PORT ?? 4001;

const app = express();
app.use(bodyParser.json());

app.use("/todos", patitoSecret, validateToken, TodoRoutes);
app.use("/users", validateToken, UserRoutes);
app.use("/auth", AuthRoutes);
ConnectDatabase();

app.listen(port, () => {
  console.log(`funcionado en el puerto ${port}`);
});
