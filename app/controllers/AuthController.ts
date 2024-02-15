import { obtenerRegistrosPorCampo } from "./DatabaseController";

const bcrypt = require("bcryptjs");

export async function encryptPassword(password: string): Promise<string> {
  let hashedPassword: string = await bcrypt
    .hash(password, 10)
    .then((hash: string) => hash);
  return hashedPassword;
}

export async function autenticarUsuario(
  email: string,
  password: string
): Promise<string | undefined> {
  try {
    let usuario = await obtenerRegistrosPorCampo(
      "usuario",
      "usuario_email",
      email
    );
    let usuarioDb = usuario[0];
    let esClaveValida = await bcrypt.compare(
      password,
      usuarioDb[0].usuario_clave
    );
    if (usuario && esClaveValida) {
      let userDataString = JSON.stringify({
        name: usuarioDb.usuario_nombre,
        surname: usuarioDb.usuario_apellido,
        email: usuarioDb.usuario_email,
        id: usuarioDb.usuario_id,
        tipo: usuarioDb.usuario_tipo,
      });
      return userDataString;
    }
  } catch (error) {
    throw error;
  }
}
