"use client";
import TopNavbar from "@/app/components/navbar";
import TabBar from "./TabBar";
import "./insideClassroom.css";
import { useEffect, useState } from "react";
import { Footer } from "@/app/components/Footer";
import Aula from "@/app/model/Aula";
import {
  obtenerRegistrosPorCampo,
  obtenerUnidadesCurso,
} from "@/app/controllers/DatabaseController";
import parseEditorElement from "@/app/controllers/EditorParser";
import CourseContents from "../classroomComponents/CourseContents";
import { select } from "@material-tailwind/react";
import Unidad from "@/app/model/Unidad";

export default function ClassroomLanding({
  params,
}: {
  params: { classroomId: number };
}) {
  const [selected, setSelected] = useState(0);
  const [classroomData, setClassroomData] = useState<any>();
  const [homeContents, setHomeContents] = useState<JSX.Element[]>([]);
  const [units, setUnits] = useState<Unidad[]>([]);

  async function loadClassroom() {
    const classroom: Aula[] = await obtenerRegistrosPorCampo(
      "aula",
      "aula_id",
      params.classroomId
    );
    const unitsDB = await obtenerUnidadesCurso(classroom[0].aula_curso);
    console.log(unitsDB);
    setUnits(unitsDB);
    setClassroomData(classroom[0]);
    const homeDataArray = JSON.parse(classroom[0].aula_inicio);
    const homeData = homeDataArray.blocks.map((elem: any) =>
      parseEditorElement(elem)
    );
    setHomeContents(homeData);
  }

  useEffect(() => {
    loadClassroom();
  }, []);

  return (
    <div className="PageContainer">
      <TopNavbar />
      <h2 className="ClassroomName">
        {classroomData ? classroomData.aula_nombre : ""}
      </h2>
      <div className="PageBody">
        <TabBar selected={selected} setSelected={setSelected} />
        <div className="ContentArea">
          {selected == 0 && homeContents}
          {selected == 1 && <CourseContents units={units} />}
          <div className="EmptyBlock"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
