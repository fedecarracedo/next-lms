"use client";
import TopNavbar from "@/app/components/navbar";
import TabBar from "./TabBar";
import "./insideClassroom.css";
import { useEffect, useState } from "react";
import { Footer } from "@/app/components/Footer";
import Aula from "@/app/model/Aula";
import { obtenerRegistrosPorCampo } from "@/app/controllers/DatabaseController";
import parseEditorElement from "@/app/controllers/EditorParser";

export default function ClassroomLanding({
  params,
}: {
  params: { classroomId: number };
}) {
  const [selected, setSelected] = useState(0);
  const [classroomData, setClassroomData] = useState<any>();
  const [homeContents, setHomeContents] = useState<JSX.Element[]>([]);

  async function loadClassroom() {
    const classroom = await obtenerRegistrosPorCampo(
      "aula",
      "aula_id",
      params.classroomId
    );
    setClassroomData(classroom[0]);
    const homeDataArray = JSON.parse(classroom[0].aula_inicio);
    const homeData = homeDataArray.blocks.map((elem: any) =>
      parseEditorElement(elem)
    );
    setHomeContents(homeData);
  }

  useEffect(() => {
    loadClassroom();
  }, [homeContents]);

  return (
    <div className="PageContainer">
      <TopNavbar />
      <h2 className="ClassroomName">
        {classroomData ? classroomData.aula_nombre : ""}
      </h2>
      <div className="PageBody">
        <TabBar selected={selected} setSelected={setSelected} />
        <div className="ContentArea">
          {homeContents}
          <div className="EmptyBlock"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
