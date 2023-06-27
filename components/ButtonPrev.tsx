import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

type Props = {
    handleClick?: () => void
};

export default function ButtonPrev({handleClick}: Props) {
  return (
    <IconButton size="small" aria-label="previous" color="primary" className="btnPrev" onClick={handleClick}>
      <ArrowBack />
    </IconButton>
  );
}
