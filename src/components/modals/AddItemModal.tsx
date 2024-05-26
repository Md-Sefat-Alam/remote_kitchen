"use client";
import { FoodItem, useAddFoodItemMutation } from "@/store/apiSlice";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type FoodItemType = Omit<FoodItem, "id" | "post_date">;

export default function AddItemModal({}: Props) {
  const [addFoodItem] = useAddFoodItemMutation();
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm<FoodItemType>({
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
  };

  const handleSave: SubmitHandler<FoodItemType> = (data) => {
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
          <Box component={"form"} onSubmit={handleSubmit(handleSave)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Name"}
                  margin="dense"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Description"}
                  margin="dense"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="img_url"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Img URL"}
                  defaultValue={
                    "https://mui.com/static/images/cards/paella.jpg"
                  }
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
              )}
            />
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Price"}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  type="number"
                />
              )}
            />
            <Controller
              name="method"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Method"}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  type="text"
                />
              )}
            />
          </Box>
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
