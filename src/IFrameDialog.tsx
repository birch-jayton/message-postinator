import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

type LinkDialogProps = {
  setIframeUrl: (link: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type Inputs = {
  url: string;
};

function IFrameDialog(props: LinkDialogProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const { setIframeUrl, isOpen, setIsOpen } = props;

  function onSubmit(data: Inputs) {
    setIframeUrl(data.url);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} maxWidth={"md"} fullWidth>
      <DialogTitle>Add an iFrame</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="iFrame URL"
          type="url"
          fullWidth
          variant="standard"
          {...register("url")}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default IFrameDialog;
