import { ComponentMeta, Story } from "@storybook/react";
import SocialMedias from "../molecules/SocialMedias";

export default {
    title: 'SocialMedia/SocialMedia',
    component: SocialMedias,
} as ComponentMeta<typeof SocialMedias>

export const smHeader: Story = () => (
    <SocialMedias />
)