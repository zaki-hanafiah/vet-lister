import { Select } from 'antd'
import * as React from 'react'

const LocationFilter = ({ setFilterValue }: TLocationFilter) => {
    const { Option } = Select
    const handleSelect = (value: string) => {
        setFilterValue(value)
    }

    return (
        <Select
            onChange={handleSelect}
            placeholder="Filter by location..."
            style={{
                width: '260px',
                maxWidth: '100%',
            }}
        >
            <Option value="all">Show All</Option>
            <Option value="selangor">Selangor</Option>
            <Option value="kuala lumpur">Kuala Lumpur</Option>
            <Option value="putrajaya">Putrajaya</Option>
        </Select>
    )
}

type TLocationFilter = {
    setFilterValue: React.Dispatch<React.SetStateAction<string>>
}

export default LocationFilter
