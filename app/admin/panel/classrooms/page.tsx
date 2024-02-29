"use client";

import { useEffect, useState } from "react";
import ClassroomTable from "./ClassroomTable";
import ClassroomTableRow from "./ClassroomTableRow";
import { obtenerTodos } from "@/app/controllers/DatabaseController";

export default function ManageClassrooms() {
  const [Classrooms, setClassrooms] = useState<any[]>([]);
  function loadClassrooms() {
    let response = obtenerTodos("aula").then((aulas) => setClassrooms(aulas));
  }
  useEffect(() => {
    loadClassrooms();
  }, []);
  return (
    <div>
      <ClassroomTable>
        {Classrooms.map((Classroom) => {
          return <ClassroomTableRow aula={Classroom} />;
        })}
      </ClassroomTable>
    </div>
  );
}
