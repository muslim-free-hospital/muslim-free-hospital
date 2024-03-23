import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const articlesApi = createApi({
  reducerPath: "articles",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://script.google.com/macros/s/AKfycbxLeOlkbLCXZwvD8t7UFWV_2XUprnZOdBxWjNUQbkAXWC0bFLyEJOLkrFuDc1h2MOr1",
  }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: () => ({
        url: "/exec",
        params: {
          action: "read",
        },
        method: "GET",
      }),
    }),
    findArticleById: builder.query({
      query: (id) => ({
        url: "/exec",
        params: {
          action: "id",
          id,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchArticlesQuery, useFindArticleByIdQuery } = articlesApi;
export { articlesApi };
