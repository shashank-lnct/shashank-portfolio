import { useReveal } from '../hooks/useReveal'
import { skillGroups } from '../data/portfolio'

function SkillCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <p className="font-mono text-[12px] text-accent-2 mb-1">{group.path}</p>
      <h3 className="font-display text-lg font-medium text-ink mb-4">{group.label}</h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1.5 font-mono text-[12.5px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-border-soft bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headRef} className="reveal mb-12">
          <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
            02 · Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Technical Toolkit
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
