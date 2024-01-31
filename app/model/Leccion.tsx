export default class Leccion {
    nombre: string
    idLeccion: number
    idUnidad: number

    constructor(nombre: string, idUnidad: number, idLeccion: number) {
        this.nombre = nombre
        this.idLeccion = idLeccion
        this.idUnidad = idUnidad
    }
}