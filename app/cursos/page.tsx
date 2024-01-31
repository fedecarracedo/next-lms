'use client'

import { useEffect } from "react";
import Navbar from "../components/navbar";
import "../globals.css";
import * as data from './../../datosPrueba/cursos.json'
import CourseCard from "./courseComponents/CourseCard";
import "./courses.css";

export default function Cursos() {
  useEffect(() => {
    
  })
  return (
    <div>
      <Navbar />
    <div className={"CourseContainer"}>
      {data.map(elem => (
        <CourseCard id={elem.id} name={elem.name} description={elem.description} />
      ))}

    </div>
    </div>
  );
}
