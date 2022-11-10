import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../data'

const initialState = {
  data: data.articles,
  amount: data.totalResults,
  isLoading: false,
  isError: false,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
})
export default articlesSlice.reducer
