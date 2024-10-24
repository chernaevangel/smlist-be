import { ListRepoDB } from "../../repo/lists/list-repo-db";
import { IList } from "../../models/list-model/list-model";
import { IListRepo } from "../../repo/lists/list-repo-interface";

export class ListService {
    private listRepo: IListRepo;

    constructor(listRepo: IListRepo) {
        this.listRepo = listRepo;
    }

    async getAllLists(): Promise<IList[]> {
        const lists: IList[] = await this.listRepo.getAllLists();
        return lists;
    }

    async addNewList(list: IList): Promise<IList> {
        const newList = await this.listRepo.addList(list);
        return newList;
    }

    async getListById(id: string): Promise<IList | undefined> {
        return this.listRepo.getListById(id);
    }

    async getListsByUserId(userId: string): Promise<IList[]> {
        const lists = await this.listRepo.getListsByUserId(userId);
        return lists;
    }


}