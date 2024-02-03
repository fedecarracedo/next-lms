"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthStudentValidator() {
  const router = useRouter();
  useEffect(() => {
    const usuario: string | null = localStorage.getItem("userData");
    if (!usuario) router.push("/auth/login");
  }, []);
  return <div></div>;
}
