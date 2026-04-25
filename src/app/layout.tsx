import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen flex-1 bg-[#f6f8f7] text-slate-950">
        <div className="relative w-full">
          <div className="absolute left-4 top-4 z-20 w-fit">
            <SidebarTrigger className="size-10 rounded-md border border-slate-200 bg-white/90 text-slate-900 shadow-sm backdrop-blur hover:bg-white" />
          </div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
