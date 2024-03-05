export default class Aula {
  aula_nombre: string;
  aula_id: number;
  aula_descripcion: string;

  constructor(aula_nombre: string, aula_id: number, aula_descripcion: string) {
    this.aula_nombre = aula_nombre;
    this.aula_id = aula_id;
    this.aula_descripcion = aula_descripcion;
  }
}
