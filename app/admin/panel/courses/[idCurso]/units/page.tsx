"use client";

import { obtenerUnidadesCurso } from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import { useEffect, useRef, useState } from "react";
import { UnitAccordeon } from "./UnitAccordeon";
import LessonList from "./LessonList";
import { IconButton, Input } from "@material-tailwind/react";

export default function UnitAccordeonList({
  params,
}: {
  params: { idCurso: number };
}) {
  const unitNameRef = useRef(null);
  const [unidades, setUnidades] = useState<Unidad[] | any[]>([]);
  const [nuevaUnidad, setNuevaUnidad] = useState(false);
  async function cargarUnidades() {
    let cursosDB = await obtenerUnidadesCurso(params.idCurso);
    setUnidades(cursosDB);
  }
  function handleCreateTempUnit() {
    setNuevaUnidad(true);
  }
  async function handleNewUnit() {
    // @ts-ignore
    if (!unitNameRef.current.value) setNuevaUnidad(false);
    else {
      let payload = {
        // @ts-ignore
        unidad_nombre: unitNameRef.current.value,
        unidad_curso: params.idCurso,
        unidad_orden: unidades?.length + 1,
      };
      let response = await fetch("http://localhost:8080/unidad/crearUnidad", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setNuevaUnidad(false);
    }
  }

  useEffect(() => {
    cargarUnidades();
  }, [nuevaUnidad]);
  return (
    <div className="unitsContainer">
      <div className="flex items-center">
        <h2 className="mb-4">Unidades</h2>
        <IconButton
          onClick={() => {
            handleCreateTempUnit();
          }}
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="ml-2 mb-1"
        >
          <i className="fa-solid fa-plus fa-xl"></i>
        </IconButton>
      </div>
      {unidades?.map((unidad) => (
        <UnitAccordeon unidad_nombre={unidad.unidad_nombre}>
          <LessonList idUnidad={unidad.unidad_id} />
        </UnitAccordeon>
      ))}
      {nuevaUnidad && (
        <UnitAccordeon
          unidad_nombre={
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              autoFocus
              onBlur={() => handleNewUnit()}
              onKeyDown={(e) => (e.key === "Enter" ? handleNewUnit() : "")}
              ref={unitNameRef}
            />
          }
        />
      )}
    </div>
  );
}
