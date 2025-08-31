import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
