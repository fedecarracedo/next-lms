"use client";

import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import { useEffect, useRef, useState } from "react";
import "../../editorStyles.css";

import Leccion from "@/app/model/Leccion";
import parseEditorElement from "@/app/controllers/EditorParser";

export default function LessonPreview({
  params,
}: {
  params: { idLeccion: number };
}) {
  const [lesson, setLesson] = useState<Leccion | null>(null);
  const [lessonContent, setLessonContent] = useState<JSX.Element[]>([]);

  async function loadLesson() {
    let leccion: Leccion = await obtenerLeccionPorId(params.idLeccion);
    let contenidoLeccion = JSON.parse(leccion.contenido);
    let contenidoJsx: any[] = [];
    contenidoLeccion.blocks.forEach((elem: any) => {
      const jsxElem = parseEditorElement(elem);
      contenidoJsx.push(jsxElem);
    });
    setLessonContent(contenidoJsx);
  }

  useEffect(() => {
    loadLesson();
  }, []);
  return (
    <div className="pageBody">
      <h2 className="mb-3">Vista previa</h2>
      {lessonContent.map((elem) => elem)}
    </div>
  );
}
