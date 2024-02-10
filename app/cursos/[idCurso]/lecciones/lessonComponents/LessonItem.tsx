import { Chip, ListItem, ListItemPrefix } from "@material-tailwind/react";

export default function LessonItem({
  name,
  completed,
}: {
  name: string;
  completed: boolean;
}) {
  return (
    <ListItem placeholder={""}>
      {completed ? (
        <ListItemPrefix placeholder={""}>
          <Chip
            value={<i className="fa-solid fa-check" />}
            size="sm"
            variant="ghost"
            color="green"
            className="rounded-full"
          />
        </ListItemPrefix>
      ) : (
        <ListItemPrefix placeholder={""}>
          <Chip
            value={<i className="fa-solid fa-pencil" />}
            size="sm"
            variant="ghost"
            color="gray"
            className="rounded-full"
          />
        </ListItemPrefix>
      )}

      {name}
    </ListItem>
  );
}
