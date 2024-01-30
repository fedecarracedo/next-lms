import Leccion from "./Leccion"

export default class Unidad {
    nombre: string
    lecciones: Leccion[]
    id: number
    constructor(lecciones: Leccion[], nombre:string, id: number) {
        this.lecciones = lecciones
        this.nombre = nombre
        this.id = id
    }
}