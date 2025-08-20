"use client";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  brand: string;
  inStock: boolean;
  tags: string[];
  createdAt: string;
}

const ProductPage = () => {
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {

      setLoading(true);

      const params = new URLSearchParams();

      if (category) params.append("category", category);
      if (brand) params.append("brand", brand);
      if (minPrice) params.append("minPrice", minPrice);
      if (maxPrice) params.append("maxPrice", maxPrice);

      try {
        const response = await axios.get(`/api/products?${params.toString()}`);
        const data = response.data;
        console.log("data: ", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, brand, minPrice, maxPrice]);

  return (
    <Box>
      <Typography variant="h4">Products</Typography>
    </Box>
  );
};

export default ProductPage;
