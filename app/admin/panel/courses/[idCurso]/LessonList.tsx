import { Card, List } from "@material-tailwind/react";
import LessonElement from "./LessonElement";
import { useEffect, useState } from "react";
import Leccion from "@/app/model/Leccion";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";

export default function LessonList({ idUnidad }: { idUnidad: number }) {
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
            leccion_nombre={lesson.nombre}
            leccion_id={lesson.idLeccion}
          />
        ))}
      </List>
    </Card>
  );
}
