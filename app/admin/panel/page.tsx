"use client";

import { UserData } from "@/app/model/UserData";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

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
      <h1>Bienvenido</h1>
    </div>
  );
}
