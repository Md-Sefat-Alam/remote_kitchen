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

export type PostFoodItem = Omit<FoodItem, "id" | "post_date">;
export type EditFoodItem = Omit<FoodItem, "post_date">;

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
          id: Date.now().toLocaleString(),
          post_date: new Date().toLocaleDateString(),
        },
      }),
      invalidatesTags: ["Food"],
    }),
    editFoodItem: builder.mutation<void, EditFoodItem>({
      query: (editItem) => ({
        url: `foodItems/${editItem?.id}`,
        method: "PUT",
        body: {
          ...editItem,
          updated_date: new Date().toLocaleDateString(),
        },
      }),
      invalidatesTags: ["Food"],
    }),
    deleteFoodItem: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `foodItems/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Food"],
    }),
  }),
});

export const { useGetFoodItemsQuery, useAddFoodItemMutation, useEditFoodItemMutation, useDeleteFoodItemMutation } = apiSlice;
