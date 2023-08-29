import React from "react";
import { Stack } from "@mui/material";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Loader color="grey" />
  </Stack>
);

export default Loader;
