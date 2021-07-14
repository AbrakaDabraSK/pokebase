import axios from 'axios'

/**
 *
 *
 * @param {string} url
 * @return {*} 
 */
const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw new Error(err.response.data)
  }
}

export default fetcher
