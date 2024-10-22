import {IList} from "../../models/list-model/list-model";

export const lists: IList[] = [
    {
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
    }
]
