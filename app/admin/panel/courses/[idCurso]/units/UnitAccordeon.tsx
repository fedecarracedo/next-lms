import React from "react";
import { List, ListItem } from "@material-tailwind/react";
import "../../courseStyles.css";

export function UnitAccordeon({
  unidad_nombre,
  children,
}: {
  unidad_nombre?: string | JSX.Element;
  children?: JSX.Element;
}) {
  return (
    <div>
      <List
        placeholder={""}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <ListItem
          placeholder={""}
          className={`border-b-0 transition-colors w-90`}
        >
          <h5>{unidad_nombre}</h5>
        </ListItem>
        <ListItem placeholder={""} className="pt-0 text-base font-normal">
          {children}
        </ListItem>
      </List>
    </div>
  );
}
