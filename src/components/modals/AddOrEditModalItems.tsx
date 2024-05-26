import { PostFoodItem } from "@/store/apiSlice";
import { Box, TextField } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

type Props = { control: Control<PostFoodItem, any> };

export default function AddOrEditModalItems({ control }: Props) {
  return (
    <Box component={"form"}>
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
            defaultValue={"https://mui.com/static/images/cards/paella.jpg"}
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
  );
}
