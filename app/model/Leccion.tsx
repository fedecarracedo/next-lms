export default class Leccion {
    nombre: string
    idLeccion: number
    idUnidad: number
    contenido: string

    constructor(nombre: string, idUnidad: number, idLeccion: number, contenido: string) {
        this.nombre = nombre
        this.idLeccion = idLeccion
        this.idUnidad = idUnidad
        this.contenido = contenido
    }
}