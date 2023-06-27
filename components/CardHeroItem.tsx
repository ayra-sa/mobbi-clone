import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  image: string;
  title: string;
};

export default function CardHeroItem({ image, title }: Props) {
  return (
    <Card sx={{borderRadius: '18px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ padding: "10px 10px 0 10px", borderRadius: '18px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="b">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
