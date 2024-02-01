import * as unidades from '../../datosPrueba/unidades.json'
import * as lecciones from '../../datosPrueba/lecciones.json'
import * as cursos from '../../datosPrueba/cursos.json'
import Unidad from '../model/Unidad'
import Leccion from '../model/Leccion'
import Curso from '../model/Curso'
import parseEditorElement from './EditorParser'

function obtenerLeccionesUnidad(idUnidad: number): Leccion[] {
    return lecciones
    .filter(leccion => leccion.idUnidad === idUnidad)
    .map(leccionUnidad => new Leccion(leccionUnidad.name, leccionUnidad.idUnidad, leccionUnidad.idLeccion))
}

export function obtenerContenidoLeccion(idLeccion: number) {
}

export async function obtenerCursosUsuario(idUsuario: number): Promise<Curso[]> {
    try {
        type BloqueRespuesta = {
            curso_descripcion: string,
            curso_id: number,
            curso_nombre: string,
            usuario_curso_curso: number,
            usuario_curso_usuario: number
        }
        const response: BloqueRespuesta[] = await (fetch(`http://localhost:8080/usuario_curso/obtenerCursosUsuario/${idUsuario}`))
        .then((result) => {return result.json()})

        const cursos: Curso[] = response.map((elem) => {
            return new Curso(elem.curso_nombre, elem.curso_id, elem.curso_descripcion)
        })
        
        return cursos
    } catch (error) {
        throw(error)
    }
}


export function obtenerUnidadesCurso(idCurso: number) {
    let unidadesMap = unidades
    .filter(unidad => unidad.idCurso == idCurso)
    .map(unidadCurso => 
        new Unidad(
            obtenerLeccionesUnidad(unidadCurso.idUnidad), 
            unidadCurso.name, 
            unidadCurso.idUnidad
            )
        )
    return unidadesMap
}