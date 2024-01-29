import "../globals.css";
import * as data from './../../testdata.json'
import CourseCard from "./courseComponents/CourseCard";
import "./courses.css";

export default function Cursos() {
  return (
    <div className={"CourseContainer"}>
      {data.map(elem => (
        <CourseCard id={elem.id} name={elem.name} description={elem.description} />
      ))}

    </div>
  );
}
