import Unidad from '../model/Unidad'
import Leccion from '../model/Leccion'
import Curso from '../model/Curso'

export async function obtenerLeccionesUnidad(idUnidad: number): Promise<Leccion[]> {
    try {
        type BloqueRespuesta = {
            leccion_id: number,
            leccion_unidad: number,
            leccion_nombre: string,
            leccion_contenido: string
        }
        const response: BloqueRespuesta[] = await (fetch(`http://localhost:8080/leccion/obtenerLeccionesUnidad/${idUnidad}`))
        .then((result) => {return result.json()})

        const lecciones: Leccion[] = response.map((elem) => {
            return new Leccion(elem.leccion_nombre, elem.leccion_unidad, elem.leccion_id, elem.leccion_contenido)
        })
        
        return lecciones
    } catch (error) {
        throw(error)
    }
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


export async function obtenerUnidadesCurso(idCurso: number): Promise<Unidad[]> {
    type BloqueRespuesta = {
        unidad_id: number,
        unidad_curso: number,
        unidad_nombre: string
    }
    const response: BloqueRespuesta[] = await (fetch(`http://localhost:8080/unidad/obtenerUnidadesCurso/${idCurso}`))
        .then((result) => {return result.json()})
    
    const unidades: Unidad[] = response.map((elem) => {
        return new Unidad(elem.unidad_curso, elem.unidad_nombre, elem.unidad_id)
    })

    return unidades
}

export async function obtenerCursoPorId(idCurso: number): Promise<Curso> {
    type BloqueRespuesta = {
        curso_descripcion: string,
        curso_id: number,
        curso_nombre: string
    }

    const response: BloqueRespuesta[] = await (fetch(`http://localhost:8080/curso/obtenerSegunId/${idCurso}`))
    .then((result) => {return result.json()})

    const cursos: Curso[] = response.map((elem) => {
        return new Curso(elem.curso_nombre, elem.curso_id, elem.curso_descripcion)
    })

    return cursos[0]
}

export async function obtenerLeccionPorId(idLeccion: number): Promise<Leccion> {
    type BloqueRespuesta = {
        leccion_id: number,
        leccion_unidad: number,
        leccion_nombre: string,
        leccion_contenido: string
    }

    const response: BloqueRespuesta[] = await (fetch(`http://localhost:8080/leccion/obtenerSegunId/${idLeccion}`))
    .then((result) => {return result.json()})

    const leccion: Leccion[] = response.map((elem) => {
        return new Leccion(elem.leccion_nombre, elem.leccion_unidad, elem.leccion_id, elem.leccion_contenido)
    })

    return leccion[0]
}