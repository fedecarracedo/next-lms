"use client";

import { useEffect } from "react";
import "./globals.css";
import AuthStudentValidator from "./components/AuthStudentValidator";

export default function Home() {
  useEffect(() => {
    let userData: string | null = localStorage.getItem("userData");
    console.log(userData);
  }, []);

  return (
    <div>
      <AuthStudentValidator />
      <h1>Bienvenido al inicio</h1>
    </div>
  );
}
