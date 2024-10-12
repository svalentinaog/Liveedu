import { TextField, SxProps } from "@mui/material";

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  sx?: SxProps;
}

export default function InputTextField({
  label,
  value,
  onChange,
  type = "text",
  sx,
}: ITextFieldProps) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      sx={sx}
    />
  );
}
