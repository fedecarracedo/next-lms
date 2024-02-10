"use client";

import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserTableRow from "./UserTableRow";
import { UserData } from "@/app/model/UserData";
import { obtenerTodos } from "@/app/controllers/DatabaseController";

export default function ManageUsers() {
  const [users, setUsers] = useState<any[]>([]);
  function loadUsers() {
    let response = fetch("http://localhost:8080/usuario/obtenerUsuarios")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => setUsers(jsonResponse));
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <UserTable>
        {users.map((user) => {
          return <UserTableRow usuario={user} />;
        })}
      </UserTable>
    </div>
  );
}
