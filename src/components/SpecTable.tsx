interface SpecTableProps {
  rows: [string, string][]
  tone: 'dark' | 'light'
  label?: string
}

/**
 * Styled specification table (not a browser-default table).
 * Left column: KoHo 500, uppercase, 0.04em tracking, muted.
 * Right column: Roboto 400. Rows separated by 1px rules at 8% opacity.
 * On mobile rows stack label-over-value.
 */
export function SpecTable({ rows, tone, label }: SpecTableProps) {
  const rule = tone === 'dark' ? 'border-white/[0.08]' : 'border-black/[0.08]'
  const labelColor = tone === 'dark' ? 'text-white/50' : 'text-mutedlight'
  const valueColor = tone === 'dark' ? 'text-body-ondark' : 'text-body-dark'

  return (
    <dl className={`border-t ${rule}`} aria-label={label ?? 'Specifications'}>
      {rows.map(([term, value]) => (
        <div key={term} className={`border-b ${rule} grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-6`}>
          <dt className={`font-heading text-sm font-medium uppercase tracking-[0.04em] ${labelColor}`}>{term}</dt>
          <dd className={`text-base ${valueColor}`}>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
