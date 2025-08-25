// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Password Only",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password) return null;

        try {
          const { db } = await connectToDatabase();
          const admin = await db.collection("adminpassword").findOne({});
          
          if (!admin || !admin.hashedPassword) return null;

          const isValid = await bcrypt.compare(credentials.password, admin.hashedPassword);
          if (!isValid) return null;

          // return object to store in session
          return { id: admin._id.toString() };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/",
    error: "/?error=true",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };