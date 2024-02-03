"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    let userEmail: string | null = localStorage.getItem("userEmail");
    if (!userEmail) router.push("/auth/login");
  }, []);

  return (
    <div>
      <h1>Bienvenido {user}</h1>
    </div>
  );
}
