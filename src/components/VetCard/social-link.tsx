import * as React from 'react'
import { Space } from 'antd'

const SocialLink = ({ icon, text }: TSocialLink) => (
    <Space>
        {icon}
        <a
            href={text}
            target="_blank"
            style={{ textDecoration: 'none' }}
            rel="noreferrer"
        >
            {text}
        </a>
    </Space>
)

type TSocialLink = {
    icon: React.ReactNode
    text: string
}

export default SocialLink
