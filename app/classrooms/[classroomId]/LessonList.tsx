import { Card, List, ListItem } from "@material-tailwind/react";
import LessonElement from "./LessonElement";
import { useEffect, useRef, useState } from "react";
import Leccion from "@/app/model/Leccion";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";
import "@/app/admin/panel/courses/courseStyles.css";
import "./listStyles.css";

export default function LessonList({ idUnidad }: { idUnidad: number }) {
  const [lessons, setLessons] = useState<Leccion[]>([]);

  async function loadLessons() {
    const lecciones = await obtenerLeccionesUnidad(idUnidad);
    if (lecciones) setLessons(lecciones);
  }

  useEffect(() => {
    loadLessons();
  }, [lessons]);

  return (
    <Card placeholder={""} className="w-full">
      <ul className="LessonList">
        {lessons?.map((lesson, index) => (
          <li>
            <LessonElement
              leccion_id={lesson.idLeccion}
              leccion_nombre={lesson.nombre}
              setLessons={setLessons}
              key={index}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
