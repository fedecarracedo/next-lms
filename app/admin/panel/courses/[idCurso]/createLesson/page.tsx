"use client";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Embed from "@editorjs/embed";

import "./editorStyles.css";

export default function LessonCreator() {
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
  return (
    <div className="pageBody">
      <h1>Editor de leccion</h1>
      <div id="editorjs"></div>
    </div>
  );
}
