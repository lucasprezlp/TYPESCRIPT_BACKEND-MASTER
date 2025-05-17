/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from "mongoose";

export async function ConnectDatabase() {
  try {
    await connect(process.env.MONGO_URL ?? "");
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Ha ocurrido un error con la base de dato");
  }
}
