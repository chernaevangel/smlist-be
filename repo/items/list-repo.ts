import { IItem } from "../../models/item-model/item-model";
import { items } from "./items";

export class ItemRepo {
    getAllItems(): IItem[] {
        return items;
    }

    addItem(item: IItem): IItem {
        items.push(item);
        return item;
    }

    getItemById(id: string): IItem | undefined {
        return items.find(item => item.id === id);
    }
}