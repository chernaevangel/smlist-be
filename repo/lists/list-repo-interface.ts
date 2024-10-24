import { IList } from "../../models/list-model/list-model";

export interface IListRepo {
    getAllLists(): Promise<IList[]>;
    addList(list: IList): Promise<IList>;
    getListById(id: string): Promise<IList | undefined>;
    getListsByUserId(userId: string): Promise<IList[]>;
}