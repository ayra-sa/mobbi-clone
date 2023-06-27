import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import { FC } from "react";
import { ArrowForward } from "@mui/icons-material";

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const CardItem: FC<CardProps> = ({ imageSrc, title, link }) => {
  return (
    <Card sx={{borderRadius: '20px'}}>
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={title}
        sx={{ padding: "10px 10px 0 10px", borderRadius: '20px' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Link
          href={link}
          sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color={"inherit"}
        >
          Baca Selengkapnya
          <ArrowForward />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardItem;
