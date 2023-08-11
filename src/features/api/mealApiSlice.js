import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    getMealsByName: builder.query({
      query: (name) => `/search.php?s=${name}`,
    }),
  }),
});

export const { useGetMealsByNameQuery } = mealApi;
