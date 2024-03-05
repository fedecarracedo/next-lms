import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";

export default function ClassroomTableRow({ aula }: { aula: any }) {
  const router = useRouter();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {aula.aula_id}
      </th>
      <td className="px-6 py-4">{aula.aula_nombre}</td>
      <td className="px-6 py-4 text-right">
        <a
          href={"/admin/panel/classrooms/edit/" + aula.aula_id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
