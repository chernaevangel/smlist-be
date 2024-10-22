import {IList} from "../../models/list-model/list-model";
import {lists} from "./list";

export class ListRepo {
    
    getAllLists(): IList[] {
        return lists;
    }

    addNewList(list: IList): IList {
        lists.push(list);
        return list;
    }

    getListById(id: string): IList | undefined {
        return lists.find(list => list.id === id);
    }
}