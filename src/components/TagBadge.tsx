import type { Tag } from "@/data/tags"

interface TagBadgeProps {
  tag: Tag
  className?: string
}

export function TagBadge({ tag, className = "" }: TagBadgeProps) {
  return (
    <span
      className={`rounded-md px-2.5 py-1 text-xs font-bold ${tag.className}${className ? ` ${className}` : ""}`}
    >
      {tag.label}
    </span>
  )
}
