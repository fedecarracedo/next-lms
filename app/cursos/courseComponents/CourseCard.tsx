"use client";

import { useRouter } from "next/navigation";
import "../courses.css";
import { SDK_VERSION } from "firebase/app";

export default function CourseCard(props: {
  name: string;
  description: string;
  id: number;
}) {
  const router = useRouter();
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 CourseCard">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <a
          href={`/cursos/${props.id}/lecciones`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
