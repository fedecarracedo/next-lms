"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    let localUser: string = "" + localStorage.getItem("userEmail");
    setUser(localUser);
  });
  return (
    <div>
      <h1>Bienvenido {user}</h1>
    </div>
  );
}
