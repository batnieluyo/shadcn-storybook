import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/nova/sidebar.tsx';

const meta = {
  title: 'nova/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Inbox', icon: InboxIcon },
  { title: 'Calendar', icon: CalendarIcon },
  { title: 'Search', icon: SearchIcon },
  { title: 'Settings', icon: SettingsIcon },
];

export const Default: Story = {
  render: () => (
    <div className="h-[500px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar collapsible="none">
          <SidebarHeader>
            <div className="px-2 py-1 text-sm font-semibold">Acme Inc</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.title === 'Home'}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-2 py-1 text-xs text-muted-foreground">v1.0.0</div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <span className="text-sm font-medium">Dashboard</span>
          </header>
          <div className="flex flex-1 items-center justify-center p-4 text-sm text-muted-foreground">
            Page content
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <div className="h-[500px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="px-2 py-1 text-sm font-semibold">Acme Inc</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton tooltip={item.title} isActive={item.title === 'Home'}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-2 py-1 text-xs text-muted-foreground">v1.0.0</div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <span className="text-sm font-medium">Click the trigger to collapse</span>
          </header>
          <div className="flex flex-1 items-center justify-center p-4 text-sm text-muted-foreground">
            Page content
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};
