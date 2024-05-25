import FoodItems from "@/components/FoodItems";
import AddItemModal from "@/components/modals/AddItemModal";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <AddItemModal />
      <FoodItems />
    </div>
  );
}
