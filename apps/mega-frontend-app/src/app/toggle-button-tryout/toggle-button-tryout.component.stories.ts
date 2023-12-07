import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleButtonTryoutComponent } from './toggle-button-tryout.component';

const meta: Meta<ToggleButtonTryoutComponent> = {
  component: ToggleButtonTryoutComponent,
  title: 'ToggleButtonTryoutComponent',
};
export default meta;
type Story = StoryObj<ToggleButtonTryoutComponent>;

export const Primary: Story = {
  args: {},
};
