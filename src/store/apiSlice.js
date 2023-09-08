import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_NAME = '2307-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        query: () => "/posts",
      }),

    }),
  });

  export const {useGetAllPostsQuery} = postsApi