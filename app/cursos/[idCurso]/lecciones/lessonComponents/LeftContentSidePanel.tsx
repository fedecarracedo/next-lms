'use client';

import React, { SetStateAction, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import '../../lessonStyles.css'
import {obtenerUnidadesCurso, obtenerCursoPorId} from "@/app/controllers/DatabaseController";
import Unidad from "@/app/model/Unidad";
import LessonAccordion from "./LessonAccordion";
import Curso from "@/app/model/Curso";
 
export default function LeftContentSidePanel({ idCurso }: { idCurso: number }) {
  const [open, setOpen] = React.useState(0);
  const [unidades, setUnidades] = React.useState<Unidad[]>([])
  const [curso, setCurso] = React.useState<Curso>()
  useEffect(() => {
    setUnidades(obtenerUnidadesCurso(idCurso))
    setCurso(obtenerCursoPorId(idCurso))
  }, [])
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card placeholder={''} className=" w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 LessonContent">
      <div className="mb-2 p-4">
        <Typography placeholder={''} variant="h5" color="blue-gray">
          {curso?.nombre}
        </Typography>
        
      </div>
      <List placeholder={''}>
        {unidades.map((unidad, index) => {
            return (
              <LessonAccordion open={open} handleOpen={handleOpen} unitId={index+1} description={unidad.nombre} lecciones={unidad.lecciones} />
            )
          })}
        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={''}>
          <ListItemPrefix placeholder={''}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix placeholder={''}>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem placeholder={''}>
          <ListItemPrefix placeholder={''}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem placeholder={''}>
          <ListItemPrefix placeholder={''}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem placeholder={''}>
          <ListItemPrefix placeholder={''}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}