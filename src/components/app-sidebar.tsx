import { IdCard, Code, Lightbulb, History } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "About me",
    url: "/",
    icon: IdCard,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Code,
  },
  {
    title: "Others",
    url: "/others",
    icon: Lightbulb,
  },
  {
    title: "History",
    url: "/history",
    icon: History,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-slate-200 bg-white [&_[data-sidebar=sidebar]]:bg-white">
      <SidebarHeader className="px-4 py-5 group-data-[collapsible=icon]:py-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="h-12 !p-0 pointer-events-none hover:bg-transparent hover:text-inherit active:bg-transparent active:text-inherit data-[active=true]:bg-transparent data-[active=true]:text-inherit"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                H
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-slate-950">ATSUHIRO HORI</span>
                <span className="truncate text-xs text-slate-500">github : hamikan</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                    className={
                      location.pathname === item.url
                        ? "!bg-slate-950 !text-white hover:!bg-slate-900 hover:!text-white [&_svg]:!text-white"
                        : "!text-slate-700 hover:!bg-slate-100 hover:!text-slate-950 [&_svg]:!text-slate-500"
                    }
                  >
                    <Link
                      to={item.url}
                    >
                      <item.icon aria-hidden="true" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
