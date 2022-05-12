import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"
export default NextAuth({
  providers: [
     process.env.VERCEL_ENV === "preview"
      ? CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: {
              label: "Username",
              type: "text",
              placeholder: "jsmith",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize() {
            return {
              id: 1,
              name: "J Smith",
              email: "jsmith@example.com",
              image: "https://i.pravatar.cc/150?u=jsmith@example.com",
            }
          },
        })
    :GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})
