import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";

export default function UsersTableRow({ usuario }: { usuario: any }) {
  const router = useRouter();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {usuario.usuario_nombre}
      </th>
      <td className="px-6 py-4">{usuario.usuario_apellido}</td>
      <td className="px-6 py-4">{usuario.usuario_email}</td>
      <td className="px-6 py-4">{usuario.usuario_tipo}</td>
      <td className="px-6 py-4 text-right">
        <div>
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Usuarios
          </a>
          <a
            href="#"
            className="font-medium ml-4 text-blue-600 dark:text-blue-500 hover:underline"
          >
            Contenidos
          </a>
        </div>
      </td>
    </tr>
  );
}
