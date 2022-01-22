import { Col, Row } from 'antd'
import * as React from 'react'

const VetCardHeader = ({ name, rating }: TVetCardHeader) => (
    <Row>
        <Col span={20}>{name}</Col>
        <Col span={4} style={{ textAlign: 'right' }}>
            Rating: <span style={{ color: 'darkgrey' }}>{rating}</span>
        </Col>
    </Row>
)

type TVetCardHeader = {
    name: string
    rating: number
}

export default VetCardHeader
