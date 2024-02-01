"use client";
import React, { useEffect } from "react";
import "../../lessonStyles.css";
import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import Leccion from "@/app/model/Leccion";
import parseEditorElement from "@/app/controllers/EditorParser";

export default function LessonBody({ lesson }: { lesson: number }) {
  const [lessonContent, setLessonContent] = React.useState<JSX.Element[]>([]);

  async function obtenerContenidoLeccion() {
    const leccionActual: Leccion = await obtenerLeccionPorId(lesson);
    const lessonContentArray: JSX.Element[] = [];
    let leccionActualJSON = JSON.parse(leccionActual.contenido);
    leccionActualJSON.forEach((elem: any) => {
      let parsedElem = parseEditorElement(elem);
      if (parsedElem) lessonContentArray.push(parsedElem);
    });
    setLessonContent(lessonContentArray);
  }

  useEffect(() => {
    if (lesson) obtenerContenidoLeccion();
  }, [lesson]);

  return (
    <div className="LessonBody">
      {lessonContent.map((elem) => elem)}
      <div className="FillerBlock"></div>
    </div>
  );
}
