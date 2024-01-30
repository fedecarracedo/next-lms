import * as unidades from '../../datosPrueba/unidades.json'
import * as lecciones from '../../datosPrueba/lecciones.json'
import Unidad from '../model/Unidad'
import Leccion from '../model/Leccion'

function obtenerLeccionesUnidad(idUnidad: number): Leccion[] {
    return lecciones.filter(leccion => leccion.idUnidad === idUnidad).map(leccionUnidad => new Leccion(leccionUnidad.name, leccionUnidad.idUnidad, leccionUnidad.idLeccion))
}

export default function obtenerUnidadesCurso(idCurso: number) {
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