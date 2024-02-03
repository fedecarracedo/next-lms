"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    let userData: string | null = localStorage.getItem("userData");
    console.log(userData);
    if (!userData) router.push("/auth/login");
  }, []);

  return (
    <div>
      <h1>Bienvenido {user}</h1>
    </div>
  );
}
