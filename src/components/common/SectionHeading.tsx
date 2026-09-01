interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-600">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
