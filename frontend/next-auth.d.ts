import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    authToken?: string;
    id_token?: string;
  }
}
