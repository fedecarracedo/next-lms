import Unidad from "../model/Unidad";
import Leccion from "../model/Leccion";
import Curso from "../model/Curso";
import { TipoUsuario } from "../model/UsuarioTipo";
import { OkPacket } from "../model/MySQLResponse";
import { encryptPassword } from "./AuthController";
import Aula from "../model/Aula";

export async function makeGETRequestToApi(ruta: string): Promise<any[]> {
  try {
    const response = await fetch("http://localhost:8081" + ruta).then(
      (result) => {
        return result.json();
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

async function makePOSTRequestToApi(
  ruta: string,
  payload: any
): Promise<OkPacket | undefined> {
  try {
    const response = await fetch("http://localhost:8081" + ruta, {
      method: "POST",
      body: payload,
    }).then((result) => {
      return result.json();
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function obtenerLeccionesUnidad(
  idUnidad: number
): Promise<Leccion[]> {
  try {
    type BloqueRespuesta = {
      leccion_id: number;
      leccion_unidad: number;
      leccion_nombre: string;
      leccion_contenido: string;
    };
    const response: BloqueRespuesta[] = await makeGETRequestToApi(
      `/leccion/getRecordUsing/leccion_unidad/${idUnidad}`
    );

    const lecciones: Leccion[] = response.map((elem) => {
      return new Leccion(
        elem.leccion_nombre,
        elem.leccion_unidad,
        elem.leccion_id,
        elem.leccion_contenido
      );
    });

    return lecciones;
  } catch (error) {
    throw error;
  }
}

export async function obtenerCursosUsuario(
  idUsuario: number
): Promise<Curso[]> {
  try {
    type BloqueRespuesta = {
      curso_descripcion: string;
      curso_id: number;
      curso_nombre: string;
      usuario_curso_curso: number;
      usuario_curso_usuario: number;
    };
    const response: BloqueRespuesta[] = await makeGETRequestToApi(
      `/usuario_curso/obtenerCursosUsuario/${idUsuario}`
    );

    if (response.length > 0) {
      const cursos: Curso[] = response.map((elem) => {
        return new Curso(
          elem.curso_nombre,
          elem.curso_id,
          elem.curso_descripcion
        );
      });
      return cursos;
    }
    return [];
  } catch (error) {
    throw error;
  }
}

export async function obtenerUnidadesCurso(idCurso: number): Promise<Unidad[]> {
  type BloqueRespuesta = {
    unidad_id: number;
    unidad_curso: number;
    unidad_nombre: string;
    unidad_orden: number;
  };
  const response: BloqueRespuesta[] = await makeGETRequestToApi(
    `/unidad/getRecordUsing/unidad_curso/${idCurso}`
  );

  const unidades: Unidad[] = response.map((elem) => {
    return new Unidad(
      elem.unidad_curso,
      elem.unidad_nombre,
      elem.unidad_id,
      elem.unidad_orden
    );
  });

  return unidades;
}

export async function obtenerCursoPorId(idCurso: number): Promise<Curso> {
  type BloqueRespuesta = {
    curso_descripcion: string;
    curso_id: number;
    curso_nombre: string;
  };

  const response: BloqueRespuesta[] = await makeGETRequestToApi(
    `/curso/obtenerSegunId/${idCurso}`
  );

  const cursos: Curso[] = response.map((elem) => {
    return new Curso(elem.curso_nombre, elem.curso_id, elem.curso_descripcion);
  });

  return cursos[0];
}

export async function obtenerLeccionPorId(idLeccion: number): Promise<Leccion> {
  type BloqueRespuesta = {
    leccion_id: number;
    leccion_unidad: number;
    leccion_nombre: string;
    leccion_contenido: string;
  };

  const response: BloqueRespuesta[] = await makeGETRequestToApi(
    `/leccion/obtenerSegunId/${idLeccion}`
  );

  const leccion: Leccion[] = response.map((elem) => {
    return new Leccion(
      elem.leccion_nombre,
      elem.leccion_unidad,
      elem.leccion_id,
      elem.leccion_contenido
    );
  });

  return leccion[0];
}

export async function obtenerRegistrosPorCampo(
  tabla: string,
  campo: string,
  valor: string | number
) {
  const response: any[] = await makeGETRequestToApi(
    `/${tabla}/getRecordUsing/${campo}/${valor}`
  );

  return response;
}

export async function registrarUsuario(
  nombre: string,
  apellido: string,
  email: string,
  clave: string,
  tipo: TipoUsuario
): Promise<number | undefined> {
  try {
    let tipoString: string;
    const claveEncriptada = await encryptPassword(clave);
    switch (tipo) {
      case 0:
        tipoString = "Estudiante";
        break;
      case 1:
        tipoString = "Observador";
        break;
      case 2:
        tipoString = "Editor";
        break;
      case 3:
        tipoString = "Administrador";
        break;
      default:
        tipoString = "Estudiante";
        break;
    }
    const payload = JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
      clave: claveEncriptada,
      tipo: tipoString,
    });
    const response: OkPacket | undefined = await makePOSTRequestToApi(
      `/usuario/registrarUsuario`,
      payload
    );

    if (response) return response.insertId;
  } catch (error) {
    throw error;
  }
}

export async function obtenerTodos(tabla: string) {
  const response = await makeGETRequestToApi(`/${tabla}/obtenerTodos`);
  return response;
}

export async function getUserClassrooms(idUsuario: number): Promise<Aula[]> {
  try {
    const response = await makeGETRequestToApi(
      `/usuario_aula/obtenerAulasUsuario/${idUsuario}`
    );

    if (response.length > 0) {
      const aulas: Aula[] = response.map((elem) => {
        return new Aula(
          elem.aula_nombre,
          elem.aula_id,
          elem.curso_descripcion,
          elem.aula_inicio,
          elem.aula_curso
        );
      });
      return aulas;
    }
    return [];
  } catch (error) {
    throw error;
  }
}
