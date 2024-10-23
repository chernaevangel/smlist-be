import { NextFunction, Request, Response, Router } from 'express';
import { ItemService } from '../../services/items-service/items-service';
import { IItem } from '../../models/item-model/item-model';

const router = Router();
const itemService = new ItemService();

router.get('/items', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allItems = await itemService.getAllItems();
        res.json(allItems);
    } catch (error) {
        next(error);
    }
});

router.get('/items/:listId', (req: Request, res: Response, next: NextFunction) => {
    try {
        const items: Promise<IItem[]> = itemService.getItemsByListId(req.params.listId);
        res.json(items)
    }
    catch (error) {
        next(error);
    }
})

// Reusable async function for handling new item addition
const addItemHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item: IItem = req.body;
        const newItem = await itemService.addItem(item);
        res.json(newItem);
    } catch (error) {
        next(error); 
    }
};

// Adding new item to certain list
router.post('/items', addItemHandler);

//Adding only "present" items (admin view)
router.post('/items/present', addItemHandler);



module.exports = router;