"use client";
import React, { useEffect, useState } from "react";
import "../../lessonStyles.css";
import { obtenerLeccionPorId } from "@/app/controllers/DatabaseController";
import Leccion from "@/app/model/Leccion";
import parseEditorElement from "@/app/controllers/EditorParser";
import { Button } from "@material-tailwind/react";
import { UserData } from "@/app/model/UserData";

export default function LessonBody({
  lesson,
  setLessonCompleted,
}: {
  lesson: number;
  setLessonCompleted: any;
}) {
  const [lessonContent, setLessonContent] = React.useState<JSX.Element[]>([]);
  const [userData, setUserData] = useState<any>(null);

  async function loadUserData() {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const userDataObj: UserData = JSON.parse(userDataString);
      setUserData(userDataObj);
    }
  }

  async function handleCompleteLesson() {
    if (userData) {
      const response = await fetch(
        "http://localhost:8080/leccion/completarLeccion",
        {
          method: "POST",
          body: JSON.stringify({
            usuario_id: userData.id,
            leccion_id: lesson,
          }),
        }
      );
      setLessonCompleted(true);
    }
  }

  async function obtenerContenidoLeccion() {
    const leccionActual: Leccion = await obtenerLeccionPorId(lesson);
    const lessonContentArray: JSX.Element[] = [];
    let leccionActualJSON = JSON.parse(leccionActual.contenido);
    leccionActualJSON.blocks.forEach((elem: any) => {
      let parsedElem = parseEditorElement(elem);
      if (parsedElem) lessonContentArray.push(parsedElem);
    });
    setLessonContent(lessonContentArray);
  }

  useEffect(() => {
    if (!userData) loadUserData();
    if (lesson) obtenerContenidoLeccion();
  }, [lesson]);

  return (
    <div className="LessonBody">
      {lessonContent.map((elem) => elem)}
      <div className="FillerBlock"></div>
      {lesson ? (
        <Button placeholder={""} onClick={handleCompleteLesson}>
          Completar leccion
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
