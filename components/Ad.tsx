'use client'

import Link from 'next/link'
import { colors } from '@/lib/constants/colors'

type AdProps = {
  size: 'small' | 'medium' | 'large'
  title: string
  subtitle?: string
  imageSrc: string
  description: string
  buttonText?: string
  link?: string
}

export function Ad({
  size,
  title,
  subtitle,
  imageSrc,
  description,
  buttonText,
  link
}: AdProps) {
  const Container = link ? Link : 'div'
  const containerProps: any = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Container
      {...containerProps}
      className={`
        bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow duration-200 max-h-fit
        ${size === 'small' ? 'hover:shadow-md' : ''}
        ${size === 'medium' ? 'hover:shadow-lg' : ''}
        ${size === 'large' ? 'hover:shadow-xl' : ''}
      `}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`
          w-full object-cover
          ${size === 'small' ? 'h-32' : ''}
          ${size === 'medium' ? 'h-40' : ''}
          ${size === 'large' ? 'h-48' : ''}
        `}
      />
      <div className={`
        p-3
        text-center
        ${size === 'small' ? '' : 'p-4'}
        ${size === 'large' ? 'p-6' : ''}
      `}>
        <h3
          className={`
            font-semibold mb-1
            ${size === 'small' ? 'text-base' : ''}
            ${size === 'medium' ? 'text-lg' : ''}
            ${size === 'large' ? 'text-2xl' : ''}
          `}
          style={{ color: colors.primary }}
        >
          {title}
        </h3>

        {size !== 'small' && subtitle && (
          <h4 className="text-sm font-medium mb-2 text-gray-700">
            {subtitle}
          </h4>
        )}

        <p className={`
          text-sm text-gray-600
          ${size === 'medium' ? 'line-clamp-3' : ''}
          ${size === 'large' ? 'line-clamp-4 mb-4' : ''}
        `}>
          {description}
        </p>

        {buttonText && link && (
          <span
            className="inline-block px-5 py-2 font-medium rounded transition-colors duration-200"
            style={{
              backgroundColor: colors.highlight,
              color: '#fff'
            }}
          >
            {buttonText}
          </span>
        )}
      </div>
    </Container>
  )
}
