"use server"

import { signIn } from "@/auth"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password || !name) {
    return { error: "Missing required fields" }
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    return { error: "User with this email already exists" }
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create user
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })
  } catch (error) {
    return { error: "Something went wrong saving the user" }
  }

  // Redirect to login
  redirect("/login?registered=true")
}

export async function loginUser(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await signIn("credentials", { email, password, redirectTo: "/dashboard" })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password." }
        default:
          return { error: "Something went wrong." }
      }
    }
    // Need to rethrow Next.js redirect errors so navigation works
    throw error;
  }
}

export async function logoutUser() {
  await signOut({ redirectTo: "/" })
}
