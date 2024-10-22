import { IUser } from "../userModel/user-model";

export interface IList {
    id: string;
    title: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: IUser;
}