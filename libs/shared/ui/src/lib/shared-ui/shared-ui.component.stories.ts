import type { Meta, StoryObj } from '@storybook/angular';
import { SharedUiComponent } from '@mega/shared/ui';

const meta: Meta<SharedUiComponent> = {
  component: SharedUiComponent,
  title: 'SharedUiComponent',
};
export default meta;
type Story = StoryObj<SharedUiComponent>;

export const Primary: Story = {
  args: {},
};
