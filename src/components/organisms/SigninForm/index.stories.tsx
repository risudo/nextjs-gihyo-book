import { ComponentMeta, ComponentStory } from '@storybook/react'
import SigninForm from '.'

export default {
  title: 'Organisms/SigninForm',
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof SigninForm>

const Templete: ComponentStory<typeof SigninForm> = (args) => (
  <SigninForm {...args} />
)
export const Form = Templete.bind({})
