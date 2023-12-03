import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: boolean;
      accessToken: string;
    }
  }
}

