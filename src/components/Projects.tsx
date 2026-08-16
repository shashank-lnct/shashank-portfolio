import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/portfolio'
import { ArrowUpRight, Film, Wallet } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'

function MovieVisual() {
  const bars = [62, 84, 47, 71, 38, 90, 55]
  return (
    <div className="relative h-full w-full p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">recommender.ipynb</span>
        <Film size={16} className="text-accent-2" />
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent-2/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-md border border-border-soft bg-surface-2 p-2">
            <div className="h-10 rounded bg-accent/15 mb-2" />
            <div className="h-1.5 w-3/4 rounded bg-border" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ExpenseVisual() {
  const rows = [
    { label: 'Groceries', value: 64, color: 'bg-accent' },
    { label: 'Transport', value: 38, color: 'bg-accent-2' },
    { label: 'Utilities', value: 52, color: 'bg-accent/60' },
  ]
  return (
    <div className="relative h-full w-full p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">dashboard</span>
        <Wallet size={16} className="text-accent-2" />
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between font-mono text-[11px] text-muted mb-1">
              <span>{r.label}</span>
              <span>{r.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
              <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-border-soft bg-surface-2 px-3 py-2 flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">Total this month</span>
        <span className="font-mono text-[13px] text-ink">₹ 12,480</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl border border-border bg-surface overflow-hidden transition-all hover:border-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="h-56 border-b border-border bg-surface-2 bg-grid">
        {project.kind === 'ml' ? <MovieVisual /> : <ExpenseVisual />}
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-xl font-medium text-ink">{project.title}</h3>
        <p className="mt-3 text-[14.5px] text-muted leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1 font-mono text-[12px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 hover:gap-2.5 transition-all"
          >
            View Project
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border-soft bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headRef} className="reveal mb-14">
          <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
            04 · Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Selected Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
