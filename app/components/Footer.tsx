"use client";
import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full bg-white p-4 bottom-0">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between px-8 ">
        <a href="https://eidosglobal.org" target="_blank">
          <img
            src="/static/images/eidosLogo.png"
            alt="logo-ct"
            className="w-10"
          />
        </a>
        <ul className="flex flex-wrap items-center gap-x-8">
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-blue-gray-50" />
      <Typography
        placeholder={""}
        color="blue-gray"
        className="text-center font-normal"
      >
        &copy; 2024 Eidos Global
      </Typography>
    </footer>
  );
}
