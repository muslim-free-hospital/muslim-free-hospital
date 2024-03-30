import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { articlesApi } from "./apis/articlesApi";
import { messageApi } from "./apis/contactUsApi";
export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(messageApi.middleware),
});

setupListeners(store.dispatch);

export {
  useFetchArticlesQuery,
  useFindArticleByIdQuery,
} from "./apis/articlesApi";

export { useSendMessageMutation } from "./apis/contactUsApi";
