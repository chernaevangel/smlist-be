import { IItemRepo } from './item-repo-interface';
import { IItem } from "../../models/item-model/item-model";
import { items } from "./items";

export class ItemRepoInMemory implements IItemRepo {
    getAllItems(): Promise<IItem[]> {
        return Promise.resolve(items);
    }

    addItem(item: IItem): Promise<IItem> {
        items.push(item);
        return Promise.resolve(item);
    }

    getItemById(id: string): Promise<IItem | undefined> {
        const item = items.find(item => item.id === id);
        return Promise.resolve(item);
    }

    getItemsByListId(listId: string): Promise<IItem[]> {
        const filteredItems = items.filter(item => item.listId === listId);
        return Promise.resolve(filteredItems);
    }
}
