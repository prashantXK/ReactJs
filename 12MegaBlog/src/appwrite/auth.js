import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

//authentication---------------------------------
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //createAccount-----
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      error.message;
    }
  }

  //Login--------
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      error.message;
    }
  }

  //user is login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      error.message;
    }
    return null;
  }

  //Logout-------
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      error.message;
    }
  }
}

const authService = new AuthService();
export default authService;
