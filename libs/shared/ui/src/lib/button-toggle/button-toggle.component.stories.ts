import type { Meta, StoryObj } from '@storybook/angular';
import {
  ButtonToggleComponent,
  ButtonToggleOption,
} from './button-toggle.component';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggleComponent',
  argTypes: { selectedChange: { action: 'clicked' } },
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

const selectableOptions: ButtonToggleOption[] = [
  { label: '', value: 'mein-mega', icon: 'home' },
  { label: 'Controlling', value: 'controlling', icon: 'account_balance' },
];
export const Primary: Story = {
  args: {
    selectableOptions: selectableOptions,
    selected: selectableOptions[0].value,
  },
};
