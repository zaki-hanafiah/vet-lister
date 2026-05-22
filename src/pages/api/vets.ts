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
// __afill_20251209_178__
// __afill_20260323_1932__
// __afill_20260522_939__
