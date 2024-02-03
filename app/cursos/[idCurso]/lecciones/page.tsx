"use client";

import Curso from "@/app/model/Curso";
import LeftContentSidePanel from "./lessonComponents/LeftContentSidePanel";
import LessonBody from "./lessonComponents/LessonBody";
import LessonNavbar from "./lessonComponents/LessonNavbar";
import React, { useLayoutEffect, useState } from "react";
import { obtenerCursosUsuario } from "@/app/controllers/DatabaseController";
import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";

export default function Lecciones({ params }: { params: { idCurso: number } }) {
  const [lesson, setLesson] = useState(0);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const router = useRouter();

  async function evaluarPertenenciaAlCurso(): Promise<void> {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const usuario: UserData = JSON.parse(userDataString);
      const cursosUsuario: Curso[] = await obtenerCursosUsuario(usuario.id);
      const cursoActual: Curso | undefined = cursosUsuario.find(
        (curso) => curso.idCurso == params.idCurso
      );
      if (!cursoActual) {
        router.push("/cursos");
        return;
      }
      setAuthorized(true);
    }
  }

  useLayoutEffect(() => {
    evaluarPertenenciaAlCurso();
  }, []);

  return (
    authorized == true && (
      <div>
        <LessonNavbar />
        <div className={"lessonContainer"}>
          <LeftContentSidePanel
            lesson={lesson}
            setLesson={setLesson}
            idCurso={params.idCurso}
          />
          <LessonBody lesson={lesson} />
        </div>
      </div>
    )
  );
}
