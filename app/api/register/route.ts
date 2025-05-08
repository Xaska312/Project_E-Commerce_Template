import { NextResponse } from "next/server"
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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validaciones básicas
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Verificar si el email ya está registrado
    const existingUser = users.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "El email ya está registrado" }, { status: 400 })
    }

    // Hash de la contraseña con bcryptjs
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Crear nuevo usuario
    const newUser = {
      id: (users.length + 1).toString(),
      name,
      email,
      password: hashedPassword,
    }

    // En una aplicación real, aquí guardarías el usuario en tu base de datos
    users.push(newUser)

    // Retornar respuesta exitosa (sin incluir la contraseña)
    return NextResponse.json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    })
  } catch (error) {
    console.error("Error al registrar usuario:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
