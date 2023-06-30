import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

type Props = {};

const StyledCardActionArea = styled(CardActionArea)(({theme}) => ({
  [theme.breakpoints.up("sm")]: {
    // width: "auto",
    display: 'flex'
  },
}))

export default function CardNews({}: Props) {
  return (
    <Card sx={{height: '100%'}}>
      <StyledCardActionArea>
        <CardMedia
          component="img"
          // height=""
          image="https://placeimg.com/200/80/people"
          alt="green iguana"
          sx={{display: {xs: '100%', md: '60%'}, height: {xs: 'auto', md: '100%'}}}
        />
        <CardContent sx={{display: {xs: '100%', md: '40%'}}}>
          <Typography variant="body2" component={"p"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
}
