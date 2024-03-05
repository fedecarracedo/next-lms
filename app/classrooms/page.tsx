"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import CourseCard from "./classroomComponents/CourseCard";
import "./courses.css";
import {
  getUserClassrooms,
  obtenerTodos,
} from "../controllers/DatabaseController";
import { UserData } from "../model/UserData";
import TopNavbar from "../components/navbar";
import CourseSidebar from "./classroomComponents/CourseSidebar";
import "react-multi-carousel/lib/styles.css";
import Aula from "../model/Aula";

export default function Cursos() {
  const [classrooms, setClassrooms] = useState<Aula[]>([]);

  async function getClassrooms() {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const userData: UserData = JSON.parse(userDataString);
      let aulasUsuario: Aula[] = [];
      if (userData.tipo == "Estudiante") {
        const idUsuario: any = userData.id;
        aulasUsuario = await getUserClassrooms(parseInt(idUsuario));
      } else {
        aulasUsuario = await obtenerTodos("aula");
      }
      setClassrooms(aulasUsuario);
    }
  }

  useEffect(() => {
    getClassrooms();
  }, []);

  return (
    <div>
      <TopNavbar />
      <div className="PageContainer">
        <CourseSidebar />
        <div className="CourseContainer">
          <h3>Tus aulas</h3>
          <div className="CourseGallery grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {classrooms.map((elem, index) => (
              <CourseCard
                key={index}
                name={elem.aula_nombre}
                description={elem.aula_descripcion}
                id={elem.aula_id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Capaz agregar una Galería debajo del Carousel?
