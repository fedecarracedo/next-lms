"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import CourseCard from "./classroomComponents/CourseCard";
import "./courses.css";
import Curso from "../model/Curso";
import {
  obtenerCursosUsuario,
  obtenerTodos,
} from "../controllers/DatabaseController";
import { UserData } from "../model/UserData";
import TopNavbar from "../components/navbar";
import CourseSidebar from "./classroomComponents/CourseSidebar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1100, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
  }, []);

  return (
    <div>
      <TopNavbar />
      <div className="PageContainer">
        <CourseSidebar />
        <div className="CourseContainer">
          <h3>Tus aulas</h3>
          <div className="CourseGallery grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cursos.map((elem, index) => (
              <CourseCard
                key={index}
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

// Capaz agregar una Galería debajo del Carousel?
