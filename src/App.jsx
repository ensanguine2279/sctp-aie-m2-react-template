// src/App.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed"; // Built-in MUI vector asset

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 1. Header Navigation Shell */}
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ borderBottom: "1px solid #e2e8f0", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <SpeedIcon color="primary" />
            <Typography variant="h6" color="secondary" sx={{ fontWeight: 700 }}>
              MaterialWorkspace
            </Typography>
          </Stack>
          <Chip
            label="Template Core: Active"
            color="success"
            variant="soft"
            size="small"
          />
        </Toolbar>
      </AppBar>

      {/* 2. Main Area Grid Dashboard */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6, flexGrow: 1 }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              System Overview
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This repository is pre-configured with centralized themes,
              standard resets, and MUI component models.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment State: {count}
          </Button>
        </Box>

        {/* 3. Metric Layout Displays */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Connected Nodes
              </Typography>
              <Typography variant="h4">1,402</Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Data Pipeline Latency
              </Typography>
              <Typography variant="h4">14ms</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      {/* 4. Global Structural Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "background.paper",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            &copy; {new Date().getFullYear()} MUI Core Sandbox. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
