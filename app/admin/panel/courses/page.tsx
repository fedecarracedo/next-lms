"use client";
import { useEffect, useState } from "react";

import "../adminPanelStyles.css";
import CourseTable from "./CourseTable";
import { obtenerTodos } from "@/app/controllers/DatabaseController";
import CourseTableRow from "./CourseTableRow";
import Curso from "@/app/model/Curso";

export default function courseList() {
  const [courses, setCourses] = useState<Curso[]>();
  async function cargarCursos() {
    let cursosDB = await obtenerTodos("curso");
    setCourses(cursosDB);
  }
  useEffect(() => {
    cargarCursos();
  }, []);
  return (
    <CourseTable>
      {courses?.map((course) => (
        <CourseTableRow curso={course} />
      ))}
    </CourseTable>
  );
}
