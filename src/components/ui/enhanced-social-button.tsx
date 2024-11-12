'use client'

import { ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Chrome } from 'lucide-react'

interface EnhancedSocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github' | 'email'
  isLoading?: boolean
}

const providerConfig = {
  google: {
    icon: Chrome,
    colors: {
      background: 'bg-white hover:bg-red-50',
      border: 'border-red-200',
      text: 'text-red-600',
      shadow: 'shadow-red-100'
    },
    label: 'Continue with Google'
  },
  github: {
    icon: Github,
    colors: {
      background: 'bg-white hover:bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-700',
      shadow: 'shadow-gray-100'
    },
    label: 'Continue with GitHub'
  },
  email: {
    icon: Mail,
    colors: {
      background: 'bg-white hover:bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      shadow: 'shadow-blue-100'
    },
    label: 'Sign in with Email'
  }
}

export function EnhancedSocialButton({
  provider,
  isLoading,
  onClick,
  ...props
}: EnhancedSocialButtonProps) {
  const config = providerConfig[provider]
  const Icon = config.icon

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={isLoading}
      className={`
        w-full flex items-center justify-center px-4 py-3
        border rounded-lg
        transition-all duration-200
        ${config.colors.background}
        ${config.colors.border}
        ${config.colors.shadow}
        disabled:opacity-50 disabled:cursor-not-allowed
        group
      `}
      {...props}
    >
      <motion.div
        className="flex items-center"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        <Icon className={`
          w-5 h-5 mr-3 
          ${config.colors.text}
          transition-transform duration-200
          group-hover:scale-110
        `} />
        <span className={`font-medium ${config.colors.text}`}>
          {isLoading ? 'Loading...' : config.label}
        </span>
      </motion.div>
    </motion.button>
  )
} 