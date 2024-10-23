import { ListRepo } from "./list-repo";
import { IList } from "../../models/list-model/list-model";
import { lists } from "./list";

describe('ListRepo', () => {

    const listRepo = new ListRepo();

    beforeEach(() => {
        while (lists.length) {
            lists.pop();
        }
    });

    test('getAllLists should return an empty array initially', () => {
        const result = listRepo.getAllLists();
        expect(result).toEqual([]); 
    });

    test('getAllLists should return all lists after adding new ones', () => {
        const newList: IList = {
            id: '1',
            title: 'Groceries',
            type: 'shopping',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: {
                id: '1',
                username: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                role: 'admin',
                familyId: '1',
            }
        };

        listRepo.addNewList(newList);
        
        const result = listRepo.getAllLists();
        expect(result).toHaveLength(1);
        expect(result).toContainEqual(newList); 
    });

    test('addNewList should add a new list', () => {
        const newList: IList = {
            id: '2',
            title: 'Groceries',
            type: 'shopping',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: {
                id: '1',
                username: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                role: 'admin',
                familyId: '1',
            }
        };
        const addedList = listRepo.addNewList(newList);

        expect(addedList).toEqual(newList);
        expect(lists).toContainEqual(newList);
    });

    test('getListById should return undefined for non-existing list', () => {
        const result = listRepo.getListById('non-existing-id');
        expect(result).toBeUndefined(); 
    });

    test('getListById should return the correct list for an existing list', () => {
        const newList: IList = {
            id: '3',
            title: 'Groceries',
            type: 'shopping',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: {
                id: '1',
                username: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                role: 'admin',
                familyId: '1',
            }
        };

        listRepo.addNewList(newList);
        const result = listRepo.getListById('3');
        expect(result).toEqual(newList);
    });
    
});
