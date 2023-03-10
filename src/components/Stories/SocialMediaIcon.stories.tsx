import SocialMediaIcon from "../atoms/SocialMediaIcon";
import { ComponentMeta, Story } from '@storybook/react'
import { SocialMediaProps } from "../../interface/atoms/ISocialMediaIcon";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

export default {
    title: 'SocialMedia/SocialMediaIcon',
    component: SocialMediaIcon,
} as ComponentMeta<typeof SocialMediaIcon>

export const linkedin: Story<SocialMediaProps> = (args) => (
    <SocialMediaIcon { ...args } />
)

linkedin.args = {
    icon: FaLinkedin
}

export const github: Story<SocialMediaProps> = (args) => (
    <SocialMediaIcon {...args} />
)

github.args = {
    icon: FaGithubSquare
}

export const instagram: Story<SocialMediaProps> = (args) => (
    <SocialMediaIcon {...args} />
)

instagram.args = {
    icon: FaInstagramSquare
}

export const youtube: Story<SocialMediaProps> = (args) => (
    <SocialMediaIcon {...args} />
)

youtube.args = {
    icon: FaYoutubeSquare
}