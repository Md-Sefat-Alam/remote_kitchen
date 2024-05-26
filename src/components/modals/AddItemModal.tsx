"use client";
import {
  PostFoodItem,
  useAddFoodItemMutation
} from "@/store/apiSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AddOrEditModalItems from "./AddOrEditModalItems";

type Props = {};

export default function AddItemModal({}: Props) {
  const [addFoodItem] = useAddFoodItemMutation();
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm<PostFoodItem>({
    defaultValues: {
      name: "",
      description: "",
      img_url: "",
      price: 0,
      method: "",
    },
  });

  const handleClose = () => {
    setOpen(false);
    control._reset();
  };

  const handleSave: SubmitHandler<PostFoodItem> = (data) => {
    console.log({ data });
    addFoodItem(data).finally(handleClose);
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Food Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Food Item</DialogTitle>
        <DialogContent>
          <AddOrEditModalItems control={control} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(handleSave)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
