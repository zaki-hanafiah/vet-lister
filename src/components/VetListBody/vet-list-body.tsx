import * as React from 'react'
import { List } from 'antd'
import { IVeterinary } from '@/definitions'
import VetCard from '@/components/VetCard'

const VetListBody = ({ is_loading, vets_list }: TVetsListBody) => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            pageSize: 3,
        }}
        dataSource={vets_list}
        renderItem={(veterinary: IVeterinary) => (
            <List.Item>
                <VetCard is_loading={is_loading} vet_props={veterinary} />
            </List.Item>
        )}
    />
)

type TVetsListBody = {
    is_loading: boolean
    vets_list: IVeterinary[]
}

export default VetListBody
