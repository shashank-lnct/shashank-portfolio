import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

export default function CodingCTA() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="py-20 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-2xl border border-border bg-surface bg-grid px-6 py-14 sm:px-16 sm:py-16 text-center"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(79,107,255,0.12),transparent_70%)]"
            aria-hidden="true"
          />
          <p className="relative font-mono text-xs tracking-wider text-accent-2 uppercase mb-4">
            $ git log --author=shashank
          </p>
          <h2 className="relative font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Code. Solve. Build. Repeat.
          </h2>
          <p className="relative mt-4 max-w-xl mx-auto text-muted text-[15px] leading-relaxed">
            I continuously practice problem solving and work on projects to strengthen
            my software development fundamentals.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
