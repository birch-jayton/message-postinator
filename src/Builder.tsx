import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import LinkDialog from "./LinkDialog.tsx";

type Inputs = {
  message: string;
  time: string;
};

function createLink(message: string, time: string) {
  return encodeURI(
    `${window.location.origin}/blaster?message=${message}&time=${time}`,
  );
}

function Builder() {
  const [blasterLink, setBlasterLink] = React.useState("");
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setBlasterLink(createLink(data.message, data.time));
  };

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
        <Typography component="h1" variant="h5">
          Create a Blaster
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Message Data"
            {...register("message")}
            autoFocus
            defaultValue="hello world"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Interval (Milliseconds)"
            id="time"
            type="number"
            {...register("time")}
            defaultValue={1000}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/playground" variant="body2">
                {"Testing playground"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <LinkDialog setBlasterLink={setBlasterLink} blasterLink={blasterLink} />
    </Container>
  );
}

export default Builder;
