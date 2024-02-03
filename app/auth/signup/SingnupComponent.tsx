"use client";

import { encryptPassword } from "@/app/controllers/AuthController";
import { registrarUsuario } from "@/app/controllers/DatabaseController";
import { TipoUsuario } from "@/app/model/UsuarioTipo";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SingnupComponent() {
  const router = useRouter();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      nameInputRef.current?.value &&
      surnameInputRef.current?.value &&
      emailInputRef.current?.value &&
      passwordInputRef.current?.value
    ) {
      let encrypted = await encryptPassword(passwordInputRef.current.value);
      let idNuevoUsuario: number | undefined = await registrarUsuario(
        nameInputRef.current.value,
        surnameInputRef.current.value,
        emailInputRef.current.value,
        encrypted,
        TipoUsuario.Estudiante
      );
      if (idNuevoUsuario) {
        localStorage.setItem("userEmail", emailInputRef.current.value);
        localStorage.setItem("userId", idNuevoUsuario.toString());
        router.push("/");
      }
    }
  }

  useEffect(() => {
    // if (localStorage.getItem("userEmail")) router.push("/");
  });

  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSignUp}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Name
          </Typography>
          <Input
            crossOrigin={""}
            size="lg"
            placeholder="John"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
            inputRef={nameInputRef}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your second name
          </Typography>
          <Input
            crossOrigin={""}
            size="lg"
            placeholder="Doe"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
            inputRef={surnameInputRef}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Email
          </Typography>
          <Input
            crossOrigin={""}
            size="lg"
            type="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
            inputRef={emailInputRef}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Password
          </Typography>
          <Input
            crossOrigin={""}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            inputRef={passwordInputRef}
            required={true}
          />
        </div>
        <Checkbox
          crossOrigin={""}
          label={
            <Typography
              placeholder={""}
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button placeholder={""} type="submit" className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography
          placeholder={""}
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
