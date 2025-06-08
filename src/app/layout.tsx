import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
// import { ThemeToggle } from "@/components/theme-toggle"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 min-h-screen">
        <div className="w-full relative">
          <div className="absolute top-4 left-4 z-10 ">
            <SidebarTrigger />
          </div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}