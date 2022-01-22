import * as React from 'react'
import { Layout, Menu } from 'antd'
import { IVeterinary } from '@/definitions'
import VetListBody from '@/components/VetListBody'

const Main = ({ vets_list }: TMain) => {
    const { useEffect } = React
    // workaround for warnings from antd menu when used in SSR: https://github.com/ant-design/ant-design/issues/30396
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    React['useEffectLayout'] = useEffect
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
                    <VetListBody vets_list={vets_list} />
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
