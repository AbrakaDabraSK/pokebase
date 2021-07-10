import client from '../client'

export default class ListOfLinks {
  async get(take: number, skip: number) {
    try {
      const { data } = await client
        .from('link')
        .select('*')

      return data
    } catch(error) {
      return error.message
    }
  }
}
