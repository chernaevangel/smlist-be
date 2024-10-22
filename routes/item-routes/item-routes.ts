import { NextFunction, Request, Response, Router } from 'express';
import { ItemService } from '../../services/items-service/items-service';
import { IItem } from '../../models/item-model/item-model';

const router = Router();
const itemService = new ItemService();

router.get('/items', (req: Request, res: Response, next: NextFunction) => {
    try {
        const allItems = itemService.getAllItems();
        res.json(allItems);
    } catch (error) {
        next(error);
    }
});

module.exports = router;