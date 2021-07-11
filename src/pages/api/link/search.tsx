import { NextApiRequest, NextApiResponse } from 'next'
import LinkIndex from '../../../kernel/linkIndex'

import { 
  HTTPRequestMethods
} from '../../../enums'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.POST:
      try {
        const { terms } = req.body

        if (!terms.length)
          return res.status(400).json({ message: 'Terms must not be empty' })

        const data = await new LinkIndex(terms).search()

        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
