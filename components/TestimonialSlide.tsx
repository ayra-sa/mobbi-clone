import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  title: string;
  description: string;
  customerName: string;
  customerImage: string;
  customerJob: string;
  currentIndex: number;
  index: number;
};

export default function TestimonialSlide({
  title,
  description,
  customerImage,
  customerJob,
  customerName,
  currentIndex,
  index,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: currentIndex === index ? "flex" : "none",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h5" component={"h2"}>
        {title}
      </Typography>
      <Typography variant="body1" component={"p"}>
        {description}
      </Typography>

      <Paper
        sx={{
          display: "inline-flex",
          p: "10px",
          columnGap: "20px",
          mt: "1rem",
          width: '40%'
        }}
        elevation={3}
      >
        <Avatar alt={customerName} src={customerImage} />
        <Box>
          <Typography variant="body1" component={"h4"}>
            {customerName}
          </Typography>
          <Typography variant="subtitle2" component={"p"}>
            {customerJob}
          </Typography>
        </Box>
      </Paper>
    </Paper>
  );
}
