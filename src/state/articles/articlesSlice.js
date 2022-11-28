import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllArticlesThunk, getArticleThunk } from './articlesThunk'

const initialState = {
  data: [],
  amount: 0,
  isLoading: false,
  isError: false,
  numOfPages: 1,
  totalArticles: 0,
  currentArticle: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllArticles.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.amount = payload.articles.length
        state.data = payload.articles
        state.numOfPages = payload.numOfPages
        state.totalArticles = payload.totalArticles
        state.isError = false
      })
      .addCase(getAllArticles.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        console.log(payload)
      })
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentArticle = payload.article
      })
      .addCase(getArticle.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        console.log(payload)
      })
  },
})

export const getAllArticles = createAsyncThunk(
  'articles/getAllArticles',
  getAllArticlesThunk
)
export const getArticle = createAsyncThunk(
  'articles/getArticle',
  getArticleThunk
)

export default articlesSlice.reducer
