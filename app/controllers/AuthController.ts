import { obtenerRegistroPorCampo } from "./DatabaseController";

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
    let usuario = await obtenerRegistroPorCampo(
      "usuario",
      "usuario_email",
      email
    );
    let esClaveValida = await bcrypt.compare(password, usuario?.usuario_clave);
    if (usuario && esClaveValida) {
      let userDataString = JSON.stringify({
        name: usuario.usuario_nombre,
        surname: usuario.usuario_apellido,
        email: usuario.usuario_email,
        id: usuario.usuario_id,
      });
      return userDataString;
    }
  } catch (error) {
    throw error;
  }
}
