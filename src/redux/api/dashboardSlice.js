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
   tagTypes: ["institute-info"],


    //define all the api endpoints. Follows the builder pattern. 
   endpoints: (builder) => ({
        getInstituteInfo: builder.query({
            query: () => "/institute/",
            providesTags: ["institute-info"],
        }),
        editInstituteInfo: builder.mutation({
            query: ({ data }) => ({
               url: "/institute/",
               method: "POST",
               body: JSON.stringify(data),
            }),
            invalidatesTags: ["institute-info"],
         }),
    }),
});

export const {
   useGetInstituteInfoQuery,
   useEditInstituteInfoMutation
} = dashboardSlice;
