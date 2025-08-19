import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { toast,Toaster } from "sonner";
interface PropsData {
  isOpen: boolean;
  count: number;
  setCount: (value: number) => void;
  setIsOpen: (value: boolean) => void;
}

const UpdateCounter = ({ isOpen, count, setCount, setIsOpen }: PropsData) => {

  const [updatedValue, setUpdatedValue] = React.useState<number | null>(null);
  const handleUpdateCounter = async () => {
    try {
      const response = await axios.put("/api/formroute", {
        counter: updatedValue,
      });
      if (response.status === 200) {
          const data = response.data;
          console.log('data: ', data);
          toast.success("Counter updated successfully");
          setIsOpen(false);
          setTimeout(() => {
              window.location.reload();
          }, 1000);
      }
    } catch (error) {
      console.error("Error updating counter", error);
      toast.error("Error updating counter");
    }
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };



  return (
    <Box>
      <Dialog open={isOpen} onClose={() => {}}>
        <DialogTitle>Update Counter</DialogTitle>
        <DialogContent>
          <TextField
            label="Update Counter"
            variant="outlined"
            fullWidth
            type="number"
            value={updatedValue !== null ? updatedValue : count}
            onChange={(e) => setUpdatedValue(Number(e.target.value))}
            sx={{ mt: 3 }}
          />

          <DialogActions>
            <Button onClick={handleCloseDialog} color="error">
              Cancel
            </Button>
            <Button onClick={handleUpdateCounter} color="primary">
              Update
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Toaster position="top-right" />
    </Box>
  );
};

export default UpdateCounter;
