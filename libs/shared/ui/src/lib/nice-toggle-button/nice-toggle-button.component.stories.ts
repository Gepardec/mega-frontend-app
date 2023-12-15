import type { Meta, StoryObj } from '@storybook/angular';
import { NiceToggleButtonComponent } from './nice-toggle-button.component';

const meta: Meta<NiceToggleButtonComponent> = {
  component: NiceToggleButtonComponent,
  title: 'NiceToggleButtonComponent',
};
export default meta;
type Story = StoryObj<NiceToggleButtonComponent>;

const selectableOptions = ['Mein Mega', 'Controlling'];
export const Primary: Story = {
  args: {
    selectableOptions: selectableOptions,
    selected: selectableOptions[0],
  },
};
