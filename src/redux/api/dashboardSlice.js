import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardSlice = createApi({ 
   reducerPath: "dashboard",
   baseQuery: fetchBaseQuery({
      baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
   }),

    //define all the api endpoints. Follows the builder pattern. 
   endpoints: (builder) => ({
        getInstituteInfo: builder.query({
            query: () => "/institute",
        })
    }),
});

export const {
   useGetInstituteInfoQuery
} = dashboardSlice;
