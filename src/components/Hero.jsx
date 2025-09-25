// src/components/Hero.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          GenomeDataManager
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          効率的にゲノムデータを管理・可視化できるプラットフォーム
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mr: 2 }}
          >
            このホームページに関して詳しく見る
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
