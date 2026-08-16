import { useReveal } from '../hooks/useReveal'
import { focusAreas } from '../data/portfolio'
import { Code2, Braces, Globe, BrainCircuit, Puzzle } from 'lucide-react'

const icons = [Braces, Code2, Globe, BrainCircuit, Puzzle]

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
          <div>
            <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
              01 · About
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-[15px] sm:text-base text-muted leading-relaxed max-w-xl">
              <p>
                I am a driven 2nd-year B.Tech Computer Science Engineering student at
                LNCT University with a strong foundation in core computer science
                concepts, Data Structures &amp; Algorithms, and Object-Oriented
                Programming.
              </p>
              <p>
                I enjoy building practical applications and continuously improving my
                problem-solving and software development skills.
              </p>
              <p>
                I have hands-on experience through a Web Development internship at{' '}
                <span className="text-ink font-medium">1Stop.ai</span> and personal
                projects involving Web Development and Machine Learning.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-muted uppercase mb-4">
              Currently focused on
            </p>
            <ul className="grid xs:grid-cols-2 gap-3">
              {focusAreas.map((item, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <li
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-accent/50 hover:bg-surface-2"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon size={17} strokeWidth={2} />
                    </span>
                    <span className="text-sm text-ink leading-snug">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
