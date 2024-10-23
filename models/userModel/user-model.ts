export interface IUser {
    id: string;
    username: string;
    email: string;
    password: string; // Ideally, store this hashed
    role: string;
    familyId: string;
}

