import type { Meta, StoryObj } from '@storybook/svelte';
import Dial from '../lib/Dial.svelte';

const meta = {
  title: 'Audio Controls/Dial',
  component: Dial,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    label: { control: 'text' },
    size: { control: 'number' }
  }
} satisfies Meta<Dial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    label: 'Frequency',
    size: 80
  }
};

export const Large: Story = {
  args: {
    value: 75,
    min: 0,
    max: 100,
    label: 'Resonance',
    size: 120
  }
};