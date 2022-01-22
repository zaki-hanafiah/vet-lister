import { Row, Col, Image } from 'antd'
import * as React from 'react'

const VetMainContent = ({ name, image, services }: TVetMainContent) => (
    <Row>
        <Col span={12}>
            {' '}
            <Image
                width={272}
                alt={`${name}-img`}
                src={image}
                style={{ borderRadius: '4px' }}
            />
        </Col>
        <Col span={12}>
            <h4>Services Provided:</h4>
            <ul>
                {services.map((service: string, idx: number) => (
                    <li key={idx}>{service}</li>
                ))}
            </ul>
        </Col>
    </Row>
)

type TVetMainContent = {
    name: string
    image: string
    services: string[]
}

export default VetMainContent
