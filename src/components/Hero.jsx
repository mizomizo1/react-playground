// src/components/Hero.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = ({main_thema,detail}) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: "white",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          {main_thema}
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          {detail}
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
