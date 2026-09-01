import { forwardRef, type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`overflow-hidden rounded-2xl bg-white shadow-soft ${className}`}
    {...props}
  />
))

Card.displayName = 'Card'

export default Card
