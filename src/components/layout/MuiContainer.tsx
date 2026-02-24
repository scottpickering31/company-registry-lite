import { Container, ContainerProps } from "@mui/material";

export default function MuiContainer({ children, sx }: ContainerProps) {
  return (
    <Container disableGutters maxWidth="xl" sx={sx}>
      {children}
    </Container>
  );
}
