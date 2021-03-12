import Button, { BtnProps } from './Button'
import { Meta, Story } from '@storybook/react'

// For buttons with icon stories
import { MdAddShoppingCart as StoreIcon } from 'react-icons/md'

export default {
  component: Button,
  title: 'Button',
} as Meta

interface TemplateBtnProps extends BtnProps {
  label: string
}

const Template: Story<TemplateBtnProps> = ({ label = 'Default', ...rest }) => (
  <Button {...rest}>{label}</Button>
)

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
  label: 'Disabled',
  disabled: true,
}

export const DisabledText = Template.bind({})
DisabledText.args = {
  label: 'Disabled',
  disabled: true,
  variant: 'text',
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

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  color: 'primary',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  size: 'lg',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Danger',
  color: 'danger',
}
