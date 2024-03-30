import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constant";

const messageApi = createApi({
  reducerPath: "messages",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => ({
        url: "/exec",
        params: {
          action: "send-message",
          name: message.name,
          email: message.email,
          message: message.message,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useSendMessageMutation } = messageApi;
export { messageApi };
