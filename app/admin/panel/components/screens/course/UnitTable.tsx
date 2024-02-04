import {
  obtenerTodos,
  obtenerUnidadesCurso,
} from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UnitAccordeon } from "./UnitAccordeon";

export default function UnitTable({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number | null>>;
}) {
  const [unidades, setUnidades] = useState<Unidad[]>();
  async function cargarUnidades() {
    let cursosDB = await obtenerUnidadesCurso(selected);
    setUnidades(cursosDB);
  }
  useEffect(() => {
    cargarUnidades();
  }, []);
  return (
    <div className="">
      {unidades?.map((unidad) => (
        <UnitAccordeon
          unidad_nombre={unidad.unidad_nombre}
          unidad_id={unidad.unidad_id}
          unidad_curso={unidad.unidad_curso}
        />
      ))}
    </div>
  );
}
