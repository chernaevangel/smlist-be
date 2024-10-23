import { ItemService } from "./items-service";
import { IItemRepo } from "../../repo/items/item-repo-interface";
import { IItem } from "../../models/item-model/item-model";

describe("ItemService", () => {
    let mockItemRepo: jest.Mocked<IItemRepo>;
    let itemService: ItemService;

    beforeEach(() => {
        mockItemRepo = {
            getAllItems: jest.fn(),
            addItem: jest.fn(),
            getItemById: jest.fn(),
            getItemsByListId: jest.fn()
        };

        itemService = new ItemService(mockItemRepo);
    });

    test("Return all items", async () => {
        const mockItems: IItem[] = [
            { 
                id: 1, 
                title: "Item1", 
                quantity: 1,
                unit: "unit",
                price: 1,
                status: "status",
                list_id: "listId"
            },
    
        ];

        // Mock the implementation of getAllItems
        mockItemRepo.getAllItems.mockResolvedValue(mockItems);

        const items = await itemService.getAllItems();

        expect(items).toEqual(mockItems);
        expect(mockItemRepo.getAllItems).toHaveBeenCalled();
    });

    test("Add item", async () => {
        const mockItem: IItem = { 
            id: 1, 
            title: "Item1", 
            quantity: 1,
            unit: "unit",
            price: 1,
            status: "pending",
            list_id: "listId"
        };

        // Mock the implementation of addItem
        mockItemRepo.addItem.mockResolvedValue(mockItem);

        const newItem = await itemService.addItem(mockItem);

        expect(newItem).toEqual(mockItem);
        expect(mockItemRepo.addItem).toHaveBeenCalledWith(mockItem);
    });

});
