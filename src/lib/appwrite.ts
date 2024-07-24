// app/api/login/route.ts
import { Client, Account, Storage, Databases, Avatars } from "appwrite";

interface IUserAccount {
  email: string;
  password: string;
}

const appwriteConfig = {
  url: process.env.NEXT_PUBLIC_APPWRITE_URL as string,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID as string,
  usersCollectionId: process.env
    .NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID as string,
  reviewsCollectionId: process.env
    .NEXT_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID as string,
};

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);

export { client, account, databases, storage, avatars, type IUserAccount };
