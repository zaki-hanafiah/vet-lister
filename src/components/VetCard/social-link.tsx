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
// __afill_20251217_1127__
// __afill_20251226_1034__
// __afill_20260205_2014__
// __afill_20260511_1411__
