import { useGetFoodItemsQuery } from "@/store/apiSlice";
import React from "react";

type Props = {};

export default function FoodItems({}: Props) {
  const { data: foodItems, refetch } = useGetFoodItemsQuery();
  
  return <div>FoodItems</div>;
}
