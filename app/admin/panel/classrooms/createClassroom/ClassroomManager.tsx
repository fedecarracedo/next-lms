"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ClassroomInfoTab from "./ClassroomInfoTab";
import ClassroomLandingEditor from "./ClassroomLandingEditor";

export default function ClassroomManager() {
  const data = [
    {
      label: "General",
      value: "general",
      desc: <ClassroomInfoTab />,
    },
    {
      label: "Inicio",
      value: "inicio",
      desc: <ClassroomLandingEditor />,
    },

    {
      label: "FAQ",
      value: "faq",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs id="custom-animation" value="general">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value }) => (
          <Tab placeholder={""} key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        placeholder={""}
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
