import Button, { BtnProps } from './Button'
import { Meta, Story } from '@storybook/react'

// For buttons with icon stories
import { MdAddShoppingCart as StoreIcon } from 'react-icons/md'

export default {
  component: Button,
  title: 'Button',
} as Meta

const Template: Story<BtnProps> = (args) => <Button {...args}>Default</Button>

export const Default = Template.bind({})
Default.args = {}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}

export const DisabledShadow = Template.bind({})
DisabledShadow.args = {
  disableShadow: true,
  color: 'primary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const WithIconAtStart = Template.bind({})
WithIconAtStart.args = {
  color: 'primary',
  startIcon: <StoreIcon />,
}

export const WithIconAtEnd = Template.bind({})
WithIconAtEnd.args = {
  color: 'primary',
  endIcon: <StoreIcon />,
}

export const DefaultWithIconAtStart = Template.bind({})
DefaultWithIconAtStart.args = {
  startIcon: <StoreIcon />,
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
}
