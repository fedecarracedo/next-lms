import { useEffect, useState } from "react";
import CourseTable from "./CourseTable";
import UnitAccordeonList from "./UnitAccordeonList";

export function CourseManagementScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {}, [selected]);
  return selected == null ? (
    <CourseTable setSelected={setSelected} />
  ) : (
    <UnitAccordeonList setSelected={setSelected} selected={selected} />
  );
}
