import Curso from "@/app/model/Curso";
import { useRouter } from "next/navigation";

export default function CourseTableRow({ curso }: { curso: Curso | any }) {
  const router = useRouter();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {curso.curso_nombre}
      </th>
      <td className="px-6 py-4">{curso.curso_id}</td>
      <td className="px-6 py-4">{curso.curso_descripcion}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => {
            router.push(`./courses/${curso.curso_id}/units`);
          }}
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
