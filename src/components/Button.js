import * as React from "react";
import Button from "@mui/material/Button";

export default function MuiButton(props) {
  const { variant, color, onClick, children } = props;
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
