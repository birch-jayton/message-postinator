import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";

type LinkDialogProps = {
  blasterLink: string;
  setBlasterLink: (link: string) => void;
};
function LinkDialog(props: LinkDialogProps) {
  const [openCopySuccessAlert, setOpenCopySuccessAlert] = React.useState(false);
  const { blasterLink, setBlasterLink } = props;

  function handleCopyLink() {
    setOpenCopySuccessAlert(true);
    navigator.clipboard
      .writeText(blasterLink)
      .then(() => setOpenCopySuccessAlert(true));
  }

  return (
    <Dialog open={!!blasterLink}>
      <DialogTitle>Your Blaster</DialogTitle>
      <DialogContent>
        {openCopySuccessAlert && <Alert>Copied to Clipboard</Alert>}
        <Box>
          <Link href={blasterLink} variant="body1">
            {blasterLink}
          </Link>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            sx={{ mt: 3 }}
            variant="outlined"
            onClick={handleCopyLink}
            startIcon={<LinkIcon />}
          >
            Copy Link
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button href={`/playground?url=${blasterLink}`}>
          Try in Playground
        </Button>
        <Button variant="contained" onClick={() => setBlasterLink("")}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LinkDialog;
