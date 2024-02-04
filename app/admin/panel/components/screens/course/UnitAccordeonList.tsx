import {
  obtenerTodos,
  obtenerUnidadesCurso,
} from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UnitAccordeon } from "./UnitAccordeon";
import LessonEditor from "./LessonPreview";

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
    console.log(lesson);
  }, [lesson]);
  return lesson == null ? (
    <div className="">
      {unidades?.map((unidad) => (
        <UnitAccordeon
          setLesson={setLesson}
          unidad_nombre={unidad.unidad_nombre}
          unidad_id={unidad.unidad_id}
          unidad_curso={unidad.unidad_curso}
        />
      ))}
    </div>
  ) : (
    <LessonEditor leccion_id={lesson} />
  );
}
