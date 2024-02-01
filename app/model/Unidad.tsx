export default class Unidad {
  unidad_nombre: string;
  unidad_curso: number;
  unidad_id: number;
  constructor(unidad_curso: number, unidad_nombre: string, unidad_id: number) {
    this.unidad_curso = unidad_curso;
    this.unidad_nombre = unidad_nombre;
    this.unidad_id = unidad_id;
  }
}
