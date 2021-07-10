import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { data, error } = await client
    .from('link')
    .select('id,url')

  res.json(data)
}
