"use client";

import ClassroomInfoTab from "./ClassroomInfoTab";
import ClassroomLandingEditor from "./ClassroomLandingEditor";
import "./classroomCreatorStyles.css";

export default function CreateClassroom() {
  return (
    <div className="PageContainer">
      <h2>Creador de aula</h2>
      <ClassroomInfoTab />
      <ClassroomLandingEditor />
    </div>
  );
}
