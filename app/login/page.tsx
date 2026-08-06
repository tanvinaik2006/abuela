"use client"

import { useState } from "react"
import { loginUser } from "@/app/actions/auth"
import Link from "next/link"
import { Logo } from "@/components/ui/Logo"


export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await loginUser(formData)
    
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
    // If successful, NextAuth will redirect automatically
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-beige">
      <div className="mb-8">
        <Logo className="text-dark-green" scrolled />
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-moss-green/20">
        <h1 className="text-3xl font-serif text-dark-green mb-2 text-center">Welcome Back</h1>
        <p className="text-center text-moss-green mb-8">Sign in to your recipe archive</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm text-center border border-red-200">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-green mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-moss-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green/50 bg-beige/30 text-dark-green transition-all"
              placeholder="nani@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-green mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-moss-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green/50 bg-beige/30 text-dark-green transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-dark-green text-beige py-3 rounded-xl font-medium hover:bg-dark-green/90 transition-colors disabled:opacity-70 mt-4"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-6 text-moss-green">
          Don't have an account?{" "}
          <Link href="/register" className="text-dark-green font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
