import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {};

export default function CardNews({}: Props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://placeimg.com/200/80/people"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" component={"p"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
