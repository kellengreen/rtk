import { createApi } from "@reduxjs/toolkit/query/react";

export default createApi({
  reducerPath: "api",
  baseQuery: ({ params: { req } }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { res: req } });
      }, 1000);
    });
  },
  endpoints: (builder) => ({
    search: builder.query({
      query: (params) => ({
        method: "GET",
        url: "/",
        params,
      }),
    }),
  }),
});
