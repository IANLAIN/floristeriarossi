interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl px-1 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary-dark sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1.5 font-serif text-2xl text-primary sm:mt-2 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 sm:mt-3 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
