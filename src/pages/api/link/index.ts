import { NextApiRequest, NextApiResponse } from 'next'
import Link from '../../../kernel/link'
import ListOfLinks from '../../../kernel/listOfLinks'

import { 
  HTTPRequestMethods
} from '../../../types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const data = await new ListOfLinks().get(12,0)
        console.log(data)
        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({error})
      }
    case HTTPRequestMethods.POST:
      try {
        const { url } = req.body

        if (!url.length) { return res.status(404).json({ message: 'URL not defined' }) }

        const data = await new Link().create(url)
        return res.status(201).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
