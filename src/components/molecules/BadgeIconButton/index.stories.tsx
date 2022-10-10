import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchIcon } from "components/atoms/IconButton";
import BadgeIconButton from ".";

export default {
  title: 'Molecules/BadgeIconButton',
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: 'バッジのカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof BadgeIconButton>

const Templete: ComponentStory<typeof BadgeIconButton> = (args) => (
  <BadgeIconButton {...args} />
)

export const SearchBadgeIcon = Templete.bind({})
SearchBadgeIcon.args = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#ed9f28',
}

export const PersonBadgeIcon = Templete.bind({})
PersonBadgeIcon.args = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#d4001a',
}

export const ShoppingCartBadgeIcon = Templete.bind({})
ShoppingCartBadgeIcon.args = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#32bf00',
}
