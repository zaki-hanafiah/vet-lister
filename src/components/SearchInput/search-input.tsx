import { Input } from 'antd'
import * as React from 'react'
import { IVeterinary } from '@/definitions'

const SearchInput = ({ setSearchResults, list }: TSearchInput) => {
    const { useCallback } = React
    const handleSearch = (value: string) => {
        if (value === '') {
            resetSearch()
            return
        }
        setSearchResults(
            list.filter((record: IVeterinary) =>
                record.name.toLowerCase().includes(value.toLowerCase())
            )
        )
    }

    const resetSearch = useCallback(() => {
        setSearchResults(list)
    }, [list, setSearchResults])

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
    list: IVeterinary[]
    setSearchResults: React.Dispatch<React.SetStateAction<IVeterinary[]>>
}

export default SearchInput
