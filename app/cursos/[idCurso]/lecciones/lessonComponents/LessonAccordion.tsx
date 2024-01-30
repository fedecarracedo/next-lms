import React, { SetStateAction, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Leccion from "@/app/model/Leccion";
import LessonItem from "./LessonItem";

export default function LessonAccordion({open, handleOpen, unitId, description, lecciones}: {open: number, handleOpen: any, unitId: number, description:string, lecciones: Leccion[]}) {
    return(
        <Accordion placeholder={''}
              open={open === unitId}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === unitId ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem placeholder={''} className="p-0" selected={open === unitId}>
                <AccordionHeader placeholder={''} onClick={() => handleOpen(unitId)} className="border-b-0 p-3">
                  <ListItemPrefix placeholder={''}>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography placeholder={''} color="blue-gray" className="mr-auto font-normal">
                    <strong>Unidad {unitId}:</strong> {description}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List placeholder={''} className="p-0">
                  { lecciones.map(leccion => {
                    return (<LessonItem name={leccion.nombre} />)
                  })}
                </List>
              </AccordionBody>
            </Accordion>
    )
}

