// src/components/Hero.jsx
import { Container, Typography, Button, Box } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          <b>Welcome to GenomeDataManager</b>
        </Typography>
        <Typography variant="h6" color="white">
           serch genome data and observe
        </Typography>
        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
          <Button variant="outlined" color="inherit" size="large">
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
