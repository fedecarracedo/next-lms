"use client";

import { useEffect, useRef, useState } from "react";
import "./classroomCreatorStyles.css";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Embed from "@editorjs/embed";
import { Button, Card } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function ClassroomLandingEditor() {
  const [editor, setEditor] = useState<any>(null);
  const isReady = useRef(false);
  const router = useRouter();

  async function handleLessonContent() {
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
    };
    setEditor(new EditorJS(config));
  }

  async function handleLessonSave() {
    // editor.save().then(async (savedContent: any) => {
    //   let response = await fetch(
    //     "http://localhost:8080/leccion/modificarLeccion",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         leccion_contenido: JSON.stringify(savedContent),
    //         leccion_id: params.idLeccion,
    //       }),
    //     }
    //   );
    // });
  }

  useEffect(() => {
    if (!isReady.current) {
      handleLessonContent();
      isReady.current = true;
    }
  }, []);
  return (
    <div className="pageBody">
      <h2 className="mb-3">Editor de inicio</h2>
      <Card placeholder={""}>
        <div id="editorjs"></div>
      </Card>
      <Button onClick={handleLessonSave} className="mt-4" placeholder={""}>
        Guardar
      </Button>
    </div>
  );
}
