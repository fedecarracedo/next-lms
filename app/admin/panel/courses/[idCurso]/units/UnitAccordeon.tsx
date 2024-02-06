import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "../../courseStyles.css";

export function UnitAccordeon({
  unidad_nombre,
  children,
}: {
  unidad_nombre: string;
  children: JSX.Element;
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
          {children}
        </AccordionBody>
      </Accordion>
    </div>
  );
}
