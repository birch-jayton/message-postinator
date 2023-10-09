import React from "react";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import IFrameDialog from "./IFrameDialog.tsx";

function setIFrameUrl(link: string) {
  window.location.href = encodeURI(
    `${window.location.origin}/playground?url=${link}`,
  );
}

function Playground() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const urlParams = new URLSearchParams(location.search);
  const iFrameUrl = urlParams.get("url");

  React.useEffect(() => {
    function handleReceivedMessage(event: MessageEvent) {
      console.log(event.data);
      if (event.data === "hello world") {
        enqueueSnackbar("Trusted Action Invoked", { variant: "success" });
      }
    }
    window.addEventListener("message", handleReceivedMessage);

    return () => {
      window.removeEventListener("message", handleReceivedMessage);
    };
  }, [enqueueSnackbar]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 2 }} component="h1" variant="h4">
          Playground
        </Typography>
        <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
          This button will post a message to invoke a trusted action that
          satisfies same-origin policy. The action is triggered when a message
          of value "hello world" is received.
        </Typography>
        <Button
          onClick={() => {
            window.postMessage("hello world");
          }}
          variant={"contained"}
        >
          Invoke Trusted Action
        </Button>
        <Box
          sx={{
            border: 2,
            borderWidth: 2,
            width: "100%",
            height: "30vh",
            mt: 3,
            borderStyle: "dashed",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          {iFrameUrl ? (
            <iframe src={iFrameUrl} width={"100%"} height={"100%"} />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Button variant={"outlined"} onClick={() => setIsFormOpen(true)}>
                Add iFrame
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      {iFrameUrl && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button href={"/playground"} sx={{ mt: 3 }} variant={"outlined"}>
            Clear Iframe
          </Button>
        </Box>
      )}
      <IFrameDialog
        setIframeUrl={setIFrameUrl}
        isOpen={isFormOpen}
        setIsOpen={setIsFormOpen}
      />
    </Container>
  );
}

export default Playground;
