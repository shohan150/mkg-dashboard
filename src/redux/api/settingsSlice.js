import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const settingsSlice = createApi({ 
   reducerPath: "settings",
   baseQuery: fetchBaseQuery({
      baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
      prepareHeaders: (headers) => {
         headers.set("Content-Type", "application/json");
         return headers;
       },
   }),
   tagTypes: ["academic-info"],


    //define all the api endpoints. Follows the builder pattern. 
   endpoints: (builder) => ({
        getAcademicInfo: builder.query({
            query: (type) => `/${type}/`,
            providesTags: (result, error, arg) => [{ type: "academic-info", id: arg }],
        }),
        addAcademicInfo: builder.mutation({
            query: ({ selectedType, typeValue }) => ({
               url: `/${selectedType}/`,
               method: "POST",
               body: {name: typeValue},
            }),
            invalidatesTags: (result, error, arg) => [{ type: "academic-info", id: arg.selectedType }],
         }),
         deleteAcademicInfo: builder.mutation({
            query: ({selectedType, id}) => ({
                url: `/${selectedType}/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{ type: "academic-info", id: arg.selectedType }],
        }),
    }),
});

export const {
   useGetAcademicInfoQuery,
   useAddAcademicInfoMutation,
   useDeleteAcademicInfoMutation,
} = settingsSlice;
