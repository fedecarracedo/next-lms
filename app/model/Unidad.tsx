export default class Unidad {
  unidad_nombre: string;
  unidad_curso: number;
  unidad_id: number;
  unidad_orden: number;
  constructor(
    unidad_curso: number,
    unidad_nombre: string,
    unidad_id: number,
    unidad_orden: number
  ) {
    this.unidad_curso = unidad_curso;
    this.unidad_nombre = unidad_nombre;
    this.unidad_id = unidad_id;
    this.unidad_orden = unidad_orden;
  }
}
