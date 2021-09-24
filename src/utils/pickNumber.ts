import Model from "@stephenpoole/deadbydaylight/lib/factory/base/model";
import { BaseEntity } from "@stephenpoole/deadbydaylight/lib/types";

export function pickNumber <T extends Model<BaseEntity>>(array: T[], numberToPick: number) {
  if (array.length == 0) {
    return []
  }

  const entity = array[Math.floor(Math.random() * array.length)];
  const newArray = array.filter((addon) => addon.index !== entity.index);
  return numberToPick > 1 ? [entity, ...pickNumber(newArray, numberToPick - 1)] : [entity];
}
