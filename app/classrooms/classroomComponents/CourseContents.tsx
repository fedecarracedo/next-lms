import Unidad from "@/app/model/Unidad";
import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
} from "@material-tailwind/react";

export default function CourseContents({ units }: { units: Unidad[] }) {
  return (
    <Card placeholder={""} className="w-96">
      <List placeholder={""}>
        {units.map((unit: Unidad) => {
          return (
            <ListItem placeholder={""}>
              {unit.unidad_nombre}
              <ListItemSuffix placeholder={""}>
                <Chip
                  value={unit.unidad_orden}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
