import { NextFunction, Request, Response, Router } from 'express';
import { ListService } from '../../services/list-service/list-service';
import { IList } from '../../models/list-model/list-model';

const router = Router();
const listService = new ListService(); 

router.get('/lists', (req: Request, res: Response, next: NextFunction) => {
    try{
        const allLists = listService.getAllLists();
        res.json(allLists);
    } catch (error) {
        next(error);
    }
});


module.exports = router;