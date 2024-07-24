import { ID } from "appwrite";

import { account, avatars, type IUserAccount } from "@/lib/appwrite";

interface LoginRequest {
  email: string;
  password: string;
}

export async function createUserAccount(user: IUserAccount) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.email);

    const newUser = await saveUserToDB({
      email: newAccount.email,
      password: newAccount.password,
    });
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(user: IUserAccount) {}
