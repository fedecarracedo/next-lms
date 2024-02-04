import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import { List, ListItem, Card } from "@material-tailwind/react";
import LessonElement from "./LessonElement";
import LessonList from "./LessonList";

export function UnitAccordeon({
  unidad_nombre,
  unidad_id,
  unidad_curso,
  setLesson,
}: {
  unidad_nombre: string;
  unidad_id: number;
  unidad_curso: number;
  setLesson: Dispatch<SetStateAction<number | null>>;
}) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion
        placeholder={""}
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          placeholder={""}
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          {unidad_nombre}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <LessonList setLesson={setLesson} idUnidad={unidad_id} />
        </AccordionBody>
      </Accordion>
    </div>
  );
}
