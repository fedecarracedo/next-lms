"use client";

import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import UsersTableRow from "./UsersTableRow";
import { UserData } from "@/app/model/UserData";
import { makeGETRequestToApi } from "@/app/controllers/DatabaseController";

export default function CourseUsers({
  params,
}: {
  params: { idCurso: string };
}) {
  const [courseUsers, setCourseUsers] = useState<UserData[]>([]);
  const [userRemoved, setUserRemoved] = useState(false);
  async function loadCourseUsers() {
    const response = await makeGETRequestToApi(
      `/curso/obtenerUsuarios/${params.idCurso}`
    );
    if (response) {
      setCourseUsers(response);
    }
  }

  useEffect(() => {
    loadCourseUsers();
  }, [userRemoved]);
  return (
    <div>
      <UsersTable>
        {courseUsers.map((user, index) => {
          return (
            <UsersTableRow
              idCurso={params.idCurso}
              setUserRemoved={setUserRemoved}
              key={index}
              usuario={user}
            />
          );
        })}
      </UsersTable>
    </div>
  );
}
