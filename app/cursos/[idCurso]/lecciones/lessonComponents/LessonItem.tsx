import { ListItem, ListItemPrefix } from "@material-tailwind/react";

export default function LessonItem({ name }: { name: string }) {
  return (
    <ListItem placeholder={""}>
      <ListItemPrefix placeholder={""}>-</ListItemPrefix>
      {name}
    </ListItem>
  );
}
