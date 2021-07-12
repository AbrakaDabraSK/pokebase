import client from '../client'

export default class ListOfLinks {
  async get(skip: number, take: number) {
    try {
      const { data } = await client
        .from('link')
        .select('*')
        .order('updatedAt', { ascending: false })
        .limit(take)
        .range(skip, take)

      return data??[]
    } catch(error) {
      throw new Error(error)
    }
  }
}
