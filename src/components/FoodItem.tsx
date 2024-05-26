"use client";

import { useToast } from "@/contexts/ToastContext";
import { useDeleteFoodItemMutation, type FoodItem } from "@/store/apiSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import EditItemModal from "./modals/EditItemModal";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Props = { foodItem: FoodItem };

export default function FoodItem({ foodItem }: Props) {
  const [expanded, setExpanded] = React.useState(false);
  const toast = useToast();
  const { description, id, img_url, method, name, post_date, price } = foodItem;
  const [deleteFoodItem] = useDeleteFoodItemMutation();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0].toLocaleUpperCase()}
          </Avatar>
        }
        title={name}
        subheader={post_date}
      />
      <CardMedia
        component="img"
        height="194"
        image={img_url}
        // alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle2" className="pt-4">
          Price:{" "}
          <Typography style={{ display: "inline" }} color="red">
            ${price}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* Edit Modal */}
        <EditItemModal foodItem={foodItem} />
        <IconButton
          aria-label="share"
          onClick={() =>
            deleteFoodItem({ id: foodItem.id }).finally(() => {
              toast(`${foodItem.name} Food Item Deleted`, "success");
            })
          }
        >
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: method }} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
