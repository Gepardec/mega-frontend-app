import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DatepickerMonthYearComponent } from './datepicker-month-year.component';

const meta: Meta<DatepickerMonthYearComponent> = {
  component: DatepickerMonthYearComponent,
  title: 'DatepickerMonthYearComponent',
  argTypes: {
    dateChanged: { action: 'dateChanged' },
    date: { control: { type: 'date' } },
  },
};
export default meta;
type Story = StoryObj<DatepickerMonthYearComponent>;

export const Primary: Story = {
  args: {
    date: new Date(),
  },
};
