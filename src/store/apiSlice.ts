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

type PostFoodItem = Omit<FoodItem, "id" | "post_date">;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    getFoodItems: builder.query<FoodItem[], void>({
      query: () => "foodItems",
      providesTags: ["Food"],
    }),
    addFoodItem: builder.mutation<void, PostFoodItem>({
      query: (newItem) => ({
        url: "foodItems",
        method: "POST",
        body: {
          ...newItem,
          id: Date.now(),
          post_date: new Date().toLocaleDateString(),
        },
      }),

      invalidatesTags: ["Food"],
    }),
  }),
});

export const { useGetFoodItemsQuery, useAddFoodItemMutation } = apiSlice;
