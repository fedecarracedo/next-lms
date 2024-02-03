"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "../globals.css";
import CourseCard from "./courseComponents/CourseCard";
import "./courses.css";
import Curso from "../model/Curso";
import { obtenerCursosUsuario } from "../controllers/DatabaseController";

export default function Cursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);

  async function obtenerCursos() {
    const userData: string | null = localStorage.getItem("userData");
    if (userData) {
      const idUsuario: any = JSON.parse(userData).id;
      const cursosUsuario: Curso[] = await obtenerCursosUsuario(
        parseInt(idUsuario)
      );
      setCursos(cursosUsuario);
    }
  }

  useEffect(() => {
    obtenerCursos();
  }, [cursos]);

  return (
    <div>
      <Navbar />
      <div className={"CourseContainer"}>
        {cursos.map((elem, index) => (
          <CourseCard
            key={index}
            id={elem.idCurso}
            name={elem.nombre}
            description={elem.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
