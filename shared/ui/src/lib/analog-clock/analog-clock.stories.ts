import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { AnalogClockComponent } from './analog-clock.component';

export default {
  title: 'Components/Analog Clock',
  component: AnalogClockComponent,
  decorators: [
    moduleMetadata({
      declarations: [AnalogClockComponent],
    }),
  ],
} as Meta;

const Template: Story<AnalogClockComponent> = (args: AnalogClockComponent) => ({
  component: AnalogClockComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
