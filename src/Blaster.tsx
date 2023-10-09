import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material";

function postMessage(message: string) {
  window.parent.postMessage(message, "*");
}

function Blaster() {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const urlParams = new URLSearchParams(location.search);
  const message = urlParams.get("message");
  const time = urlParams.get("time") || "1000";

  React.useEffect(() => {
    if (!message || isPaused) {
      return;
    }
    const interval = setInterval(() => {
      postMessage(message);
      setCount((count) => count + 1);
    }, Number(time));

    return () => clearInterval(interval);
  }, [time, message, isPaused]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Blasting Message
        </Typography>
        <Box sx={{ mt: 1, alignItems: "center", width: "100%" }}>
          <LinearProgress
            variant={isPaused ? "determinate" : "indeterminate"}
            value={100}
          />
          <Typography
            sx={{
              display: "flex",
              mt: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            component="h2"
            variant="h5"
          >
            {`"${message}"`}{" "}
            <Chip label={count} color="success" variant="outlined" />
          </Typography>
          {isPaused ? (
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setIsPaused(false)}
            >
              Continue
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setIsPaused(true)}
            >
              Stop
            </Button>
          )}
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Build a new blaster
              </Link>
            </Grid>
            <Grid item>
              <Link href="/playground" variant="body2">
                Testing playground
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Blaster;
