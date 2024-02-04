import { useState } from "react";
import "../adminPanelStyles.css";
import { CourseManagementScreen } from "./screens/course/CourseManagement";

export default function AdminBody() {
  const [screen, setScreen] = useState<string>("");
  return (
    <div className="adminBody">
      <CourseManagementScreen />
    </div>
  );
}
