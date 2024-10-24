import { ItemRepoDB } from "../../repo/items/item-repo-db";
import { IItemRepo } from "../../repo/items/item-repo-interface";
import { IItem } from "../../models/item-model/item-model";

export class ItemService {
    private itemRepo: IItemRepo;

    constructor(itemRepo: IItemRepo) {
        this.itemRepo = itemRepo;
    }

    //#region Items CRUD operations
    async getAllItems() {
        const items: IItem[] = await this.itemRepo.getAllItems();
        return items;
    }

    async addItem(item: IItem) {
        const newItem = await this.itemRepo.addItem(item);
        return newItem;
    }

    async getItemById(id: string) {
        const item: IItem | undefined = await this.itemRepo.getItemById(id);
        return item;
    }

    async getItemsByListId(listId: string) {
        const items: IItem[] = await this.itemRepo.getItemsByListId(listId);
        return items;
    }
    //#endregion

    //#region Items Logic Operations
    

    //#endregion
}