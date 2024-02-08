import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";
import "./courseStyles.css";

export default function CourseTable({
  children,
  newCourse,
  setNewCourse,
  handleNewCourse,
  courseNameRef,
}: {
  children: any;
  newCourse: boolean;
  setNewCourse: Dispatch<SetStateAction<boolean>>;
  handleNewCourse: Function;
  courseNameRef: RefObject<HTMLInputElement>;
}) {
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
          <tbody>{children}</tbody>
        </table>
        {!newCourse ? (
          <div
            className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 lessonPlaceholder w-full hover:bg-gray-100"
            onClick={() => setNewCourse(true)}
          >
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        ) : (
          <div className="flex">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:"
              placeholder="Nuevo curso"
              required
              autoFocus
              onBlur={() => handleNewCourse()}
              onKeyDown={(e) => (e.key === "Enter" ? handleNewCourse() : "")}
              ref={courseNameRef}
            />
          </div>
        )}
      </div>
    </div>
  );
}
