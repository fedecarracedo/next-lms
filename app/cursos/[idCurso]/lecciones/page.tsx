import LeftContentSidePanel from "./lessonComponents/LeftContentSidePanel";
import LessonBody from "./lessonComponents/LessonBody";
import LessonNavbar from "./lessonComponents/LessonNavbar";
import React, { SetStateAction, useEffect } from "react";

export default function Lecciones({ params }: { params: { idCurso: number } }) {
  
  const [lesson, setLesson] = React.useState(0)

  return (
    <div>
      <LessonNavbar />
      <div className={'lessonContainer'}>
        <LeftContentSidePanel  idCurso={params.idCurso} />
        <LessonBody content="" />
      </div>
    </div>
  );
}
