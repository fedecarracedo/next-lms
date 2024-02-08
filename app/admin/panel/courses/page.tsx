"use client";
import { RefObject, useEffect, useRef, useState } from "react";

import "../adminPanelStyles.css";
import CourseTable from "./CourseTable";
import { obtenerTodos } from "@/app/controllers/DatabaseController";
import CourseTableRow from "./CourseTableRow";
import Curso from "@/app/model/Curso";

export default function courseList() {
  const [courses, setCourses] = useState<Curso[]>();
  const [newCourse, setNewCourse] = useState(false);
  const courseNameRef = useRef<HTMLInputElement>(null);
  async function cargarCursos() {
    let cursosDB = await obtenerTodos("curso");
    setCourses(cursosDB);
  }
  async function handleNewCourse() {
    //@ts-ignore
    if (!courseNameRef.current.value) setNewCourse(false);
    else {
      let payload = JSON.stringify({
        //@ts-ignore
        curso_nombre: courseNameRef.current.value,
        curso_descripcion: "",
      });
      const response = await fetch("http://localhost:8080/curso/crearCurso", {
        method: "POST",
        body: payload,
      });
      setNewCourse(false);
    }
  }
  useEffect(() => {
    cargarCursos();
  }, [newCourse]);
  return (
    <div>
      <CourseTable
        handleNewCourse={handleNewCourse}
        newCourse={newCourse}
        setNewCourse={setNewCourse}
        courseNameRef={courseNameRef}
      >
        {courses?.map((course) => (
          <CourseTableRow curso={course} />
        ))}
      </CourseTable>
    </div>
  );
}
