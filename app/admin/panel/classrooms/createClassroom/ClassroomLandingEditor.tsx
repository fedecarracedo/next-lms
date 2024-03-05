"use client";

import { useEffect, useRef } from "react";
import "./classroomCreatorStyles.css";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Embed from "@editorjs/embed";
import { Card } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function ClassroomLandingEditor({
  setHomeEditor,
}: {
  setHomeEditor: any;
}) {
  const isReady = useRef(false);
  const router = useRouter();

  async function loadEditor() {
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
    setHomeEditor(new EditorJS(config));
  }

  useEffect(() => {
    if (!isReady.current) {
      loadEditor();
      isReady.current = true;
    }
  }, []);
  return (
    <div className="pageBody">
      <h3 className="mb-3">Pagina de inicio</h3>
      <Card className="EditorContainer" placeholder={""}>
        <div id="editorjs"></div>
      </Card>
    </div>
  );
}
