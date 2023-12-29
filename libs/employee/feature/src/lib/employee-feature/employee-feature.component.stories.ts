import type { Meta, StoryObj } from '@storybook/angular';
import { EmployeeFeatureComponent } from './employee-feature.component';

const meta: Meta<EmployeeFeatureComponent> = {
  component: EmployeeFeatureComponent,
  title: 'EmployeeFeatureComponent',
};
export default meta;
type Story = StoryObj<EmployeeFeatureComponent>;

export const Primary: Story = {
  args: {},
};
