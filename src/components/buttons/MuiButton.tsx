import Button, { ButtonProps } from "@mui/material/Button";

interface MuiButtonProps extends ButtonProps {
  actions?: boolean;
}

export default function MuiButton({ children, actions }: MuiButtonProps) {
  return (
    <Button
      variant={actions ? "outlined" : "contained"}
      sx={
        actions
          ? {
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "none",
              color: "#435ca1",
              backgroundColor: "#f0f0f0",
            }
          : {
              fontSize: "20px",
              paddingX: "20px",
              paddingY: "10px",
              fontWeight: "bold",
              textTransform: "none",
            }
      }
    >
      {children}
    </Button>
  );
}
