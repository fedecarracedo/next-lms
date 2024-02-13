"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import CourseCard from "./courseComponents/CourseCard";
import "./courses.css";
import Curso from "../model/Curso";
import {
  obtenerCursosUsuario,
  obtenerTodos,
} from "../controllers/DatabaseController";
import { UserData } from "../model/UserData";
import TopNavbar from "../components/navbar";
import CourseSidebar from "./courseComponents/CourseSidebar";

export default function Cursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);

  async function obtenerCursos() {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const userData: UserData = JSON.parse(userDataString);
      let cursosUsuario: Curso[] = [];
      if (userData.tipo == "Estudiante") {
        const idUsuario: any = userData.id;
        cursosUsuario = await obtenerCursosUsuario(parseInt(idUsuario));
      } else {
        cursosUsuario = await obtenerTodos("curso");
      }
      setCursos(cursosUsuario);
    }
  }

  useEffect(() => {
    obtenerCursos();
  }, [cursos]);

  return (
    <div>
      <TopNavbar />
      <div className="CourseContainer">
        <CourseSidebar />
        <div className="CourseGallery">
          <h3>Galeria de cursos</h3>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-3">
            {cursos.map((elem, index) => (
              <CourseCard
                key={index}
                id={elem.curso_id}
                name={elem.curso_nombre}
                description={elem.curso_descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
