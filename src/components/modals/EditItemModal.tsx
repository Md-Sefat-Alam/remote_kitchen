"use client";
import {
  FoodItem,
  PostFoodItem,
  useAddFoodItemMutation,
  useEditFoodItemMutation,
} from "@/store/apiSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import AddOrEditModalItems from "./AddOrEditModalItems";
import { useToast } from "@/contexts/ToastContext";

type Props = { foodItem: FoodItem };

export default function EditItemModal({ foodItem }: Props) {
  const [editFoodItem] = useEditFoodItemMutation();
  const [open, setOpen] = useState(false);
  const toast = useToast();
  const { control, handleSubmit, setValue } = useForm<PostFoodItem>({
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

  useEffect(() => {
    if (foodItem.name) {
      setValue("name", foodItem.name);
      setValue("description", foodItem.description);
      setValue("img_url", foodItem.img_url);
      setValue("price", foodItem.price);
      setValue("method", foodItem.method);
    }
  }, [foodItem]);

  const handleUpdate: SubmitHandler<PostFoodItem> = (data) => {
    editFoodItem({ ...data, id: foodItem.id }).finally(() => {
      handleClose();
      toast(`Food Item ${foodItem.id} has been updated`, "success");
    });
  };

  return (
    <>
      <IconButton aria-label="add to favorites" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Food Item</DialogTitle>
        <DialogContent>
          <AddOrEditModalItems control={control} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(handleUpdate)} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
