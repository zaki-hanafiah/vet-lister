import { Input } from 'antd'
import * as React from 'react'
import { IVeterinary } from '@/definitions'

const SearchInput = ({ setSearchValue }: TSearchInput) => {
    const handleSearch = (value: string) => {
        if (value === '' || !value) {
            setSearchValue('')
            return
        }
        setSearchValue(value)
    }

    return (
        <Input.Search
            allowClear
            enterButton
            onSearch={(value: string) => handleSearch(value)}
            placeholder="Search by name..."
            style={{
                width: '400px',
                maxWidth: '100%',
            }}
        />
    )
}

type TSearchInput = {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default SearchInput
