import * as React from 'react'
import { Card, Divider, Space } from 'antd'
import { FacebookFilled, InstagramFilled, HomeFilled } from '@ant-design/icons'
import { IVeterinary } from '@/definitions'
import SocialLink from '@/components/VetCard/social-link'
import VetCardHeader from '@/components/VetCard/header'
import VetAddressSection from '@/components/VetCard/vet-address-section'
import VetMainContent from '@/components/VetCard/vet-main-content'

const VetCard = ({ vet_props }: TVetCard) => {
    const { address, contact, name, image, social, rating, services } =
        vet_props
    const { facebook, instagram, website } = social
    return (
        <Card title={<VetCardHeader name={name} rating={rating} />}>
            <VetMainContent name={name} image={image} services={services} />
            <Divider orientation="left">Contact Details</Divider>
            <VetAddressSection address={address} contact={contact} />
            <Divider orientation="left">Social Details</Divider>
            <Space direction="vertical">
                {website && <SocialLink icon={<HomeFilled />} text={website} />}
                {facebook && (
                    <SocialLink icon={<FacebookFilled />} text={facebook} />
                )}
                {instagram && (
                    <SocialLink icon={<InstagramFilled />} text={instagram} />
                )}
            </Space>
        </Card>
    )
}

type TVetCard = {
    vet_props: IVeterinary
}

export default VetCard
