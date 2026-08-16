import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/portfolio'
import { CheckCircle2 } from 'lucide-react'

function ExperienceItem({ job }: { job: (typeof experience)[number] }) {
  const ref = useReveal<HTMLLIElement>()
  return (
    <li ref={ref} className="reveal relative pb-2">
      <span
        className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-soft"
        aria-hidden="true"
      />
      <p className="font-mono text-xs text-muted mb-2">{job.period}</p>
      <h3 className="font-display text-xl font-medium text-ink">
        {job.role} <span className="text-muted font-sans font-normal">— {job.org}</span>
      </h3>
      <p className="mt-3 text-[15px] text-muted leading-relaxed max-w-2xl">
        {job.description}
      </p>
      <ul className="mt-4 space-y-2">
        {job.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[14.5px] text-muted">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-2" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border-soft bg-surface px-2.5 py-1 font-mono text-[12px] text-ink"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  )
}

export default function Experience() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headRef} className="reveal mb-14">
          <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
            03 · Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Experience
          </h2>
        </div>

        <ol className="relative max-w-3xl border-l border-border pl-8 sm:pl-10">
          {experience.map((job) => (
            <ExperienceItem key={job.org} job={job} />
          ))}
        </ol>
      </div>
    </section>
  )
}
