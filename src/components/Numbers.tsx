'use client'

import React, { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Countries } from '@/data/counrty'

interface FormState {
  country: string
  smsVoice: string
  inboundOutbound: string
}

interface DetailsState {
  other: boolean
  requirements: boolean
  features: boolean
}

export default function Numbers() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    country: '',
    smsVoice: '',
    inboundOutbound: '',
  })

  // Expand row after Search click
  const [expanded, setExpanded] = useState<boolean>(false)

  // Detail sections toggle
  const [details, setDetails] = useState<DetailsState>({
    other: false,
    requirements: false,
    features: false,
  })

  const toggleDetail = (key: keyof DetailsState) => {
    setDetails((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const onSearch = () => {
    if (!form.country || !form.smsVoice || !form.inboundOutbound) {
      alert('Please select Country, SMS/Voice, and Inbound/Outbound.')
      return
    }
    console.log(form)
    setExpanded(true) // show the expandable row
  }

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, country: e.target.value })
  }

  const handleSmsVoiceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, smsVoice: e.target.value })
  }

  const handleInboundOutboundChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, inboundOutbound: e.target.value })
  }

  return (
    <main className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8 py-8 md:py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#215F9A] text-center mb-2">
          Number Search & Ordering
        </h1>

        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          Search for available numbers here.
        </p>

        {/* Table */}
        <section className="bg-white rounded-3xl shadow-lg p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#215F9A] text-white text-xs sm:text-sm">
                  <th className="p-3">Country</th>
                  <th className="p-3">SMS/Voice</th>
                  <th className="p-3">Inbound/Outbound</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {/* FIRST ROW — BASIC FIELDS */}
                <tr className="border-b">
                  {/* Country */}
                  <td className="p-3">
                    <select
                      className="w-full p-2 border rounded-lg text-sm sm:text-base"
                      value={form.country}
                      onChange={handleCountryChange}
                    >
                      <option value="">Select Country</option>
                      {Countries.map((c, i) => (
                        <option key={i} value={c.country_name}>
                          {c.country_name}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* SMS/Voice */}
                  <td className="p-3">
                    <select
                      className="w-full p-2 border rounded-lg text-sm sm:text-base"
                      value={form.smsVoice}
                      onChange={handleSmsVoiceChange}
                    >
                      <option value="">Select Type</option>
                      <option>SMS only</option>
                      <option>Voice only</option>
                      <option>Both</option>
                    </select>
                  </td>

                  {/* Inbound/Outbound */}
                  <td className="p-3">
                    <select
                      className="w-full p-2 border rounded-lg text-sm sm:text-base"
                      value={form.inboundOutbound}
                      onChange={handleInboundOutboundChange}
                    >
                      <option value="">Select Direction</option>
                      <option>Inbound only</option>
                      <option>Outbound only</option>
                      <option>Both</option>
                    </select>
                  </td>

                  {/* Search button */}
                  <td className="p-3 text-center">
                    <button
                      onClick={onSearch}
                      className="bg-[#215F9A] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 text-xs sm:text-sm cursor-pointer"
                    >
                      Search
                    </button>
                  </td>
                </tr>

                {/* SECOND ROW — EXPANDED */}
                {expanded && (
                  <tr>
                    <td colSpan={4} className="p-4 bg-gray-50 rounded-lg">
                      {/* Responsive Expanded Area */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Number Type */}
                        <div className="p-4 bg-white rounded-lg shadow">
                          <label className="font-medium block mb-2">Number Type</label>
                          <p className="text-gray-700 text-sm">Geographic / Mobile / Toll-Free</p>
                        </div>

                        {/* MRC */}
                        <div className="p-4 bg-white rounded-lg shadow">
                          <label className="font-medium block mb-2">MRC</label>
                          <p className="text-gray-700 text-sm">$5.00 monthly</p>
                        </div>

                        {/* NRC */}
                        <div className="p-4 bg-white rounded-lg shadow">
                          <label className="font-medium block mb-2">NRC</label>
                          <p className="text-gray-700 text-sm">$2.00 one-time</p>
                        </div>

                        {/* Currency */}
                        <div className="p-4 bg-white rounded-lg shadow">
                          <label className="font-medium block mb-2">Currency</label>
                          <select className="w-full p-2 border rounded">
                            <option>USD</option>
                            <option>EUR</option>
                          </select>
                        </div>

                        {/* MOQ */}
                        <div className="p-4 bg-white rounded-lg shadow">
                          <label className="font-medium block mb-2">MOQ</label>
                          <p className="text-gray-700 text-sm">Minimum 1 number</p>
                        </div>

                        {/* Other Charge */}
                        <div className="p-4 bg-white rounded-lg shadow text-center">
                          <label className="font-medium block mb-2">Other Charge</label>
                          <button
                            onClick={() => toggleDetail('other')}
                            className="bg-[#215F9A] text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                          >
                            details
                          </button>
                          {details.other && (
                            <p className="text-gray-700 text-sm mt-2">
                              Additional regulatory or activation fees may apply.
                            </p>
                          )}
                        </div>

                        {/* Requirements */}
                        <div className="p-4 bg-white rounded-lg shadow text-center">
                          <label className="font-medium block mb-2">Requirements</label>
                          <button
                            onClick={() => toggleDetail('requirements')}
                            className="bg-[#215F9A] text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                          >
                            details
                          </button>
                          {details.requirements && (
                            <p className="text-gray-700 text-sm mt-2">
                              Requires business verification or address documents.
                            </p>
                          )}
                        </div>

                        {/* Features */}
                        <div className="p-4 bg-white rounded-lg shadow text-center">
                          <label className="font-medium block mb-2">Features</label>
                          <button
                            onClick={() => toggleDetail('features')}
                            className="bg-[#215F9A] text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                          >
                            details
                          </button>
                          {details.features && (
                            <p className="text-gray-700 text-sm mt-2">
                              Includes call forwarding, SMS capability, and API integration.
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Order button */}
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => router.push('/orders')}
                          className="bg-[#215F9A] text-white px-8 sm:px-10 py-3 rounded-lg hover:bg-blue-700 font-semibold text-sm sm:text-base cursor-pointer"
                        >
                          Click to Order
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
