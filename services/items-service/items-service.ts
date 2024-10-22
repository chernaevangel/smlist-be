import { ItemRepo } from "../../repo/items/list-repo";
import { IItem } from "../../models/item-model/item-model";

export class ItemService {
    private itemRepo: ItemRepo;

    constructor() {
        this.itemRepo = new ItemRepo();
    }

    getAllItems() {
        return this.itemRepo.getAllItems();
    }

    addItem(item: IItem) {
        return this.itemRepo.addItem(item);
    }

    getItemById(id: string) {
        return this.itemRepo.getItemById(id);
    }
}