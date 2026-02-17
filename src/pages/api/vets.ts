import type { NextApiRequest, NextApiResponse } from 'next'
import { vetsData } from '../../data/vets'

type ResponseData = {
    data: typeof vetsData
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json({ data: vetsData })
}
