export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string; // Ideally, store this hashed
    role: string;
}