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
// __afill_20260613_1629__
// __afill_20260604_1552__
