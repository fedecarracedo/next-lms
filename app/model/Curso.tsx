export default class Curso {
  nombre: string;
  idCurso: number;
  descripcion: string;

  constructor(nombre: string, idCurso: number, descripcion: string) {
    this.nombre = nombre;
    this.idCurso = idCurso;
    this.descripcion = descripcion;
  }
}
