import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex items-center justify-end p-4">
          <ThemeToggle />
        </div>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}