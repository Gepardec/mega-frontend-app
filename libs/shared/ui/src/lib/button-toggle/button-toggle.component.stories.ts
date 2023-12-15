import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'NiceToggleButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

const selectableOptions = ['Mein Mega', 'Controlling'];
export const Primary: Story = {
  args: {
    selectableOptions: selectableOptions,
    selected: selectableOptions[0],
  },
};
