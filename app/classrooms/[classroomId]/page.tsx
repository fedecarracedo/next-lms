"use client";
import TopNavbar from "@/app/components/navbar";
import TabBar from "./TabBar";
import "./insideClassroom.css";
import { useState } from "react";
import { Footer } from "@/app/components/Footer";

export default function ClassroomLanding() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="PageContainer">
      <TopNavbar />
      <h2 className="ClassroomName">Marketing 360</h2>
      <div className="PageBody">
        <TabBar selected={selected} setSelected={setSelected} />
        <div className="ContentArea">
          <h2 className="text-center">Dummy content</h2>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga a
            alias corporis rem assumenda earum nisi tenetur nemo temporibus
            explicabo itaque cupiditate, molestias iste veniam porro repellat,
            dolorum, ex quae? Voluptatibus nostrum ut deserunt aliquid. Natus
            reiciendis deserunt, repellendus suscipit iste maiores soluta quia
            magni non saepe sequi dolorem incidunt odit aspernatur veritatis
            quibusdam? Error repudiandae quam laudantium aut odio. Ea,
            laudantium. Ad facilis unde mollitia eum placeat officia repellat
            repudiandae minima voluptatibus non, commodi ipsum quibusdam error
            quam corporis porro blanditiis et sapiente iste at. Et ea adipisci
            explicabo?
          </p>
          <h3>Segundo titulo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            totam aliquam, saepe ullam, repellat corporis praesentium culpa,
            reiciendis excepturi minus hic. Ab debitis provident mollitia
            repellendus vero, explicabo accusantium voluptates. Sit veritatis
            voluptatum nemo quas illum velit, quo quidem ab neque facilis amet
            officiis vitae alias eligendi. Exercitationem eaque, cupiditate
            quibusdam at a mollitia voluptate omnis deleniti delectus illo
            cumque!
          </p>
          <h3>Tercer titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloremque recusandae earum repellendus? A libero facere atque error
            recusandae, porro dignissimos dolor soluta labore ex animi quaerat
            saepe dolorem temporibus. Quam numquam deleniti quae tempora,
            recusandae velit, ipsam in amet, libero saepe fuga. Necessitatibus
            pariatur harum officia iure. Dicta minima ex amet quos molestias
            deserunt a eum sapiente non modi! Cum repellendus eius doloribus
            corrupti facilis, harum reprehenderit placeat sapiente aspernatur
            consequuntur dolore. Dolores nobis quisquam possimus corporis,
            mollitia, esse ipsum nesciunt iure asperiores, laboriosam aperiam
            libero distinctio ipsam voluptatum! Eligendi velit hic, veritatis
            tenetur amet possimus, praesentium ut consequatur doloribus soluta
            harum in, sequi dolore nulla. Doloremque harum quidem optio
            cupiditate, illum, magni totam sint, unde rem autem est? Ipsam
            earum, veniam suscipit unde nihil expedita labore sequi enim
            accusamus at sint quasi laudantium ipsum minus consectetur nemo
            repudiandae nam non quas tempora nesciunt a. Iste praesentium nihil
            temporibus.
          </p>
          <div className="EmptyBlock"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
