// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Hero() {
  const [time, setTime] = useState(new Date());

  // 時刻を1秒ごとに更新
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 時間帯で挨拶を切り替え
  const hour = time.getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";
  else greeting = "Good Evening 🌙";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "linear-gradient(270deg, #2196f3, #21cbf3, #6a11cb, #2575fc)",
        backgroundSize: "800% 800%",
        animation: "gradientShift 20s ease infinite",
        "@keyframes gradientShift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {/* 挨拶 */}
        <Typography variant="h3" gutterBottom>
          {greeting}
        </Typography>

        <Typography variant="h5" paragraph>
          Welcome to My React Playground 🚀
        </Typography>

        {/* 日付と時刻 */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 4,
            mb: 6,
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <AccessTimeIcon />
            <Typography variant="h6">
              {time.toLocaleTimeString()}
            </Typography>
          </Paper>
          <Paper
            elevation={6}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <CalendarMonthIcon />
            <Typography variant="h6">
              {time.toLocaleDateString()}
            </Typography>
          </Paper>
        </Box>

        {/* ボタン */}
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
