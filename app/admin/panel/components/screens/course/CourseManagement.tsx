import { useEffect, useState } from "react";
import CourseTable from "./CourseTable";
import UnitTable from "./UnitTable";

export function CourseManagementScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {}, [selected]);
  return selected == null ? (
    <CourseTable setSelected={setSelected} />
  ) : (
    <UnitTable setSelected={setSelected} selected={selected} />
  );
}
