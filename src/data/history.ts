import { hackathons } from "./hackathons"
import { others } from "./others"
import { projects } from "./projects"
import type { HistoryItem, PortfolioItem } from "./types"

const formatHistoryDatePart = (value: string) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value.split("-").join(".")
  }

  if (/^\d{4}-\d{2}$/.test(value)) {
    return value.replace("-", ".")
  }

  return value
}

const buildHistoryDate = ({ startDate, endDate }: PortfolioItem) => {
  const formattedStartDate = formatHistoryDatePart(startDate)
  const formattedEndDate = formatHistoryDatePart(endDate)

  if (formattedStartDate === formattedEndDate) {
    return formattedStartDate
  }

  return `${formattedStartDate} - ${formattedEndDate}`
}

const createHistoryItems = (
  items: PortfolioItem[],
  category: HistoryItem["category"],
  pagePath: HistoryItem["pagePath"],
  pageLabel: HistoryItem["pageLabel"],
) =>
  items.map((item, index) => ({
    date: buildHistoryDate(item),
    title: item.title,
    category,
    tags: item.techs,
    pagePath,
    pageLabel,
    sortValue: item.startDate,
    sortIndex: index,
  }))

export const historyItems: HistoryItem[] = [
  ...createHistoryItems(projects, "Project", "/projects", "Projectsを見る"),
  ...createHistoryItems(hackathons, "Project", "/projects", "Projectsを見る"),
  ...createHistoryItems(others, "Other", "/others", "Othersを見る"),
]
  .sort((a, b) => {
    if (a.sortValue !== b.sortValue) {
      return a.sortValue.localeCompare(b.sortValue)
    }

    return a.sortIndex - b.sortIndex
  })
  .map(({ sortValue: _sortValue, sortIndex: _sortIndex, ...item }) => item)
