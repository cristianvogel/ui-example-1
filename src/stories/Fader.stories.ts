import type { Meta, StoryObj } from '@storybook/svelte';
import Fader from '../lib/Fader.svelte';

const meta = {
  title: 'Audio Controls/Fader',
  component: Fader,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    label: { control: 'text' },
    vertical: { control: 'boolean' }
  }
} satisfies Meta<Fader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    label: 'Volume',
    vertical: true
  }
};

export const Horizontal: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    label: 'Pan',
    vertical: false
  }
};