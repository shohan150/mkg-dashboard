import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardSlice = createApi({ 
   reducerPath: "dashboard",
   baseQuery: fetchBaseQuery({
      baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
      prepareHeaders: (headers) => {
         headers.set("Content-Type", "application/json");
         return headers;
       },
   }),

    //define all the api endpoints. Follows the builder pattern. 
   endpoints: (builder) => ({
        getInstituteInfo: builder.query({
            query: () => "/institute/",
        }),
        editInstituteInfo: builder.mutation({
            query: ({ data }) => ({
               url: "/institute/",
               method: "POST",
               body: JSON.stringify(data),
            }),
         }),
    }),
});

export const {
   useGetInstituteInfoQuery,
   useEditInstituteInfoMutation
} = dashboardSlice;
