"use client";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, Toaster } from "sonner";

const FormPage = () => {

  const router = useRouter();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const formData = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.replace(/\s+/g, " ").trim(),
    };

    try {

      const response = await axios.post("/api/formroute", formData);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        console.log(response.data.message);
        setData({
          name: "",
          email: "",
          message: "",
        });


      } else {
        console.error("Error submitting form");
      }


    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return <Box>

      <Button variant="contained" onClick={() => (router.push("/"))} sx={{ml:'90%'}}>Go to Counter</Button>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
          mt: 4,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <TextField
          label="Email"
          variant="outlined"
            // type='email'
            fullWidth
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          required
          rows={4}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      <Toaster position="top-right" />
      </Box>
    
};

export default FormPage;
