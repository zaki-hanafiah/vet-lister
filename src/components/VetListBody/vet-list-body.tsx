import * as React from 'react'
import { Card, Pagination } from 'antd'
import { IVeterinary } from '@/definitions'
import VetCard from '@/components/VetCard'

const VetListBody = ({ is_loading, vets_list }: TVetsListBody) => (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {vets_list.map((veterinary: IVeterinary) => (
                <Card key={veterinary._id} bordered={false}>
                    <VetCard is_loading={is_loading} vet_props={veterinary} />
                </Card>
            ))}
        </div>
        {vets_list.length > 0 && (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 24,
                }}
            >
                <Pagination
                    defaultPageSize={3}
                    total={vets_list.length}
                    showSizeChanger={false}
                />
            </div>
        )}
    </>
)

type TVetsListBody = {
    is_loading: boolean
    vets_list: IVeterinary[]
}

export default VetListBody
