import type { Metadata } from "next";
import AuthStudentValidator from "../components/AuthStudentValidator";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Generated by create next app",
};

export default function CursosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AuthStudentValidator />
      {children}
    </div>
  );
}