import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  img_url: string;
  price: number;
  post_date: string;
  method: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    getFoodItems: builder.query<FoodItem[], void>({
      query: () => "foodItems",
      providesTags: ["Food"],
    }),
  }),
});
