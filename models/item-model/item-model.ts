export interface IItem {
    id: string;
    title: string;
    quantity: number;
    unit: string;
    price: number;
    status: string; // Here I can put enum for status 'pending', 'added' etc
    listId: string;
}