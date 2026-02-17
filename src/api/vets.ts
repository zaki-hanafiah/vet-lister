import { vetsData, Vet } from '../data/vets'

export const getVetsList = async (): Promise<Vet[]> => {
    return vetsData
}
