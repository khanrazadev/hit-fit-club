import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    style={{
      padding: "10px",
    }}
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <a href="/"  className="logo" style={{ textDecoration: "none", color: "crimson" }}>
      <h1>HITFIT</h1>
    </a>
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "gray",
          borderBottom: "3px solid crimson",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "gray" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
