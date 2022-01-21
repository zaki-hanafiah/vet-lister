import type { NextPage } from 'next'
import { Layout } from 'antd'
import { getVetsList } from '@/api/vets'

const Home = ({ vets_list }: NextPage & THome) => {
    const { Header, Footer, Content } = Layout
    console.log(vets_list)
    return (
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

type THome = {
    vets_list: unknown
}

export const getServerSideProps = async () => {
    // Query all entries from Fauna
    const vets_list = await getVetsList()

    // Pass entry data to the page via props
    return {
        props: { vets_list },
    }
}

export default Home
