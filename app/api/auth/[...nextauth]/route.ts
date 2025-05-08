import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs" // Cambiado de bcrypt a bcryptjs

// En una aplicación real, esto se conectaría a tu base de datos
// Este es solo un ejemplo con usuarios en memoria para demostración
const users = [
  {
    id: "1",
    name: "Usuario Demo",
    email: "demo@example.com",
    password: "$2a$10$8r0qPVaJeLYB.Zs3s2JZAeQvQV/vK9Vv8M9PJ0/W9O.vhvwE.Tnz2", // "password123"
  },
]

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find((user) => user.email === credentials.email)
        if (!user) {
          return null
        }

        // Usar bcryptjs para comparar contraseñas
        const isPasswordValid = await bcryptjs.compare(credentials.password, user.password)
        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
})

export { handler as GET, handler as POST }
