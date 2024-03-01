import { IconButton } from "@material-tailwind/react";
import "../classroomManagementStyles.css";

export default function ClassroomFaqEditor() {
  return (
    <div className="ClassroomManagementTable">
      <div className="flex">
        <h1 className="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit mb-7">
          Aulas
        </h1>
        <IconButton
          onClick={() => {}}
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="ml-2"
        >
          <img src="/static/images/next.svg" alt="Plus" />
        </IconButton>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
