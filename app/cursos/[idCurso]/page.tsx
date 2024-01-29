import "../../globals.css";

export default function CursoParticular({ params }: { params: { idCurso: number } }) {
  return (
    <div>
      <h1>Pagina de curso particular {params.idCurso}</h1>
    </div>
  );
}
