import {
  obtenerTodos,
  obtenerUnidadesCurso,
} from "@/app/controllers/DatabaseController";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function CourseTable({
  setSelected,
}: {
  setSelected: Dispatch<SetStateAction<number | null>>;
}) {
  const [courses, setCourses] = useState<any[]>();
  async function cargarCursos() {
    let cursosDB = await obtenerTodos("curso");
    setCourses(cursosDB);
  }
  useEffect(() => {
    cargarCursos();
  }, []);
  return (
    <div className="CourseManagementGallery">
      <h1 className="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit mb-7 mt-5">
        Cursos
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((elem) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {elem.curso_nombre}
                  </th>
                  <td className="px-6 py-4">{elem.curso_id}</td>
                  <td className="px-6 py-4">{elem.curso_descripcion}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setSelected(elem.curso_id)}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
