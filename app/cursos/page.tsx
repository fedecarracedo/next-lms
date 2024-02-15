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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
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
      <div className="CourseContainer">
        <div className="CarouselContainer">
          <h3 style={{ alignSelf: "flex-start", marginLeft: "1rem" }}>
            Tus cursos
          </h3>
          <Carousel responsive={responsive} className="Carousel">
            {cursos.map((elem, index) => (
              <CourseCard
                key={index}
                id={elem.curso_id}
                name={elem.curso_nombre}
                description={elem.curso_descripcion}
              />
            ))}
          </Carousel>
        </div>
        <div className="CarouselContainer">
          <h3 style={{ alignSelf: "flex-start", marginLeft: "1rem" }}>
            Recomendado para ti
          </h3>
          <Carousel responsive={responsive} className="Carousel">
            {cursos.map((elem, index) => (
              <CourseCard
                key={index}
                id={elem.curso_id}
                name={elem.curso_nombre}
                description={elem.curso_descripcion}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

// Capaz agregar una Galería debajo del Carousel?
