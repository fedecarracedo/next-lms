import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
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

  async function obtenerLecciones() {
    const leccionesUnidad: Leccion[] = await obtenerLeccionesUnidad(idUnidad);
    setLessons(leccionesUnidad);
  }

  useEffect(() => {
    loadUserData();
    obtenerLecciones();
  }, []);

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
            <PresentationChartBarIcon className="h-5 w-5" />
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
