"use client";

import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminBody from "./components/AdminBody";

import "./adminPanelStyles.css";

export default function AdminPanel() {
  const router = useRouter();
  useLayoutEffect(() => {
    const userData: UserData = JSON.parse(
      localStorage.getItem("userData") + ""
    );
    if (userData.tipo == 0) router.push("/");
  }, []);
  return (
    <div className="AdminPanelContainer">
      <AdminSidebar />
      <AdminBody />
    </div>
  );
}
