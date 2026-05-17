import type { Tag } from "./tags"

export interface PortfolioItem {
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

export interface FocusArea {
  title: string
  subtitle: string
  metric: string
  summary: string
  details: string[]
  links?: {
    label: string
    url: string
  }[]
  tags: Tag[]
}

export interface HistoryItem {
  date: string
  title: string
  category: "Project" | "Other"
  tags: Tag[]
  pagePath: "/about-me" | "/projects" | "/others"
  pageLabel: string
}
