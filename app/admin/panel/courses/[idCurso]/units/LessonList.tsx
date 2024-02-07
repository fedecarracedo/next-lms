import { Card, List } from "@material-tailwind/react";
import LessonElement from "./LessonElement";
import { useEffect, useRef, useState } from "react";
import Leccion from "@/app/model/Leccion";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";
import "@/app/admin/panel/courses/courseStyles.css";

export default function LessonList({ idUnidad }: { idUnidad: number }) {
  const [lessons, setLessons] = useState<Leccion[]>([]);
  const [newLesson, setNewLesson] = useState(false);

  const lessonNameRef = useRef(null);

  async function loadLessons() {
    const lecciones = await obtenerLeccionesUnidad(idUnidad);
    if (lecciones) setLessons(lecciones);
  }

  async function handleNewLesson() {
    // @ts-ignore
    if (!lessonNameRef.current.value) setNewLesson(false);
    else {
      let payload = {
        leccion_unidad: idUnidad,
        // @ts-ignore
        leccion_nombre: lessonNameRef.current.value,
        leccion_contenido: JSON.stringify({ blocks: [] }),
      };
      let response = await fetch("http://localhost:8080/leccion/crearLeccion", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setNewLesson(false);
    }
  }

  useEffect(() => {
    loadLessons();
  }, [newLesson]);

  return (
    <Card placeholder={""} className="w-full">
      <List placeholder={""}>
        {lessons?.map((lesson) => (
          <LessonElement
            leccion_nombre={lesson.nombre}
            leccion_id={lesson.idLeccion}
          />
        ))}
        {newLesson && (
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nueva leccion"
            required
            autoFocus
            onBlur={() => handleNewLesson()}
            onKeyDown={(e) => (e.key === "Enter" ? handleNewLesson() : "")}
            ref={lessonNameRef}
          />
        )}
        {!newLesson && (
          <div
            className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 lessonPlaceholder"
            onClick={() => setNewLesson(true)}
          >
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        )}
      </List>
    </Card>
  );
}
