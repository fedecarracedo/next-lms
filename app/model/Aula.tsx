export default class Aula {
  aula_nombre: string;
  aula_id: number;
  aula_descripcion: string;
  aula_inicio: string;
  aula_curso: number;

  constructor(
    aula_nombre: string,
    aula_id: number,
    aula_descripcion: string,
    aula_inicio: string,
    aula_curso: number
  ) {
    this.aula_nombre = aula_nombre;
    this.aula_id = aula_id;
    this.aula_descripcion = aula_descripcion;
    this.aula_inicio = aula_inicio;
    this.aula_curso = aula_curso;
  }
}
