import * as React from 'react'
import { Card, Divider, Space, Skeleton } from 'antd'
import { FacebookFilled, InstagramFilled, HomeFilled } from '@ant-design/icons'
import { IVeterinary } from '@/definitions'
import SocialLink from '@/components/VetCard/social-link'
import VetCardHeader from '@/components/VetCard/header'
import AddressSection from '@/components/VetCard/address-section'
import MainContent from '@/components/VetCard/main-content'

const VetCard = ({ vet_props, is_loading }: TVetCard) => {
    const { address, contact, name, image, social, rating, services } =
        vet_props
    const { facebook, instagram, website } = social
    return (
        <Card
            title={
                <Skeleton loading={is_loading}>
                    <VetCardHeader name={name} rating={rating} />
                </Skeleton>
            }
        >
            <Skeleton loading={is_loading}>
                <MainContent name={name} image={image} services={services} />
                <Divider orientation="left">Contact Details</Divider>
                <AddressSection address={address} contact={contact} />
                <Divider orientation="left">Web & Social Details</Divider>
                <Space direction="vertical">
                    {website && (
                        <SocialLink icon={<HomeFilled />} text={website} />
                    )}
                    {facebook && (
                        <SocialLink icon={<FacebookFilled />} text={facebook} />
                    )}
                    {instagram && (
                        <SocialLink
                            icon={<InstagramFilled />}
                            text={instagram}
                        />
                    )}
                </Space>
            </Skeleton>
        </Card>
    )
}

type TVetCard = {
    is_loading: boolean
    vet_props: IVeterinary
}

export default VetCard
