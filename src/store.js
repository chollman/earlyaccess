import { configureStore } from '@reduxjs/toolkit'
import ArticlesReducer from './state/articles/articlesSlice'

export const store = configureStore({
  reducer: { articles: ArticlesReducer },
})
