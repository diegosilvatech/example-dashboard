import { Story, Meta } from '@storybook/react/types-6-0';

import Pie, { PieProps } from '.';

export default {
  title: 'Pie',
  component: Pie
} as Meta;

export const PieDefault: Story<PieProps> = (args) => <Pie {...args} />;
