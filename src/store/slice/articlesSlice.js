import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const getArticles = createAsyncThunk("articles/getArticles", async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    try {
        return await response.json()
    } catch (error) {
        return error
    }
})

const articlesSlice =createSlice({
    name:"articles",
    initialState:{
        articles:[],
        loading:false,
        error:null
    },
    reducers:{
        setArticles:(state, action)=>{
            state.articles = action.payload
        }
    }
})

export const {setArticles} = articlesSlice.actions
export const articlesReducer = articlesSlice.reducer