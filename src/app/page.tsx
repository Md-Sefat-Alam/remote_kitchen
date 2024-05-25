import FoodItems from "@/components/FoodItems";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Button
        variant="contained"
        color="primary"
        //  onClick={handleAdd}
      >
        Add Food Item
      </Button>
      <FoodItems />
    </div>
  );
}
