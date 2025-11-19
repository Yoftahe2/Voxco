'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Signin() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const supabase = createClient()

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message || 'Invalid email or password')
        setLoading(false)
        return
      }

      if (data.user) {
        router.push('/')
        router.refresh()
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const handleInputChange = () => {
    if (error) {
      setError('')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    handleInputChange()
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    handleInputChange()
  }

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-[30%] rounded-3xl shadow-sm shadow-gray-500 m-auto mt-[2%] bg-white py-10 px-5">
      <div>
        <img src="/logo.png" className="bg-[#215F9A] px-4 py-2 rounded-2xl" alt="logo" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <div>
          <p className="text-xl font-semibold">Voxco Number Ordering Portal</p>
          <p>Sign in to continue</p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <input
            className="py-2 border-2 border-gray-500 rounded-md px-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            disabled={loading}
          />
          <input
            className="py-2 px-5 border-2 border-gray-500 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            disabled={loading}
          />
        </div>
        {error && <p className="text-red-500 text-sm w-full -mt-4">{error}</p>}
        <button
          onClick={handleClick}
          disabled={loading}
          className="bg-[#215F9A] hover:bg-[#2c78c0] disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-2xl rounded-2xl py-4 w-full cursor-pointer"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        <p>
          Don&apos;t have an account?{' '}
          <span
            className="text-indigo-900 cursor-pointer"
            onClick={() => router.push('/sign-up')}
          >
            Please get started
          </span>
        </p>
      </div>
    </div>
  )
}

