import { DefaultSession } from "next-auth";


// Extend NextAuth types to include custom user role property or other any custom properties
declare module "next-auth" {
  export interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}
