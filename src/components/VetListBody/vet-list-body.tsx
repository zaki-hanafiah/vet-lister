import * as React from 'react'
import { List } from 'antd'
import { IVeterinary } from '@/definitions'
import VetCard from '@/components/VetCard'

const VetListBody = ({ vets_list }: TVetsListBody) => {
    // const { useEffect } = React

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page)
                },
                pageSize: 3,
            }}
            dataSource={vets_list}
            renderItem={(veterinary: IVeterinary) => (
                <List.Item>
                    <VetCard vet_props={veterinary} />
                </List.Item>
            )}
        />
    )
}

type TVetsListBody = {
    vets_list: IVeterinary[]
}

export default VetListBody
