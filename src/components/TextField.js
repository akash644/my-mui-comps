import * as React from "react";
import TextField from "@mui/material/TextField";

export default function MuiTextField(props) {
  const { label, variant, onChange, value } = props;
  return (
    <TextField
      label={label}
      variant={variant}
      onChange={onChange}
      value={value}
    />
  );
}
