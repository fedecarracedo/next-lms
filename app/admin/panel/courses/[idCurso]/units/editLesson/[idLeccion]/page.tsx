"use client";

import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import { useEffect, useRef, useState } from "react";
import "../../[idUnidad]/createLesson/editorStyles.css";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Embed from "@editorjs/embed";
import { Button } from "@material-tailwind/react";

export default function LessonEditor({
  params,
}: {
  params: { idLeccion: number };
}) {
  const [editor, setEditor] = useState<any>(null);
  const isReady = useRef(false);

  async function handleLessonContent() {
    let lesson = await obtenerLeccionPorId(params.idLeccion);
    let contenidoJson = JSON.parse(lesson.contenido);
    let config = {
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link"],
          config: {
            placeholder: "Encabezado",
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
        },
      },
      data: contenidoJson,
    };
    setEditor(new EditorJS(config));
  }

  async function handleLessonSave() {
    editor.save().then(async (savedContent: any) => {
      let response = await fetch(
        "http://localhost:8080/leccion/modificarLeccion",
        {
          method: "POST",
          body: JSON.stringify({
            leccion_contenido: JSON.stringify(savedContent),
          }),
        }
      );
      console.log(response);
    });
  }

  useEffect(() => {
    if (!isReady.current) {
      handleLessonContent();
      isReady.current = true;
    }
  }, []);
  return (
    <div className="pageBody">
      <h2 className="mb-3">Editor de leccion</h2>
      <div id="editorjs"></div>
      <Button onClick={handleLessonSave} className="mt-4" placeholder={""}>
        Guardar
      </Button>
    </div>
  );
}
