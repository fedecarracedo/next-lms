import LeftContentSidePanel from "./lessonComponents/LeftContentSidePanel";
import './lessonStyles.css'

export default function Lecciones() {
  return (
    <div className={'lessonContainer'}>
      <LeftContentSidePanel />
      <h1>Pagina de lecciones</h1>
    </div>
  );
}
