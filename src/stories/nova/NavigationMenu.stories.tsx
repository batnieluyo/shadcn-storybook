import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/nova/navigation-menu.tsx';

const meta = {
  title: 'nova/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Analytics</div>
                  <div className="text-muted-foreground">
                    Track and understand your metrics.
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Automations</div>
                  <div className="text-muted-foreground">
                    Build workflows without code.
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Integrations</div>
                  <div className="text-muted-foreground">
                    Connect your favorite tools.
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Blog</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Support</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Careers</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Changelog</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
