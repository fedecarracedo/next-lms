"use client";

import React from "react";
import { Input, Button, Typography, Textarea } from "@material-tailwind/react";
import { CreditCardIcon } from "@heroicons/react/24/solid";

export default function ClassroomInfoTab() {
  return (
    <form className="mt-2 flex flex-col gap-4 ClassroomInfoForm">
      <div>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Nombre del Aula
        </Typography>
        <Input
          crossOrigin={""}
          type="email"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>

      <div className="my-3">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium "
        >
          Descripcion
        </Typography>

        <Textarea
          placeholder=""
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button placeholder={""} size="lg">
        Guardar
      </Button>
    </form>
  );
}
