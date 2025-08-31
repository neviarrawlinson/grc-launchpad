'use client'

import React from 'react'
import { Button } from './button'

interface DownloadButtonProps {
  href: string
  label: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ href, label }) => {
  return (
    <a href={href} download>
      <Button variant="outline">{label}</Button>
    </a>
  )
}
