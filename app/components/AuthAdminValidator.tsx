"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserData } from "../model/UserData";

export default function AuthAdminValidator() {
  const router = useRouter();
  useEffect(() => {
    const usuario: string | null = localStorage.getItem("userData");
    let autorizado: boolean = false;
    if (usuario) {
      const userData: UserData = JSON.parse(usuario);
      autorizado =
        userData.tipo == "Administrador" || userData.tipo == "Creador";
    }

    if (!usuario || !autorizado) router.push("/auth/login");
  }, []);
  return <div></div>;
}
