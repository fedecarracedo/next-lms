import { Card, List } from "@material-tailwind/react";
import LessonElement from "./LessonElement";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Leccion from "@/app/model/Leccion";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";

export default function LessonList({
  idUnidad,
  setLesson,
}: {
  idUnidad: number;
  setLesson: Dispatch<SetStateAction<number | null>>;
}) {
  const [lessons, setLessons] = useState<Leccion[]>();

  async function loadLessons() {
    const lecciones = await obtenerLeccionesUnidad(idUnidad);
    if (lecciones) setLessons(lecciones);
  }

  useEffect(() => {
    loadLessons();
  }, []);

  return (
    <Card placeholder={""} className="w-full">
      <List placeholder={""}>
        {lessons?.map((lesson) => (
          <LessonElement
            setLesson={setLesson}
            leccion_nombre={lesson.nombre}
            leccion_id={lesson.idLeccion}
          />
        ))}
      </List>
    </Card>
  );
}
