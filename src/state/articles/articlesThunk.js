import axios from 'axios'

const API_URL = 'https://earlyaccess-api.onrender.com/api/v1'

export const getAllArticlesThunk = async () => {
  let url = `${API_URL}/articles`
  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (error) {
    return error
  }
}
export const getArticleThunk = async (id) => {
  let url = `${API_URL}/articles/${id}`
  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (error) {
    return error
  }
}
