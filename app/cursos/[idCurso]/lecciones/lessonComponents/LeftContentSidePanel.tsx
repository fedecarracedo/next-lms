"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import "../../lessonStyles.css";
import {
  obtenerUnidadesCurso,
  obtenerCursoPorId,
  obtenerRegistrosPorCampo,
} from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import LessonAccordion from "./LessonAccordion";
import Curso from "@/app/model/Curso";

export default function LeftContentSidePanel({
  idCurso,
  setLesson,
  lessonCompleted,
}: {
  idCurso: number;
  lesson: number;
  setLesson: React.Dispatch<React.SetStateAction<number>>;
  lessonCompleted: boolean;
}) {
  const [open, setOpen] = React.useState(0);
  const [unidades, setUnidades] = React.useState<Unidad[]>([]);
  const [curso, setCurso] = React.useState<Curso>();
  const [completedLessons, setCompletedLessons] = useState<
    { usuario_id: number; leccion_id: number }[]
  >([]);

  async function obtenerLeccionesCompletadas() {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const response = await obtenerRegistrosPorCampo(
        "usuario_leccion",
        "usuario_id",
        userData.id
      );
      setCompletedLessons(response);
    }
  }

  async function establecerUnidades() {
    const unidades: Unidad[] = await obtenerUnidadesCurso(idCurso);
    setUnidades(unidades);
  }

  async function establecerCurso() {
    const curso: Curso = await obtenerCursoPorId(idCurso);
    setCurso(curso);
  }

  useEffect(() => {
    establecerUnidades();
    establecerCurso();
    obtenerLeccionesCompletadas();
  }, [lessonCompleted]);
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      placeholder={""}
      className=" w-full p-4 shadow-xl shadow-blue-gray-900/5 LessonContent"
    >
      <div className="mb-2 px-4">
        <Typography placeholder={""} variant="h5" color="blue-gray">
          {curso?.curso_nombre}
        </Typography>
      </div>
      <List placeholder={""}>
        {unidades.map((unidad, index) => {
          return (
            <LessonAccordion
              key={index}
              setLesson={setLesson}
              open={open}
              handleOpen={handleOpen}
              idUnidad={unidad.unidad_id}
              orden={unidad.unidad_orden}
              description={unidad.unidad_nombre}
              completedLessons={completedLessons}
            />
          );
        })}
        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix placeholder={""}>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
