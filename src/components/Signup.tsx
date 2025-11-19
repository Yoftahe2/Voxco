'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const supabase = createClient()

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!email.trim() || !name.trim() || !password.trim() || !message.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            message,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message || 'Failed to create account')
        setLoading(false)
        return
      }

      if (authData.user) {
        router.push('/sign-in')
        setError('')
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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    handleInputChange()
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    handleInputChange()
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    handleInputChange()
  }

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    handleInputChange()
  }

  return (
    <div className="flex flex-col items-center gap-2 justify-center w-[30%] rounded-3xl shadow-sm shadow-gray-500 m-auto mt-[2%] bg-white py-2 px-5">
      <div>
        <img src="/logo.png" className="bg-[#215F9A] px-4 py-1 rounded-2xl" alt="logo" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div>
          <p className="text-xl font-semibold">Voxco Number Ordering Portal</p>
          <p>Get started to continue</p>
        </div>

        <div className="flex flex-col gap-2 w-full mb-2">
          <form>
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Name"
                disabled={loading}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Email"
                disabled={loading}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Password"
                disabled={loading}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                required
                rows={4}
                className="py-2 px-5 border-2 border-gray-500 rounded-md w-full"
                placeholder="Your Message"
                disabled={loading}
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm w-full my-2">{error}</p>}
            <button
              onClick={handleClick}
              disabled={loading}
              className="bg-[#215F9A] hover:bg-[#2c78c0] disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-2xl rounded-2xl py-4 w-full cursor-pointer"
            >
              {loading ? 'Creating account...' : 'Get Started Now'}
            </button>
            <p>
              Do you have an account?{' '}
              <span
                className="text-orange-700 cursor-pointer"
                onClick={() => router.push('/sign-in')}
              >
                Please sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

