import * as React from 'react'

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white shadow-md rounded-md p-6 ${className}`}>{children}</div>
)

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-gray-800">{children}</h2>
)

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="text-gray-700">{children}</div>
)
