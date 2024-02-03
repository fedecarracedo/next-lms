import "../adminPanelStyles.css";
import { CourseManagementScreen } from "./screens/CourseManagement";

export default function AdminBody() {
  return (
    <div className="adminBody">
      <h1 className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit mb-7 mt-5">
        Cursos disponibles en la plataforma
      </h1>
      <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit text-justify mb-8">
        Debajo se encuentra la lista de cursos que se encuentran cargados en la
        plataforma. Para editar los contenidos de un curso, presione el boton
        "Editar" en la parte extrema derecha de la fila.
      </p>
      <CourseManagementScreen />
    </div>
  );
}
