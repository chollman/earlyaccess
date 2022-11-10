import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  amount: 0,
  isLoading: true,
  isError: false,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
})
export default articlesSlice.reducer
