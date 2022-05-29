import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const All: ComponentStory<typeof Button> = (args: any) => <Button {...args} />
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />

export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Success = Template.bind({})
export const Danger = Template.bind({})

Default.args = {
  children: 'Default'
}

Primary.args = {
  appearance: 'primary',
  children: 'Primary'
}

Success.args = {
  appearance: 'success',
  children: 'Success'
}

Danger.args = {
  appearance: 'danger',
  children: 'Danger'
}
