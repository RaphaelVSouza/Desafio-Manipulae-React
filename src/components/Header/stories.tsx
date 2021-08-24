import { Story, Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  args: {},
} as Meta

export const Default: Story = (args) => (
  // Ignoring type checking because all arguments are passing on Meta
  // @ts-ignore: Unreachable code error
  <Header {...args} />
)
