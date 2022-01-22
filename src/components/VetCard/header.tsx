import { Col, Row } from 'antd'
import { StarFilled } from '@ant-design/icons'
import * as React from 'react'

const VetCardHeader = ({ name, rating }: TVetCardHeader) => (
    <Row>
        <Col span={20}>{name}</Col>
        <Col span={4} style={{ textAlign: 'right' }}>
            Rating:
            <span style={{ color: 'darkgrey', padding: '0 4px 0 8px' }}>
                {rating}
            </span>
            <StarFilled />
        </Col>
    </Row>
)

type TVetCardHeader = {
    name: string
    rating: number
}

export default VetCardHeader
