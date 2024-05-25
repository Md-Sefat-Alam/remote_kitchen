import FoodItem from "@/components/FoodItem";
import { useGetFoodItemsQuery } from "@/store/apiSlice";
import { Button } from "@mui/material";

export default function Home() {
  const { data: foodItems, refetch } = useGetFoodItemsQuery();
  return (
    <div className="container mx-auto p-4">
      <Button
        variant="contained"
        color="primary"
        //  onClick={handleAdd}
      >
        Add Food Item
      </Button>
      <FoodItem />
    </div>
  );
}
