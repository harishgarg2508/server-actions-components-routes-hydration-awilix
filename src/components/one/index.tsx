"use client";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { memo, useEffect, useState, useCallback } from "react";
import UpdateCounter from "../update-counter/update-counter";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import Title from "../title";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleReset = useCallback(async () => {
    try {
      const response = await axios.delete("/api/formroute");
      console.log(response.data.message);
      toast.success("Counter reset successfully");
      setCount(0);
    } catch (error) {
      console.error("Error resetting counter", error);
    }
  }, []);

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);
  
  const handleOpenUpdate = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/formroute");
        if (response.status === 200) {
          setCount(response.data.counter);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Stack  direction={'row'} spacing={2} sx={{ ml: '80%' }}>
        <Button
          variant="contained"
          onClick={() => router.push("/serveraction")}
        >
          Test Server Action
        </Button>
        <Button
          variant="contained"
          onClick={() => router.push("/form")}
        >
          Go to Form
        </Button>
      </Stack>
      <Box>
        <Title />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleDecrease}>
        -Decrease
      </Button>
      <Chip
        size="medium"
        variant="filled"
        color="primary"
        label={count}
        sx={{ typography: "h4", mx: 2 }}
      />
      <Button variant="outlined" color="primary" onClick={handleIncrease}>
        +Increase
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={handleReset}
        sx={{ ml: 2 }}
      >
        Reset
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpenUpdate}
        sx={{ ml: 2 }}
      >
        Update
      </Button>
      <UpdateCounter
        isOpen={isOpen}
        count={count}
        setCount={setCount}
        setIsOpen={setIsOpen}
      />
      <Toaster position="top-right" />
    </Box>
  );
};

export default HomePage;