import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            Building, learning, and solving one problem at a time.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted hover:text-ink transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted-2">
        © 2026 Shashank Shekhar. All rights reserved.
      </p>
    </footer>
  )
}
