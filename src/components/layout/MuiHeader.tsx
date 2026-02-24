import { Divider } from "@mui/material";
import MuiContainer from "./MuiContainer";
import MuiButton from "./MuiButton";

interface HeaderProps {
  title: string;
  buttonActive?: boolean;
  buttonText?: string;
}

export default function MuiHeader({
  title,
  buttonActive,
  buttonText,
}: HeaderProps) {
  return (
    <MuiContainer>
      <h1 className="text-4xl font-bold py-8">{title}</h1>
      <Divider />
      <div className="mt-6">
        {buttonActive && <MuiButton>{buttonText}</MuiButton>}
      </div>
    </MuiContainer>
  );
}
