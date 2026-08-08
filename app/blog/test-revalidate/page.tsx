'use client'
import { useState } from 'react'

export default function RevalidateTestPage() {
  const [status, setStatus] = useState<string>('')
  
  const handleRevalidate = async () => {
    setStatus('Loading...')
    try {
      const res = await fetch('/api/revalidate?secret=sdfdsfeewafds11!_432@432ewfsda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug: 'sample-post' })
      })
      
      const data = await res.json()
      if (res.ok) {
        setStatus(`Success!\n\nResponse:\n${JSON.stringify(data, null, 2)}`)
      } else {
        setStatus(`Failed (Status: ${res.status})\n\nResponse:\n${JSON.stringify(data, null, 2)}`)
      }
    } catch (e: any) {
      setStatus(`Error: ${e.message}`)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Revalidation API Test</h1>
        <p className="text-gray-500 mb-6 text-sm">
          Click the button below to trigger the ISR revalidation API for the <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">/blog/sample-post</code> route.
        </p>
        
        <button 
          onClick={handleRevalidate}
          className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Call Revalidate API
        </button>

        {status && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Response Output:</h2>
            <pre className="p-4 bg-slate-900 text-green-400 rounded-lg text-xs overflow-x-auto shadow-inner">
              {status}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
