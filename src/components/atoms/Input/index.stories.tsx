import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '.'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof Input>

const Templete: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Normal = Templete.bind({})

export const Error = Templete.bind({})
Error.args = { hasError: true }
