"use client";

import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import ClassroomLandingEditor from "./ClassroomLandingEditor";
import "./classroomCreatorStyles.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import Curso from "@/app/model/Curso";
import { obtenerTodos } from "@/app/controllers/DatabaseController";

export default function CreateClassroom() {
  const [courses, setCourses] = useState<Curso[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>();
  const [description, setDescription] = useState<string>("");
  const [homeEditor, setHomeEditor] = useState<any>(null);
  const classroomName = useRef<HTMLInputElement>(null);
  async function getCourses() {
    const dbCourses = await obtenerTodos("curso");

    setCourses(dbCourses);
  }

  async function handleClassroomCreation(e: FormEvent) {
    e.preventDefault();
    const classroomHome = await homeEditor.save();

    if (!selectedCourse) return;

    const payload = {
      aula_nombre: classroomName.current?.value,
      aula_descripcion: description,
      aula_curso: parseInt(selectedCourse),
      aula_inicio: JSON.stringify(classroomHome),
    };

    const response = await fetch("http://localhost:8080/aula/crearAula", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log(response.status);
  }

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="PageContainer">
      <h2>Creador de aula</h2>
      <form
        onSubmit={() => console.log("Funciona!")}
        className="mt-2 flex flex-col  gap-4 ClassroomInfoForm"
        id="classroomInfoForm"
      >
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
            inputRef={classroomName}
            type="text"
            placeholder="SilverTech"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
          />
        </div>

        <div className="my-3">
          <Typography
            placeholder=""
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium "
          >
            Descripcion
          </Typography>

          <Textarea
            placeholder="Un programa para personas que..."
            onChange={(desc) => setDescription(desc.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div>
          <Typography
            placeholder=""
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium "
          >
            Curso
          </Typography>
          <Select
            className="bg-white"
            placeholder={""}
            label="Selecciona el curso"
            onChange={(elem) => setSelectedCourse(elem)}
          >
            {courses.map((course) => (
              <Option value={course.curso_id.toString()}>
                {course.curso_nombre}
              </Option>
            ))}
          </Select>
        </div>
      </form>
      <ClassroomLandingEditor setHomeEditor={setHomeEditor} />
      <Button
        type="submit"
        form="classroomInfoForm"
        className="mt-4 w-4/5"
        size="lg"
        placeholder={""}
        onClick={handleClassroomCreation}
      >
        Guardar
      </Button>
    </div>
  );
}
