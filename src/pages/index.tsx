import type { NextPage } from 'next'
import { getVetsList } from '@/api/vets'
import Main from '@/components/Main'
import { IVeterinary } from '@/definitions'

const Home = ({ vets_list }: NextPage & THome) => {
    return <Main vets_list={vets_list} />
}

type THome = {
    vets_list: IVeterinary[]
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
