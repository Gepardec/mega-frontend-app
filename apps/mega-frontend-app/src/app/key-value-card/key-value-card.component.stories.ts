import type { Meta, StoryObj } from '@storybook/angular';
import { KeyValueCardComponent } from './key-value-card.component';

const meta: Meta<KeyValueCardComponent> = {
  component: KeyValueCardComponent,
  title: 'KeyValueCardComponent',
};
export default meta;
type Story = StoryObj<KeyValueCardComponent>;

export const Abwesenheiten: Story = {
  args: {
    title: 'Abwesenheiten',
    data: [
      {
        key: 'Urlaub',
        value: '2',
        unit: 'Tage',
      },
      {
        key: 'Krankenstand',
        value: '3',
        unit: 'Tage',
      },
      {
        key: 'Home',
        value: '3',
        unit: 'Tage',
      },
      {
        key: 'Andere Abwesenheit',
        value: '5',
        unit: 'Stunden',
      },
    ],
    link: '#',
    linkDisplayName: 'Personio',
  },
};
