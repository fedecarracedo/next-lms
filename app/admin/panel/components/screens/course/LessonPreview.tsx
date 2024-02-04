import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import parseEditorElement from "@/app/controllers/EditorParser";
import { useEffect, useState } from "react";

export default function LessonEditor({ leccion_id }: { leccion_id: number }) {
  const [lessonContent, setLessonContent] = useState<JSX.Element[]>([]);

  async function handleLessonContent() {
    let lesson = await obtenerLeccionPorId(leccion_id);
    let contenidoJson = JSON.parse(lesson.contenido);
    let contenidoJsx: JSX.Element[] = [];
    contenidoJson.forEach((elem: any) => {
      let parsedEl = parseEditorElement(elem);
      if (parsedEl) contenidoJsx.push(parsedEl);
    });
    setLessonContent(contenidoJsx);
  }

  useEffect(() => {
    handleLessonContent();
  });
  return <div>{lessonContent.map((el) => el)}</div>;
}
