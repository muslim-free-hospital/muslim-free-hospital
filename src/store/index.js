import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { articlesApi } from "./apis/articlesApi";
export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

setupListeners(store.dispatch);

export {
  useFetchArticlesQuery,
  useFindArticleByIdQuery,
} from "./apis/articlesApi";
