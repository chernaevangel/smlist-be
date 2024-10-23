import { IItemRepo } from './item-repo-interface';
import { IItem } from "../../models/item-model/item-model";
import { query } from '../db_connector';

export class ItemRepoDB implements IItemRepo {
    async getAllItems(): Promise<IItem[]> {
        const result = await query('SELECT * FROM items');
        return result as IItem[];
    }

    async addItem(item: IItem): Promise<IItem> {
        const result = await query(
            `INSERT INTO items (title, quantity, unit, price, status, list_id) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [item.title, item.quantity, item.unit, item.price, item.status, item.list_id]
        );
        return result[0] as IItem; 
    }

    async getItemById(id: string): Promise<IItem | undefined> {
        const result = await query('SELECT * FROM items WHERE id = $1', [id]);
        return result[0] as IItem | undefined;
    }

    async getItemsByListId(listId: string): Promise<IItem[]> {
        const result = await query('SELECT * FROM items WHERE list_id = $1', [listId]);
        return result as IItem[];
    }
}
