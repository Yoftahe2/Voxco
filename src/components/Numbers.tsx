'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Countries } from '@/data/counrty'

export default function Numbers() {
  const router = useRouter()

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-8">
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold text-[#215F9A] mb-8">Number Search & Ordering</h1>
        <p className="text-xl text-gray-600">Search for available numbers here.</p>
      </div>
      <section className="bg-white rounded-3xl shadow-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#215F9A] mb-6 text-center">Order Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#215F9A] text-white">
                <th className="p-4 rounded-tl-lg">Country</th>
                <th className="p-4">SMS/Voice</th>
                <th className="p-4">Inbound/Outbound</th>
                <th className="p-4 rounded-tr-lg">Prefix and Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4">
                  <select className="w-full p-2 border border-[#215F9A] rounded-lg">
                    {Countries.map((country, index) => (
                      <option key={index} value={country.country_name}>
                        {country.country_name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <select className="w-full p-2 border border-[#215F9A] rounded-lg">
                    <option>SMS only</option>
                    <option>Voice only</option>
                    <option>Both</option>
                  </select>
                </td>
                <td className="p-4">
                  <select className="w-full p-2 border border-[#215F9A] rounded-lg">
                    <option>Inbound only</option>
                    <option>Outbound only</option>
                    <option>Both</option>
                  </select>
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    placeholder="Prefix and Area"
                    className="w-full p-2 border border-[#215F9A] rounded-lg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6 text-center">
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">Number Type</label>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">MRC</label>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">NRC</label>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-1">Other Charge</label>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">MOQ</label>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
            <select className="w-full p-2 border border-[#215F9A] rounded">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              router.push('/orders')
            }}
            className="bg-[#215F9A] cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-[#2c78c0] transition-colors text-lg font-semibold"
          >
            Click to Order
          </button>
        </div>
      </section>
    </main>
  )
}

