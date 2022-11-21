import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

const Meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

export const Basic: ComponentStory<typeof Button> = () => <Button>Button</Button>

export default Meta
