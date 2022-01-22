import { Space } from 'antd'
import { PushpinFilled, PhoneFilled } from '@ant-design/icons'
import * as React from 'react'

const AddressSection = ({ address, contact }: TVetAddressSection) => (
    <Space direction="vertical">
        <p>
            <PushpinFilled />
            <span style={{ paddingLeft: '8px' }}>{address}</span>
        </p>

        <p>
            <PhoneFilled />
            <a href={`tel:${contact}`} style={{ paddingLeft: '8px' }}>
                {contact}
            </a>
        </p>
    </Space>
)

type TVetAddressSection = {
    address: string
    contact: string
}

export default AddressSection
