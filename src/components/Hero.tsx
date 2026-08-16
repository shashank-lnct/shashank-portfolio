import { useEffect, useState } from 'react'
import { Mail, ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/portfolio'

const CODE_LINES = [
  { text: 'const developer = {', indent: 0 },
  { text: "name: 'Shashank Shekhar',", indent: 1 },
  { text: "role: 'Aspiring Software Developer',", indent: 1 },
  { text: "focus: ['DSA', 'Java', 'Web Dev', 'ML'],", indent: 1 },
  { text: 'learning: true,', indent: 1 },
  { text: '};', indent: 0 },
]

function TerminalCard() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) {
      setDone(true)
      return
    }
    if (lineIdx >= CODE_LINES.length) {
      setDone(true)
      return
    }
    const current = CODE_LINES[lineIdx].text
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 22)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1)
      setCharIdx(0)
    }, 220)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx, reducedMotion])

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 animate-float">
      <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-xl border border-border bg-surface/90 glass shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-muted">profile.ts</span>
        </div>
        <pre className="font-mono text-[13px] leading-6 p-5 min-h-[210px] overflow-x-auto">
          {(reducedMotion ? CODE_LINES : CODE_LINES.slice(0, lineIdx + 1)).map((line, i) => {
            const isCurrent = !reducedMotion && i === lineIdx && !done
            const text = reducedMotion
              ? line.text
              : isCurrent
                ? line.text.slice(0, charIdx)
                : line.text
            return (
              <div key={i} style={{ paddingLeft: `${line.indent * 1.1}em` }}>
                <span className="text-muted select-none mr-3">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-ink">{text}</span>
                {isCurrent && <span className="caret" />}
              </div>
            )
          })}
        </pre>
        <div className="flex items-center gap-2 px-4 py-2.5 border-t border-border bg-surface-2 font-mono text-[11px] text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-accent-2' : 'bg-muted'}`} />
          {done ? 'compiled successfully' : 'compiling…'}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-grid overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(79,107,255,0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-5">
            $ whoami
          </p>
          <h1 className="font-display font-semibold text-[2.4rem] leading-[1.08] sm:text-6xl tracking-tight">
            Hi, I'm{' '}
            <span className="text-gradient">Shashank Shekhar.</span>
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl text-muted">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-[15px] sm:text-base text-muted leading-relaxed">
            2nd-year Computer Science Engineering student passionate about building
            practical software, solving problems with Data Structures &amp; Algorithms,
            and exploring Web Development and Machine Learning.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              View My Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-ink transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted hover:text-ink transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="text-muted hover:text-ink transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  )
}
