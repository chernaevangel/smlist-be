import { ListRepo } from "../../repo/lists/list-repo";
import { IList } from "../../models/list-model/list-model";

export class ListService {
    private listRepo: ListRepo;

    constructor() {
        this.listRepo = new ListRepo();
    }

    getAllLists() {
        return this.listRepo.getAllLists();
    }

    addNewList(list: IList) {
        return this.listRepo.addNewList(list);
    }

    getListById(id: string) {
        return this.listRepo.getListById(id);
    }

}