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

export function obtenerContenidoLeccion(idLeccion: number): JSX.Element[] {
    let JSXContent : JSX.Element[] = []
    lecciones
    .find(leccion => leccion.idLeccion == idLeccion)?.contenido
    .forEach(element => {
        let reactElem: JSX.Element | undefined = parseEditorElement(element)
        reactElem ? JSXContent.push(reactElem) : ""
    })
    return JSXContent
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