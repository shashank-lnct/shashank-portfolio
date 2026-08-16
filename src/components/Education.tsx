import { useReveal } from '../hooks/useReveal'
import { education } from '../data/portfolio'
import { GraduationCap } from 'lucide-react'

function EducationItem({ item }: { item: (typeof education)[number] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-xl border border-border bg-surface px-6 py-5 transition-colors hover:border-accent/50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <GraduationCap size={20} />
      </span>
      <div className="flex-1">
        <h3 className="font-display text-lg font-medium text-ink">{item.school}</h3>
        <p className="text-sm text-muted mt-0.5">{item.program}</p>
      </div>
      <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-1 justify-between sm:text-right shrink-0">
        <span className="font-mono text-xs text-muted">{item.period}</span>
        <span className="font-mono text-sm text-accent-2">{item.metric}</span>
      </div>
    </div>
  )
}

export default function Education() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headRef} className="reveal mb-14">
          <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
            05 · Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {education.map((item) => (
            <EducationItem key={item.school} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
