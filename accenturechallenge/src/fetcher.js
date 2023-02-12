import { BASE_URL } from './APIs/BaseApi'

const fetcher = async () => {
  let responseObject = { errorMessage: '', data: [] }
  try {
    const response = await fetch(`${BASE_URL}`)
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`)
    }
    const responseData = await response.json()
    responseObject.errorMessage = ''
    responseObject.data = responseData
  } catch (err) {
    responseObject.errorMessage = err.message
  }
  return responseObject.data
}

export const getPostsByUserId = (id) => {
  return fetcher(`?userId=${id}`)
}

export const getPostsById = (id) => {
  return fetcher(`?id=${id}`)
}

export default fetcher
