'use client'

import React from 'react'
import { useAuth } from './AuthContext'

export default function OrdersPage() {
  const { user } = useAuth()

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#215F9A] mb-4">Choose a Product Below</h2>
          <p className="text-xl text-gray-600">
            Welcome, {(user?.user_metadata as { name?: string })?.name || user?.email}
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Port IN"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#215F9A] mb-2">Port IN</h3>
              <p className="text-gray-600 mb-4">Seamlessly transfer numbers into our network.</p>
              <button
                onClick={() => alert('Port-in functionality coming soon!')}
                className="w-full bg-[#215F9A] text-white py-3 rounded-lg hover:bg-[#2c78c0] transition-colors text-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Port Out"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#215F9A] mb-2">Port Out</h3>
              <p className="text-gray-600 mb-4">Effortlessly move numbers to another provider.</p>
              <button
                onClick={() => alert('Port-out functionality coming soon!')}
                className="w-full bg-[#215F9A] text-white py-3 rounded-lg hover:bg-[#2c78c0] transition-colors text-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="SIPTRUNK"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#215F9A] mb-2">SIPTRUNK</h3>
              <p className="text-gray-600 mb-4">Reliable SIP trunking for voice services.</p>
              <button
                onClick={() => alert('SIPTRUNK functionality coming soon!')}
                className="w-full bg-[#215F9A] text-white py-3 rounded-lg hover:bg-[#2c78c0] transition-colors text-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

