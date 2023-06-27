import { IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

type Props = {
    handleClick?: () => void
};

export default function ButtonNext({handleClick}: Props) {
  return (
    <IconButton size="small" aria-label="next" color="primary" className="btnNext" onClick={handleClick}>
      <ArrowForward />
    </IconButton>
  );
}
