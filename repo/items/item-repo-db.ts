import { IItemRepo } from './item-repo-interface';
import { IItem } from "../../models/item-model/item-model";
import { query } from '../db_connector';

export class ItemRepoDB implements IItemRepo {
    async getAllItems(): Promise<IItem[]> {
        const result = await query('SELECT * FROM items');
        // console.log(result);
        return result as IItem[];
    }

    async addItem(item: IItem): Promise<IItem> {
        const result = await query(
            'INSERT INTO items (id, title, quantity, unit, price, status, listId) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [item.id, item.title, item.quantity, item.unit, item.price, item.status, item.listId]
        );
        return result[0] as IItem; // Assuming result is an array
    }

    async getItemById(id: string): Promise<IItem | undefined> {
        const result = await query('SELECT * FROM items WHERE id = $1', [id]);
        return result[0] as IItem | undefined;
    }

    async getItemsByListId(listId: string): Promise<IItem[]> {
        const result = await query('SELECT * FROM items WHERE listId = $1', [listId]);
        return result as IItem[];
    }
}
