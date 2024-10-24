import {IList} from "../../models/list-model/list-model";
import {IListRepo} from "./list-repo-interface";
import { query } from "../db_connector";

export class ListRepoDB implements IListRepo {
    
    async getAllLists(): Promise<IList[]> {
        const result = await query('SELECT * FROM lists');
        return result as IList[];
    }

    async addList(list: IList): Promise<IList> {
        const result = await query(
            `INSERT INTO lists (title, type, created_by) 
            VALUES ($1, $2, $3) RETURNING *`,
            [list.title, list.type, list.created_by]
        );
        return result[0] as IList;
    }

    async getListById(id: string): Promise<IList | undefined> {
        const result = await query('SELECT * FROM lists WHERE id = $1', [id]);
        return result[0] as IList | undefined;
    }

    async getListsByUserId(userId: string): Promise<IList[]> {
        const result = await query('SELECT * FROM lists WHERE created_by = $1', [userId]);
        return result as IList[];
    }

}