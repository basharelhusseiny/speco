'use client'

import { useState, type FormEvent } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
  FileText,
  Truck,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react'
import { HeroVideo } from '@/components/HeroVideo'
import { Band, Eyebrow } from '@/components/Sections'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contact } from '@/lib/content'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons'

interface FormState {
  name: string
  company: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  subject: 'General Inquiry',
  message: '',
}

const subjects = [
  'General Inquiry',
  'EPS 3D Panels Quote',
  'Prefab & Sandwich Panels Quote',
  'Roofing Systems Quote',
  'Design & Build / Turnkey Project',
  'Site Installation Services',
  'Technical Consultation & Training',
]

const inputClass =
  'h-12 w-full rounded-xs border border-black/[0.12] bg-white px-4 text-base text-body-dark placeholder:text-mutedlight/60 transition-all duration-200 focus:border-speco focus:bg-white focus:outline-none focus:ring-2 focus:ring-speco/15 md:text-sm'

const labelClass = 'mb-2 block font-heading text-xs font-semibold uppercase tracking-[0.08em] text-body-dark'

export default function Contact() {
  usePageMeta({
    title: 'Contact SPECO Building Technology | Get a Quote | Juba, South Sudan',
    description:
      'Contact SPECO Building Technology for construction material supply, project inquiries, and consultations. Located in Gombo Soug, Juba, South Sudan.',
    path: '/contact',
  })

  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const set = (key: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const validateField = (key: keyof FormState, value: string): string | undefined => {
    if (key === 'name' && !value.trim()) return 'Please tell us your name.'
    if (key === 'phone' && !value.trim()) return 'We need a phone number to reach you.'
    if (key === 'email') {
      if (!value.trim()) return 'We need an email address to reply to.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'That email address does not look complete.'
    }
    if (key === 'message' && !value.trim()) return 'Tell us a little about your project or inquiry.'
    return undefined
  }

  const onBlur = (key: keyof FormState) => () => {
    const error = validateField(key, form[key])
    if (error) setErrors((err) => ({ ...err, [key]: error }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: typeof errors = {}
    ;(['name', 'phone', 'email', 'message'] as const).forEach((k) => {
      const error = validateField(k, form[k])
      if (error) next[k] = error
    })
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }

    setStatus('sending')
    window.setTimeout(() => setStatus('sent'), 900)
  }

  const details = [
    {
      icon: Phone,
      label: 'Direct Phone',
      value: contact.phoneDisplay,
      href: contact.phoneHref,
      sub: 'Mon - Sat: 8:00 AM - 5:00 PM',
      action: 'Call Now',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp Business',
      value: contact.phoneDisplay,
      href: contact.whatsapp,
      sub: 'Instant Project & BOQ Chat',
      action: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      label: 'Email Inquiries',
      value: contact.email,
      href: `mailto:${contact.email}`,
      sub: 'Official tenders & quote requests',
      action: 'Send Email',
    },
    {
      icon: MapPin,
      label: 'Factory & Showroom',
      value: contact.address,
      href: contact.maps,
      sub: 'Open for site visits & material inspection',
      action: 'Open Map',
    },
  ]

  return (
    <>
      <HeroVideo
        video="contact-hero"
        eyebrow="Direct Line · Juba Factory"
        titleLines={["Let's Build Together"]}
        sub="Get in touch for factory-direct material supply, project consultations, or any inquiries about our innovative building systems in South Sudan."
        revealText
      />

      {/* Main Contact Section */}
      <Band tone="light" className="section-pad relative overflow-hidden" ariaLabelledby="contact-details">
        {/* Subtle background ambient line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" aria-hidden="true" />

        <div className="container-x">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Get in Touch</Eyebrow>
              <h2 id="contact-details" className="h-section mt-4 max-w-2xl text-body-dark">
                Reach our team in <span className="text-speco-dark">Juba, South Sudan.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-mutedlight md:text-right">
              Whether you are an engineer, developer, contractor, or government agency, our factory and project team is ready to respond.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Direct Channels & Map */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {details.map((d) => {
                  const Icon = d.icon
                  return (
                    <a
                      key={d.label}
                      href={d.href}
                      target={d.href.startsWith('http') ? '_blank' : undefined}
                      rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group relative flex items-start gap-4 overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light p-5 transition-all duration-300 hover:border-speco/40 hover:bg-white hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)]"
                    >
                      {/* Left accent indicator */}
                      <div className="absolute inset-y-0 left-0 w-[3px] bg-speco scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-speco/10 text-speco transition-colors duration-300 group-hover:bg-speco group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-mutedlight">
                            {d.label}
                          </p>
                          <span className="inline-flex items-center gap-1 font-heading text-[11px] font-medium text-speco opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {d.action}
                            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </div>
                        <p className="mt-1 truncate font-heading text-base font-bold text-body-dark transition-colors group-hover:text-speco-dark">
                          {d.value}
                        </p>
                        <p className="mt-0.5 text-xs text-mutedlight">{d.sub}</p>
                      </div>
                    </a>
                  )
                })}

                {/* Operating Hours Card */}
                <div className="rounded-sm border border-black/[0.08] bg-surface-light p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-black/[0.05] text-body-dark">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-mutedlight">
                          Operating Hours
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Open for Inquiries
                        </span>
                      </div>
                      <div className="mt-2.5 space-y-1.5 text-xs">
                        {contact.hours.map((h) => {
                          const parts = h.split('·').map((s) => s.trim())
                          const day = parts[0]
                          const time = parts[1] || ''
                          const isClosed = time.toLowerCase().includes('closed')
                          return (
                            <div key={h} className="flex items-center justify-between">
                              <span className="text-mutedlight">{day}</span>
                              <span className={`font-semibold ${isClosed ? 'text-speco-dark' : 'text-body-dark'}`}>
                                {time}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Connect Strip */}
                <div className="flex items-center justify-between rounded-sm border border-black/[0.08] bg-surface-light p-4">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.1em] text-body-dark">
                    Follow SPECO
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="SPECO on Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-sm border border-black/[0.12] bg-white text-body-dark/75 transition-all hover:border-speco hover:bg-speco hover:text-white"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="SPECO on Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-sm border border-black/[0.12] bg-white text-body-dark/75 transition-all hover:border-speco hover:bg-speco hover:text-white"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="SPECO on WhatsApp"
                      className="flex h-10 w-10 items-center justify-center rounded-sm border border-black/[0.12] bg-white text-body-dark/75 transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>

                {/* Map Card */}
                <div className="relative overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light">
                  <div className="flex items-center justify-between border-b border-black/[0.06] bg-white px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-speco" />
                      <span className="font-heading text-xs font-semibold text-body-dark">Factory Location</span>
                    </div>
                    <span className="font-mono text-[11px] text-mutedlight">Gombo Soug, Juba</span>
                  </div>
                  <iframe
                    title="SPECO Building Technology on the map — Gombo Soug Block 1, Juba"
                    src={contact.mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full filter contrast-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Request Form */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light p-6 shadow-xl shadow-black/[0.03] md:p-10">
                {/* Top orange brand highlight */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-speco/40 via-speco to-speco/40" />

                {status === 'sent' ? (
                  <div
                    className="flex min-h-[460px] flex-col items-center justify-center text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-speco/10 text-speco">
                      <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                      <div className="absolute inset-0 rounded-full border-2 border-speco/30 animate-ping opacity-20" />
                    </div>
                    <span className="mt-6 inline-block font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco-dark">
                      Transmission Confirmed
                    </span>
                    <h2 className="mt-2 font-heading text-3xl font-bold text-body-dark">
                      Message Received
                    </h2>
                    <p className="mt-3 max-w-md text-base leading-[1.7] text-mutedlight">
                      Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}. Your inquiry has been forwarded directly to our Juba sales and technical engineering team.
                    </p>
                    <div className="mt-6 rounded-sm border border-black/[0.06] bg-white p-4 text-xs text-mutedlight">
                      <p>Expected Response Window: <strong className="text-body-dark">Within 24 business hours</strong></p>
                      <p className="mt-1">Urgent inquiry? Call directly at <a href={contact.phoneHref} className="font-semibold text-speco-dark underline">{contact.phoneDisplay}</a></p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm)
                        setStatus('idle')
                      }}
                      className="mt-8 inline-flex h-12 items-center justify-center rounded-xs border border-body-dark/20 bg-white px-8 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-body-dark transition-all hover:border-speco hover:bg-speco hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Form Head */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-speco" />
                        <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-speco-dark">
                          Direct Inquiry
                        </span>
                      </div>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-body-dark md:text-3xl">
                        Request a Project Quote
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mutedlight">
                        Fill out the details below. For blueprints or technical BOQ documents, you can also share them via WhatsApp.
                      </p>
                    </div>

                    <form onSubmit={onSubmit} noValidate aria-label="Quote request form">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={labelClass}>
                            Full Name <span className="text-speco-dark" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            placeholder="e.g. John Deng"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            value={form.name}
                            onChange={set('name')}
                            onBlur={onBlur('name')}
                            className={inputClass}
                          />
                          {errors.name && (
                            <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-speco-dark">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="company" className={labelClass}>
                            Company / Organization
                          </label>
                          <input
                            id="company"
                            type="text"
                            autoComplete="organization"
                            placeholder="e.g. Nile Contracting Ltd."
                            value={form.company}
                            onChange={set('company')}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className={labelClass}>
                            Phone Number <span className="text-speco-dark" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+211 ..."
                            required
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            value={form.phone}
                            onChange={set('phone')}
                            onBlur={onBlur('phone')}
                            className={inputClass}
                          />
                          {errors.phone && (
                            <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-speco-dark">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className={labelClass}>
                            Email Address <span className="text-speco-dark" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="name@domain.com"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            value={form.email}
                            onChange={set('email')}
                            onBlur={onBlur('email')}
                            className={inputClass}
                          />
                          {errors.email && (
                            <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-speco-dark">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-5">
                        <label htmlFor="subject" className={labelClass}>
                          Project Type / Subject
                        </label>
                        <select
                          id="subject"
                          value={form.subject}
                          onChange={set('subject')}
                          className={`${inputClass} cursor-pointer`}
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <label htmlFor="message" className={labelClass}>
                            Project Details / Scope <span className="text-speco-dark" aria-hidden="true">*</span>
                          </label>
                          <span className="font-heading text-[10px] uppercase tracking-wider text-mutedlight">
                            Location, square meters, timeline
                          </span>
                        </div>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Please describe your project requirements, estimated dimensions, building location, or specific materials needed..."
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          value={form.message}
                          onChange={set('message')}
                          onBlur={onBlur('message')}
                          className="w-full rounded-xs border border-black/[0.12] bg-white p-4 text-base text-body-dark placeholder:text-mutedlight/60 transition-all duration-200 focus:border-speco focus:bg-white focus:outline-none focus:ring-2 focus:ring-speco/15 md:text-sm"
                        />
                        {errors.message && (
                          <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-speco-dark">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="inline-flex h-13 w-full items-center justify-center gap-3 rounded-xs bg-speco px-8 py-2 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-speco/25 transition-all duration-200 hover:bg-speco-dark hover:shadow-speco/40 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                          {status === 'sending' ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              Submit Project Inquiry
                              <Send className="h-4 w-4" aria-hidden="true" />
                            </>
                          )}
                        </button>

                        <span className="text-xs text-mutedlight">
                          Free preliminary assessment &amp; BOQ estimation.
                        </span>
                      </div>

                      {/* Assurance Badges */}
                      <div className="mt-8 grid grid-cols-3 gap-2 border-t border-black/[0.06] pt-6">
                        <div className="flex items-center gap-2 text-xs text-body-dark/80">
                          <ShieldCheck className="h-4 w-4 shrink-0 text-speco" aria-hidden="true" />
                          <span className="font-heading text-[11px] font-medium">Confidential</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-body-dark/80">
                          <Clock className="h-4 w-4 shrink-0 text-speco" aria-hidden="true" />
                          <span className="font-heading text-[11px] font-medium">24h Response</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-body-dark/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-speco" aria-hidden="true" />
                          <span className="font-heading text-[11px] font-medium">Factory Direct</span>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Assurance / Direct Support Strip */}
      <Band tone="dark" className="border-t border-white/[0.08] py-14" ariaLabelledby="contact-commitments">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-speco/10 text-speco">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-white">Send Drawings &amp; BOQs</h3>
                <p className="mt-1 text-xs leading-relaxed text-body-ondark/65">
                  Send architectural plans, CAD files, or BOQs directly to our engineers for rapid project costing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-speco/10 text-speco">
                <Truck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-white">Nationwide Logistics</h3>
                <p className="mt-1 text-xs leading-relaxed text-body-ondark/65">
                  Factory-direct dispatch across Juba and onward logistics coordination to all South Sudan states.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-speco/10 text-speco">
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-white">Factory Showroom Visit</h3>
                <p className="mt-1 text-xs leading-relaxed text-body-ondark/65">
                  Inspect raw EPS panels, sandwich wall cuts, and completed prefab structures in person at Gombo Soug.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Band>
    </>
  )
}
