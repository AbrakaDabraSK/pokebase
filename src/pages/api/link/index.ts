import { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS  from 'crypto-js'

import {
  Direction,
  LinkColumns,
  HTTPRequestMethods
} from '../../../enums'

// @kernel
import Link from '../../../kernel/link'
import ListOfLinks from '../../../kernel/listOfLinks'

// @helpers
import {
  parsedURL
} from '../../../utils/helpers'

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
        const { message } = req.body

        const bytes = CryptoJS.AES.decrypt(message, process.env.NEXT_PUBLIC_CRYPTO_KEY)
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

        const { url, pin } = decryptedData
        const newURL = parsedURL(url)

        if (!pin.length) { return res.status(400).json({ message: 'Enter your personal PIN code' }) }

        if (pin !== process.env.PIN) { return res.status(400).json({ message: 'Your personal PIN code is wrong' }) }

        if (!newURL.length) { return res.status(400).json({ message: 'Enter URL' }) }

        const exists = await new Link().hasURL(newURL)

        if (exists) { return res.status(400).json({ message: 'URL exists' }) }

        const data = await new Link().create(newURL)
        
        return res.status(201).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
