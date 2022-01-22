import * as React from 'react'
import { Col, Layout, Menu, Row, Space } from 'antd'
import { IVeterinary } from '@/definitions'
import VetListBody from '@/components/VetListBody'
import SearchInput from '@/components/SearchInput'
import LocationFilter from '@/components/LocationFilter'

const Main = ({ vets_list }: TMain) => {
    const { useState, useEffect } = React
    const [is_loading, setIsLoading] = useState<boolean>(true)
    const [list, setList] = useState<IVeterinary[]>([])
    const [merged_list, setMergedList] = useState<IVeterinary[]>([])
    const [search_value, setSearchValue] = useState<string>('')
    const [filter_value, setFilterValue] = useState<string>('')

    useEffect(() => {
        if (vets_list) {
            setList(vets_list)
            setMergedList(vets_list)
            setTimeout(() => setIsLoading(false), 600)
        }
    }, [vets_list])

    useEffect(() => {
        if (search_value === '' && filter_value === 'all') {
            setMergedList(list)
            return
        } else if ((search_value && filter_value === 'all') || !filter_value) {
            setMergedList(
                list.filter((record: IVeterinary) =>
                    record.name
                        .toLowerCase()
                        .includes(search_value.toLowerCase())
                )
            )
        } else if (filter_value && filter_value !== 'all' && !search_value) {
            setMergedList(
                list.filter((record: IVeterinary) =>
                    record.address
                        .toLowerCase()
                        .includes(filter_value.toLowerCase())
                )
            )
        } else if (filter_value && filter_value !== 'all' && search_value) {
            setMergedList(
                list.filter(
                    (record: IVeterinary) =>
                        record.address
                            .toLowerCase()
                            .includes(filter_value.toLowerCase()) &&
                        record.name
                            .toLowerCase()
                            .includes(search_value.toLowerCase())
                )
            )
        }
    }, [search_value, filter_value, list])

    const { Header, Footer, Content } = Layout
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div
                    className="site-layout-content"
                    style={{
                        marginTop: '50px',
                        padding: '24px',
                        background: '#fff',
                    }}
                >
                    <Row>
                        <Col span={22} offset={1}>
                            <Space direction="horizontal" size="large">
                                <SearchInput setSearchValue={setSearchValue} />
                                <LocationFilter
                                    setFilterValue={setFilterValue}
                                />
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <VetListBody
                                is_loading={is_loading}
                                vets_list={merged_list}
                            />
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Vet Lists ©2022 Something Something Cats
            </Footer>
        </Layout>
    )
}

type TMain = {
    vets_list: IVeterinary[]
}

export default Main
