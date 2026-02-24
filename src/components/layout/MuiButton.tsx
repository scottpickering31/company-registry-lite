import Button, { ButtonProps } from "@mui/material/Button";

export default function MuiButton({ children }: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={[
        {
          fontSize: "20px",
          paddingX: "20px",
          paddingY: "10px",
          fontWeight: "bold",
          textTransform: "none",
        },
      ]}
    >
      {children}
    </Button>
  );
}
