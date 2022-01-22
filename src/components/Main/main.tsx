import * as React from 'react'
import { Col, Layout, Menu, Row, Space } from 'antd'
import { IVeterinary } from '@/definitions'
import VetListBody from '@/components/VetListBody'
import SearchInput from '@/components/SearchInput'

const Main = ({ vets_list }: TMain) => {
    const { useState, useEffect } = React
    const [list, setList] = useState<IVeterinary[]>([])
    const [searched_list, setSearchedList] = useState<IVeterinary[]>([])
    // const [filtered_list, setFilteredList] = useState<IVeterinary[]>([])

    useEffect(() => {
        if (vets_list) {
            setList(vets_list)
            setSearchedList(vets_list)
        }
    }, [vets_list])

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
                        <Col span={24}>
                            <Space direction="horizontal">
                                <SearchInput
                                    list={list}
                                    setSearchResults={setSearchedList}
                                />
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <VetListBody vets_list={searched_list} />
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
