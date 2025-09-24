// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Hero() {
  const [time, setTime] = useState(new Date());

  // 毎秒時刻を更新
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(135deg, #2196f3 30%, #21cbf3 90%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My React Playground
        </Typography>

        <Typography variant="h6" paragraph>
          Practice, learn, and build amazing apps with React & MUI 🚀
        </Typography>

        {/* 時計部分 */}
        <Paper
          elevation={6}
          sx={{
            mt: 4,
            mb: 6,
            p: 2,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "rgba(255,255,255,0.1)",
            color: "white",
          }}
        >
          <AccessTimeIcon />
          <Typography variant="h6">
            {time.toLocaleTimeString()}
          </Typography>
        </Paper>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
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
