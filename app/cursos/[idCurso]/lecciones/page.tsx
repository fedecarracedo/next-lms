import LeftContentSidePanel from "./lessonComponents/LeftContentSidePanel";
import LessonBody from "./lessonComponents/LessonBody";
import LessonNavbar from "./lessonComponents/LessonNavbar";

export default function Lecciones({ params }: { params: { idCurso: number } }) {
  
  return (
    <div>
      <LessonNavbar />
      <div className={'lessonContainer'}>
        <LeftContentSidePanel idCurso={params.idCurso} />
        <LessonBody />
      </div>
    </div>
  );
}
