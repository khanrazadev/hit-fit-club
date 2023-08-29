import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
    <Stack direction="row" bgcolor={"black"} border={"1px solid crimson"} p={"5px"}>
      <Button
        sx={{
          ml: "21px",
          color: "white",
          background: "DarkMagenta",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "white",
          background: "crimson",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      bgcolor={"black"}
      fontSize={"18px"}
      fontFamily={"monospace"}
      color={"white"}
      pl={"10px"}
      textTransform={"capitalize"}
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
