"use client";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Embed from "@editorjs/embed";

import "./editorStyles.css";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useRef } from "react";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";

export default function LessonCreator({
  params,
}: {
  params: { idCurso: number; idUnidad: number };
}) {
  const lessonInputRef = useRef<HTMLInputElement>(null);
  const editor = new EditorJS({
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
  });

  async function handleCreateLesson() {
    const leccionesUnidad = await obtenerLeccionesUnidad(params.idUnidad);
    console.log(leccionesUnidad);
    editor.save().then(async (outputData) => {
      const response = await fetch(
        "http://localhost:8080/leccion/crearLeccion",
        {
          method: "POST",
          body: JSON.stringify({
            leccion_contenido: JSON.stringify(outputData),
            leccion_nombre: lessonInputRef.current?.value,
            leccion_unidad: params.idUnidad,
            leccion_orden: leccionesUnidad.length,
          }),
        }
      );
    });
  }
  return (
    <div className="pageBody">
      <h1>Editor de leccion</h1>
      <div id="editorjs"></div>
      <div className="mt-5">
        <Typography placeholder={""} variant="h6" color="blue-gray">
          Lesson name
        </Typography>
        <Input
          crossOrigin={""}
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          inputRef={lessonInputRef}
        />
      </div>
      <Button onClick={handleCreateLesson} className="mt-4" placeholder={""}>
        Guardar
      </Button>
    </div>
  );
}
