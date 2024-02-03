"use client";

import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminPanel() {
  const router = useRouter();
  useLayoutEffect(() => {
    const userData: UserData = JSON.parse(
      localStorage.getItem("userData") + ""
    );
    if (userData.tipo == 0) router.push("/");
  }, []);
  return (
    <div>
      <AdminSidebar />
      <h1>Bienvenido</h1>
    </div>
  );
}
