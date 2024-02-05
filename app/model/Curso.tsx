export default class Curso {
  curso_nombre: string;
  curso_id: number;
  curso_descripcion: string;

  constructor(
    curso_nombre: string,
    curso_id: number,
    curso_descripcion: string
  ) {
    this.curso_nombre = curso_nombre;
    this.curso_id = curso_id;
    this.curso_descripcion = curso_descripcion;
  }
}
