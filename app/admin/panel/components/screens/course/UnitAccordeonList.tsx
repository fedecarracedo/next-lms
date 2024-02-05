import {
  obtenerTodos,
  obtenerUnidadesCurso,
} from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UnitAccordeon } from "./UnitAccordeon";
import LessonEditor from "./LessonPreview";
import LessonList from "./LessonList";

export default function UnitAccordeonList({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number | null>>;
}) {
  const [lesson, setLesson] = useState<number | null>(null);
  const [unidades, setUnidades] = useState<Unidad[]>();
  async function cargarUnidades() {
    let cursosDB = await obtenerUnidadesCurso(selected);
    setUnidades(cursosDB);
  }
  useEffect(() => {
    cargarUnidades();
  }, [lesson]);
  return lesson == null ? (
    <div className="">
      {unidades?.map((unidad) => (
        <UnitAccordeon unidad_nombre={unidad.unidad_nombre}>
          <LessonList idUnidad={unidad.unidad_id} setLesson={setLesson} />
        </UnitAccordeon>
      ))}
    </div>
  ) : (
    <LessonEditor leccion_id={lesson} />
  );
}
