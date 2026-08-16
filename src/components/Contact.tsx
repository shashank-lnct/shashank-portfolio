import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

function validate(values: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please add a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const handleChange =
    (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      // No backend is wired up yet — this opens the user's mail client
      // pre-filled with the message as a reliable fallback.
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      await new Promise((r) => setTimeout(r, 500))
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <p className="font-mono text-xs tracking-wider text-accent-2 uppercase mb-3">
              06 · Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Let's Build Something Together
            </h2>
            <p className="mt-5 text-muted text-[15px] leading-relaxed max-w-md">
              I'm currently looking for opportunities to learn, contribute, and grow as
              a software developer.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Mail size={17} />
                </span>
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <LinkedinIcon size={17} />
                </span>
                linkedin.com/in/shashank-shekhar-665437395
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <GithubIcon size={17} />
                </span>
                github.com/shashank-lnct
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-accent transition-colors"
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle size={13} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle size={13} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={handleChange('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-accent transition-colors resize-none"
                placeholder="Tell me a bit about the opportunity…"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle size={13} /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-accent-2" role="status">
                <CheckCircle2 size={16} /> Your mail app should now be open with the message ready to send.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                <AlertCircle size={16} /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
