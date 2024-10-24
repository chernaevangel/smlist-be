import { IUserRepo } from "./interfaces/user-repo-interface";
import { IUser } from "../../models/userModel/user-model";
import { query } from "../db_connector";

export class UserRepoDB implements IUserRepo {
  async getAllUsers(): Promise<IUser[]> {
    const result = await query('SELECT * FROM users');
    return result as IUser[];
  }

  async addNewUser(user: IUser): Promise<IUser> {
    const result = await query(
      `INSERT INTO users (username, email, password, role, "familyId") 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [user.username,
        user.email, 
        user.password,
        user.role,
        user.familyId
    ]
    );
    return result[0] as IUser;
  }

  async getUserById(id: string): Promise<IUser | undefined> {
    const result = await query('SELECT * FROM users WHERE id = $1', [id]);
    return result[0] as IUser | undefined;
  }
}