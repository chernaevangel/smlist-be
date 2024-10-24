import { NextFunction, Request, Response, Router } from 'express';
import { ListService } from '../../services/list-service/list-service';
import { IList } from '../../models/list-model/list-model';
import { ListRepoDB } from '../../repo/lists/list-repo-db';

const router = Router();
const listService = new ListService(new ListRepoDB()); 

router.get('/lists', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const allLists = await listService.getAllLists();
        res.json(allLists);
    } catch (error) {
        next(error);
    }
});

router.post('/lists', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list: IList = req.body;
        const newList = await listService.addNewList(list);
        res.json(newList);
    } catch (error) {
        next(error);
    }
})


module.exports = router;