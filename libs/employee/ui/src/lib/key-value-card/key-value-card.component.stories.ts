import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { KeyValueCardComponent } from '@mega/employee/ui';

const meta: Meta<KeyValueCardComponent> = {
  component: KeyValueCardComponent,
  title: 'KeyValueCardComponent',
  decorators: [
    componentWrapperDecorator(
      (story) => `<div class='mat-app-background'>${story}</div>`
    ),
  ],
};
export default meta;
type Story = StoryObj<KeyValueCardComponent>;

export const Abwesenheiten: Story = {
  args: {
    title: 'Abwesenheiten',
    data: [
      {
        key: 'Urlaub',
        value: '2 Tage',
      },
      {
        key: 'Krankenstand',
        value: '3 Tage',
      },
      {
        key: 'Home',
        value: '3 Tage',
      },
      {
        key: 'Andere Abwesenheit',
        value: '5 Stunden',
      },
    ],
    link: '#',
    linkDisplayName: 'Personio',
  },
};
