import { NextApiRequest, NextApiResponse } from 'next'
import Link from '../../../kernel/link'
import ListOfLinks from '../../../kernel/listOfLinks'

import { 
  HTTPRequestMethods
} from '../../../enums'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const page: number = (req.query.page || 0) as number
        const total: number = (req.query.total || 8) as number
        const skip: number = page * total
        const take: number = (skip + 1) + total
        const data = await new ListOfLinks().get(skip, take)

        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    case HTTPRequestMethods.POST:
      try {
        const { url } = req.body

        if (!url.length) { return res.status(400).json({ message: 'URL not defined' }) }

        const exists = await new Link().hasURL(url)

        if (exists) { return res.status(400).json({ message: 'URL is already taken' }) }

        const data = await new Link().create(url)
        
        return res.status(201).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
