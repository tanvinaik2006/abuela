"use client"

import { useState } from "react"
import { registerUser } from "@/app/actions/auth"
import Link from "next/link"
import { Logo } from "@/components/ui/Logo"

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await registerUser(formData)
    
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-beige">
      <div className="mb-8">
        <Link href="/">
          <Logo className="text-dark-green" />
        </Link>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-moss-green/20">
        <h1 className="text-3xl font-serif text-dark-green mb-2 text-center">Join Abuela</h1>
        <p className="text-center text-moss-green mb-8">Start preserving your family recipes</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm text-center border border-red-200">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-green mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-moss-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green/50 bg-beige/30 text-dark-green transition-all"
              placeholder="Maria Rodriguez"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-green mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-moss-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green/50 bg-beige/30 text-dark-green transition-all"
              placeholder="maria@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-green mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-xl border border-moss-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green/50 bg-beige/30 text-dark-green transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-dark-green text-beige py-3 rounded-xl font-medium hover:bg-dark-green/90 transition-colors disabled:opacity-70 mt-4"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-6 text-moss-green">
          Already have an account?{" "}
          <Link href="/login" className="text-dark-green font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
