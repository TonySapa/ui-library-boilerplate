import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Demo from './Demo'

export default {
  title: 'Components/Demo',
  component: Demo,
} as ComponentMeta<typeof Demo>

const Template: ComponentStory<typeof Demo> = (args: any) => <Demo {...args} />

export const Primary = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'Demo',
  variant: DemoVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Demo',
  variant: DemoVariants.secondary
} */
