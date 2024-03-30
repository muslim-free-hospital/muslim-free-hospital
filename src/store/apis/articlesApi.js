import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constant";

const articlesApi = createApi({
  reducerPath: "articles",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
