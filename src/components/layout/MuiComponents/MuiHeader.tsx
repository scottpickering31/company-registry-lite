import { Divider } from "@mui/material";
import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiButton from "@/src/components/buttons/MuiButton";

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
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <Divider />
      <div className="mt-4">
        {buttonActive && <MuiButton>{buttonText}</MuiButton>}
      </div>
    </MuiContainer>
  );
}
