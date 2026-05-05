import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The COE button. Default variant is `orange-filled` (CTA on light backgrounds). Use `default` (outlined white) on dark navy backgrounds.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['orange-filled', 'navy-outlined', 'default', 'teal-filled', 'ghost', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const OrangeFilled: Story = {
  args: { children: 'Get Started', variant: 'orange-filled', size: 'md' },
};

export const NavyOutlined: Story = {
  args: { children: 'Learn More', variant: 'navy-outlined', size: 'md' },
};

export const DefaultOnDark: Story = {
  args: { children: 'Explore Programs', variant: 'default', size: 'md' },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center bg-[#1c2f3d] p-8">
        <Story />
      </div>
    ),
  ],
};

export const TealFilled: Story = {
  args: { children: 'View Research', variant: 'teal-filled' },
};

export const Ghost: Story = {
  args: { children: 'Cancel', variant: 'ghost' },
};

export const Loading: Story = {
  args: { children: 'Submitting…', variant: 'orange-filled', loading: true },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm" variant="orange-filled">Small</Button>
      <Button size="md" variant="orange-filled">Medium</Button>
      <Button size="lg" variant="orange-filled">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        <Button variant="orange-filled">Orange Filled</Button>
        <Button variant="navy-outlined">Navy Outlined</Button>
        <Button variant="teal-filled">Teal Filled</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-3 bg-[#1c2f3d] p-6 rounded">
        <Button variant="default">Default (Dark bg)</Button>
        <Button variant="ghost" className="text-white hover:bg-white/10">Ghost on Dark</Button>
      </div>
    </div>
  ),
};
