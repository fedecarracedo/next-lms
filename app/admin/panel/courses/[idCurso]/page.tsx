"use client";

import { obtenerUnidadesCurso } from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import { useEffect, useState } from "react";
import { UnitAccordeon } from "./UnitAccordeon";
import LessonList from "./LessonList";

export default function UnitAccordeonList({
  params,
}: {
  params: { idCurso: number };
}) {
  const [unidades, setUnidades] = useState<Unidad[]>();
  async function cargarUnidades() {
    let cursosDB = await obtenerUnidadesCurso(params.idCurso);
    setUnidades(cursosDB);
  }
  useEffect(() => {
    cargarUnidades();
  }, []);
  return (
    <div>
      {unidades?.map((unidad) => (
        <UnitAccordeon unidad_nombre={unidad.unidad_nombre}>
          <LessonList idUnidad={unidad.unidad_id} />
        </UnitAccordeon>
      ))}
    </div>
  );
}
