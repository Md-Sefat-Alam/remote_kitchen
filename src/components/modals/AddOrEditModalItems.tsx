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
        rules={{ required: "Name is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={"Name"}
            margin="dense"
            fullWidth
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: "Description is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={"Description"}
            margin="dense"
            fullWidth
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="img_url"
        control={control}
        rules={{ required: "Image URL is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={"Img URL"}
            defaultValue={"https://mui.com/static/images/cards/paella.jpg"}
            variant="outlined"
            margin="dense"
            fullWidth
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        rules={{ required: "Price is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={"Price"}
            variant="outlined"
            margin="dense"
            fullWidth
            type="number"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="method"
        control={control}
        rules={{ required: "Method is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={"Method"}
            variant="outlined"
            margin="dense"
            fullWidth
            type="text"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </Box>
  );
}
