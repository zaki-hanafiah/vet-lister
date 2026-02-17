import * as React from 'react'
import { Card, Pagination } from 'antd'
import { IVeterinary } from '@/definitions'
import VetCard from '@/components/VetCard'

const PAGE_SIZE = 3

const VetListBody = ({ is_loading, vets_list }: TVetsListBody) => {
    const [currentPage, setCurrentPage] = React.useState(1)

    const paginatedVets = React.useMemo(() => {
        const startIndex = (currentPage - 1) * PAGE_SIZE
        return vets_list.slice(startIndex, startIndex + PAGE_SIZE)
    }, [currentPage, vets_list])

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {paginatedVets.map((veterinary: IVeterinary) => (
                    <Card key={veterinary._id} variant="borderless">
                        <VetCard
                            is_loading={is_loading}
                            vet_props={veterinary}
                        />
                    </Card>
                ))}
            </div>
            {vets_list.length > PAGE_SIZE && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 24,
                    }}
                >
                    <Pagination
                        current={currentPage}
                        pageSize={PAGE_SIZE}
                        total={vets_list.length}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                    />
                </div>
            )}
        </>
    )
}

type TVetsListBody = {
    is_loading: boolean
    vets_list: IVeterinary[]
}

export default VetListBody
