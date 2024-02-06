"use client";

import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import parseEditorElement from "@/app/controllers/EditorParser";
import { useEffect, useState } from "react";
import "../../../../courseStyles.css";

export default function LessonEditor({
  params,
}: {
  params: { idLeccion: number };
}) {
  const [lessonContent, setLessonContent] = useState<JSX.Element[]>([]);

  async function handleLessonContent() {
    let lesson = await obtenerLeccionPorId(params.idLeccion);
    let contenidoJson = JSON.parse(lesson.contenido);
    let contenidoJsx: JSX.Element[] = [];
    contenidoJson.blocks.forEach((elem: any) => {
      let parsedEl = parseEditorElement(elem);
      if (parsedEl) contenidoJsx.push(parsedEl);
    });
    setLessonContent(contenidoJsx);
  }

  useEffect(() => {
    handleLessonContent();
  }, []);
  return <div className="lessonContent">{lessonContent.map((el) => el)}</div>;
}
