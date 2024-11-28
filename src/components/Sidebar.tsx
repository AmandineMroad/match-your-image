import { Grid, Layers, List, Calendar } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Projects",
    icon: Grid,
    url: "#",
  },
  {
    title: "Breakdown structure",
    icon: Layers,
    url: "#",
  },
  {
    title: "Themes",
    icon: List,
    url: "#",
  },
  {
    title: "Timeline",
    icon: Calendar,
    url: "#",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex flex-col items-center gap-2 p-2">
                      <item.icon className="h-5 w-5" />
                      <span className="text-xs text-center">{item.title}</span>
                    </a>
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