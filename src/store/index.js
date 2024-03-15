import { configureStore } from '@reduxjs/toolkit'
import { articlesReducer, setArticles } from './slice/articlesSlice'

const store = configureStore({
    reducer: {
        articles: articlesReducer
    }
})

export { store, setArticles}