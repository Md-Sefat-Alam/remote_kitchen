"use client";
import { useGetFoodItemsQuery } from "@/store/apiSlice";
import React from "react";
import FoodItem from "./FoodItem";
import { Box } from "@mui/material";

type Props = {};

export default function FoodItems({}: Props) {
  const { data: foodItems, refetch } = useGetFoodItemsQuery();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {foodItems?.map((foodItem) => (
          <Box>
            <FoodItem foodItem={foodItem} />
          </Box>
        ))}
      </div>
    </div>
  );
}
