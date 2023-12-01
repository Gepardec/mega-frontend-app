import type { Meta, StoryObj } from '@storybook/angular';
import { KeyValueCardComponent } from './key-value-card.component';

const meta: Meta<KeyValueCardComponent> = {
  component: KeyValueCardComponent,
  title: 'KeyValueCardComponent',
};
export default meta;
type Story = StoryObj<KeyValueCardComponent>;

export const Primary: Story = {
  args: {
    input: '',
  },
};
