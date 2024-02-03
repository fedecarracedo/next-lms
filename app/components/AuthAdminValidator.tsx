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
      console.log(usuario);
      autorizado = userData.tipo == 2 || userData.tipo == 3;
    }

    if (!usuario || !autorizado) router.push("/");
  }, []);
  return <div></div>;
}
