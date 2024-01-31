

export default class Leccion {
    nombre: string
    idLeccion: number
    idUnidad: number
    contenido: JSX.Element

    constructor(nombre: string, idUnidad: number, idLeccion: number, contenido:JSX.Element) {
        this.nombre = nombre
        this.idLeccion = idLeccion
        this.idUnidad = idUnidad
        this.contenido = contenido
    }
}