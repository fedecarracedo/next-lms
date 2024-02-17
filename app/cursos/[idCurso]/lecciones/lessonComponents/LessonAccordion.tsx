import React, { useLayoutEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Leccion from "@/app/model/Leccion";
import LessonItem from "./LessonItem";
import { obtenerLeccionesUnidad } from "@/app/controllers/DatabaseController";
import { UserData } from "@/app/model/UserData";

export default function LessonAccordion({
  open,
  handleOpen,
  idUnidad,
  orden,
  description,
  setLesson,
  completedLessons,
}: {
  open: number;
  handleOpen: any;
  idUnidad: number;
  orden: number;
  description: string;
  setLesson: React.Dispatch<React.SetStateAction<number>>;
  completedLessons: { leccion_id: number; usuario_id: number }[];
}) {
  const [lessons, setLessons] = useState<Leccion[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [completedUnit, setCompletedUnit] = useState(false);

  async function loadUserData() {
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString) {
      const userDataObj: UserData = JSON.parse(userDataString);
      setUserData(userDataObj);
    }
  }

  function handleLesson(lessonId: number): void {
    setLesson(lessonId);
  }

  async function evaluarUnidadCompletada() {
    const leccionesUnidad: Leccion[] = await obtenerLeccionesUnidad(idUnidad);
    let unidadCompletada = true;
    for (let j = 0; j < leccionesUnidad.length; j++) {
      let currentLesson = leccionesUnidad[j];
      let found = false;
      for (let i = 0; i < completedLessons.length; i++) {
        let currentCompletedLesson = completedLessons[i];
        if (currentCompletedLesson.leccion_id == currentLesson.idLeccion) {
          found = true;
          break;
        }
      }
      if (!found) {
        unidadCompletada = false;
        break;
      }
    }
    setLessons(leccionesUnidad);
    setCompletedUnit(unidadCompletada);
  }

  useLayoutEffect(() => {
    evaluarUnidadCompletada();
    loadUserData();
  }, [completedLessons]);

  return (
    <Accordion
      placeholder={""}
      open={open === orden}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === orden ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem placeholder={""} className="p-0" selected={open === orden}>
        <AccordionHeader
          placeholder={""}
          onClick={() => handleOpen(orden)}
          className="border-b-0 p-3"
        >
          <ListItemPrefix placeholder={""}>
            {completedUnit ? (
              <Chip
                value={<i className="fa-solid fa-check" />}
                size="sm"
                variant="ghost"
                color="green"
                className="rounded-full"
              />
            ) : (
              <PresentationChartBarIcon className="h-5 w-5" />
            )}
          </ListItemPrefix>
          <Typography
            placeholder={""}
            color="blue-gray"
            className="mr-auto font-normal"
          >
            <strong>Unidad {orden}:</strong> {description}
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List placeholder={""} className="p-0">
          {lessons.map((leccion, index) => {
            let completed = completedLessons.find(
              (elem) =>
                elem.leccion_id == leccion.idLeccion &&
                elem.usuario_id == userData?.id
            );
            return (
              <div onClick={() => handleLesson(leccion.idLeccion)}>
                <LessonItem
                  key={index}
                  name={leccion.nombre}
                  completed={completed ? true : false}
                />
              </div>
            );
          })}
        </List>
      </AccordionBody>
    </Accordion>
  );
}
