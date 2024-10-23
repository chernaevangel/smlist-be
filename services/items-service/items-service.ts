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
        const items = await this.itemRepo.getAllItems();
        return items;
    }

    addItem(item: IItem) {
        return this.itemRepo.addItem(item);
    }

    getItemById(id: string) {
        return this.itemRepo.getItemById(id);
    }

    getItemsByListId(listId: string) {
        return this.itemRepo.getItemsByListId(listId);
    }
    //#endregion

    //#region Items Logic Operations
    

    //#endregion
}