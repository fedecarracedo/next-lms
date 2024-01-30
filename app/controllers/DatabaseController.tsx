import * as unidades from '../../datosPrueba/unidades.json'
import * as lecciones from '../../datosPrueba/lecciones.json'
import * as cursos from '../../datosPrueba/cursos.json'
import Unidad from '../model/Unidad'
import Leccion from '../model/Leccion'
import Curso from '../model/Curso'

function obtenerLeccionesUnidad(idUnidad: number): Leccion[] {
    return lecciones.filter(leccion => leccion.idUnidad === idUnidad).map(leccionUnidad => new Leccion(leccionUnidad.name, leccionUnidad.idUnidad, leccionUnidad.idLeccion, leccionUnidad.contenido))
}

export function obtenerCursoPorId(idCurso: number): Curso {
    return cursos
    .filter((curso) => curso.id == idCurso)
    .map(cursoFiltrado => new Curso(cursoFiltrado.name, cursoFiltrado.id, cursoFiltrado.description))[0]
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