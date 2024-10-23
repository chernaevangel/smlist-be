import { IItem } from "../../models/item-model/item-model";

export interface IItemRepo {
    getAllItems(): Promise<IItem[]>;
    addItem(item: IItem): Promise<IItem>;
    getItemById(id: string): Promise<IItem | undefined>;
    getItemsByListId(listId: string): Promise<IItem[]>;
}
