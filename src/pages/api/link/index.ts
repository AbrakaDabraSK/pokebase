import { NextApiRequest, NextApiResponse } from 'next'

import {
  Direction,
  LinkColumns,
  HTTPRequestMethods
} from '../../../enums'

// @kernel
import Link from '../../../kernel/link'
import ListOfLinks from '../../../kernel/listOfLinks'

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {*} 
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const perPage: number = (req.query.perPage || 8) as number
        const currentPage: number = (req.query.currentPage || 1) as number
        const column: string = (req.query.column || LinkColumns.id) as string
        const direction: string = (req.query.direction || Direction.DESC) as string

        const data = await new ListOfLinks().get(
          perPage, 
          currentPage,
          column,
          direction
        )
        
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
