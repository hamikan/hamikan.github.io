import { CalendarDays, ExternalLink, Github, Sparkles, Users } from "lucide-react"
import { TagBadge } from "@/components/TagBadge"
import type { Tag } from "@/data/tags"

interface CardProps {
  image?: string
  video?: string
  title: string
  summary: string
  startDate: string
  endDate: string
  teamSize: string
  githubUrl?: string
  externalUrl?: string
  externalLabel?: string
  techs: Tag[]
}

export function Card({
  image,
  video,
  title,
  summary,
  startDate,
  endDate,
  teamSize,
  githubUrl,
  externalUrl,
  externalLabel = "Link",
  techs,
}: CardProps) {
  const linkUrl = githubUrl ?? externalUrl
  const linkLabel = githubUrl ? "GitHub" : externalLabel

  return (
    <article className="group flex h-full overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="flex w-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          {video ? (
            <video
              src={video}
              aria-label={title}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full bg-slate-100 object-contain"
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full bg-slate-100 object-contain transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#164e63_52%,#f97316_100%)]">
              <Sparkles className="h-12 w-12 text-white/85" aria-hidden="true" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/45 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-5 p-5">
          <div className="space-y-3">
            <h3 className="text-xl font-bold leading-tight text-slate-950">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{summary}</p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-teal-700" aria-hidden="true" />
              <span>
                {startDate} - {endDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-teal-700" aria-hidden="true" />
              <span>{teamSize}</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <TagBadge key={tech.label} tag={tech} className="font-semibold" />
              ))}
            </div>

            {linkUrl ? (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                {githubUrl ? (
                  <Github className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                )}
                {linkLabel}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
